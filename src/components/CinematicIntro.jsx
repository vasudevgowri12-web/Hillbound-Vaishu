import React, { useState, useEffect } from 'react'
import devloopLogo from '../../assets/devloop_logo.png'

export default function CinematicIntro({ onEnter }) {
  // Synchronously check sessionStorage on initial render pass to prevent initial frame flash
  const [hasSeenSession] = useState(() => {
    try {
      return sessionStorage.getItem('devloop_intro_played') === 'true'
    } catch (e) {
      return false
    }
  })

  const [stage, setStage] = useState(0) // 0: Black, 1: Logo Reveal, 2: Tap Prompt
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isDestroyed, setIsDestroyed] = useState(() => hasSeenSession)

  useEffect(() => {
    if (hasSeenSession) {
      setIsDestroyed(true)
      return
    }

    // Sequence timelines
    // 350ms: Reveal logo and studio title
    const timer1 = setTimeout(() => {
      setStage(1)
    }, 350)

    // 2100ms: Smoothly reveal TAP TO ENTER prompt without layout shifts
    const timer2 = setTimeout(() => {
      setStage(2)
    }, 2100)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [hasSeenSession])

  const handleEnter = () => {
    if (isFadingOut || isDestroyed) return

    // Mark intro as seen for this session
    try {
      sessionStorage.setItem('devloop_intro_played', 'true')
    } catch (e) {
      console.log('Session storage save error:', e)
    }
    
    // Trigger background audio playback
    if (onEnter) {
      onEnter()
    }

    // Initiate smooth AAA launcher fade out transition
    setIsFadingOut(true)

    // Remove from DOM after fade completes
    setTimeout(() => {
      setIsDestroyed(true)
    }, 1000)
  }

  // If already seen in this session or destroyed after enter, do not render
  if (hasSeenSession || isDestroyed) {
    return null
  }

  return (
    <div
      onClick={handleEnter}
      className={`fixed inset-0 z-[100] bg-[#030508] text-white select-none cursor-pointer overflow-hidden transition-all duration-1000 cubic-bezier(0.4,0,0.2,1) ${
        isFadingOut
          ? 'opacity-0 scale-105 filter blur-sm pointer-events-none'
          : 'opacity-100 scale-100 filter blur-0'
      }`}
    >
      {/* 1. Ambient Background Glow & Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep cyan radial aura glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-radial from-[#00A3FF]/15 via-[#0066FF]/5 to-transparent blur-3xl animate-pulse-glow" />

        {/* Ambient grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#00A3FF_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07]" />

        {/* Floating subtle particle flares */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-[#00A3FF]/40 blur-xs animate-particle-1" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-blue-400/30 blur-xs animate-particle-2" />
        <div className="absolute top-2/3 left-3/4 w-1.5 h-1.5 rounded-full bg-cyan-300/40 blur-xs animate-particle-1" />
      </div>

      {/* Top Header Tagline (Fixed layout anchor) */}
      <div className="absolute top-0 left-0 right-0 pt-8 px-8 flex justify-between items-center opacity-40 text-[10px] font-mono tracking-widest text-slate-400 pointer-events-none z-10">
        <span>DEVLOOP STUDIOS</span>
        <span>INITIALIZING PLATFORM</span>
      </div>

      {/* 2. Absolute Centered Cinematic Logo Reveal (Locked position, zero layout shift) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-xl">
        <div
          className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col items-center ${
            stage >= 1
              ? 'opacity-100 scale-100 filter blur-0 translate-y-0'
              : 'opacity-0 scale-90 filter blur-md translate-y-4'
          }`}
        >
          {/* Glowing Logo Icon */}
          <div className="relative mb-6 group">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#00A3FF]/40 to-[#0066FF]/40 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />
            
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-slate-950/80 border border-slate-700/80 p-4 sm:p-5 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <img
                src={devloopLogo}
                alt="Devloop Studios Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(0,163,255,0.7)]"
              />
            </div>
          </div>

          {/* Studio Title */}
          <h1 className="font-heading font-black text-3xl sm:text-5xl tracking-[0.25em] text-white uppercase drop-shadow-[0_4px_25px_rgba(0,163,255,0.4)]">
            DEVLOOP <span className="text-[#00A3FF]">STUDIOS</span>
          </h1>

          {/* Subtitle & Line Divider */}
          <div className="mt-3 flex items-center gap-3">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#00A3FF]/60" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.35em] text-slate-400 uppercase">
              GAME STUDIO & PLATFORM
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#00A3FF]/60" />
          </div>
        </div>
      </div>

      {/* 3. Bottom Fixed Position "TAP TO ENTER" Prompt (Zero layout jerk) */}
      <div className="absolute bottom-12 sm:bottom-16 left-0 right-0 z-10 flex flex-col items-center justify-center">
        <div
          className={`transition-all duration-700 ease-out flex flex-col items-center ${
            stage >= 2
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {/* Button Badge with gentle pulse */}
          <div className="animate-tap-pulse py-3 px-6 rounded-full bg-slate-900/80 border border-[#00A3FF]/40 backdrop-blur-md shadow-[0_0_25px_rgba(0,163,255,0.3)] flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A3FF] animate-ping" />
            <span className="font-heading font-bold text-xs sm:text-sm text-slate-100 uppercase tracking-[0.3em]">
              TAP TO ENTER
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A3FF] animate-ping" />
          </div>

          {/* Subtitle hint */}
          <p className="mt-3 text-[10px] font-medium tracking-widest text-slate-500 uppercase">
            CLICK OR TOUCH ANYWHERE TO BEGIN EXPERIENCE
          </p>
        </div>
      </div>

    </div>
  )
}
