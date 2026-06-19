"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { CartProvider } from '../components/CartContext';
import Navbar from '../components/Navbar';
import ThreeDCanvas from '../components/ThreeDCanvas';
import InteractiveTicker from '../components/InteractiveTicker';
import ProductCard, { Product } from '../components/ProductCard';
import Customizer from '../components/Customizer';
import Cart from '../components/Cart';
import { Sparkles, MapPin, ArrowRight, ShieldCheck, Flame, Star, Coffee } from 'lucide-react';

import { PRODUCTS_DATA } from '../data/products';

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'cookie' | 'gelato' | 'other'>('all');

  const filteredProducts = PRODUCTS_DATA.filter((p) => filter === 'all' || p.type === filter);


  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-cream-default text-brown-dark relative overflow-x-hidden selection:bg-accent selection:text-white">

        {/* Floating navbar */}
        <Navbar />

        {/* Hero Section */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

          {/* Hero Content Left */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
            <span className="inline-flex items-center gap-1 bg-brown-dark text-cream-light font-display text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase shadow-[3px_3px_0px_0px_rgba(217,119,6,1)]">
              <Sparkles className="w-3.5 h-3.5 text-accent animate-spin-slow" /> SLOW CHURNED • OVEN FRESH
            </span>

            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-brown-dark tracking-tight leading-[1.05] uppercase">
              CRAVE THE <br className="hidden sm:inline" />
              <span className="relative inline-block text-accent">
                CHUNK
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-brown-dark rounded" />
              </span>
              . VIBE THE <br className="hidden sm:inline" />
              <span className="bg-brown-dark text-cream-light px-4 py-1 inline-block rotate-[-2deg] rounded-lg shadow-[4px_4px_0px_0px_rgba(217,119,6,1)]">
                SCOOP
              </span>
              .
            </h1>

            <p className="font-medium text-lg leading-relaxed text-brown-light max-w-lg">
              Say hello to Delhi NCR&apos;s wildest cookie and gelato drop. NYC-style chunky cookies baked daily, and Italian gelatos crafted in small, slow-churned batches. 100% Eggless. High Vibe.
            </p>


            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#menu"
                className="flex items-center justify-center gap-2 h-14 px-8 bg-accent text-white font-display font-black text-sm tracking-widest rounded-2xl border-2 border-brown-dark shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] active:translate-y-0 text-center"
              >
                EXPLORE FLAVORS
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#customize"
                className="flex items-center justify-center gap-2 h-14 px-8 bg-cream-warm text-brown-dark font-display font-black text-sm tracking-widest rounded-2xl border-2 border-brown-dark shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] active:translate-y-0 text-center"
              >
                BUILD A COMBO BOX
              </a>
            </div>
          </div>

          {/* Hero 3D Canvas Right */}
          <div className="relative w-full flex items-center justify-center">
            {/* Soft backdrop blur decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
            <ThreeDCanvas />
          </div>
        </main>

        {/* Ticker banner */}
        <div className="mt-12 md:mt-20">
          <InteractiveTicker />
        </div>

        {/* Category: Pick your treat Section */}
        <section className="max-w-7xl mx-auto w-full px-4 py-16 md:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 animate-in fade-in slide-in-from-top-4 duration-300">
            <span className="inline-flex items-center gap-1.5 bg-brown-dark text-cream-light font-display text-[10px] font-black px-3.5 py-1.5 rounded-full tracking-widest uppercase shadow-[2.5px_2.5px_0px_0px_rgba(217,119,6,1)] mb-4">
              🧁 CHOOSE YOUR VIBE
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-brown-dark tracking-tight uppercase leading-none">
              Pick your treat
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1: Cookies */}
            <a href="/category/cookie" className="group bg-white border-4 border-brown-dark rounded-[32px] p-6 shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[9px_9px_0px_0px_rgba(60,34,24,1)] transition-all flex flex-col gap-6 overflow-hidden">
              <div className="relative w-full aspect-[4/3] rounded-2xl border-2 border-brown-dark overflow-hidden bg-cream-warm shadow-[3px_3px_0px_0px_rgba(60,34,24,0.1)]">
                <Image
                  src="/category_cookies.png"
                  alt="Ameeco Cookies Category"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display font-black text-2xl text-brown-dark uppercase tracking-tight flex items-center justify-between">
                  Cookies
                  <span className="text-[10px] font-black bg-accent text-white px-2 py-0.5 rounded border border-brown-dark uppercase tracking-wider shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,0.15)]">100% EGGLESS</span>
                </h3>
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  NYC-style chunky cookies, 100% eggless and freshly baked
                </p>
              </div>
            </a>

            {/* Category 2: Gelato */}
            <a href="/category/gelato" className="group bg-white border-4 border-brown-dark rounded-[32px] p-6 shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[9px_9px_0px_0px_rgba(60,34,24,1)] transition-all flex flex-col gap-6 overflow-hidden">
              <div className="relative w-full aspect-[4/3] rounded-2xl border-2 border-brown-dark overflow-hidden bg-cream-warm shadow-[3px_3px_0px_0px_rgba(60,34,24,0.1)]">
                <Image
                  src="/category_gelato.png"
                  alt="Ameeco Gelato Category"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display font-black text-2xl text-brown-dark uppercase tracking-tight flex items-center justify-between">
                  Gelato
                  <span className="text-[10px] font-black bg-brown-dark text-cream-light px-2 py-0.5 rounded border border-brown-dark uppercase tracking-wider">SLOW CHURNED</span>
                </h3>
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  Small-batch, slow churned authentic Italian gelato.
                </p>
              </div>
            </a>

            {/* Category 3: Other Treats */}
            <a href="/category/other" className="group bg-white border-4 border-brown-dark rounded-[32px] p-6 shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[9px_9px_0px_0px_rgba(60,34,24,1)] transition-all flex flex-col gap-6 overflow-hidden">
              <div className="relative w-full aspect-[4/3] rounded-2xl border-2 border-brown-dark overflow-hidden bg-cream-warm shadow-[3px_3px_0px_0px_rgba(60,34,24,0.1)]">
                <Image
                  src="/category_other.png"
                  alt="Ameeco Other Treats Category"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display font-black text-2xl text-brown-dark uppercase tracking-tight flex items-center justify-between">
                  Other Treats
                  <span className="text-[10px] font-black bg-accent text-white px-2 py-0.5 rounded border border-brown-dark uppercase tracking-wider shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,0.15)]">Crookie</span>
                </h3>
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  Crookie
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="max-w-7xl mx-auto w-full px-4 py-24 md:px-8">

          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-brown-dark tracking-tight uppercase leading-none mb-6">
              Flavour item
            </h2>
            <p className="font-medium text-brown-light leading-relaxed">
              Explore our core catalog. Everything is vegetarian, 100% eggless, and handcrafted daily with premium cocoa and organic fruit bases.
            </p>
 
            {/* Filter controls */}
            <div className="flex flex-wrap justify-center gap-2 mt-8 bg-cream-warm border border-brown-dark/20 p-1.5 rounded-2xl w-fit mx-auto">
              <button
                onClick={() => setFilter('all')}
                className={`px-5 py-2.5 rounded-xl font-display font-black text-xs tracking-wider transition-all uppercase ${filter === 'all'
                    ? 'bg-brown-dark text-cream-light'
                    : 'text-brown-light hover:text-brown-dark'
                  }`}
              >
                ALL CHEWS & SCOOPS
              </button>
              <button
                onClick={() => setFilter('cookie')}
                className={`px-5 py-2.5 rounded-xl font-display font-black text-xs tracking-wider transition-all uppercase ${filter === 'cookie'
                    ? 'bg-brown-dark text-cream-light'
                    : 'text-brown-light hover:text-brown-dark'
                  }`}
              >
                NYC COOKIES 🍪
              </button>
              <button
                onClick={() => setFilter('gelato')}
                className={`px-5 py-2.5 rounded-xl font-display font-black text-xs tracking-wider transition-all uppercase ${filter === 'gelato'
                    ? 'bg-brown-dark text-cream-light'
                    : 'text-brown-light hover:text-brown-dark'
                  }`}
              >
                ITALIAN GELATO 🍧
              </button>
              <button
                onClick={() => setFilter('other')}
                className={`px-5 py-2.5 rounded-xl font-display font-black text-xs tracking-wider transition-all uppercase ${filter === 'other'
                    ? 'bg-brown-dark text-cream-light'
                    : 'text-brown-light hover:text-brown-dark'
                  }`}
              >
                OTHER TREATS 🥐
              </button>
            </div>
          </div>

          {/* Product grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Ticker banner divider */}
        <InteractiveTicker />

        {/* Box/Combo Builder Customizer */}
        <Customizer />

        {/* Reasons To Love Us Section */}
        <section className="bg-cream-warm border-y-4 border-brown-dark py-24 px-4 md:px-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brown-default/5 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
            <span className="inline-flex items-center gap-1 bg-brown-dark text-cream-light font-display text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase shadow-[2.5px_2.5px_0px_0px_rgba(217,119,6,1)] mb-4">
              💖 BEHIND THE SWEETS
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-brown-dark tracking-tight uppercase leading-none mb-4">
              Reasons To Love Us
            </h2>
            <p className="font-display font-bold text-lg text-accent uppercase tracking-wide">
              we are a fun, playful brand but we take our desserts very seriously!
            </p>
          </div>

          {/* Cards Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">

            {/* Card 1 */}
            <div className="bg-white border-2 border-brown-dark rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] transition-all flex flex-col justify-between min-h-[180px] group">
              <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform w-fit">🥄</span>
              <div>
                <h3 className="font-display font-black text-sm text-brown-dark uppercase tracking-wide mb-1.5">
                  Made in Small Batches
                </h3>
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  We keep it small so it stays special. More care, better flavour, happier desserts.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-brown-dark rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] transition-all flex flex-col justify-between min-h-[180px] group">
              <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform w-fit">✈️</span>
              <div>
                <h3 className="font-display font-black text-sm text-brown-dark uppercase tracking-wide mb-1.5">
                  Global Flavours, Local Love
                </h3>
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  Inspired by Italy & NYC, crafted locally for you. International flavours, made fresh.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-2 border-brown-dark rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] transition-all flex flex-col justify-between min-h-[180px] group">
              <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform w-fit">🌾</span>
              <div>
                <h3 className="font-display font-black text-sm text-brown-dark uppercase tracking-wide mb-1.5">
                  Real Ingredients Only
                </h3>
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  No shortcuts, no weird stuff. Just honest ingredients and flavours that taste real.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border-2 border-brown-dark rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] transition-all flex flex-col justify-between min-h-[180px] group">
              <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform w-fit">🤗</span>
              <div>
                <h3 className="font-display font-black text-sm text-brown-dark uppercase tracking-wide mb-1.5">
                  Handcrafted Like a Warm Hug
                </h3>
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  Made with real technique, patience, and a whole lot of love. Comforting, indulgent.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white border-2 border-brown-dark rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] transition-all flex flex-col justify-between min-h-[180px] group">
              <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform w-fit">🚫🥚</span>
              <div>
                <h3 className="font-display font-black text-sm text-brown-dark uppercase tracking-wide mb-1.5">
                  100% Eggless Always
                </h3>
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  Completely eggless without compromising on texture, richness, or joy. Desserts for everyone.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white border-2 border-brown-dark rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] transition-all flex flex-col justify-between min-h-[180px] group">
              <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform w-fit">👩‍🍳</span>
              <div>
                <h3 className="font-display font-black text-sm text-brown-dark uppercase tracking-wide mb-1.5">
                  Founder-Led & Heart-Made
                </h3>
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  Built by a pastry chef obsessed with perfecting every scoop. Every flavour has a story.
                </p>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-white border-2 border-brown-dark rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] transition-all flex flex-col justify-between min-h-[180px] group">
              <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform w-fit">🎀</span>
              <div>
                <h3 className="font-display font-black text-sm text-brown-dark uppercase tracking-wide mb-1.5">
                  Cute on the Outside
                </h3>
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  From pink packaging to handwritten notes, we make you smile before the first bite.
                </p>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-white border-2 border-brown-dark rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] transition-all flex flex-col justify-between min-h-[180px] group">
              <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform w-fit">👥</span>
              <div>
                <h3 className="font-display font-black text-sm text-brown-dark uppercase tracking-wide mb-1.5">
                  Community First
                </h3>
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  You&apos;re not just a customer – you&apos;re an Ameeco bestie! We love our community.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Brand Vibe Section (Bento grid setup) */}
        <section id="story" className="max-w-7xl mx-auto w-full px-4 py-20 md:px-8 border-t-2 border-dashed border-brown-dark/20">

          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl text-brown-dark tracking-tight uppercase mb-4">
              WHY WE ARE DIFFERENT
            </h2>
            <p className="font-medium text-brown-light leading-relaxed">
              We don&apos;t do boring desserts. No compromises, no chemical stabilizers, and absolutely no eggs. Just pure premium indulgence.
            </p>
          </div>

          {/* Bento grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Bento Card 1 */}
            <div className="bg-white border-2 border-brown-dark rounded-3xl p-8 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] min-h-[260px] group hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center border border-brown-dark/15 text-2xl group-hover:scale-110 transition-transform">
                🥚
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-brown-dark uppercase mb-2">
                  100% EGGLESS
                </h3>
                <p className="text-sm font-medium text-brown-light leading-relaxed">
                  Every single item on our menu is egg-free. Same rich gooey texture, zero compromises.
                </p>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="bg-white border-2 border-brown-dark rounded-3xl p-8 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] min-h-[260px] group hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center border border-brown-dark/15 text-2xl group-hover:scale-110 transition-transform">
                🍫
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-brown-dark uppercase mb-2">
                  NYC-STYLE CHUNKS
                </h3>
                <p className="text-sm font-medium text-brown-light leading-relaxed">
                  No flat biscuits allowed. Our cookies weigh over 120g, offering giant molten chocolate cores.
                </p>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="bg-white border-2 border-brown-dark rounded-3xl p-8 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] min-h-[260px] group hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center border border-brown-dark/15 text-2xl group-hover:scale-110 transition-transform">
                🍦
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-brown-dark uppercase mb-2">
                  SLOW CHURNED
                </h3>
                <p className="text-sm font-medium text-brown-light leading-relaxed">
                  Italian gelato churned in small batches at low speed to limit air inclusion. Thick and creamy texture only.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Redesigned Footer */}
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
              {/* Sticker badge */}
              <div className="mt-2 bg-accent text-white border border-brown-dark font-display font-black text-[9px] px-3 py-1.5 rounded-full tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]">
                🍪 GET THE VIBES DELIVERED
              </div>
              {/* Social Links */}
              <div className="flex flex-wrap gap-2 mt-4 text-[9px] font-black uppercase tracking-wider select-none">
                <a href="#" className="bg-cream-light text-brown-dark border border-brown-dark px-2.5 py-1.5 rounded-lg hover:bg-accent hover:text-white transition-colors">Instagram</a>
                <a href="#" className="bg-cream-light text-brown-dark border border-brown-dark px-2.5 py-1.5 rounded-lg hover:bg-accent hover:text-white transition-colors">Snapchat</a>
                <a href="#" className="bg-cream-light text-brown-dark border border-brown-dark px-2.5 py-1.5 rounded-lg hover:bg-accent hover:text-white transition-colors">X (Twitter)</a>
                <a href="#" className="bg-cream-light text-brown-dark border border-brown-dark px-2.5 py-1.5 rounded-lg hover:bg-accent hover:text-white transition-colors">Facebook</a>
                <a href="#" className="bg-cream-light text-brown-dark border border-brown-dark px-2.5 py-1.5 rounded-lg hover:bg-accent hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>

            {/* Links Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-display font-black text-xs uppercase tracking-widest text-cream-dark/40">
                NAVIGATION
              </h4>
              <div className="grid grid-cols-2 gap-3 font-display font-bold text-sm text-cream-dark/80">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <a href="/#menu" className="hover:text-white transition-colors">Order</a>
                <a href="/about" className="hover:text-white transition-colors">About Us</a>
                <a href="/gifting" className="hover:text-white transition-colors">Corporate Gifting</a>
                <a href="/contact" className="hover:text-white transition-colors">Contact Us</a>
                <a href="/work" className="hover:text-white transition-colors">Work With Us</a>
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

