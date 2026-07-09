"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    let raf = 0;
    let pendingX = 0;
    let pendingY = 0;

    function handleMove(e: MouseEvent) {
      pendingX = (e.clientX / window.innerWidth) * 100;
      pendingY = (e.clientY / window.innerHeight) * 100;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          document.documentElement.style.setProperty(
            "--cursor-x",
            `${pendingX}%`
          );
          document.documentElement.style.setProperty(
            "--cursor-y",
            `${pendingY}%`
          );
          raf = 0;
        });
      }
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
