'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
  color: string;
  size: number;
}

const streams: { label: string; color: string }[] = [
  { label: 'SEO', color: '#FF6B2C' },
  { label: 'Paid Ads', color: '#FF6B2C' },
  { label: 'Email', color: '#FF6B2C' },
  { label: 'Web Design', color: '#A855F7' },
  { label: 'Dev', color: '#A855F7' },
  { label: 'E-Commerce', color: '#A855F7' },
  { label: 'Workflows', color: '#22D3EE' },
  { label: 'Integrations', color: '#22D3EE' },
  { label: 'Research', color: '#10B981' },
  { label: 'Analysis', color: '#10B981' },
  { label: 'Training', color: '#F59E0B' },
  { label: 'Agents', color: '#F59E0B' },
  { label: 'Consulting', color: '#5CEBDF' },
];

export function ConstellationHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize nodes
    nodesRef.current = streams.map((s) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      label: s.label,
      color: s.color,
      size: 3 + Math.random() * 2,
    }));

    setReady(true);

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouse, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      // Update & draw
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isNear = dist < 150;

        // Draw connections
        for (const other of nodes) {
          const cdx = other.x - node.x;
          const cdy = other.y - node.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cdist < 200) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(148,152,168,${0.06 * (1 - cdist / 200)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, isNear ? node.size * 1.8 : node.size, 0, Math.PI * 2);
        ctx.fillStyle = isNear ? node.color : `${node.color}60`;
        ctx.fill();

        // Draw glow
        if (isNear) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * 4, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 4);
          gradient.addColorStop(0, `${node.color}20`);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.fill();

          // Label
          ctx.font = '11px Inter, sans-serif';
          ctx.fillStyle = '#9498A8';
          ctx.textAlign = 'center';
          ctx.fillText(node.label, node.x, node.y - node.size * 3);
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: ready ? 1 : 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="absolute inset-0 pointer-events-none"
      style={{ pointerEvents: 'auto' }}
    />
  );
}
