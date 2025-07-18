"use client";

import { useEffect, useState } from "react";

export function useScrollControl() {
  const [scrollDisabled, setScrollDisabled] = useState(false);

  const disableScroll = () => {
    setScrollDisabled(true);
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    setScrollDisabled(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      enableScroll();
    };
  }, []);

  return {
    scrollDisabled,
    disableScroll,
    enableScroll,
  };
}
