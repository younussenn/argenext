"use client";

import { useState, useEffect } from "react";
import { translations, type Language } from "@/lib/translations";

const STORAGE_KEY = "argenext-lang";

export function useLanguage() {
  const [lang, setLangState] = useState<Language>("tr");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "tr" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  };

  return {
    lang,
    setLang,
    t: translations[lang],
  };
}