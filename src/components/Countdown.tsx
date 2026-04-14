"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-06-25T00:00:00").getTime();

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

export default function Countdown() {
  const [time, setTime] = useState({ d: "--", h: "--", m: "--", s: "--" });

  useEffect(() => {
    function update() {
      const diff = Math.max(0, TARGET - Date.now());
      setTime({
        d: pad(Math.floor(diff / (1000 * 60 * 60 * 24))),
        h: pad(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        m: pad(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))),
        s: pad(Math.floor((diff % (1000 * 60)) / 1000)),
      });
    }
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { value: time.d, label: "Days" },
    { value: time.h, label: "Hours" },
    { value: time.m, label: "Minutes" },
    { value: time.s, label: "Seconds" },
  ];

  return (
    <div className="flex items-center gap-2">
      {blocks.map((block, i) => (
        <div key={block.label} className="flex items-center gap-2">
          <div className="bg-white/5 border border-white/10 rounded-[14px] px-5 py-4 text-center min-w-[80px] backdrop-blur-lg">
            <div className="font-[family-name:var(--font-space-grotesk)] text-[32px] font-bold tabular-nums tracking-tight text-white">
              {block.value}
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
              {block.label}
            </div>
          </div>
          {i < blocks.length - 1 && (
            <span className="text-2xl font-bold text-gray-500 pb-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
