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

  return (
    <div
      className={`relative bg-white border-2 border-brown-dark rounded-3xl p-6 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(60,34,24,1)] group ${showInfo ? 'ring-2 ring-accent' : ''
        }`}
    >
      {/* Badge tag */}
      {product.badge && (
        <span className="absolute top-4 left-4 bg-accent text-white font-display font-black text-[10px] tracking-wider px-3 py-1 rounded-full border border-brown-dark shadow-[1px_1px_0px_0px_rgba(60,34,24,1)] uppercase">
          {product.badge}
        </span>
      )}

      {/* Info Button */}
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="absolute top-4 right-4 text-brown-dark/50 hover:text-brown-dark transition-colors p-1"
        aria-label="Product Information"
      >
        <Info className="w-5 h-5" />
      </button>

      {/* Visual Container */}
      <div className="w-full h-48 rounded-2xl border-2 border-brown-dark overflow-hidden relative mb-5 shadow-[3px_3px_0px_0px_rgba(60,34,24,1)]">
        {renderVisual()}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Info Panel Overlap */}
      {showInfo ? (
        <div className="absolute inset-x-4 top-24 bottom-24 bg-cream-warm border-2 border-brown-dark rounded-2xl p-4 z-20 flex flex-col justify-between animate-in zoom-in-95 duration-200">
          <div>
            <h4 className="font-display font-black text-brown-dark text-sm tracking-wide uppercase mb-1">
              Nutri Specs
            </h4>
            <div className="flex items-center gap-1 bg-brown-dark/10 text-brown-dark px-2 py-1 rounded-md w-fit mb-3">
              <Flame className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-bold">{product.calories} kcal</span>
            </div>
            <p className="text-xs font-medium leading-relaxed text-brown-light">
              This delicious treat is 100% vegetarian, eggless, and made with only high-quality natural ingredients. Hand-baked in small batches to preserve its rich textures.
            </p>
          </div>
          <button
            onClick={() => setShowInfo(false)}
            className="w-full py-1.5 bg-brown-dark text-cream-light rounded-lg font-display text-xs font-bold tracking-wider hover:bg-brown-default"
          >
            CLOSE DETAILS
          </button>
        </div>
      ) : null}

      {/* Title & Description */}
      <div className="w-full text-center flex-1 mb-5">
        <h3 className="font-display font-black text-xl md:text-2xl text-brown-dark tracking-tight mb-2 uppercase">
          {product.name}
        </h3>
        <p className="text-sm font-medium text-brown-light leading-relaxed max-w-[220px] mx-auto">
          {product.description}
        </p>
      </div>

      {/* Footer (Price & Add/Buy buttons) */}
      <div className="w-full flex flex-col gap-4 border-t-2 border-dashed border-brown-dark/20 pt-4 mt-auto">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-start">
            <span className="text-[9px] font-black uppercase text-brown-light tracking-widest">
              PRICE
            </span>
            <span className="font-display font-black text-xl text-brown-dark">
              ₹{product.price}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-[9px] font-black bg-brown-dark/5 text-brown-dark px-2.5 py-1 rounded border border-brown-dark/10 uppercase tracking-wider leading-none">
            {product.type === 'cookie' ? '🍪 Cookie' : product.type === 'gelato' ? '🍧 Gelato' : '🥐 Treat'}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 w-full">
          <button
            onClick={handleAddToCart}
            disabled={added}
            className={`flex items-center justify-center gap-1 font-display font-black text-[10px] tracking-wider py-2.5 rounded-xl border-2 border-brown-dark shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all ${added
                ? 'bg-emerald-500 text-white translate-x-0.5 translate-y-0.5 shadow-[1px_1px_0px_0px_rgba(60,34,24,1)]'
                : 'bg-cream-warm hover:bg-accent hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(60,34,24,1)] text-brown-dark'
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
            className="flex items-center justify-center gap-1 bg-accent text-white hover:bg-accent/90 font-display font-black text-[10px] tracking-wider py-2.5 rounded-xl border-2 border-brown-dark shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(60,34,24,1)] active:translate-y-0 transition-all text-center"
          >
            <span>BUY NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
}
