import React, { useState } from 'react'
import { Download, Sparkles, CheckCircle2, ShieldCheck, Cpu, HardDrive, Gamepad, Award, PlayCircle, Eye } from 'lucide-react'

export default function FeaturedGame({ onOpenDownload, onOpenGameDetails }) {
  const [activeTab, setActiveTab] = useState('overview')

  const featuresList = [
    {
      title: 'Physics-Based Off-Road Mechanics',
      description: 'Experience responsive suspension physics, wheel traction management, and realistic hill climbing dynamics.',
      icon: '🚜'
    },
    {
      title: 'Challenging Mountain Terrains',
      description: 'Conquer mud pits, rocky ridges, steep inclines, and unpredictable obstacles across multiple levels.',
      icon: '🏔️'
    },
    {
      title: 'Coins & Rewards System',
      description: 'Gather coins placed along high-risk paths to unlock upgrades and boost your performance.',
      icon: '🪙'
    },
    {
      title: 'Custom Vehicle Tuning',
      description: 'Upgrade your engine, tires, 4WD traction, and suspension to tackle extreme hill climbs.',
      icon: '⚙️'
    }
  ]

  return (
    <section id="featured-showcase" className="py-20 relative overflow-hidden bg-slate-950/60">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-[#00A3FF] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#00A3FF]" />
            FEATURED GAME SHOWCASE
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            HILLBOUND <span className="text-[#FF9900]">VAISHU</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Get the full story behind DEVLOOP STUDIOS' premiere off-road hill climb challenge.
          </p>
        </div>

        {/* Featured Showcase Card */}
        <div className="glass-panel rounded-3xl border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Official Game Icon Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative group rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 p-2 shadow-2xl">
                <img
                  src="/assets/hillbound_vaishu_icon.jpg"
                  alt="Official Hillbound Vaishu Game Icon"
                  className="w-full h-auto rounded-xl object-cover"
                />

                {/* Status Badge Overlay */}
                <div className="absolute top-4 left-4 bg-slate-950/90 border border-emerald-500/60 px-3 py-1.5 rounded-lg flex items-center gap-2 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-heading font-bold text-xs text-emerald-400 uppercase tracking-widest">
                    AVAILABLE NOW
                  </span>
                </div>
              </div>

              {/* Quick Game Metadata Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                  <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">GENRE</span>
                  <span className="font-heading font-bold text-sm text-white">Off-Road / Physics</span>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                  <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">DEVELOPER</span>
                  <span className="font-heading font-bold text-sm text-[#00A3FF]">DEVLOOP STUDIOS</span>
                </div>
              </div>
            </div>

            {/* Right Column: Game Details & Features */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/30 text-xs font-bold text-[#FF9900]">
                    v1.0.0 Released
                  </span>
                  <span className="px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-[#00A3FF]">
                    Indie Release
                  </span>
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-wide uppercase">
                  HILLBOUND VAISHU
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Take the wheel in <strong className="text-white">HILLBOUND VAISHU</strong>, an energetic off-road hill climb game engineered for pure adrenaline. Battle steep terrain, maintain your balance against gravity, collect gold coins, and upgrade your vehicle to conquer every slope.
              </p>

              {/* Showcase Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {featuresList.map((feat, idx) => (
                  <div key={idx} className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-3.5 flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{feat.icon}</span>
                    <div>
                      <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-800/80">
                <button
                  onClick={onOpenDownload}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF7700] to-[#FF9900] hover:from-[#EE6600] hover:to-[#EE8800] shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD GAME PACKAGE</span>
                </button>

                <button
                  onClick={onOpenGameDetails}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-200 bg-slate-900 border border-slate-700 hover:border-slate-500 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#00A3FF]" />
                  <span>VIEW CONTROLS & SPECS</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
