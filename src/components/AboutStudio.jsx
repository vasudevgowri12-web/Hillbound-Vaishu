import React from 'react'
import { Sparkles, Gamepad2, HeartHandshake, ShieldCheck, Code, Zap } from 'lucide-react'

export default function AboutStudio() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-slate-950">
      
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00A3FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-panel rounded-3xl border border-slate-800/80 p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Official Studio Logo Display */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-4 border-b lg:border-b-0 lg:border-r border-slate-800/80 pb-8 lg:pb-0 lg:pr-10">
              
              <div className="relative group p-6 rounded-3xl bg-slate-900/90 border border-slate-700/60 shadow-2xl hover:border-[#00A3FF]/50 transition-all duration-300">
                
                {/* Glow ring */}
                <div className="absolute -inset-2 bg-[#00A3FF]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <img
                  src="/assets/devloop_logo.png"
                  alt="Devloop Studios Official Logo"
                  className="w-40 sm:w-48 h-auto object-contain relative z-10 filter drop-shadow-[0_0_12px_rgba(0,163,255,0.35)]"
                />
              </div>

              <div className="space-y-1 pt-2">
                <h3 className="font-heading font-black text-2xl text-white tracking-widest uppercase">
                  DEVLOOP STUDIOS
                </h3>
                <span className="text-xs font-bold text-[#00A3FF] uppercase tracking-widest block">
                  INDEPENDENT GAME STUDIO
                </span>
              </div>

            </div>

            {/* Right Column: Studio Statement & Vision */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-[#00A3FF] uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-[#00A3FF]" />
                  ABOUT DEVLOOP STUDIOS
                </div>

                <blockquote className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                  “DEVLOOP STUDIOS is an independent game studio focused on creating fun, polished and memorable games.”
                </blockquote>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Founded with a deep passion for interactive entertainment, DEVLOOP STUDIOS builds games designed to spark immediate excitement. We combine tight controls, satisfying game loops, and clean visual aesthetics to deliver experiences that players genuinely love returning to.
              </p>

              {/* Studio Metrics Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                  <span className="block font-heading font-black text-xl text-white">100%</span>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">INDIE OWNED</span>
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                  <span className="block font-heading font-black text-xl text-[#00A3FF]">FUN-FIRST</span>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">CORE PHILOSOPHY</span>
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="block font-heading font-black text-xl text-[#FF9900]">MULTI-GAME</span>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">FUTURE PLATFORM</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
