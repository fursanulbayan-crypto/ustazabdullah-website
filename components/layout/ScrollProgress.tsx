"use client";

import { useEffect, useState } from "react";

/**
 * Thin gold progress bar at the top of the viewport, tracking scroll depth.
 * Useful on long pages such as articles and research entries.
 */
export function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="reading-progress" style={{ width: `${width}%` }} aria-hidden="true" />;
}
