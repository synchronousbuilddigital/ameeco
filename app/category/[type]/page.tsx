"use client";

import React from 'react';
import Link from 'next/link';
import { CartProvider } from '../../../components/CartContext';
import Navbar from '../../../components/Navbar';
import Cart from '../../../components/Cart';
import ProductCard from '../../../components/ProductCard';
import { PRODUCTS_DATA } from '../../../data/products';
import { Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';

const CATEGORY_META = {
  cookie: {
    title: 'NYC Cookies',
    emoji: '🍪',
    badge: '100% Eggless & Gourmet',
    description: 'Thick, golden-baked, and loaded to the brim with flowing premium chocolates, toasted nuts, and custom spreads. Freshly baked daily in our Gurgaon oven.',
    gradient: 'from-amber-100 to-amber-200/40',
  },
  gelato: {
    title: 'Italian Gelato',
    emoji: '🍧',
    badge: 'Slow-Churned Creaminess',
    description: 'Authentic Italian style gelato crafted in small batches using premium organic dairy and fresh ingredients. Rich, dense, and slow-churned for the ultimate vibe.',
    gradient: 'from-yellow-100/50 to-yellow-200/40',
  },
  other: {
    title: 'Other Treats',
    emoji: '🥐',
    badge: 'Viral Innovations',
    description: 'From our famous gourmet Crookies (flaky French croissants baked with cookie dough) to seasonal specialties and secret dessert drops.',
    gradient: 'from-orange-100/50 to-orange-200/40',
  },
};

interface PageProps {
  params: Promise<{
    type: string;
  }>;
}

export default function CategoryPage({ params }: PageProps) {
  const { type } = React.use(params);
  
  // Normalize types: e.g. cookies -> cookie, gelatos -> gelato
  const normalizedType = type === 'cookies' ? 'cookie' : type === 'gelatos' ? 'gelato' : type === 'others' ? 'other' : type;
  const meta = CATEGORY_META[normalizedType as keyof typeof CATEGORY_META];

  if (!meta) {
    return (
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-cream-default text-brown-dark relative overflow-x-hidden selection:bg-accent selection:text-white font-sans">
          <Navbar />
          <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-24 md:px-8 relative z-10 flex flex-col items-center justify-center text-center gap-6">
            <span className="text-6xl">🔍</span>
            <h1 className="font-display font-black text-4xl uppercase text-brown-dark">Category Not Found</h1>
            <p className="text-sm font-semibold text-brown-light max-w-md">
              We couldn&apos;t find the sweet treats you are looking for. Explore our standard NYC cookies and slow-churned gelatos!
            </p>
            <Link href="/" className="px-6 py-3.5 bg-brown-dark text-cream-light font-display font-black text-xs tracking-widest rounded-xl border-2 border-brown-dark shadow-[4px_4px_0px_0px_rgba(217,119,6,1)] hover:-translate-y-0.5 transition-transform uppercase">
              Back to Home
            </Link>
          </main>
          <Cart />
        </div>
      </CartProvider>
    );
  }

  const filteredProducts = PRODUCTS_DATA.filter((p) => p.type === normalizedType);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-cream-default text-brown-dark relative overflow-x-hidden selection:bg-accent selection:text-white font-sans">
        
        {/* Floating Navbar */}
        <Navbar />

        {/* Dynamic Category Hero Section */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 pt-28 pb-12 md:pt-36 md:px-8 relative z-10">
          
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/#menu"
              className="inline-flex items-center gap-2 text-xs font-black tracking-wider uppercase text-brown-light hover:text-brown-dark transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK TO MENU
            </Link>
          </div>

          {/* Heading block */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 bg-brown-dark text-cream-light font-display text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase shadow-[3px_3px_0px_0px_rgba(217,119,6,1)] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent animate-spin-slow" /> {meta.badge}
            </span>
            <h1 className="font-display font-black text-5xl md:text-6xl text-brown-dark tracking-tight leading-[1.05] uppercase mb-6 flex items-center justify-center gap-3">
              <span>{meta.title}</span>
              <span className="text-4xl md:text-5xl">{meta.emoji}</span>
            </h1>
            <p className="font-medium text-base md:text-lg text-brown-light leading-relaxed max-w-2xl mx-auto">
              {meta.description}
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Customized Combo Promo Banner */}
          <div className="bg-white border-4 border-brown-dark rounded-[32px] p-8 md:p-12 text-center shadow-[8px_8px_0px_0px_rgba(60,34,24,1)] max-w-4xl mx-auto mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
            <span className="inline-flex items-center gap-1.5 bg-accent text-white font-display text-[9px] font-black px-3.5 py-1 rounded-full tracking-widest uppercase mb-4 border border-brown-dark shadow-[1.5px_1.5px_0px_0px_rgba(60,34,24,1)]">
              🎁 COMBO VIBES
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-brown-dark tracking-tight uppercase mb-4 leading-none">
              BUILD A CUSTOM COMBO BOX
            </h2>
            <p className="text-sm font-semibold text-brown-light leading-relaxed max-w-xl mx-auto mb-6">
              Can&apos;t settle on just one flavor? Mix and match your favorite cookies and gelatos into a custom combo box of 4, 6, or 12 to unlock special discounts!
            </p>
            <Link
              href="/#customize"
              className="inline-flex items-center gap-2 h-12 px-8 bg-brown-dark hover:bg-brown-default text-cream-light font-display font-black text-xs tracking-widest rounded-xl border-2 border-brown-dark shadow-[4px_4px_0px_0px_rgba(217,119,6,1)] hover:-translate-y-0.5 active:translate-y-0 transition-transform uppercase cursor-pointer"
            >
              LAUNCH BOX CUSTOMIZER
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </main>

        {/* Footer */}
        <footer className="bg-brown-dark text-cream-light py-16 px-6 md:px-12 border-t-4 border-brown-dark relative overflow-hidden">
          {/* Giant watermark background */}
          <div className="absolute inset-0 flex flex-col justify-around select-none pointer-events-none overflow-hidden z-0 py-8 opacity-[0.03] md:opacity-[0.04]">
            <div className="whitespace-nowrap font-display font-black text-[18vw] leading-none uppercase tracking-tighter text-cream-light translate-x-[-15%] select-none">
              ameeco ameeco
            </div>
            <div className="whitespace-nowrap font-display font-black text-[18vw] leading-none uppercase tracking-tighter text-cream-light translate-x-[20%] select-none">
              ameeco ameeco
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 border-b border-cream-light/10 pb-12">
            {/* Branding Column */}
            <div className="flex flex-col items-start gap-4">
              <span className="font-display font-black text-4xl tracking-tight text-cream-light uppercase">
                ameeco<span className="text-accent text-4xl">.</span>
              </span>
              <p className="text-sm text-cream-dark/70 font-semibold leading-relaxed max-w-xs">
                Slow-churned gourmet gelato and 100% eggless chunky cookies baked fresh daily in Delhi NCR.
              </p>
              <div className="mt-2 bg-accent text-white border border-brown-dark font-display font-black text-[9px] px-3 py-1.5 rounded-full tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]">
                🍪 GET THE VIBES DELIVERED
              </div>
            </div>

            {/* Links Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-display font-black text-xs uppercase tracking-widest text-cream-dark/40">
                NAVIGATION
              </h4>
              <div className="grid grid-cols-2 gap-3 font-display font-bold text-sm text-cream-dark/80">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <Link href="/#menu" className="hover:text-white transition-colors">Order</Link>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                <Link href="/work" className="hover:text-white transition-colors">Work With Us</Link>
              </div>
            </div>

            {/* Info Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-display font-black text-xs uppercase tracking-widest text-cream-dark/40">
                DELIVERY ZONE & HOURS
              </h4>
              <p className="text-sm font-semibold text-cream-dark/80 leading-relaxed">
                📍 Gurugram & New Delhi NCR<br />
                ⏰ Delivering Daily: 10:00 AM - 12:00 AM<br />
                💬 Whatsapp Support: +91 99999 99999
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[10px] font-black tracking-widest text-cream-dark/40 uppercase relative z-10">
            <span>© {new Date().getFullYear()} AMEECO DESSERTS. ALL RIGHTS RESERVED.</span>
            <span>MADE WITH 💖 IN GURUGRAM, DELHI NCR</span>
          </div>
        </footer>

        {/* Slide-out cart drawer */}
        <Cart />

      </div>
    </CartProvider>
  );
}
