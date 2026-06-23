"use client";

import React, { useRef, useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { ShoppingBag, RotateCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Flavor {
  id: string;
  name: string;
  emoji: string;
  pairing: string;
  color: string;
  textColor: string;
  price: number;
}

const GELATO_FLAVORS: Flavor[] = [
  { id: 'pistachio-stracciatella', name: 'Pistachio Stracciatella', emoji: '🍦', pairing: 'Brown Butter Cookie · Dark Espresso', color: '#b5dbcd', textColor: '#224035', price: 220 },
  { id: 'creme-brulee', name: 'Crème Brûlée', emoji: '🍮', pairing: 'Caramel Cookie · Praline Pecan', color: '#ebd49a', textColor: '#4d3b14', price: 220 },
  { id: 'berry-cheesy', name: 'Berry Cheesy', emoji: '🍇', pairing: 'Lemon Zest Tart · White Chocolate', color: '#c3b5db', textColor: '#2d1e45', price: 220 },
  { id: 'mango-sorbetto', name: 'Mango Sorbetto', emoji: '🥭', pairing: 'Vanilla Bean Scoop · Fresh Mint', color: '#ffecb3', textColor: '#5c4308', price: 220 },
  { id: 'salted-caramel', name: 'Salted Caramel', emoji: '🍯', pairing: 'Pretzel Chunks · Sea Salt Brownie', color: '#d2a679', textColor: '#482c0f', price: 220 },
  { id: 'dark-chocolate-fudge', name: 'Dark Chocolate Fudge', emoji: '🍫', pairing: 'Almond Brittle · Toasted Marshmallows', color: '#a18276', textColor: '#ffffff', price: 230 },
  { id: 'strawberry-basil', name: 'Strawberry Basil', emoji: '🍓', pairing: 'Shortbread Biscuit · Balsamic Glaze', color: '#f9c5d1', textColor: '#5a222e', price: 220 },
  { id: 'mint-choco-chip', name: 'Mint Choco Chip', emoji: '🌱', pairing: 'Fudge Sauce · Chocolate Wafer Roll', color: '#a3d9c9', textColor: '#193d33', price: 220 },
  { id: 'coconut-lime', name: 'Coconut Lime', emoji: '🥥', pairing: 'Pineapple Slices · Toasted Flakes', color: '#fafaf9', textColor: '#3c2218', price: 220 },
  { id: 'espresso-macchiato', name: 'Espresso Macchiato', emoji: '☕', pairing: 'Almond Biscotti · Warm Caramel Drizzle', color: '#dfbda7', textColor: '#4a250f', price: 220 },
  { id: 'cookie-cream', name: 'Cookie & Cream', emoji: '🍪', pairing: 'Fudge Cookie Crumbs · Chocolate Syrup', color: '#e5d9d5', textColor: '#3c2218', price: 220 },
  { id: 'dubai-kunafa-gelato', name: 'Dubai Kunafa', emoji: '🌟', pairing: 'Roasted Pistachios · Crispy Kadayif Crackle', color: '#ffe082', textColor: '#543b02', price: 250 }
];

export default function GelatoWheel() {
  const { addToCart } = useCart();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [rotation, setRotation] = useState(0); // in radians
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor>(GELATO_FLAVORS[0]);
  const [pointerTick, setPointerTick] = useState(false);

  // References to keep track of physics/animation values outside React render cycle
  const currentRotationRef = useRef(0);
  const spinVelocityRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(null);
  const lastTickIndexRef = useRef(0);

  // Constants
  const segmentsCount = GELATO_FLAVORS.length;
  const segmentAngle = (2 * Math.PI) / segmentsCount;

  // Draw the wheel onto the high-DPI canvas
  const drawWheel = (angle: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = canvas.width; // 760 for high-DPI
    const center = size / 2;
    const radius = center - 24;

    ctx.clearRect(0, 0, size, size);

    // Draw outer golden border with neo-brutalist shadow effect
    ctx.beginPath();
    ctx.arc(center, center, radius + 8, 0, 2 * Math.PI);
    ctx.fillStyle = '#3c2218'; // Dark chocolate outer boundary
    ctx.fill();

    ctx.beginPath();
    ctx.arc(center, center, radius + 4, 0, 2 * Math.PI);
    ctx.fillStyle = '#ebdccb'; // Creamy ring
    ctx.fill();

    // Draw segments
    for (let i = 0; i < segmentsCount; i++) {
      const flavor = GELATO_FLAVORS[i];
      const startAngle = angle + i * segmentAngle;
      const endAngle = angle + (i + 1) * segmentAngle;

      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = flavor.color;
      ctx.fill();

      // Subpixel divider lines
      ctx.strokeStyle = '#3c2218';
      ctx.lineWidth = 4;
      ctx.stroke();

    }

    // Draw central hub
    ctx.beginPath();
    ctx.arc(center, center, 65, 0, 2 * Math.PI);
    ctx.fillStyle = '#3c2218';
    ctx.fill();
    ctx.strokeStyle = '#ebdccb';
    ctx.lineWidth = 5;
    ctx.stroke();

    // Center emoji drawing
    ctx.save();
    ctx.translate(center, center);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '36px sans-serif';
    ctx.fillText('🍦', 0, 0);
    ctx.restore();
  };

  // Determine flavor pointing straight up (at angle -Math.PI / 2, i.e., 270 deg)
  const getSelectedFlavorIndex = (angle: number) => {
    // 1.5 * Math.PI is straight up.
    // We adjust by segmentAngle/2 to hit center of the segment.
    let targetAngle = (1.5 * Math.PI - angle) % (2 * Math.PI);
    if (targetAngle < 0) targetAngle += 2 * Math.PI;
    const index = Math.floor(targetAngle / segmentAngle) % segmentsCount;
    return index;
  };

  // Animate the wheel spinning with custom friction/easing
  const animateSpin = () => {
    if (spinVelocityRef.current < 0.002) {
      // Stopped
      setIsSpinning(false);
      
      // Final snap alignment
      const currentIdx = getSelectedFlavorIndex(currentRotationRef.current);
      setSelectedFlavor(GELATO_FLAVORS[currentIdx]);

      // Pop confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: [GELATO_FLAVORS[currentIdx].color, '#3c2218', '#d97706']
      });

      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
      return;
    }

    // Decay speed (friction)
    spinVelocityRef.current *= 0.985;
    currentRotationRef.current += spinVelocityRef.current;
    setRotation(currentRotationRef.current);

    // Calculate current pointer tick crossings
    const rawIndex = Math.floor((currentRotationRef.current) / (segmentAngle));
    if (rawIndex !== lastTickIndexRef.current) {
      lastTickIndexRef.current = rawIndex;
      setPointerTick(true);
      setTimeout(() => setPointerTick(false), 80);
    }


    drawWheel(currentRotationRef.current);
    animationFrameIdRef.current = requestAnimationFrame(animateSpin);
  };

  // Trigger spin trigger
  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    // Random spin target between 4 and 7 full rotations plus a random slice offset
    const force = 0.35 + Math.random() * 0.2; // initial velocity
    spinVelocityRef.current = force;
    lastTickIndexRef.current = Math.floor(currentRotationRef.current / segmentAngle);

    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
    }
    animateSpin();
  };

  // Add to cart helper
  const handleAddToCart = () => {
    addToCart({
      id: selectedFlavor.id,
      name: `${selectedFlavor.emoji} ${selectedFlavor.name} Gelato`,
      price: selectedFlavor.price,
      type: 'gelato',
      details: selectedFlavor.pairing
    });

    confetti({
      particleCount: 40,
      spread: 30,
      origin: { y: 0.85 },
      colors: ['#3c2218', '#d97706']
    });
  };

  // Draw initial state on component mount
  useEffect(() => {
    drawWheel(0);
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full bg-[#432317] border-y-4 border-brown-dark py-20 px-4 md:px-8 relative overflow-hidden flex flex-col items-center">
      {/* Background decoration blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10">
        
        {/* Eyebrow, Title & Sub */}
        <div className="text-center max-w-xl mx-auto mb-12 flex flex-col items-center">
          <span className="inline-flex items-center gap-1 bg-white/10 text-cream-light font-display text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase border border-white/10 mb-4">
            🍦 GELATO COLLECTION
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-none mb-4">
            Spin the Flavour Wheel
          </h2>
          <p className="font-medium text-white/70 leading-relaxed text-sm md:text-base px-4">
            Rotate to explore all 12 handcrafted gelato flavours. Click any to add to cart.
          </p>
        </div>

        {/* Wheel & Info Panel Grid */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 mt-4 max-w-5xl">
          
          {/* Wheel column */}
          <div className="relative flex items-center justify-center select-none cursor-pointer">
            
            {/* The Pointer at the top center */}
            <div 
              style={{
                transform: pointerTick ? 'translateX(-50%) rotate(-12deg)' : 'translateX(-50%) rotate(0deg)',
                transition: pointerTick ? 'none' : 'transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[28px] border-t-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] z-30" 
            />

            {/* Canvas Wheel container */}
            <div 
              onClick={spinWheel} 
              className={`relative rounded-full border-4 border-[#3c2218] p-1 bg-white/5 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99] shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${
                isSpinning ? 'pointer-events-none' : ''
              }`}
            >
              <canvas
                ref={canvasRef}
                width={760}
                height={760}
                className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full object-contain pointer-events-none"
              />
            </div>
            
            {/* Quick Helper Button under the wheel */}
            {!isSpinning && (
              <button 
                onClick={spinWheel}
                className="absolute bottom-[-16px] bg-white text-brown-dark border-2 border-brown-dark rounded-full p-2.5 shadow-[3px_3px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-0.5 active:translate-y-0 transition-transform z-20 flex items-center justify-center"
              >
                <RotateCw className="w-4 h-4 animate-spin-slow text-[#432317]" />
              </button>
            )}
          </div>

          {/* Info Card Column */}
          <div className="w-full max-w-sm flex-shrink-0 animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-[#29140c]/85 border-2 border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-[0_16px_36px_rgba(0,0,0,0.4)] flex flex-col gap-6 text-center lg:text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

              {/* Flavor text display */}
              <div className="flex flex-col gap-2">
                <span className="font-display font-black text-[10px] tracking-widest text-accent uppercase">
                  ACTIVE FLAVOUR
                </span>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="text-4xl filter drop-shadow-md select-none">{selectedFlavor.emoji}</span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none">
                    {selectedFlavor.name}
                  </h3>
                </div>
              </div>

              {/* Pairing description */}
              <div className="flex flex-col gap-1.5 border-t border-white/10 pt-4 text-left">
                <span className="font-display font-black text-[9px] tracking-widest text-white/40 uppercase">
                  👉 SWEET PAIRINGS
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white/80 leading-relaxed">
                  ✨ Pairs with: <span className="text-accent">{selectedFlavor.pairing}</span>
                </p>
              </div>

              {/* Pricing & Add to Cart button */}
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex justify-between items-center px-1">
                  <span className="text-xs font-black text-white/50 tracking-wider uppercase">PRICE</span>
                  <span className="font-display font-black text-xl text-white">₹{selectedFlavor.price}</span>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  disabled={isSpinning}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-display font-black text-xs tracking-widest transition-all uppercase border-2 border-brown-dark shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] ${
                    isSpinning
                      ? 'bg-white/10 text-white/30 border-white/5 shadow-none pointer-events-none opacity-50'
                      : 'bg-white text-brown-dark hover:bg-cream-warm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] cursor-pointer'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart +
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
