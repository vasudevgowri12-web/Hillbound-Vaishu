import React, { useState } from 'react'
import { Download, Sparkles, Lock, Clock, Search, Filter, Layers, ArrowUpRight } from 'lucide-react'
import hillboundIcon from '../../assets/hillbound_vaishu_icon.jpg'
import devloopLogo from '../../assets/devloop_logo.png'

export default function GameLibrary({ onOpenDownload, onOpenGameDetails }) {
  const [filter, setFilter] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')

  const gamesData = [
    {
      id: 'hillbound-vaishu',
      title: 'HILLBOUND VAISHU',
      status: 'AVAILABLE NOW',
      isAvailable: true,
      genre: 'Off-Road / Physics Hill Climb',
      icon: hillboundIcon,
      tagline: 'A wild ride. One hill at a time.',
      description: 'Energetic off-road driving challenge featuring custom 4x4 rigs, steep mountain paths, coin collection, and vehicle upgrades.',
      releaseDate: 'Available Now',
      platform: 'Android APK (102 MB)'
    },
    {
      id: 'project-02',
      title: 'PROJECT 02',
      status: 'COMING SOON',
      isAvailable: false,
      genre: 'Unannounced Title',
      icon: null,
      tagline: 'In Active Development',
      description: 'The next exciting title currently under creation at DEVLOOP STUDIOS. Stay tuned for early previews and announcement trailers.',
      releaseDate: 'TBA',
      platform: 'To Be Announced'
    },
    {
      id: 'project-03',
      title: 'PROJECT 03',
      status: 'COMING SOON',
      isAvailable: false,
      genre: 'Unannounced Title',
      icon: null,
      tagline: 'Concept Stage',
      description: 'A novel gameplay concept engineered with fresh mechanics and player-first focus. Announcement coming soon.',
      releaseDate: 'TBA',
      platform: 'To Be Announced'
    },
    {
      id: 'project-04',
      title: 'PROJECT 04',
      status: 'COMING SOON',
      isAvailable: false,
      genre: 'Unannounced Title',
      icon: null,
      tagline: 'Future Pipeline',
      description: 'Future indie release planned for the DEVLOOP STUDIOS platform catalog. Expanding our studio roster.',
      releaseDate: 'TBA',
      platform: 'To Be Announced'
    }
  ]

  const filteredGames = gamesData.filter(game => {
    const matchesFilter = 
      filter === 'ALL' || 
      (filter === 'AVAILABLE' && game.isAvailable) || 
      (filter === 'UPCOMING' && !game.isAvailable)
    
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.genre.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesFilter && matchesSearch
  })

  return (
    <section id="games" className="py-20 lg:py-28 relative overflow-hidden bg-[#070A11]">
      
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00A3FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800/80 pb-8">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-[#00A3FF] uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5 text-[#00A3FF]" />
              STUDIO CATALOG
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              GAME <span className="gradient-text-[#00A3FF]">LIBRARY</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-lg">
              Explore current releases and upcoming titles from <strong className="text-slate-200">DEVLOOP STUDIOS</strong>.
            </p>
          </div>

          {/* Controls: Search & Filter Tabs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-48 pl-10 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3FF] transition-all"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800/90">
              <button
                onClick={() => setFilter('ALL')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider transition-all ${
                  filter === 'ALL'
                    ? 'bg-[#00A3FF] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ALL
              </button>
              <button
                onClick={() => setFilter('AVAILABLE')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider transition-all ${
                  filter === 'AVAILABLE'
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                AVAILABLE
              </button>
              <button
                onClick={() => setFilter('UPCOMING')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider transition-all ${
                  filter === 'UPCOMING'
                    ? 'bg-slate-700 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                COMING SOON
              </button>
            </div>

          </div>

        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className={`group glass-panel rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                game.isAvailable
                  ? 'border-slate-700/80 hover:border-[#00A3FF]/60 hover:shadow-2xl hover:shadow-blue-500/10'
                  : 'border-slate-800/80 hover:border-slate-700'
              }`}
            >
              
              {/* Card Image Header */}
              <div className="relative aspect-square overflow-hidden bg-slate-900 flex items-center justify-center p-3">
                {game.isAvailable ? (
                  <>
                    <img
                      src={game.icon}
                      alt={game.title}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/90 border border-emerald-500/60 px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-heading font-bold text-[10px] text-emerald-400 uppercase tracking-widest">
                        AVAILABLE NOW
                      </span>
                    </div>
                  </>
                ) : (
                  /* Polished Generic COMING SOON Placeholder Artwork */
                  <div className="w-full h-full rounded-xl bg-slate-950/90 border border-slate-800/80 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden shimmer-bg">
                    {/* Background Devloop Studios Infinity Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                      <img src={devloopLogo} alt="" className="w-32 h-32 object-contain" />
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-3 text-slate-500 group-hover:text-[#00A3FF] group-hover:border-[#00A3FF]/40 transition-all duration-300 shadow-inner">
                      <Lock className="w-5 h-5" />
                    </div>

                    <span className="font-heading font-black text-sm tracking-widest text-slate-300 uppercase">
                      COMING SOON
                    </span>
                    <span className="text-[10px] font-semibold text-[#00A3FF] uppercase tracking-wider mt-1">
                      DEVLOOP STUDIOS
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                      {game.genre}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">
                      {game.platform}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#00A3FF] transition-colors">
                    {game.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {game.description}
                  </p>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-2 border-t border-slate-800/80">
                  {game.isAvailable ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={onOpenDownload}
                        className="flex-1 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#FF7700] to-[#FF9900] hover:from-[#EE6600] hover:to-[#EE8800] flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>DOWNLOAD</span>
                      </button>
                      <button
                        onClick={onOpenGameDetails}
                        className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                        title="View Details"
                      >
                        <ArrowUpRight className="w-4 h-4 text-[#00A3FF]" />
                      </button>
                    </div>
                  ) : (
                    <div className="w-full py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-500 bg-slate-900/60 border border-slate-800/80 text-center flex items-center justify-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>IN DEVELOPMENT</span>
                    </div>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Platform Expansion Banner */}
        <div className="mt-12 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#00A3FF]/10 border border-[#00A3FF]/30 flex items-center justify-center flex-shrink-0">
              <img src={devloopLogo} alt="Devloop Logo" className="w-7 h-7 object-contain" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                EXPANDING THE DEVLOOP ROSTER
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Our team is actively prototyping new titles. Check back regularly for project updates.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold tracking-wider text-slate-200 hover:text-white transition-all whitespace-nowrap"
          >
            SUBSCRIBE TO UPDATES
          </a>
        </div>

      </div>
    </section>
  )
}
