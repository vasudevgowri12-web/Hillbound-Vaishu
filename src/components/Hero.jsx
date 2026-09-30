import React from 'react'
import { Download, Eye, Sparkles, Shield, ChevronDown, Trophy, Flame, Play } from 'lucide-react'
import hillboundIcon from '../../assets/hillbound_vaishu_icon.jpg'

export default function Hero({ onOpenDownload, onOpenGameDetails }) {
  const handleScrollToSection = (id) => {
    const el = document.querySelector(id)
    if (el) {
      const yOffset = -80
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
      {/* Background Ambient Glow & Visual Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00A3FF]/20 via-[#0066FF]/10 to-[#FF9900]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Studio Release Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/70 text-xs font-bold tracking-widest text-[#00A3FF] uppercase shadow-lg shadow-blue-500/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-status-pulse" />
              <span>DEVLOOP STUDIOS • OFFICIAL FIRST RELEASE</span>
            </div>

            {/* Game Title */}
            <div className="space-y-2">
              <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-tight uppercase drop-shadow-md">
                HILLBOUND <br className="hidden sm:block" />
                <span className="gradient-text-orange">VAISHU</span>
              </h1>
              
              {/* Tagline */}
              <p className="text-lg sm:text-xl font-heading font-bold text-[#FF9900] tracking-wide italic">
                “A wild ride. One hill at a time.”
              </p>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              An energetic off-road hill-climb adventure from <strong className="text-white font-semibold">DEVLOOP STUDIOS</strong>. 
              Drive custom 4x4 rigs across wild mountain terrains, conquer steep peaks, collect coins, and master physics-based driving.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#FF9900]" /> Physics Off-Road
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-[#00A3FF]" /> Vehicle Upgrades
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> 100% Free Release
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              
              {/* Primary Download Button */}
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-bold text-base uppercase tracking-wider text-white bg-gradient-to-r from-[#FF7700] via-[#FF9900] to-[#FF5500] hover:from-[#EE6600] hover:to-[#EE4400] shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>DOWNLOAD GAME</span>
              </button>

              {/* Secondary View Button */}
              <button
                onClick={onOpenGameDetails}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-heading font-bold text-base uppercase tracking-wider text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-5 h-5 text-[#00A3FF]" />
                <span>VIEW GAME DETAILS</span>
              </button>
            </div>

            {/* Direct Download Info Note */}
            <p className="text-xs text-slate-400 pt-1 font-medium">
              * Direct Android APK Download (`v1.0.0` • 102 MB • Android Exclusive)
            </p>

          </div>

          {/* Right Column: Game Artwork Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative group w-full max-w-md lg:max-w-none">
              
              {/* Glowing Aura Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00A3FF] via-[#FF9900] to-[#0066FF] rounded-3xl blur-2xl opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse" />

              {/* Main Game Icon Card */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border-2 border-slate-700/80 p-2 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src={hillboundIcon}
                  alt="Hillbound Vaishu Official Game Icon"
                  className="w-full h-auto rounded-xl object-cover shadow-inner"
                />

                {/* Floating "AVAILABLE NOW" Badge */}
                <div className="absolute top-5 right-5 bg-[#070A11]/90 backdrop-blur-md border border-emerald-500/50 px-4 py-2 rounded-xl flex items-center gap-2.5 shadow-2xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-heading font-black text-xs text-emerald-300 uppercase tracking-widest">
                    AVAILABLE NOW
                  </span>
                </div>

                {/* Game Title Tag Bar at Bottom */}
                <div className="p-4 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent flex items-center justify-between mt-2">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">HILLBOUND VAISHU</h3>
                    <p className="text-xs text-slate-400 font-medium">Off-Road Hill Climb • Version 1.0</p>
                  </div>
                  <span className="text-xs font-bold text-[#FF9900] bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-lg">
                    Android APK (102 MB)
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 text-center">
          <button
            onClick={() => handleScrollToSection('#featured-showcase')}
            className="inline-flex flex-col items-center gap-1.5 text-xs font-bold tracking-widest text-slate-400 hover:text-[#00A3FF] transition-colors"
          >
            <span>EXPLORE SHOWCASE</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#00A3FF]" />
          </button>
        </div>

      </div>
    </section>
  )
}
