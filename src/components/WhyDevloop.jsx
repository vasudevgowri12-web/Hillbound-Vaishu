import React from 'react'
import { Lightbulb, ShieldAlert, Gamepad, RefreshCw, Sparkles, CheckCircle } from 'lucide-react'

export default function WhyDevloop() {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Original Game Concepts',
      description: 'We focus on unique mechanics, fresh gameplay hooks, and distinct player experiences built from the ground up.',
      color: 'text-[#00A3FF]',
      border: 'hover:border-[#00A3FF]/50',
      bg: 'bg-blue-500/10'
    },
    {
      icon: ShieldAlert,
      title: 'Independent Development',
      description: '100% self-funded indie development allows us complete creative freedom without corporate compromises.',
      color: 'text-purple-400',
      border: 'hover:border-purple-400/50',
      bg: 'bg-purple-500/10'
    },
    {
      icon: Gamepad,
      title: 'Fun-First Gameplay',
      description: 'We prioritize intuitive controls, satisfying game physics, and immediate entertainment value above all else.',
      color: 'text-[#FF9900]',
      border: 'hover:border-orange-500/50',
      bg: 'bg-orange-500/10'
    },
    {
      icon: RefreshCw,
      title: 'Continuous New Releases',
      description: 'Our platform is designed to expand continuously with new games, ongoing updates, and community releases.',
      color: 'text-emerald-400',
      border: 'hover:border-emerald-400/50',
      bg: 'bg-emerald-500/10'
    }
  ]

  return (
    <section id="why-devloop" className="py-20 lg:py-24 relative overflow-hidden bg-[#070A11]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-[#00A3FF] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#00A3FF]" />
            STUDIO PILLARS
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            WHY <span className="gradient-text-[#00A3FF]">DEVLOOP</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Grounding our development in core values that ensure great player experiences.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon
            return (
              <div
                key={idx}
                className={`glass-panel p-6 rounded-2xl border border-slate-800/80 transition-all duration-300 ${pillar.border} hover:-translate-y-1.5 flex flex-col justify-between space-y-4`}
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-xl ${pillar.bg} flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${pillar.color}`} />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Devloop Standard</span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
