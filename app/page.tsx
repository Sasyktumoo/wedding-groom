"use client";

import HeroWithPhoto from "@/components/HeroWithPhoto";
import Hero from "@/components/Hero";
import PhotoGallery from "@/components/PhotoGallery";
import EventDetails from "@/components/EventDetails";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";
import EnvelopeIntro from "@/components/EnvelopeIntro";
import BackgroundMusic from "@/components/BackgroundMusic";
import { useState, useEffect } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  // Check if user has seen intro before (using sessionStorage)
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro === 'true') {
      setShowIntro(false);
      setIntroComplete(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIntroComplete(true);
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  return (
    <main className="overflow-x-hidden">
      {showIntro && <EnvelopeIntro onComplete={handleIntroComplete} />}
      {introComplete && (
        <>
          {/* <HeroWithPhoto /> */}
          <Hero showIntro={false} />
          <EventDetails />
          <PhotoGallery />
          <Countdown />
          <Footer />
        </>
      )}
      <BackgroundMusic />
    </main>
  );
}

