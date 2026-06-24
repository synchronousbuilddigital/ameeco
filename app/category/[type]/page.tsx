"use client";

import React from 'react';
import Link from 'next/link';
import { CartProvider } from '../../../components/CartContext';
import Navbar from '../../../components/Navbar';
import Cart from '../../../components/Cart';
import ProductCard from '../../../components/ProductCard';
import Footer from '../../../components/Footer';
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



        </main>

        {/* Footer */}
        <Footer />

        {/* Slide-out cart drawer */}
        <Cart />

      </div>
    </CartProvider>
  );
}
