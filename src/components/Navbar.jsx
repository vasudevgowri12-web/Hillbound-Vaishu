import React, { useState, useEffect } from 'react'
import { Download, Menu, X, Gamepad2, Info, Sparkles, Mail, ShieldCheck } from 'lucide-react'
import devloopLogo from '../../assets/devloop_logo.png'

export default function Navbar({ onOpenDownload, onOpenGameDetails }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'GAMES', href: '#games' },
    { name: 'ABOUT', href: '#about' },
    { name: 'WHY DEVLOOP', href: '#why-devloop' },
    { name: 'CONTACT', href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070A11]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Studio Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-slate-900/90 border border-slate-700/60 p-1.5 shadow-lg group-hover:border-[#00A3FF]/60 transition-all duration-300">
              <img
                src={devloopLogo}
                alt="Devloop Studios Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,163,255,0.4)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-lg sm:text-xl tracking-wider text-white group-hover:text-[#00A3FF] transition-colors">
                DEVLOOP <span className="text-[#00A3FF]">STUDIOS</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 tracking-widest uppercase -mt-1">
                Game Platform
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 rounded-full text-xs font-bold tracking-widest text-slate-300 hover:text-white hover:bg-slate-800/70 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDownload}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#0066FF] to-[#00A3FF] hover:from-[#0052CC] hover:to-[#008AE6] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Hillbound Vaishu</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#00A3FF]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A0E17]/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 rounded-xl text-sm font-bold tracking-wider text-slate-200 hover:bg-slate-800/80 hover:text-[#00A3FF] transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-slate-500">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenDownload()
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#0066FF] to-[#00A3FF] shadow-lg shadow-blue-500/25"
            >
              <Download className="w-4 h-4" />
              <span>Download Hillbound Vaishu</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
