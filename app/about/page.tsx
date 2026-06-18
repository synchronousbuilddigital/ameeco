"use client";

import React from 'react';
import { CartProvider } from '../../components/CartContext';
import Navbar from '../../components/Navbar';
import Cart from '../../components/Cart';
import Image from 'next/image';
import { Heart, Sparkles, ChefHat, Award, Globe, HelpCircle, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-cream-default text-brown-dark relative overflow-x-hidden selection:bg-accent selection:text-white">
        
        {/* Navigation */}
        <Navbar />

        {/* Hero Section / Motto */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1 bg-brown-dark text-cream-light font-display text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase shadow-[3px_3px_0px_0px_rgba(217,119,6,1)] mb-6">
              <Heart className="w-3.5 h-3.5 text-accent fill-accent animate-pulse" /> OUR MOTTO
            </span>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-brown-dark tracking-tight leading-[1.1] uppercase mb-6">
              Creating desserts that feel like a warm hug!
            </h1>
            <p className="font-display font-bold text-lg md:text-xl text-brown-light leading-relaxed max-w-2xl mx-auto italic">
              &ldquo;We believe life&apos;s too short to hold back on your favourite treat, it&apos;s meant to be savoured!&rdquo;
            </p>
          </div>

          {/* Large Quote Highlight */}
          <div className="bg-white border-4 border-brown-dark rounded-3xl p-8 md:p-12 text-center shadow-[8px_8px_0px_0px_rgba(60,34,24,1)] max-w-5xl mx-auto mb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
            <span className="text-5xl md:text-6xl text-accent font-display font-black block mb-4">“</span>
            <p className="font-display font-black text-2xl md:text-3xl text-brown-default leading-snug uppercase max-w-3xl mx-auto">
              At Ameeco, we are not just making desserts, we are creating memories & moments of pure happiness! One scoop and one bite at a time.
            </p>
            <span className="text-5xl md:text-6xl text-accent font-display font-black block mt-4 leading-none">”</span>
          </div>

          {/* Story & Philosophy Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-black text-3xl md:text-4xl text-brown-dark tracking-tight uppercase">
                OUR JOURNEY
              </h2>
              <p className="text-base font-semibold leading-relaxed text-brown-light">
                It all started as a dream to bring authentic Italian Gelato and Chunky NYC style cookies to our homeland. We turn nostalgic and familiar flavours into cookies and gelato, made for your inner child and adult cravings!
              </p>
              <p className="text-base font-semibold leading-relaxed text-brown-light">
                Our creations are meant for every occasion, from gifting to everyday indulgence for your cravings. We create desserts that are wholesome, unapologetic, gourmet and Indulgent.
              </p>
            </div>
            <div className="bg-cream-warm border-2 border-brown-dark p-8 rounded-3xl shadow-[5px_5px_0px_0px_rgba(60,34,24,1)] relative overflow-hidden flex flex-col justify-between min-h-[260px] rotate-[-1deg]">
              <Sparkles className="w-12 h-12 text-accent absolute top-6 right-6 opacity-30 animate-pulse" />
              <p className="font-display font-black text-xl md:text-2xl text-brown-dark leading-relaxed uppercase">
                &ldquo;We&apos;re the ones who you&apos;ve been waiting for all along. Hi, so glad we finally met!&rdquo;
              </p>
              <div className="mt-8 border-t-2 border-dashed border-brown-dark/20 pt-4">
                <span className="font-display font-black text-sm text-brown-default tracking-wide block">
                  — AMEECO
                </span>
                <span className="text-xs font-semibold text-brown-light tracking-wider block uppercase">
                  (your new dessert bestie)
                </span>
              </div>
            </div>
          </div>

          {/* Bento Vibe Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
            {/* OUR WORK Card */}
            <div className="bg-white border-2 border-brown-dark rounded-3xl p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] group hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between border-b border-brown-dark/15 pb-4 mb-6">
                <h3 className="font-display font-black text-xl text-brown-dark uppercase tracking-wide">
                  OUR WORK
                </h3>
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center border border-brown-dark/15 text-xl group-hover:scale-110 transition-transform">
                  🛠️
                </div>
              </div>
              <p className="text-sm font-semibold leading-relaxed text-brown-light mb-4">
                Ameeco blends comfort with craft. We&apos;re fun and playful at heart, but take our desserts very seriously. Every creation is crafted with care, intention, and refined techniques.
              </p>
              <div className="bg-cream-warm border border-brown-dark/20 p-4 rounded-xl text-xs font-bold text-brown-default">
                ✨ Made using top-notch imported machinery, all coming together to create consistently exceptional treats!
              </div>
            </div>

            {/* WHAT WE USE Card */}
            <div className="bg-white border-2 border-brown-dark rounded-3xl p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] group hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between border-b border-brown-dark/15 pb-4 mb-6">
                <h3 className="font-display font-black text-xl text-brown-dark uppercase tracking-wide">
                  WHAT WE USE
                </h3>
                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center border border-brown-dark/15 text-xl group-hover:scale-110 transition-transform">
                  🌾
                </div>
              </div>
              <p className="text-sm font-semibold leading-relaxed text-brown-light mb-4">
                Great desserts begin with great ingredients and we don&apos;t cut corners. For us, our quality is non-negotiable! Thoughtfully sourced from around the globe:
              </p>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-black text-brown-dark uppercase tracking-wide">
                <span className="bg-cream-warm px-2 py-1.5 rounded-lg border border-brown-dark/15">🍫 Belgian & Ecuador Cocoa</span>
                <span className="bg-cream-warm px-2 py-1.5 rounded-lg border border-brown-dark/15">🧂 UK Sea Salt Flakes</span>
                <span className="bg-cream-warm px-2 py-1.5 rounded-lg border border-brown-dark/15">🧈 Pure French Butter</span>
                <span className="bg-cream-warm px-2 py-1.5 rounded-lg border border-brown-dark/15">🌱 Kerala Vanilla Beans</span>
              </div>
              <p className="text-[11px] font-bold text-emerald-700 mt-4 italic">
                * Made without preservatives. Just honest ingredients.
              </p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="max-w-5xl mx-auto bg-white border-4 border-brown-dark rounded-3xl p-6 md:p-12 shadow-[8px_8px_0px_0px_rgba(60,34,24,1)] flex flex-col lg:flex-row gap-12 items-center mb-16">
            {/* Avatar Column */}
            <div className="w-full max-w-[280px] flex-shrink-0 flex flex-col items-center gap-4">
              <div className="relative w-full aspect-square rounded-[30px] border-4 border-brown-dark overflow-hidden bg-cream-warm shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] rotate-[-1deg]">
                <Image
                  src="/founder_ipsita.png"
                  alt="Iipsita, Pastry Chef & Founder"
                  fill
                  priority
                  className="object-cover"
                  sizes="280px"
                />
              </div>
              <div className="text-center">
                <span className="font-display font-black text-lg text-brown-dark block">
                  Iipsita
                </span>
                <span className="text-xs font-bold text-brown-light block uppercase tracking-wider">
                  Pastry Chef & Founder
                </span>
              </div>
            </div>

            {/* Bio Column */}
            <div className="flex-1 flex flex-col gap-6">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-accent text-white font-display text-[9px] font-black px-3.5 py-1 rounded-full tracking-widest uppercase mb-3 border border-brown-dark shadow-[1px_1px_0px_0px_rgba(60,34,24,1)]">
                  <ChefHat className="w-3 h-3 text-white" /> MEET THE FOUNDER
                </span>
                <h3 className="font-display font-black text-3xl md:text-4xl text-brown-dark tracking-tight uppercase leading-none">
                  Pastry Chef & Entrepreneur
                </h3>
              </div>

              <div className="flex flex-col gap-4 text-sm font-semibold leading-relaxed text-brown-light">
                <p>
                  Meet Iipsita, a foodie at heart, equally obsessed with eating desserts and creating them. Her baking journey began at just 12, when her first chocolate cake won over her family and sparked a lifelong passion.
                </p>
                <p>
                  To sharpen her craft, she studied at <strong className="text-brown-dark">Le Cordon Bleu</strong> in London, <strong className="text-brown-dark">Carpigiani University</strong> in Italy, and worked across global kitchens—from The Taj Mahal Palace in Mumbai to kitchens in the US.
                </p>
                <p>
                  During Covid, she launched a cloud kitchen, <strong className="text-brown-dark">Sucre Dreams</strong>, in her hometown Kanpur, where it quickly became a local favourite. The love and support gave her the push to dream bigger.
                </p>
                <p>
                  And finally set up, <strong className="text-brown-dark">Ameeco</strong>. Born in Gurgaon, built on passion, precision, and a whole lot of dessert love.
                </p>
              </div>

              {/* Badges details */}
              <div className="grid grid-cols-3 gap-3 border-t border-dashed border-brown-dark/25 pt-6 mt-2 text-center text-brown-dark">
                <div className="flex flex-col items-center gap-1">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-[9px] font-black uppercase tracking-wider leading-none">Le Cordon Bleu</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Globe className="w-5 h-5 text-accent" />
                  <span className="text-[9px] font-black uppercase tracking-wider leading-none">Carpigiani Italy</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Heart className="w-5 h-5 text-accent" />
                  <span className="text-[9px] font-black uppercase tracking-wider leading-none">Gurgaon Born</span>
                </div>
              </div>
            </div>
          </div>

        </main>

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
