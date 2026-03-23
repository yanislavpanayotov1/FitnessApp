import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Cache the audience ID in memory so we don't look it up on every request
let audienceId: string | null = null

async function getOrCreateAudience(): Promise<string> {
  if (audienceId) return audienceId

  // List existing audiences and find ours
  const { data: audiences, error } = await resend.audiences.list()
  if (error) throw new Error(`Failed to list audiences: ${error.message}`)

  const existing = audiences?.data?.find(a => a.name === 'RunRank Waitlist')
  if (existing) {
    audienceId = existing.id
    return audienceId
  }

  // Create it if it doesn't exist
  const { data: created, error: createError } = await resend.audiences.create({
    name: 'RunRank Waitlist',
  })
  if (createError || !created) throw new Error(`Failed to create audience: ${createError?.message}`)

  audienceId = created.id
  return audienceId
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const id = await getOrCreateAudience()

    const { error } = await resend.contacts.create({
      email,
      audienceId: id,
      unsubscribed: false,
    })

    if (error) {
      // Contact already exists — treat as success
      if (error.message?.toLowerCase().includes('already exists')) {
        return NextResponse.json({ success: true })
      }
      throw new Error(error.message)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Waitlist API Error]', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
