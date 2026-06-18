"use client";

import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Sparkles, Trash2, Plus, Box, IceCream, ShoppingBag } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Flavor {
  name: string;
  color: string;
  visualClass: string;
}

const COOKIE_FLAVORS: Flavor[] = [
  { name: 'OG Chocochunk', color: '#c68a4c', visualClass: 'bg-amber-700/80 border-amber-950' },
  { name: 'Red Era', color: '#be123c', visualClass: 'bg-rose-700 border-rose-950' },
  { name: 'Chocolate Lava', color: '#451a03', visualClass: 'bg-yellow-950 border-amber-950' },
  { name: 'Toffee Pecan', color: '#92400e', visualClass: 'bg-amber-800 border-amber-950' },
  { name: 'Boujee Biscoff', color: '#d97706', visualClass: 'bg-amber-600 border-amber-950' },
];

const GELATO_FLAVORS: Flavor[] = [
  { name: 'Dubai Kunafa', color: '#eab308', visualClass: 'bg-yellow-500/80 border-yellow-900' },
  { name: 'Berry Cheesy', color: '#ddd6fe', visualClass: 'bg-purple-200 border-indigo-900' },
  { name: 'Nutty Nutella', color: '#451a03', visualClass: 'bg-amber-950 border-yellow-950' },
  { name: 'Twirky Twix', color: '#ca8a04', visualClass: 'bg-yellow-600 border-amber-950' },
];

