"use client";

import React from 'react';
import { Sparkles, Heart, Zap, Flame } from 'lucide-react';

export default function InteractiveTicker() {
  const items = [
    { text: '100% EGGLESS GOURMET', icon: <Sparkles className="w-5 h-5 text-accent fill-accent" /> },
    { text: 'NYC-STYLE CHUNKY COOKIES', icon: <Flame className="w-5 h-5 text-accent fill-accent" /> },
    { text: 'SLOW CHURNED ITALIAN GELATO', icon: <Zap className="w-5 h-5 text-accent fill-accent" /> },
    { text: 'MADE WITH LOVE IN GURUGRAM', icon: <Heart className="w-5 h-5 text-accent fill-accent" /> },
    { text: 'DUBAI KUNAFA SPECIALS NOW LIVE', icon: <Sparkles className="w-5 h-5 text-accent fill-accent" /> },
    { text: 'EXTRA GOOEY CENTERS ONLY', icon: <Flame className="w-5 h-5 text-accent fill-accent" /> },
  ];

  // Repeat items to fill up and ensure seamless looping
  const tickerItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-brown-dark text-cream-light py-4 border-y-4 border-brown-dark shadow-[0px_4px_12px_rgba(60,34,24,0.15)] z-20 select-none">
      <div className="flex animate-ticker whitespace-nowrap gap-12 items-center">
        {tickerItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="font-display font-black text-lg md:text-xl tracking-wider">
              {item.text}
            </span>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
