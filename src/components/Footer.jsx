import React from 'react'
import { ArrowUp, Github, Twitter, Disc as Discord, Youtube, Globe, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#05070D] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/60 p-1.5 flex items-center justify-center">
                <img
                  src="/assets/devloop_logo.png"
                  alt="Devloop Studios Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,163,255,0.4)]"
                />
              </div>
              <div>
                <h3 className="font-heading font-black text-xl text-white tracking-wider">
                  DEVLOOP <span className="text-[#00A3FF]">STUDIOS</span>
                </h3>
                <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                  INDEPENDENT GAME STUDIO
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Official game studio platform for DEVLOOP STUDIOS releases. Creating fun, polished, and memorable indie games.
            </p>

            {/* Social Media Area (Populated / Placeholders) */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href="#footer-social"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#00A3FF] hover:border-[#00A3FF]/40 flex items-center justify-center transition-all"
                title="Discord Community (Coming Soon)"
              >
                <Discord className="w-4 h-4" />
              </a>
              <a
                href="#footer-social"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#00A3FF] hover:border-[#00A3FF]/40 flex items-center justify-center transition-all"
                title="X / Twitter (Coming Soon)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#footer-social"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#FF9900] hover:border-orange-500/40 flex items-center justify-center transition-all"
                title="YouTube Channel (Coming Soon)"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#footer-social"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 flex items-center justify-center transition-all"
                title="GitHub Repositories"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-200">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-[#00A3FF] transition-colors">
                  HOME
                </a>
              </li>
              <li>
                <a href="#games" onClick={(e) => handleNavClick(e, '#games')} className="hover:text-[#00A3FF] transition-colors">
                  GAMES LIBRARY
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-[#00A3FF] transition-colors">
                  ABOUT DEVLOOP
                </a>
              </li>
              <li>
                <a href="#why-devloop" onClick={(e) => handleNavClick(e, '#why-devloop')} className="hover:text-[#00A3FF] transition-colors">
                  WHY DEVLOOP
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-[#00A3FF] transition-colors">
                  CONTACT & SUPPORT
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Release Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-200">
              FEATURED RELEASE
            </h4>
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
              <img
                src="/assets/hillbound_vaishu_icon.jpg"
                alt="Hillbound Vaishu"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h5 className="font-heading font-bold text-xs text-white">HILLBOUND VAISHU</h5>
                <p className="text-[10px] text-emerald-400 font-semibold mt-0.5">● AVAILABLE NOW</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 DEVLOOP STUDIOS. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px] text-slate-400">
              Crafted with <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" /> for gamers.
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all flex items-center gap-1.5"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:inline">TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
