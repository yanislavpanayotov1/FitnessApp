'use client'

import Image from 'next/image'
import WaitlistForm from '@/components/waitlist-form'


const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'AI-Powered Training Plans',
    description: 'Personalized workout schedules that adapt to your fitness level, goals, and recovery.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    title: 'Real-Time Route Tracking',
    description: 'Precise GPS mapping with elevation data, pace zones, and live performance metrics.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Deep Performance Analytics',
    description: 'Gain insights into VO2 max, heart rate zones, cadence, and long-term progress trends.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
    title: 'Challenges & Achievements',
    description: 'Compete with friends, join community challenges, and earn badges for your milestones.',
  },
]

const stats = [
  { value: '10K+', label: 'Runners waiting' },
  { value: '500+', label: 'Routes covered' },
  { value: '98%', label: 'User satisfaction' },
]

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0A0A0F]">
      {/* Animated background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20 animate-float"
          style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full opacity-15 animate-float-delayed"
          style={{ background: 'radial-gradient(circle, #B91C1C 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] rounded-full opacity-10 animate-float"
          style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)' }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 py-16 md:py-20">
        {/* Top badge */}
        <div className="animate-fade-in mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-orange-300 border border-orange-500/30 bg-orange-500/10">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Now accepting early access signups
          </span>
        </div>

        {/* Logo + App Name */}
        <div className="flex flex-col items-center gap-4 mb-8 animate-slide-up">
          <Image
            src="/logo.png"
            alt="RunRank"
            width={112}
            height={112}
            className="w-28 h-28 md:w-32 md:h-32 animate-float"
            priority
          />
          <div className="text-center">
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl tracking-tight text-gradient">
              RunRank
            </h1>
            <p className="text-white/40 text-sm font-medium tracking-widest uppercase mt-1">Compete. Run. Rise.</p>
          </div>
        </div>

        {/* Hero headline */}
        <div className="text-center max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
            Run faster, farther, and higher —{' '}
            <span className="text-gradient font-semibold">earn your rank</span>{' '}
            based on pace, distance, and elevation across the{' '}
            <span className="text-gradient font-semibold">global leaderboard</span>.
          </p>
        </div>

        {/* Stats bar */}
        <div
          className="flex items-center gap-8 md:gap-16 mb-12 px-8 py-4 rounded-2xl animate-fade-in"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            animationDelay: '0.2s',
          }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-display font-black text-2xl md:text-3xl text-gradient">{stat.value}</span>
              <span className="text-white/40 text-xs uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Waitlist card */}
        <div
          className="w-full max-w-md animate-slide-up"
          style={{
            animationDelay: '0.2s',
          }}
        >
          <div
            className="rounded-3xl p-8"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}
          >
            <div className="text-center mb-6">
              <h2 className="font-display font-bold text-2xl text-white mb-2">Get Early Access</h2>
              <p className="text-white/50 text-sm">Join{' '}
                <span className="text-orange-400 font-semibold">10,000+ runners</span>
                {' '}already on the list.
              </p>
            </div>
            <WaitlistForm />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="w-full max-w-4xl mt-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
              Everything you need to{' '}
              <span className="text-gradient">run better</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto">
              RunRank combines real-time performance data with global competition to give you the ultimate running experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-orange-400 group-hover:text-orange-300 transition-colors"
                  style={{ background: 'rgba(249, 115, 22, 0.1)', border: '1px solid rgba(249, 115, 22, 0.2)' }}
                >
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Policy */}
        <section id="privacy" className="w-full max-w-2xl mt-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <h2 className="font-display font-bold text-xl text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Privacy Policy
            </h2>
            <div className="text-white/50 text-sm space-y-3 leading-relaxed">
              <p>We collect only the email address you provide to join our waitlist.</p>
              <p>Your email is used strictly to send launch updates and news about RunRank. We never sell or share your data with third parties or advertisers, and it is securely processed through our infrastructure.</p>
              <p>You can unsubscribe at any time using the link in any of our emails. You may also request complete data deletion pursuant to GDPR/CCPA guidelines by contacting us.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-white/25 text-xs">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-lg overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #F97316, #B91C1C)' }}
              />
              <span className="font-display font-bold text-white/40">RunRank</span>
            </div>
          </div>
          <p>© {new Date().getFullYear()} RunRank. All rights reserved.</p>
          <p className="mt-1">Built for runners, by runners. 🏃</p>
        </footer>
      </div>
    </main>
  )
}
