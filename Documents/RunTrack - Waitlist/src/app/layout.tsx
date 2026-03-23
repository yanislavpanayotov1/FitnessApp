import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RunRank – Compete. Run. Rise.',
  description: 'Join the waitlist for RunRank, the app that ranks runners by pace, distance, and elevation. Find your place on the leaderboard.',
  keywords: ['running app', 'runner ranking', 'fitness leaderboard', 'running competition', 'RunRank'],
  openGraph: {
    title: 'RunRank – Compete. Run. Rise.',
    description: 'Join the waitlist for RunRank, the app that ranks runners by pace, distance, and elevation. Find your place on the leaderboard.',
    type: 'website',
    url: 'https://runrank.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RunRank – Compete. Run. Rise.',
    description: 'Join the waitlist and claim your spot on the leaderboard.',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
