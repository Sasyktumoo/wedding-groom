"use client";

import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";
import EnvelopeIntro from "@/components/EnvelopeIntro";
import BackgroundMusic from "@/components/BackgroundMusic";
import { useState, useEffect } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);
  const [useTypewriter, setUseTypewriter] = useState(false);

  // Check if user has seen intro before (using sessionStorage)
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro === 'true') {
      setShowIntro(false);
      setIntroComplete(true);
      setUseTypewriter(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIntroComplete(true);
    setUseTypewriter(true);
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  return (
    <main className="overflow-x-hidden">
      {showIntro && <EnvelopeIntro onComplete={handleIntroComplete} />}
      {introComplete && (
        <>
          <Hero showIntro={useTypewriter} />
          <EventDetails />
          <Footer />
        </>
      )}
      <BackgroundMusic />
    </main>
  );
}