export default function Customizer() {
  const { addToCart } = useCart();
  const [comboType, setComboType] = useState<'cookies' | 'gelato'>('cookies');
  const [slots, setSlots] = useState<(Flavor | null)[]>([null, null, null, null]);

  const activeFlavors = comboType === 'cookies' ? COOKIE_FLAVORS : GELATO_FLAVORS;
  const comboPrice = comboType === 'cookies' ? 599 : 799;
  const comboName = comboType === 'cookies' ? 'Four-ever Favs Box' : 'Scoop Squad Pack';

  const selectFlavor = (flavor: Flavor) => {
    const firstEmptyIndex = slots.indexOf(null);
    if (firstEmptyIndex !== -1) {
      const newSlots = [...slots];
      newSlots[firstEmptyIndex] = flavor;
      setSlots(newSlots);

      // Light confetti pop on completing the box
      if (firstEmptyIndex === 3) {
        confetti({
          particleCount: 40,
          spread: 40,
          origin: { y: 0.8 },
          colors: ['#3c2218', '#ebdccb', '#d97706'],
        });
      }
    }
  };

  const removeFlavor = (index: number) => {
    const newSlots = [...slots];
    newSlots[index] = null;
    setSlots(newSlots);
  };

  const handleAddComboToCart = () => {
    const selectedNames = slots
      .filter((s): s is Flavor => s !== null)
      .map((s) => s.name)
      .join(', ');

    addToCart({
      id: `combo-${comboType}-${Date.now()}`,
      name: comboName,
      price: comboPrice,
      type: 'combo',
      details: `Contains: ${selectedNames}`,
    });

    // Epic confetti blast
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#3c2218', '#ebdccb', '#d97706'],
    });

    // Reset slots
    setSlots([null, null, null, null]);
  };

  const isFull = slots.every((s) => s !== null);
  const itemsCount = slots.filter((s) => s !== null).length;

  return (
    <section id="customize" className="w-full max-w-7xl mx-auto px-4 py-20 md:px-8">
      {/* Neo-brutalist customizer box */}
      <div className="relative w-full bg-cream-warm border-4 border-brown-dark rounded-3xl p-6 md:p-12 shadow-[12px_12px_0px_0px_rgba(60,34,24,1)] overflow-hidden">
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brown-default/5 rounded-full blur-3xl pointer-events-none" />

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
          <span className="inline-flex items-center gap-1 bg-brown-dark text-cream-light font-display text-xs font-black px-4 py-1.5 rounded-full tracking-widest uppercase mb-4 shadow-[2px_2px_0px_0px_rgba(60,34,24,1)]">
            <Sparkles className="w-3.5 h-3.5 text-accent" /> BUNDLE & SAVE
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-brown-dark tracking-tight uppercase leading-tight mb-4">
            BUILD YOUR DREAM BOX
          </h2>
          <p className="font-medium text-brown-light leading-relaxed">
            Mix and match your absolute favorites. Stacking flavors gets you gourmet vibes + sweet savings. Perfect for sharing (or keeping all to yourself).
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative z-10">
          
          {/* Controls Panel */}
          <div className="flex flex-col justify-between bg-white border-2 border-brown-dark rounded-2xl p-6 md:p-8">
            
            {/* Step 1: Choose Type */}
            <div>
              <span className="text-[10px] font-black text-brown-light tracking-widest uppercase block mb-3">
                STEP 1: SELECT BUNDLE VIBE
              </span>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => {
                    setComboType('cookies');
                    setSlots([null, null, null, null]);
                  }}
                  className={`flex items-center justify-center gap-2 py-4 rounded-xl border-2 font-display font-black text-sm tracking-wide transition-all ${
                    comboType === 'cookies'
                      ? 'bg-brown-dark text-cream-light border-brown-dark shadow-[3px_3px_0px_0px_rgba(217,119,6,1)]'
                      : 'bg-cream-light text-brown-dark border-brown-dark/20 hover:border-brown-dark'
                  }`}
                >
                  <Box className="w-4 h-4" />
                  COOKIE BOX (₹599)
                </button>
                <button
                  onClick={() => {
                    setComboType('gelato');
                    setSlots([null, null, null, null]);
                  }}
                  className={`flex items-center justify-center gap-2 py-4 rounded-xl border-2 font-display font-black text-sm tracking-wide transition-all ${
                    comboType === 'gelato'
                      ? 'bg-brown-dark text-cream-light border-brown-dark shadow-[3px_3px_0px_0px_rgba(217,119,6,1)]'
                      : 'bg-cream-light text-brown-dark border-brown-dark/20 hover:border-brown-dark'
                  }`}
                >
                  <IceCream className="w-4 h-4" />
                  SCOOP SQUAD (₹799)
                </button>
              </div>

              {/* Step 2: Choose Flavors */}
              <span className="text-[10px] font-black text-brown-light tracking-widest uppercase block mb-3">
                STEP 2: ADD FLAVORS ({itemsCount}/4)
              </span>
              <div className="flex flex-col gap-3 mb-8">
                {activeFlavors.map((flavor, index) => (
                  <button
                    key={index}
                    onClick={() => selectFlavor(flavor)}
                    disabled={isFull}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 border-brown-dark bg-cream-light hover:bg-cream-warm transition-all text-left ${
                      isFull ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5 active:translate-y-0'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 border-brown-dark ${flavor.visualClass}`} />
                      <span className="font-display font-bold text-brown-dark text-sm uppercase">
                        {flavor.name}
                      </span>
                    </div>
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brown-dark text-cream-light">
                      <Plus className="w-3.5 h-3.5" />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Clear slots button */}
            {itemsCount > 0 && (
              <button
                onClick={() => setSlots([null, null, null, null])}
                className="flex items-center justify-center gap-1.5 font-display font-bold text-xs text-red-500 hover:text-red-700 transition-colors py-2"
              >
                <Trash2 className="w-4 h-4" />
                EMPTY SLOTS
              </button>
            )}
          </div>

          {/* Visualization Stack Panel */}
          <div className="flex flex-col justify-between items-center bg-white border-2 border-brown-dark rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <span className="text-[10px] font-black text-brown-light tracking-widest uppercase absolute top-6 left-6">
              YOUR COMBO BOX
            </span>

            {/* Box Stack Area */}
            <div className="flex-1 w-full flex flex-col items-center justify-center py-12 relative min-h-[300px]">
              
              {/* If no items added */}
              {itemsCount === 0 ? (
                <div className="text-center flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full border-4 border-dashed border-brown-light/20 flex items-center justify-center text-brown-light/40 animate-pulse">
                    <Plus className="w-8 h-8" />
                  </div>
                  <p className="font-display font-black text-xs text-brown-light tracking-widest uppercase">
                    CHOOSE ITEMS TO START STACKING
                  </p>
                </div>
              ) : (
                <div className="relative flex flex-col-reverse items-center justify-center w-full max-w-[200px]">
                  
                  {/* Procedural stack representation */}
                  {slots.map((slot, index) => {
                    if (!slot) return null;
                    const offset = index * 24; // overlapping stack effect
                    const scale = 1 - index * 0.04;
                    const zIndex = 10 + index;
                    
                    return (
                      <div
                        key={index}
                        onClick={() => removeFlavor(index)}
                        style={{
                          transform: `translateY(-${offset}px) scale(${scale})`,
                          zIndex: zIndex,
                        }}
                        className={`w-full group/slot cursor-pointer transition-all duration-300 ${
                          comboType === 'cookies'
                            ? 'h-16 rounded-full shadow-[4px_4px_0px_0px_rgba(60,34,24,1)]'
                            : 'h-20 rounded-t-full rounded-b-md border-x-4 border-t-4 border-b-2 border-brown-dark shadow-[2px_2px_0px_0px_rgba(60,34,24,0.15)]'
                        } border-4 border-brown-dark flex items-center justify-center text-center px-4 relative ${slot.visualClass}`}
                      >
                        {/* Remove hover display */}
                        <div className="absolute inset-0 bg-red-600/90 rounded-full md:rounded-t-full hidden group-hover/slot:flex items-center justify-center text-white font-display font-black text-xs tracking-wider z-20">
                          <Trash2 className="w-4 h-4 mr-1.5" /> REMOVE
                        </div>
                        <span className="font-display font-black text-xs md:text-sm text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] uppercase tracking-wide">
                          {slot.name}
                        </span>
                      </div>
                    );
                  })}
                  
                  {/* Shadow base / box tray */}
                  <div className={`w-[110%] h-4 bg-brown-dark/25 rounded-full filter blur-xs -mt-1 relative transition-all duration-300 ${itemsCount > 0 ? 'opacity-100' : 'opacity-0'}`} />
                </div>
              )}
            </div>

            {/* CTA action button */}
            <div className="w-full pt-6 border-t-2 border-dashed border-brown-dark/20 flex flex-col items-center gap-4">
              <div className="w-full flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-black text-brown-light tracking-widest uppercase">
                    COMBO SAVINGS
                  </span>
                  <p className="font-display font-bold text-xs text-emerald-600">
                    SAVE OVER 20%
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black text-brown-light tracking-widest uppercase">
                    TOTAL PRICE
                  </span>
                  <p className="font-display font-black text-2xl text-brown-dark">
                    ₹{comboPrice}
                  </p>
                </div>
              </div>

              <button
                disabled={!isFull}
                onClick={handleAddComboToCart}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-display font-black text-sm tracking-widest transition-all uppercase border-2 border-brown-dark shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] ${
                  isFull
                    ? 'bg-accent text-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] cursor-pointer'
                    : 'bg-cream-dark text-brown-light/40 shadow-none border-brown-dark/20 cursor-not-allowed opacity-60'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                ADD COMBO TO BAG
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
