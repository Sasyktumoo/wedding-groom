"use client";

import { useRef, useEffect } from "react";
import { useMusic } from "@/contexts/MusicContext";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { setAudioRef } = useMusic();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Register audio ref with context
    setAudioRef(audioRef);

    // Set volume
    audio.volume = 0.3;

    let hasStarted = false;

    const playOnInteraction = () => {
      if (hasStarted) return;
      
      audio.play()
        .then(() => {
          hasStarted = true;
          // Remove all listeners after successful play
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('touchstart', playOnInteraction);
          document.removeEventListener('touchmove', playOnInteraction);
          document.removeEventListener('scroll', playOnInteraction);
          document.removeEventListener('wheel', playOnInteraction);
          document.removeEventListener('mousemove', playOnInteraction);
          document.removeEventListener('mousedown', playOnInteraction);
          document.removeEventListener('mouseenter', playOnInteraction);
          document.removeEventListener('keydown', playOnInteraction);
          document.removeEventListener('keypress', playOnInteraction);
          document.removeEventListener('visibilitychange', playOnInteraction);
          window.removeEventListener('scroll', playOnInteraction);
          window.removeEventListener('wheel', playOnInteraction);
          window.removeEventListener('focus', playOnInteraction);
          window.removeEventListener('mousemove', playOnInteraction);
        })
        .catch(() => {
          // Still blocked, will retry on next interaction
        });
    };

    // Try to play immediately (multiple attempts)
    const tryAutoplay = () => {
      audio.play()
        .then(() => {
          hasStarted = true;
        })
        .catch(() => {
          // Autoplay blocked, set up all possible interaction listeners
          document.addEventListener('click', playOnInteraction);
          document.addEventListener('touchstart', playOnInteraction);
          document.addEventListener('touchmove', playOnInteraction);
          document.addEventListener('scroll', playOnInteraction);
          document.addEventListener('wheel', playOnInteraction, { passive: true });
          document.addEventListener('mousemove', playOnInteraction);
          document.addEventListener('mousedown', playOnInteraction);
          document.addEventListener('mouseenter', playOnInteraction);
          document.addEventListener('keydown', playOnInteraction);
          document.addEventListener('keypress', playOnInteraction);
          document.addEventListener('visibilitychange', playOnInteraction);
          window.addEventListener('scroll', playOnInteraction, { passive: true });
          window.addEventListener('wheel', playOnInteraction, { passive: true });
          window.addEventListener('focus', playOnInteraction);
          window.addEventListener('mousemove', playOnInteraction);
        });
    };

    // Try immediately
    setTimeout(tryAutoplay, 100);
    // Try again after a bit
    setTimeout(tryAutoplay, 500);
    // And one more time
    setTimeout(tryAutoplay, 1000);

    return () => {
      // Cleanup
      document.removeEventListener('click', playOnInteraction);
      document.removeEventListener('touchstart', playOnInteraction);
      document.removeEventListener('touchmove', playOnInteraction);
      document.removeEventListener('scroll', playOnInteraction);
      document.removeEventListener('wheel', playOnInteraction);
      document.removeEventListener('mousemove', playOnInteraction);
      document.removeEventListener('mousedown', playOnInteraction);
      document.removeEventListener('mouseenter', playOnInteraction);
      document.removeEventListener('keydown', playOnInteraction);
      document.removeEventListener('keypress', playOnInteraction);
      document.removeEventListener('visibilitychange', playOnInteraction);
      window.removeEventListener('scroll', playOnInteraction);
      window.removeEventListener('wheel', playOnInteraction);
      window.removeEventListener('focus', playOnInteraction);
      window.removeEventListener('mousemove', playOnInteraction);
    };
  }, [setAudioRef]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
    >
      <source src="/audio/wedding-background.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}

