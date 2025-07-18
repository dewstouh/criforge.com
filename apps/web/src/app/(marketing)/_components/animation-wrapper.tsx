"use client";

import { useEffect, useState } from "react";
import { useScrollControl } from "../_hooks/use-scroll-control";

interface AnimationWrapperProps {
  children: React.ReactNode;
}

export function AnimationWrapper({ children }: AnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { scrollDisabled } = useScrollControl();

  useEffect(() => {
    // Initial animation sequence
    const timer = setTimeout(() => {
      setIsVisible(true);
      setHasAnimated(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        overflow: scrollDisabled ? "hidden" : "auto",
      }}
    >
      {children}
    </div>
  );
}
