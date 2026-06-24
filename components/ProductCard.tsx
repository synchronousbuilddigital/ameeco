"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from './CartContext';
import { Plus, Flame, Check, Info } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  type: 'cookie' | 'gelato' | 'other';
  calories: number;
  badge?: string;
  color: string; // Tailored gradient color style
  accentColor: string; // Text/border matching color
  visual: 'og_cookie' | 'red_velvet' | 'chocolate_lava' | 'pecan' | 'biscoff' | 'kunafa' | 'berry_cheesy' | 'nutella' | 'twix' | 'crookie';
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, buyNow } = useCart();
  const [added, setAdded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      type: product.type,
      details: product.type === 'cookie' ? '100% Eggless Chunky Cookie' : product.type === 'gelato' ? 'Small-Batch Slow-Churned Gelato' : 'Special Gourmet Treat',
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuyNow = () => {
    buyNow({
      id: product.id,
      name: product.name,
      price: product.price,
      type: product.type,
      details: product.type === 'cookie' ? '100% Eggless Chunky Cookie' : product.type === 'gelato' ? 'Small-Batch Slow-Churned Gelato' : 'Special Gourmet Treat',
    });
  };

  // Render public folder images inside a circular themed frame for visual representations
  const renderVisual = () => {
    let imgSrc = "";
    switch (product.visual) {
      case 'og_cookie':
        imgSrc = '/Untitleddesign_13_c5e422f6-8d48-4a20-82e3-ef496b61daae.jpg.jpeg';
        break;
      case 'red_velvet':
        imgSrc = '/Untitleddesign_14.jpg.jpeg';
        break;
      case 'chocolate_lava':
        imgSrc = '/Untitleddesign_19.jpg.jpeg';
        break;
      case 'pecan':
        imgSrc = '/Toffee_trouble_3.jpg.jpeg';
        break;
      case 'biscoff':
        imgSrc = '/Untitleddesign_12.jpg.jpeg';
        break;
      case 'kunafa':
        imgSrc = '/Rectangle_1_1.png';
        break;
      case 'berry_cheesy':
        imgSrc = '/Untitleddesign_10.jpg.jpeg';
        break;
      case 'nutella':
        imgSrc = '/Rectangle_1_1.png';
        break;
      case 'twix':
        imgSrc = '/Rectangle_1_1.png';
        break;
      case 'crookie':
        imgSrc = '/WhatsApp_Image_2026-02-27_at_1.09.23_PM.jpg.jpeg';
        break;
      default:
        return null;
    }

    return (
      <Image
        src={imgSrc}
        alt={product.name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-w-768px) 100vw, 33vw"
        priority={product.id === 'og-chocochunk' || product.id === 'dubai-kunafa'}
      />
    );
  };

  const getGradientBackground = () => {
    switch (product.type) {
      case 'cookie':
        return 'bg-gradient-to-br from-amber-50/40 via-white to-amber-100/10 hover:shadow-amber-500/5';
      case 'gelato':
        return 'bg-gradient-to-br from-rose-50/40 via-white to-pink-100/10 hover:shadow-pink-500/5';
      default:
        return 'bg-gradient-to-br from-orange-50/40 via-white to-orange-100/10 hover:shadow-orange-500/5';
    }
  };

  return (
    <div
      className={`relative border border-brown-dark/10 rounded-[28px] p-5 flex flex-col items-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(60,34,24,0.12)] group ${
        showInfo ? 'ring-2 ring-accent/30' : ''
      } ${getGradientBackground()}`}
    >
      {/* Badge tag */}
      {product.badge && (
        <span className="absolute top-4 left-4 bg-accent/90 backdrop-blur-md text-white font-display font-black text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 shadow-[0_4px_12px_rgba(217,119,6,0.15)] z-10">
          {product.badge}
        </span>
      )}

      {/* Info Button */}
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="absolute top-4 right-4 text-brown-dark/40 hover:text-accent hover:scale-110 transition-all p-1.5 bg-white/70 hover:bg-white backdrop-blur-sm rounded-full shadow-sm z-10 border border-brown-dark/5 cursor-pointer"
        aria-label="Product Information"
      >
        <Info className="w-4 h-4" />
      </button>

      {/* Visual Container */}
      <div className="relative w-full h-52 rounded-[24px] overflow-hidden bg-cream-warm border border-brown-dark/5 shadow-[0_6px_12px_rgba(60,34,24,0.03)] mb-5 group-hover:rounded-[32px] group-hover:shadow-[0_12px_24px_rgba(60,34,24,0.1)] transition-all duration-500">
        {renderVisual()}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Info Panel Overlap */}
      {showInfo && (
        <div className="absolute inset-4 bg-cream-warm/95 backdrop-blur-md border border-brown-dark/10 rounded-[24px] p-5 z-20 flex flex-col justify-between transition-all duration-300 ease-out shadow-lg">
          <div>
            <h4 className="font-display font-black text-brown-dark text-xs tracking-widest uppercase mb-3 flex items-center justify-between border-b border-brown-dark/10 pb-1.5">
              <span>Nutri Specs</span>
              <span className="text-[8px] font-black text-accent tracking-wider bg-accent/10 px-2 py-0.5 rounded">100% VEG</span>
            </h4>
            <div className="flex items-center gap-1.5 bg-brown-dark/5 text-brown-dark px-2.5 py-1.5 rounded-lg w-fit mb-4">
              <Flame className="w-3.5 h-3.5 text-accent animate-pulse" />
              <span className="text-xs font-black tracking-wide">{product.calories} kcal</span>
            </div>
            <p className="text-[11px] font-semibold leading-relaxed text-brown-light">
              Indulge without worry! This delicious treat is 100% vegetarian, eggless, and made with only high-quality natural ingredients. Hand-baked in small batches to preserve its rich textures.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="text-[8px] font-black bg-emerald-500/10 text-emerald-800 px-2.5 py-0.5 rounded border border-emerald-500/20 uppercase tracking-wider">🚫 Preservatives</span>
              <span className="text-[8px] font-black bg-amber-500/10 text-amber-800 px-2.5 py-0.5 rounded border border-amber-500/20 uppercase tracking-wider">🍫 Real Cocoa</span>
            </div>
          </div>
          <button
            onClick={() => setShowInfo(false)}
            className="w-full py-2.5 bg-brown-dark hover:bg-brown-default text-cream-light rounded-xl font-display text-[10px] font-black tracking-widest hover:-translate-y-0.5 active:translate-y-0 transition-all uppercase cursor-pointer"
          >
            CLOSE DETAILS
          </button>
        </div>
      )}

      {/* Title & Description */}
      <div className="w-full text-center flex-1 mb-5">
        <h3 className="font-display font-black text-xl text-brown-dark tracking-tight mb-2 uppercase group-hover:text-accent transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-xs font-semibold text-brown-light/80 leading-relaxed max-w-[240px] mx-auto">
          {product.description}
        </p>
      </div>

      {/* Footer (Price & Add/Buy buttons) */}
      <div className="w-full flex flex-col gap-4 border-t border-brown-dark/5 pt-4 mt-auto">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-start">
            <span className="text-[8px] font-black uppercase text-brown-light/60 tracking-wider">
              PRICE
            </span>
            <span className="font-display font-black text-xl text-brown-dark group-hover:text-accent transition-colors">
              ₹{product.price}
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[8px] font-black bg-cream-warm border border-brown-dark/10 px-3 py-1 rounded-full uppercase tracking-widest text-brown-dark/80">
            {product.type === 'cookie' ? '🍪 Cookie' : product.type === 'gelato' ? '🍧 Gelato' : '🥐 Treat'}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 w-full">
          <button
            onClick={handleAddToCart}
            disabled={added}
            className={`flex items-center justify-center gap-1.5 font-display font-black text-[9px] tracking-widest py-3 rounded-xl border transition-all duration-300 cursor-pointer ${
              added
                ? 'bg-emerald-500 text-white border-emerald-600 shadow-[0_4px_12px_rgba(16,185,129,0.3)]'
                : 'bg-cream-warm hover:bg-brown-dark border-brown-dark/10 text-brown-dark hover:text-cream-light shadow-sm hover:shadow-[0_8px_16px_rgba(60,34,24,0.1)] hover:-translate-y-0.5'
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>ADDED</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>ADD TO BAG</span>
              </>
            )}
          </button>

          <button
            onClick={handleBuyNow}
            className="flex items-center justify-center gap-1.5 bg-accent hover:bg-amber-600 text-white font-display font-black text-[9px] tracking-widest py-3 rounded-xl border border-accent/20 shadow-sm hover:shadow-[0_8px_16px_rgba(217,119,6,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer text-center animate-pulse-subtle"
          >
            <span>BUY NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
}
