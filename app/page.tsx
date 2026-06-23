"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartProvider } from '../components/CartContext';
import Navbar from '../components/Navbar';
import InteractiveTicker from '../components/InteractiveTicker';
import ProductCard from '../components/ProductCard';
import Customizer from '../components/Customizer';
import GelatoWheel from '../components/GelatoWheel';
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
                <h1 className="font-display font-black text-[12vw] md:text-[9vw] lg:text-[8.5vw] leading-none tracking-tight flex items-center justify-center gap-1.5 md:gap-3.5 uppercase text-white select-none relative">
                  <span>A</span>
                  <span>M</span>
                  <span>E</span>
                  <span>E</span>
                  <span>C</span>
                  {/* The Cookie replacing the O */}
                  <div className="relative w-[13vw] h-[13vw] md:w-[10.5vw] md:h-[10.5vw] lg:w-[9.5vw] lg:h-[9.5vw] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-4 border-white/5 shrink-0 select-none mx-[-1%] z-10 transition-transform duration-300 hover:scale-105">
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

            {/* Customer Testimonial Proof */}
            <div className="w-full flex justify-center md:justify-end mt-12 md:mt-2 px-4 md:px-8">
              <div className="flex flex-col items-center md:items-end text-center md:text-right gap-1 bg-[#2e160e]/40 border border-white/5 p-3 rounded-2xl backdrop-blur-sm max-w-[240px]">
                <div className="flex items-center gap-1.5">
                  <div className="flex -space-x-1.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-6.5 h-6.5 rounded-full border-2 border-[#432317] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=faces" alt="user" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-6.5 h-6.5 rounded-full border-2 border-[#432317] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=faces" alt="user" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-6.5 h-6.5 rounded-full border-2 border-[#432317] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=faces" alt="user" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-6.5 h-6.5 rounded-full border-2 border-[#432317] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=faces" alt="user" />
                  </div>
                  <div className="w-6.5 h-6.5 rounded-full bg-white text-brown-dark flex items-center justify-center shadow-md cursor-pointer hover:bg-cream-warm transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-[#432317]" />
                  </div>
                </div>
                <p className="text-[10px] text-white/70 font-semibold tracking-wider uppercase mt-1 leading-normal">
                  Over 10,000+ cookie lovers served in Delhi & Gurgaon.
                </p>
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

              {/* Center Scroll Down Indicator */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1 cursor-pointer hover:border-white/50 transition-colors">
                  <div className="w-1 h-1.5 bg-white rounded-full animate-bounce" />
                </div>
                <span className="text-[9px] text-white/40 tracking-widest font-black uppercase text-center">
                  Scroll down for more information
                </span>
              </div>

              {/* Card 2: Butter Cookie */}
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

          </div>
        </section>

        {/* Ticker banner */}
        <InteractiveTicker />


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
            <Link href="/category/cookie" className="group bg-white border-4 border-brown-dark rounded-[32px] p-6 shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[9px_9px_0px_0px_rgba(60,34,24,1)] transition-all flex flex-col gap-6 overflow-hidden">
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
            </Link>

            {/* Category 2: Gelato */}
            <Link href="/category/gelato" className="group bg-white border-4 border-brown-dark rounded-[32px] p-6 shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[9px_9px_0px_0px_rgba(60,34,24,1)] transition-all flex flex-col gap-6 overflow-hidden">
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
            </Link>

            {/* Category 3: Other Treats */}
            <Link href="/category/other" className="group bg-white border-4 border-brown-dark rounded-[32px] p-6 shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[9px_9px_0px_0px_rgba(60,34,24,1)] transition-all flex flex-col gap-6 overflow-hidden">
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
            </Link>
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

        {/* Gelato Collection Spin Wheel Section */}
        <GelatoWheel />

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

