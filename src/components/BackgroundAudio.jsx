import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import themeSong from '../../assets/theme_song.mp3'

const BackgroundAudio = forwardRef((props, ref) => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const playAudio = async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      audio.muted = false
      audio.volume = 0.25
      const promise = audio.play()
      if (promise !== undefined) {
        await promise
        setIsPlaying(true)
      }
    } catch (err) {
      console.log('Mobile audio play error:', err)
    }
  }

  const pauseAudio = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    setIsPlaying(false)
  }

  const toggleAudio = (e) => {
    if (e) {
      e.stopPropagation()
    }
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      playAudio()
    } else {
      pauseAudio()
    }
  }

  // Expose play, pause, toggle methods to parent via ref
  useImperativeHandle(ref, () => ({
    playAudio,
    pauseAudio,
    toggleAudio
  }))

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.25
    audio.loop = true

    // Fallback: Unlock audio on any mobile tap across the page if not playing
    const unlockAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        playAudio()
      }
    }

    window.addEventListener('click', unlockAudio, { once: true })
    window.addEventListener('pointerdown', unlockAudio, { once: true })
    window.addEventListener('touchend', unlockAudio, { once: true })

    return () => {
      window.removeEventListener('click', unlockAudio)
      window.removeEventListener('pointerdown', unlockAudio)
      window.removeEventListener('touchend', unlockAudio)
    }
  }, [])

  return (
    <>
      <audio
        ref={audioRef}
        src={themeSong}
        preload="auto"
        loop
        playsInline
        webkit-playsinline="true"
        style={{ display: 'none' }}
      />

      {/* Floating Mobile & Desktop Music Control Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={toggleAudio}
          onTouchEnd={toggleAudio}
          className={`p-3.5 rounded-full border shadow-2xl backdrop-blur-xl transition-all duration-300 flex items-center justify-center cursor-pointer group select-none ${
            isPlaying
              ? 'bg-slate-900/90 border-[#00A3FF]/60 text-[#00A3FF] shadow-blue-500/20'
              : 'bg-slate-950/90 border-slate-800 text-slate-400 hover:text-white'
          }`}
          title={isPlaying ? 'Mute Background Music' : 'Play Background Music'}
          aria-label="Toggle Background Music"
        >
          {isPlaying ? (
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 animate-pulse text-[#00A3FF]" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-300 hidden sm:inline">
                MUSIC ON
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <VolumeX className="w-5 h-5 text-slate-500 group-hover:text-slate-300" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 hidden sm:inline">
                MUSIC OFF
              </span>
            </div>
          )}
        </button>
      </div>
    </>
  )
})

BackgroundAudio.displayName = 'BackgroundAudio'

export default BackgroundAudio
