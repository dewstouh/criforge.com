"use client";

import { useEffect, useState } from "react";

export function AnimatedTitle() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <h1
      className={`gothic-text-large text-6xl md:text-8xl mb-6 transition-all duration-1000 transform ${
        isVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-50 translate-y-4"
      }`}
    >
      SALVA-JE
    </h1>
  );
}
