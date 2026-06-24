"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartProvider } from '../components/CartContext';
import Navbar from '../components/Navbar';
import InteractiveTicker from '../components/InteractiveTicker';
import ProductCard from '../components/ProductCard';
import GelatoWheel from '../components/GelatoWheel';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import { ArrowRight } from 'lucide-react';

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
        <section className="relative w-full min-h-screen bg-[#432317] text-white pt-24 md:pt-28 pb-8 px-4 md:px-8 border-b-4 border-brown-dark overflow-hidden flex flex-col items-center justify-center">
          {/* Background image related to the website (blended with opacity under the color cover) */}
          <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
            <Image
              src="/hero_dessert.png"
              alt="Dessert Background"
              fill
              className="object-cover opacity-15"
              priority
            />
          </div>
          {/* Subtle background crumbs pattern / vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#582f20]/95 to-[#29140c]/95 opacity-95 z-0" />
          
          {/* Floating crumb particle decorations */}
          <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-amber-950/40 rounded-full blur-[1px] animate-float-slow z-0" />
          <div className="absolute top-[70%] left-[8%] w-4 h-4 bg-amber-950/30 rounded-full blur-[1.5px] animate-float-slow z-0" />
          <div className="absolute top-[15%] right-[15%] w-4 h-4 bg-amber-950/35 rounded-full blur-[1.5px] animate-float-slow z-0" />
          <div className="absolute top-[80%] right-[12%] w-3 h-3 bg-amber-950/50 rounded-full blur-[1px] animate-float-slow z-0" />
          
          <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col items-center justify-between relative z-10 py-6">
            
            {/* Top Content: Heading, Subtitle, CTA buttons */}
            <div className="flex flex-col items-center w-full">
              {/* Massive Heading */}
              <div className="w-full flex justify-center mt-6">
                <h1 className="font-serif-luxury font-bold italic text-[12vw] md:text-[9vw] lg:text-[8.5vw] leading-none tracking-tight flex items-center justify-center gap-1.5 md:gap-3.5 select-none relative">
                  <span 
                    className="animate-letter-float bg-gradient-to-b from-orange-200 via-orange-400 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(249,115,22,0.4)] select-none"
                    style={{ animationDelay: '0ms' }}
                  >
                    A
                  </span>
                  <span 
                    className="animate-letter-float text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] select-none"
                    style={{ animationDelay: '150ms' }}
                  >
                    M
                  </span>
                  <span 
                    className="animate-letter-float text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] select-none"
                    style={{ animationDelay: '300ms' }}
                  >
                    E
                  </span>
                  <span 
                    className="animate-letter-float text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] select-none"
                    style={{ animationDelay: '450ms' }}
                  >
                    E
                  </span>
                  <span 
                    className="animate-letter-float bg-gradient-to-b from-orange-200 via-orange-400 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(249,115,22,0.4)] select-none"
                    style={{ animationDelay: '600ms' }}
                  >
                    C
                  </span>
                  {/* The Cookie replacing the O */}
                  <div 
                    className="animate-letter-float relative w-[13vw] h-[13vw] md:w-[10.5vw] md:h-[10.5vw] lg:w-[9.5vw] lg:h-[9.5vw] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-4 border-white/5 shrink-0 select-none mx-[-1%] z-10 transition-transform duration-300 hover:scale-105"
                    style={{ animationDelay: '750ms' }}
                  >
                    <Image
                      src="/cookie_hero.png"
                      alt="O"
                      fill
                      className="object-cover scale-105"
                      priority
                    />
                  </div>
                </h1>
              </div>

              {/* Subtitle text */}
              <p className="font-display font-black text-xs md:text-sm lg:text-base tracking-[0.25em] md:tracking-[0.35em] text-white/95 mt-6 uppercase text-center max-w-2xl px-4 drop-shadow-md">
                Freshly Baked Goodness in Every Bite
              </p>

              {/* Rich Brand Description */}
              <p className="text-xs md:text-sm text-white/70 font-semibold text-center max-w-xl mt-4 px-6 leading-relaxed">
                Indulge in Delhi NCR&apos;s ultimate dessert experience. Handcrafting 100% eggless NYC-style chunky cookies and slow-churned Italian gelatos daily with premium Belgian cocoa and organic ingredients.
              </p>

              {/* Styled Highlight Badges */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-6 select-none max-w-2xl px-4">
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/90 text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase">
                  🌱 100% Eggless
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/90 text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase">
                  🍫 Belgian Cocoa
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/90 text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase">
                  🥣 Handcrafted Daily
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/90 text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase">
                  🚫 No Preservatives
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-row items-center gap-4 mt-8 md:mt-10">
                <Link
                  href="#menu"
                  className="flex items-center justify-center h-12 px-8 bg-white text-[#432317] font-display font-black text-xs tracking-widest rounded-full hover:bg-cream-warm hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all"
                >
                  Menu
                </Link>
                <Link
                  href="#menu"
                  className="flex items-center justify-center h-12 px-8 bg-transparent text-white border border-white/80 font-display font-black text-xs tracking-widest rounded-full hover:bg-white/15 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  Order Now
                </Link>
              </div>
            </div>


            {/* Bottom preview grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full mt-12 md:mt-16 border-t border-white/10 pt-8">
              
              {/* Card 1: Chocolate Cookie */}
              <div className="flex items-center gap-4 bg-white/[0.03] border border-white/5 rounded-2xl p-4 backdrop-blur-md hover:bg-white/[0.06] transition-colors">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10">
                  <Image
                    src="/Untitleddesign_13_c5e422f6-8d48-4a20-82e3-ef496b61daae.jpg.jpeg"
                    alt="Chocolate Cookie"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-black text-sm text-white uppercase tracking-wide">
                    Chocolate Cookie
                  </span>
                  <span className="text-[10px] text-white/60 font-semibold mt-1 leading-relaxed">
                    Rich, soft, and packed with real chocolate chunks.
                  </span>
                </div>
              </div>

              {/* Card 2: Dubai Kunafa Gelato */}
              <div className="flex items-center gap-4 bg-white/[0.03] border border-white/5 rounded-2xl p-4 backdrop-blur-md hover:bg-white/[0.06] transition-colors">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10">
                  <Image
                    src="/category_gelato.png"
                    alt="Dubai Kunafa Gelato"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-black text-sm text-white uppercase tracking-wide">
                    Dubai Kunafa Gelato
                  </span>
                  <span className="text-[10px] text-white/60 font-semibold mt-1 leading-relaxed">
                    Creamy gelato swirled with crispy pistachio & kunafa crackle.
                  </span>
                </div>
              </div>

              {/* Card 3: Butter Cookie */}
              <div className="flex items-center gap-4 bg-white/[0.03] border border-white/5 rounded-2xl p-4 backdrop-blur-md hover:bg-white/[0.06] transition-colors">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10">
                  <Image
                    src="/Toffee_trouble_3.jpg.jpeg"
                    alt="Butter Cookie"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-black text-sm text-white uppercase tracking-wide">
                    Butter Cookie
                  </span>
                  <span className="text-[10px] text-white/60 font-semibold mt-1 leading-relaxed">
                    Light, crisp, and melt-in-your-mouth buttery goodness.
                  </span>
                </div>
              </div>

            </div>

            {/* Relocated Scroll Down Indicator */}
            <div className="flex flex-col items-center gap-2 mt-8 z-20">
              <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1 cursor-pointer hover:border-white/50 transition-colors">
                <div className="w-1 h-1.5 bg-white rounded-full animate-bounce" />
              </div>
              <span className="text-[9px] text-white/40 tracking-widest font-black uppercase text-center">
                Scroll down for more information
              </span>
            </div>

          </div>
        </section>

        {/* Ticker banner */}
        <InteractiveTicker />


        {/* Category: Pick your treat Section */}
        <section id="categories" className="relative w-full py-24 px-4 md:px-8 overflow-hidden bg-dot-grid">
          {/* Ambient section glows behind layout */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header block with elegant typography pairing */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 bg-brown-dark text-cream-light font-display text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase shadow-[2.5px_2.5px_0px_0px_rgba(217,119,6,1)] mb-4 animate-bounce">
                🧁 CHOOSE YOUR VIBE
              </span>
              <h2 className="flex flex-col gap-1 items-center justify-center">
                <span className="font-serif-luxury italic text-3xl md:text-4xl text-accent tracking-wide leading-none capitalize">
                  Indulge in Delhi NCR's Finest
                </span>
                <span className="font-display font-black text-5xl md:text-6xl text-brown-dark tracking-tight uppercase leading-none mt-2">
                  Pick your treat
                </span>
              </h2>
              <div className="w-16 h-1 bg-accent/40 rounded-full mx-auto mt-6" />
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {/* Category 1: Cookies */}
              <Link
                href="/category/cookie"
                className="group relative bg-white/70 hover:bg-white backdrop-blur-md border border-brown-dark/10 rounded-[32px] p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(60,34,24,0.15)] flex flex-col gap-6 overflow-hidden hover:border-amber-500/30"
              >
                {/* Background glow specific to Cookie theme */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Squircle Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-cream-warm border border-brown-dark/5 shadow-[0_8px_16px_rgba(60,34,24,0.03)] group-hover:shadow-[0_12px_24px_rgba(60,34,24,0.08)] transition-all duration-500">
                  <Image
                    src="/category_cookies.png"
                    alt="Ameeco Cookies Category"
                    fill
                    className="object-cover scale-100 group-hover:scale-108 group-hover:rotate-1 transition-transform duration-700 ease-out"
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Floating tags */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 bg-white/95 backdrop-blur-md text-amber-800 font-display text-[9px] font-black px-3 py-1 rounded-full border border-amber-200/50 shadow-sm uppercase tracking-wider">
                    🍪 100% EGGLESS
                  </span>
                </div>

                <div className="flex flex-col flex-1 justify-between gap-4 relative z-10">
                  <div>
                    <h3 className="font-display font-black text-2xl text-brown-dark uppercase tracking-tight flex items-center justify-between group-hover:text-accent transition-colors duration-300">
                      Cookies
                    </h3>
                    <p className="text-xs font-semibold text-brown-light leading-relaxed mt-2">
                      NYC-style chunky cookies. Soft-baked, giant, gooey centers, and loaded to the brim with Belgian chocolates.
                    </p>
                  </div>
                  
                  {/* Footer metadata: bestselling item & arrow */}
                  <div className="flex items-center justify-between border-t border-brown-dark/5 pt-4 mt-2">
                    <span className="text-[10px] font-bold text-brown-light/60">
                      Try: <span className="text-brown-dark font-extrabold group-hover:text-accent transition-colors">OG Chocochunk</span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-cream-warm group-hover:bg-accent text-brown-dark group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Category 2: Gelato */}
              <Link
                href="/category/gelato"
                className="group relative bg-white/70 hover:bg-white backdrop-blur-md border border-brown-dark/10 rounded-[32px] p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(60,34,24,0.15)] flex flex-col gap-6 overflow-hidden hover:border-pink-500/30"
              >
                {/* Background glow specific to Gelato theme */}
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Squircle Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-cream-warm border border-brown-dark/5 shadow-[0_8px_16px_rgba(60,34,24,0.03)] group-hover:shadow-[0_12px_24px_rgba(60,34,24,0.08)] transition-all duration-500">
                  <Image
                    src="/category_gelato.png"
                    alt="Ameeco Gelato Category"
                    fill
                    className="object-cover scale-100 group-hover:scale-108 group-hover:rotate-1 transition-transform duration-700 ease-out"
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Floating tags */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 bg-white/95 backdrop-blur-md text-pink-800 font-display text-[9px] font-black px-3 py-1 rounded-full border border-pink-200/50 shadow-sm uppercase tracking-wider">
                    🍧 SLOW CHURNED
                  </span>
                </div>

                <div className="flex flex-col flex-1 justify-between gap-4 relative z-10">
                  <div>
                    <h3 className="font-display font-black text-2xl text-brown-dark uppercase tracking-tight flex items-center justify-between group-hover:text-accent transition-colors duration-300">
                      Gelato
                    </h3>
                    <p className="text-xs font-semibold text-brown-light leading-relaxed mt-2">
                      Authentic Italian gelato. Slowly churned in small batches with local milk, organic fruits, and no preservatives.
                    </p>
                  </div>
                  
                  {/* Footer metadata: bestselling item & arrow */}
                  <div className="flex items-center justify-between border-t border-brown-dark/5 pt-4 mt-2">
                    <span className="text-[10px] font-bold text-brown-light/60">
                      Try: <span className="text-brown-dark font-extrabold group-hover:text-accent transition-colors">Dubai Kunafa</span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-cream-warm group-hover:bg-accent text-brown-dark group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Category 3: Other Treats */}
              <Link
                href="/category/other"
                className="group relative bg-white/70 hover:bg-white backdrop-blur-md border border-brown-dark/10 rounded-[32px] p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(60,34,24,0.15)] flex flex-col gap-6 overflow-hidden hover:border-orange-500/30"
              >
                {/* Background glow specific to Other theme */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Squircle Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-cream-warm border border-brown-dark/5 shadow-[0_8px_16px_rgba(60,34,24,0.03)] group-hover:shadow-[0_12px_24px_rgba(60,34,24,0.08)] transition-all duration-500">
                  <Image
                    src="/category_other.png"
                    alt="Ameeco Other Treats Category"
                    fill
                    className="object-cover scale-100 group-hover:scale-108 group-hover:rotate-1 transition-transform duration-700 ease-out"
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Floating tags */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 bg-white/95 backdrop-blur-md text-orange-800 font-display text-[9px] font-black px-3 py-1 rounded-full border border-orange-200/50 shadow-sm uppercase tracking-wider">
                    🥐 VIRAL SPECIAL
                  </span>
                </div>

                <div className="flex flex-col flex-1 justify-between gap-4 relative z-10">
                  <div>
                    <h3 className="font-display font-black text-2xl text-brown-dark uppercase tracking-tight flex items-center justify-between group-hover:text-accent transition-colors duration-300">
                      Other Treats
                    </h3>
                    <p className="text-xs font-semibold text-brown-light leading-relaxed mt-2">
                      Home of our viral special creations, featuring the Delhi-famous flaky French Crookie baked with cookie dough.
                    </p>
                  </div>
                  
                  {/* Footer metadata: bestselling item & arrow */}
                  <div className="flex items-center justify-between border-t border-brown-dark/5 pt-4 mt-2">
                    <span className="text-[10px] font-bold text-brown-light/60">
                      Try: <span className="text-brown-dark font-extrabold group-hover:text-accent transition-colors">The Crookie</span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-cream-warm group-hover:bg-accent text-brown-dark group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="max-w-7xl mx-auto w-full px-4 py-24 md:px-8 relative">
          {/* Subtle background glows */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-brown-default/5 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
            <h2 className="flex flex-col gap-1 items-center justify-center">
              <span className="font-serif-luxury italic text-2xl md:text-3xl text-accent tracking-wide block mb-1">
                Delhi NCR's Sweetest Cravings
              </span>
              <span className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-brown-dark tracking-tight uppercase leading-none mt-2">
                Flavour Atelier
              </span>
            </h2>
            <p className="font-semibold text-sm text-brown-light/80 leading-relaxed max-w-xl mx-auto mt-6">
              Explore our core catalog. Everything is vegetarian, 100% eggless, and handcrafted daily with premium Belgian cocoa and organic fruit bases.
            </p>
 
            {/* Filter controls */}
            <div className="flex flex-wrap justify-center gap-2 mt-10 bg-cream-warm/80 backdrop-blur-md border border-brown-dark/10 p-1.5 rounded-2xl w-fit mx-auto shadow-sm">
              <button
                onClick={() => setFilter('all')}
                className={`px-5 py-2.5 rounded-xl font-display font-black text-xs tracking-wider transition-all duration-300 uppercase relative cursor-pointer ${filter === 'all'
                    ? 'bg-brown-dark text-cream-light shadow-md scale-105'
                    : 'text-brown-light hover:text-brown-dark hover:bg-brown-dark/5'
                  }`}
              >
                ALL SCOOPS & BITES ✨
              </button>
              <button
                onClick={() => setFilter('cookie')}
                className={`px-5 py-2.5 rounded-xl font-display font-black text-xs tracking-wider transition-all duration-300 uppercase relative cursor-pointer ${filter === 'cookie'
                    ? 'bg-brown-dark text-cream-light shadow-md scale-105'
                    : 'text-brown-light hover:text-brown-dark hover:bg-brown-dark/5'
                  }`}
              >
                NYC COOKIES 🍪
              </button>
              <button
                onClick={() => setFilter('gelato')}
                className={`px-5 py-2.5 rounded-xl font-display font-black text-xs tracking-wider transition-all duration-300 uppercase relative cursor-pointer ${filter === 'gelato'
                    ? 'bg-brown-dark text-cream-light shadow-md scale-105'
                    : 'text-brown-light hover:text-brown-dark hover:bg-brown-dark/5'
                  }`}
              >
                ITALIAN GELATO 🍧
              </button>
              <button
                onClick={() => setFilter('other')}
                className={`px-5 py-2.5 rounded-xl font-display font-black text-xs tracking-wider transition-all duration-300 uppercase relative cursor-pointer ${filter === 'other'
                    ? 'bg-brown-dark text-cream-light shadow-md scale-105'
                    : 'text-brown-light hover:text-brown-dark hover:bg-brown-dark/5'
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

        {/* Gelato Collection Spin Wheel Section */}
        <GelatoWheel />

        {/* Redesigned Footer */}
        <Footer />

        {/* Slide-out cart drawer */}
        <Cart />

      </div>
    </CartProvider>
  );
}

