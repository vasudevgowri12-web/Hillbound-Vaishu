import React, { useState, useRef } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FeaturedGame from './components/FeaturedGame.jsx'
import GameLibrary from './components/GameLibrary.jsx'
import AboutStudio from './components/AboutStudio.jsx'
import WhyDevloop from './components/WhyDevloop.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import DownloadModal from './components/DownloadModal.jsx'
import GameDetailsModal from './components/GameDetailsModal.jsx'
import BackgroundAudio from './components/BackgroundAudio.jsx'
import CinematicIntro from './components/CinematicIntro.jsx'

export default function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  
  // Synchronous check: Ensure intro state is known on frame 0 to prevent any homepage flash
  const [isIntroActive, setIsIntroActive] = useState(() => {
    try {
      return sessionStorage.getItem('devloop_intro_played') !== 'true'
    } catch (e) {
      return false
    }
  })
  
  const audioControllerRef = useRef(null)

  const handleOpenDownload = () => {
    setIsDownloadOpen(true)
  }

  const handleOpenDetails = () => {
    setIsDetailsOpen(true)
  }

  // Triggered when user taps "TAP TO ENTER" on the cinematic intro overlay
  const handleCinematicEnter = () => {
    setIsIntroActive(false)
    if (audioControllerRef.current) {
      audioControllerRef.current.playAudio()
    }
  }

  return (
    <div className="min-h-screen bg-[#030508] text-slate-100 selection:bg-[#00A3FF] selection:text-white flex flex-col justify-between relative overflow-hidden">
      
      {/* 1. Cinematic AAA Launcher Intro Overlay */}
      <CinematicIntro onEnter={handleCinematicEnter} />

      {/* 2. Main Website Container (Strictly hidden on frame 0 until user taps to enter) */}
      <div
        className={`flex flex-col justify-between min-h-screen transition-opacity duration-1000 ease-out ${
          isIntroActive
            ? 'opacity-0 pointer-events-none max-h-screen overflow-hidden'
            : 'opacity-100 pointer-events-auto'
        }`}
      >
        {/* Sticky Main Navigation */}
        <Navbar
          onOpenDownload={handleOpenDownload}
          onOpenGameDetails={handleOpenDetails}
        />

        {/* Main Page Content */}
        <main className="flex-1">
          {/* 1. Hero Section (Hillbound Vaishu Debut) */}
          <Hero
            onOpenDownload={handleOpenDownload}
            onOpenGameDetails={handleOpenDetails}
          />

          {/* 2. Featured Game Showcase */}
          <FeaturedGame
            onOpenDownload={handleOpenDownload}
            onOpenGameDetails={handleOpenDetails}
          />

          {/* 3. Games / Game Library (Future-Proof Platform Storefront) */}
          <GameLibrary
            onOpenDownload={handleOpenDownload}
            onOpenGameDetails={handleOpenDetails}
          />

          {/* 4. About DEVLOOP STUDIOS */}
          <AboutStudio />

          {/* 5. Why DEVLOOP */}
          <WhyDevloop />

          {/* 6. Contact & Support */}
          <ContactSection />
        </main>

        {/* Studio Footer */}
        <Footer />
      </div>

      {/* Interactive Modals */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />

      <GameDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        onOpenDownload={handleOpenDownload}
      />

      {/* Background Theme Song Audio (No UI controls) */}
      <BackgroundAudio ref={audioControllerRef} />

    </div>
  )
}
