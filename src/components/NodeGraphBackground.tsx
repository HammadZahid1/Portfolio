"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

type Pulse = {
  from: number;
  to: number;
  t: number;
  speed: number;
};

export default function NodeGraphBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let animationId: number;
    let resizeTimeout: ReturnType<typeof setTimeout>;
    let running = true;
    const mouse = { x: -9999, y: -9999 };

    const CONNECT_DIST = 140;
    const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;
    const NODE_COUNT_DIVISOR = 18000;

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(
        18,
        Math.min(50, Math.floor((width * height) / NODE_COUNT_DIVISOR))
      );
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.4 + 1,
      }));
      pulses = [];
    }

    function debouncedResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 150);
    }

    function maybeSpawnPulse() {
      if (Math.random() < 0.015 && nodes.length > 1) {
        const from = Math.floor(Math.random() * nodes.length);
        let to = Math.floor(Math.random() * nodes.length);
        let attempts = 0;
        while (to === from && attempts < 5) {
          to = Math.floor(Math.random() * nodes.length);
          attempts++;
        }
        pulses.push({ from, to, t: 0, speed: 0.01 + Math.random() * 0.014 });
      }
    }

    function draw() {
      if (!running) return;
      ctx!.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!prefersReducedMotion) {
          n.x += n.vx;
          n.y += n.vy;

          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 14400) {
            const dist = Math.sqrt(distSq) || 1;
            const force = (120 - dist) / 120;
            n.x += (dx / dist) * force * 0.6;
            n.y += (dy / dist) * force * 0.6;
          }

          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
          n.x = Math.max(0, Math.min(width, n.x));
          n.y = Math.max(0, Math.min(height, n.y));
        }
      }

      ctx!.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < CONNECT_DIST_SQ) {
            const alpha = (1 - Math.sqrt(distSq) / CONNECT_DIST) * 0.35;
            ctx!.strokeStyle = `rgba(255, 106, 26, ${alpha})`;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      if (!prefersReducedMotion) {
        maybeSpawnPulse();
      }
      if (pulses.length) {
        pulses = pulses.filter((p) => p.t <= 1);
        for (const p of pulses) {
          const a = nodes[p.from];
          const b = nodes[p.to];
          if (!a || !b) continue;
          const px = a.x + (b.x - a.x) * p.t;
          const py = a.y + (b.y - a.y) * p.t;
          ctx!.beginPath();
          ctx!.fillStyle = "rgba(255, 164, 92, 0.9)";
          ctx!.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx!.fill();
          if (!prefersReducedMotion) p.t += p.speed;
        }
      }

      ctx!.fillStyle = "rgba(255, 106, 26, 0.55)";
      for (const n of nodes) {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function handleVisibilityChange() {
      running = !document.hidden;
      if (running) {
        animationId = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(animationId);
      }
    }

    resize();
    draw();

    window.addEventListener("resize", debouncedResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    canvas.addEventListener("mousemove", handleMouseMove, { passive: true });
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      running = false;
      cancelAnimationFrame(animationId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", debouncedResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
