"use client";

import React, { useState } from 'react';
import { useCart, CartItem } from './CartContext';
import { Plus, Flame, Check, Info } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  type: 'cookie' | 'gelato';
  calories: number;
  badge?: string;
  color: string; // Tailored gradient color style
  accentColor: string; // Text/border matching color
  visual: 'og_cookie' | 'red_velvet' | 'chocolate_lava' | 'pecan' | 'biscoff' | 'kunafa' | 'berry_cheesy' | 'nutella' | 'twix';
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      type: product.type,
      details: product.type === 'cookie' ? '100% Eggless Chunky Cookie' : 'Small-Batch Slow-Churned Gelato',
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  // Render procedural CSS shapes for visual representations
  const renderVisual = () => {
    switch (product.visual) {
      case 'og_cookie':
        return (
          <div className="relative w-36 h-36 rounded-full bg-amber-700/80 border-4 border-brown-dark shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] flex items-center justify-center animate-float-slow">
            {/* Chocolate chips */}
            <div className="absolute top-6 left-8 w-4 h-3 rounded-full bg-brown-dark rotate-12" />
            <div className="absolute top-12 right-6 w-3 h-4 rounded-full bg-brown-dark -rotate-45" />
            <div className="absolute bottom-6 left-12 w-5 h-3 rounded-full bg-brown-dark rotate-45" />
            <div className="absolute bottom-12 right-8 w-4 h-4 rounded-full bg-brown-dark" />
            <div className="absolute top-16 left-16 w-3.5 h-3 rounded-full bg-brown-dark -rotate-12" />
          </div>
        );
      case 'red_velvet':
        return (
          <div className="relative w-36 h-36 rounded-full bg-rose-700 border-4 border-brown-dark shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] flex items-center justify-center animate-float-slow">
            {/* White chocolate chips & Cream cheese cracks */}
            <div className="absolute top-6 left-8 w-4 h-3.5 rounded-full bg-amber-50" />
            <div className="absolute top-14 right-8 w-3.5 h-3.5 rounded-full bg-rose-400" />
            <div className="absolute bottom-8 left-12 w-5 h-4 rounded-full bg-amber-50" />
            <div className="absolute bottom-14 right-14 w-4 h-4 rounded-full bg-amber-50" />
            <div className="absolute top-16 right-5 w-4 h-3 rounded-full bg-rose-950" />
          </div>
        );
      case 'chocolate_lava':
        return (
          <div className="relative w-36 h-36 rounded-full bg-yellow-950 border-4 border-brown-dark shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] flex items-center justify-center animate-float-slow">
            {/* Molten center representation */}
            <div className="w-16 h-16 rounded-full bg-amber-950 border-2 border-dashed border-brown-light/40 flex items-center justify-center animate-pulse">
              <div className="w-8 h-8 rounded-full bg-black/60 filter blur-xs" />
            </div>
            {/* Outer chips */}
            <div className="absolute top-4 left-10 w-3 h-3 rounded-full bg-black" />
            <div className="absolute bottom-6 right-10 w-4.5 h-3 rounded-full bg-black" />
          </div>
        );
      case 'pecan':
        return (
          <div className="relative w-36 h-36 rounded-full bg-amber-800 border-4 border-brown-dark shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] flex items-center justify-center animate-float-slow">
            {/* Pecans & Toffee bits */}
            <div className="absolute top-6 left-8 w-6 h-3 rounded-xl bg-amber-950 rotate-45" />
            <div className="absolute top-12 right-6 w-5 h-2.5 rounded-xl bg-amber-950 -rotate-12" />
            <div className="absolute bottom-6 left-12 w-5 h-3 rounded-xl bg-amber-900 rotate-90" />
            <div className="absolute bottom-12 right-8 w-4 h-4 rounded-sm bg-yellow-400 rotate-12" /> {/* Toffee */}
            <div className="absolute top-16 left-14 w-3.5 h-3.5 rounded-sm bg-yellow-400 -rotate-45" />
          </div>
        );
      case 'biscoff':
        return (
          <div className="relative w-36 h-36 rounded-full bg-amber-600 border-4 border-brown-dark shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] flex items-center justify-center animate-float-slow">
            {/* Biscoff details */}
            <div className="w-14 h-10 rounded-md bg-amber-900 border border-brown-dark flex items-center justify-center rotate-12 shadow-sm">
              <span className="text-[7px] font-black text-amber-50 tracking-tighter">BISCOFF</span>
            </div>
            <div className="absolute top-4 left-6 w-3 h-3 rounded-full bg-amber-950" />
            <div className="absolute bottom-4 right-8 w-4 h-4 rounded-full bg-amber-50" />
          </div>
        );
      case 'kunafa':
        return (
          <div className="relative w-32 h-36 flex flex-col items-center justify-end animate-float-slow">
            {/* Scoops */}
            <div className="relative w-24 h-24 rounded-full bg-yellow-500/80 border-4 border-brown-dark shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] z-10 flex items-center justify-center overflow-hidden">
              {/* Crunchy Kunafa shreds */}
              <div className="absolute w-28 h-1 bg-amber-950 rotate-45 top-4" />
              <div className="absolute w-28 h-0.5 bg-yellow-900 -rotate-12 top-10" />
              <div className="absolute w-28 h-1 bg-yellow-800 rotate-12 top-16" />
            </div>
            {/* Cup */}
            <div className="w-20 h-16 bg-cream-light border-x-4 border-b-4 border-brown-dark rounded-b-xl -mt-4 z-0 flex flex-col items-center justify-center overflow-hidden">
              <div className="w-full h-3 bg-accent" />
              <div className="w-full flex justify-around py-1.5">
                <div className="w-1 h-8 bg-brown-dark/20 rounded" />
                <div className="w-1 h-8 bg-brown-dark/20 rounded" />
                <div className="w-1 h-8 bg-brown-dark/20 rounded" />
              </div>
            </div>
          </div>
        );
      case 'berry_cheesy':
        return (
          <div className="relative w-32 h-36 flex flex-col items-center justify-end animate-float-slow">
            {/* Scoops */}
            <div className="relative w-24 h-24 rounded-full bg-purple-200 border-4 border-brown-dark shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] z-10 overflow-hidden">
              {/* Blueberry compote swirls */}
              <div className="absolute w-12 h-12 rounded-full bg-indigo-900/60 filter blur-xs -top-2 -left-2" />
              <div className="absolute w-16 h-10 rounded-full bg-indigo-950/70 filter blur-xs bottom-4 right-1" />
              <div className="absolute w-8 h-8 rounded-full bg-indigo-900/80 filter blur-xs top-8 left-8" />
            </div>
            {/* Cup */}
            <div className="w-20 h-16 bg-cream-light border-x-4 border-b-4 border-brown-dark rounded-b-xl -mt-4 z-0 flex flex-col items-center justify-center overflow-hidden">
              <div className="w-full h-3 bg-accent" />
              <div className="w-full flex justify-around py-1.5">
                <div className="w-1 h-8 bg-brown-dark/20 rounded" />
                <div className="w-1 h-8 bg-brown-dark/20 rounded" />
                <div className="w-1 h-8 bg-brown-dark/20 rounded" />
              </div>
            </div>
          </div>
        );
      case 'nutella':
        return (
          <div className="relative w-32 h-36 flex flex-col items-center justify-end animate-float-slow">
            {/* Scoops */}
            <div className="relative w-24 h-24 rounded-full bg-amber-950 border-4 border-brown-dark shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] z-10 overflow-hidden">
              {/* Nutella swirls & nuts */}
              <div className="absolute top-4 left-6 w-3 h-3 rounded-full bg-amber-500" />
              <div className="absolute bottom-6 right-8 w-4 h-4 rounded-full bg-black" />
              <div className="absolute top-10 right-4 w-2 h-2 rounded-full bg-amber-400" />
            </div>
            {/* Cup */}
            <div className="w-20 h-16 bg-cream-light border-x-4 border-b-4 border-brown-dark rounded-b-xl -mt-4 z-0 flex flex-col items-center justify-center overflow-hidden">
              <div className="w-full h-3 bg-accent" />
              <div className="w-full flex justify-around py-1.5">
                <div className="w-1 h-8 bg-brown-dark/20 rounded" />
                <div className="w-1 h-8 bg-brown-dark/20 rounded" />
                <div className="w-1 h-8 bg-brown-dark/20 rounded" />
              </div>
            </div>
          </div>
        );
      case 'twix':
        return (
          <div className="relative w-32 h-36 flex flex-col items-center justify-end animate-float-slow">
            {/* Scoops */}
            <div className="relative w-24 h-24 rounded-full bg-yellow-600 border-4 border-brown-dark shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] z-10 overflow-hidden flex items-center justify-center">
              {/* Twix biscuit blocks & caramel */}
              <div className="w-10 h-10 rounded-xs bg-amber-950 border border-brown-dark rotate-45 flex items-center justify-center shadow-xs">
                <span className="text-[6px] font-black text-yellow-50">TWIX</span>
              </div>
              <div className="absolute top-2 right-4 w-3.5 h-3.5 rounded-full bg-amber-800" />
              <div className="absolute bottom-3 left-4 w-4 h-4 rounded-full bg-yellow-500" />
            </div>
            {/* Cup */}
            <div className="w-20 h-16 bg-cream-light border-x-4 border-b-4 border-brown-dark rounded-b-xl -mt-4 z-0 flex flex-col items-center justify-center overflow-hidden">
              <div className="w-full h-3 bg-accent" />
              <div className="w-full flex justify-around py-1.5">
                <div className="w-1 h-8 bg-brown-dark/20 rounded" />
                <div className="w-1 h-8 bg-brown-dark/20 rounded" />
                <div className="w-1 h-8 bg-brown-dark/20 rounded" />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative bg-white border-2 border-brown-dark rounded-3xl p-6 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(60,34,24,1)] group ${
        showInfo ? 'ring-2 ring-accent' : ''
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
      <div className={`w-full h-44 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center p-4 mb-5 border border-brown-dark/15 overflow-hidden relative`}>
        {renderVisual()}
        <div className="absolute inset-0 bg-radial from-transparent to-black/5 pointer-events-none" />
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

      {/* Footer (Price & Add button) */}
      <div className="w-full flex items-center justify-between border-t-2 border-dashed border-brown-dark/20 pt-4 mt-auto">
        <div className="flex flex-col items-start">
          <span className="text-[10px] font-black uppercase text-brown-light tracking-widest">
            PRICE
          </span>
          <span className="font-display font-black text-xl text-brown-dark">
            ₹{product.price}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`flex items-center justify-center gap-1.5 font-display font-black text-xs px-4 py-3 rounded-xl border-2 border-brown-dark shadow-[3px_3px_0px_0px_rgba(60,34,24,1)] transition-all ${
            added
              ? 'bg-emerald-500 text-white translate-x-0.5 translate-y-0.5 shadow-[1px_1px_0px_0px_rgba(60,34,24,1)]'
              : 'bg-cream-warm hover:bg-accent hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] text-brown-dark'
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              <span>ADDED!</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              <span>ADD TO BAG</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
