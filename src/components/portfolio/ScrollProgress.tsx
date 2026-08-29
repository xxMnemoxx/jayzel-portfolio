"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const isNearBottom = progress > 80;

  return (
    <div
      className={`pointer-events-none fixed right-3 top-1/2 z-[40] -translate-y-1/2 transition-all duration-300 sm:right-5 ${
        isNearBottom ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"
      }`}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="pixel-font text-[7px] uppercase tracking-[0.2em] text-cyan-200/90">
          {Math.round(progress)}%
        </span>

        <div className="flex h-32 w-2 items-end overflow-hidden rounded-[0.15rem] border border-amber-200/20 bg-slate-900/80 sm:h-36">
          <div
            className="w-full rounded-[0.1rem] bg-gradient-to-t from-amber-300 via-yellow-400 to-cyan-300 transition-[height] duration-150 ease-out"
            style={{ height: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
