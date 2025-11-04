"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import kgzTranslations from "@/locales/kgz.json";
import ruTranslations from "@/locales/ru.json";

type Language = "kgz" | "ru";

type Translations = typeof kgzTranslations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("kgz");
  const [translations, setTranslations] = useState<Translations>(kgzTranslations);

  useEffect(() => {
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem("wedding-language") as Language;
    if (savedLanguage && (savedLanguage === "kgz" || savedLanguage === "ru")) {
      setLanguageState(savedLanguage);
      setTranslations(savedLanguage === "kgz" ? kgzTranslations : ruTranslations);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setTranslations(lang === "kgz" ? kgzTranslations : ruTranslations);
    localStorage.setItem("wedding-language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

