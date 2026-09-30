import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import themeSong from '../../assets/theme_song.mp3'

const BackgroundAudio = forwardRef((props, ref) => {
  const audioRef = useRef(null)

  // Expose play, pause, and stop methods to parent via ref
  useImperativeHandle(ref, () => ({
    playAudio: async () => {
      const audio = audioRef.current
      if (!audio) return
      try {
        audio.volume = 0.15
        audio.muted = false
        await audio.play()
      } catch (err) {
        console.log('Audio playback error:', err)
      }
    }
  }))

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.15 // Low sound (15% volume)
    audio.loop = true   // Continuous infinite loop

    // If intro was already seen in this session (e.g. user refreshed), try playing audio on first click/interaction
    const seen = sessionStorage.getItem('devloop_intro_played')
    if (seen === 'true') {
      const handleUserInteraction = async () => {
        if (audioRef.current && audioRef.current.paused) {
          try {
            audioRef.current.volume = 0.15
            await audioRef.current.play()
          } catch (e) {
            console.log('Interaction play error:', e)
          }
        }
      }

      window.addEventListener('click', handleUserInteraction, { once: true })
      window.addEventListener('touchstart', handleUserInteraction, { once: true })
      window.addEventListener('keydown', handleUserInteraction, { once: true })

      return () => {
        window.removeEventListener('click', handleUserInteraction)
        window.removeEventListener('touchstart', handleUserInteraction)
        window.removeEventListener('keydown', handleUserInteraction)
      }
    }
  }, [])

  // Infinite Loop Handler fallback
  const handleEnded = () => {
    const audio = audioRef.current
    if (audio) {
      audio.currentTime = 0
      audio.play().catch((e) => console.log('Loop restart error:', e))
    }
  }

  return (
    <audio
      ref={audioRef}
      src={themeSong}
      preload="none"
      loop
      onEnded={handleEnded}
      style={{ display: 'none' }}
    />
  )
})

BackgroundAudio.displayName = 'BackgroundAudio'

export default BackgroundAudio
