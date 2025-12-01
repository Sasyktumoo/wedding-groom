"use client";

import { createContext, useContext, useState, useRef, ReactNode } from "react";

interface MusicContextType {
  audioRef: React.RefObject<HTMLAudioElement> | null;
  setAudioRef: (ref: React.RefObject<HTMLAudioElement>) => void;
  isMuted: boolean;
  toggleMute: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [audioRef, setAudioRefState] = useState<React.RefObject<HTMLAudioElement> | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  const setAudioRef = (ref: React.RefObject<HTMLAudioElement>) => {
    setAudioRefState(ref);
  };

  const toggleMute = () => {
    if (audioRef?.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <MusicContext.Provider value={{ audioRef, setAudioRef, isMuted, toggleMute }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
}

