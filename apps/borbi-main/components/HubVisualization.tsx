'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Arm {
  name: string;
  color: string;
  icon: string;
  desc: string;
  href: string;
}

interface HubVisualizationProps {
  arms: Arm[];
}

export function HubVisualization({ arms }: HubVisualizationProps) {
  const [activeArm, setActiveArm] = useState<number | null>(null);

  const cx = 200;
  const cy = 200;
  const radius = 140;

  return (
    <div className="flex justify-center">
      <svg
        viewBox="0 0 400 400"
        className="w-full max-w-md"
        onMouseLeave={() => setActiveArm(null)}
      >
        {/* Connection lines */}
        {arms.map((arm, i) => {
          const angle = (i / arms.length) * Math.PI * 2 - Math.PI / 2;
          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * radius;
          const isActive = activeArm === i;
          const isDimmed = activeArm !== null && activeArm !== i;

          return (
            <g key={arm.name}>
              <line
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke={arm.color}
                strokeWidth={isActive ? 2 : 1}
                opacity={isDimmed ? 0.15 : isActive ? 0.8 : 0.3}
                className="transition-all duration-300"
              />
              <motion.circle
                cx={x}
                cy={y}
                r={isActive ? 28 : 22}
                fill={`${arm.color}20`}
                stroke={arm.color}
                strokeWidth={isActive ? 2 : 1}
                opacity={isDimmed ? 0.3 : 1}
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveArm(i)}
                animate={{ r: isActive ? 28 : 22 }}
              />
              <text
                x={x}
                y={y + 1}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-sm pointer-events-none select-none"
                fill={isDimmed ? '#5A5E6E' : '#F0F0F3'}
                fontSize="16"
              >
                {arm.icon}
              </text>
              {isActive && (
                <text
                  x={x}
                  y={y + 44}
                  textAnchor="middle"
                  fill="#F0F0F3"
                  fontSize="11"
                  fontFamily="Inter, sans-serif"
                  fontWeight="600"
                >
                  {arm.name}
                </text>
              )}
            </g>
          );
        })}

        {/* Center hub */}
        <circle cx={cx} cy={cy} r={32} fill="#FF6B2C" opacity={0.9} />
        <text
          x={cx}
          y={cy + 1}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#08090E"
          fontSize="14"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
        >
          B
        </text>
      </svg>
    </div>
  );
}
