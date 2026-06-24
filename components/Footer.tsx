"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Send, 
  Heart, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative w-full bg-gradient-to-br from-[#29140c] via-[#1a0c07] to-[#120805] text-cream-light pt-20 pb-10 px-6 md:px-12 border-t border-white/5 overflow-hidden font-sans">
      {/* Subtle Dot Grid Background Pattern inside footer */}
      <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
      
      {/* Ambient background light glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Giant watermark background */}
      <div className="absolute inset-x-0 bottom-6 flex flex-col justify-around select-none pointer-events-none overflow-hidden z-0 opacity-[0.02] md:opacity-[0.03]">
        <div className="whitespace-nowrap font-display font-black text-[20vw] leading-none uppercase tracking-tighter text-cream-light translate-x-[-10%]">
          ameeco ameeco
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10 border-b border-white/5 pb-16">
        
        {/* Brand Column */}
        <div className="flex flex-col items-start gap-5">
          <span className="font-display font-black text-4xl tracking-tight text-cream-light uppercase">
            ameeco<span className="text-accent text-4xl leading-none">.</span>
          </span>
          <p className="text-xs font-semibold text-cream-dark/65 leading-relaxed max-w-xs">
            Handcrafting Delhi NCR&apos;s ultimate dessert experiences. Slow-churned, small-batch Italian gelatos & 100% eggless NYC cookies, baked fresh daily.
          </p>
          
          {/* Email Subscription Form */}
          <div className="w-full max-w-xs mt-2">
            <h5 className="text-[10px] font-black tracking-widest text-accent uppercase mb-2">JOIN THE SWEET CLUB</h5>
            {subscribed ? (
              <div className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-2 rounded-xl animate-in fade-in duration-200">
                🎉 Welcome! Code: SWEET10 sent to email
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email bestie"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-all w-full"
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-amber-600 text-white p-2.5 rounded-xl transition-all flex items-center justify-center border border-accent/20 cursor-pointer shadow-sm shadow-accent/20"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Navigation links Column */}
        <div className="flex flex-col gap-5 md:pl-4">
          <h4 className="font-display font-black text-xs uppercase tracking-widest text-accent flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-accent" /> EXPLORE
          </h4>
          <div className="flex flex-col gap-3 font-display font-bold text-xs text-cream-dark/80">
            <Link href="/" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 group">
              <span className="w-1.5 h-1.5 bg-accent/0 group-hover:bg-accent rounded-full transition-all" />
              Home
            </Link>
            <Link href="/#menu" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 group">
              <span className="w-1.5 h-1.5 bg-accent/0 group-hover:bg-accent rounded-full transition-all" />
              Order Online
            </Link>
            <Link href="/about" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 group">
              <span className="w-1.5 h-1.5 bg-accent/0 group-hover:bg-accent rounded-full transition-all" />
              Our Story
            </Link>
            <Link href="/contact" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 group">
              <span className="w-1.5 h-1.5 bg-accent/0 group-hover:bg-accent rounded-full transition-all" />
              Contact Us
            </Link>
            <Link href="/work" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 group">
              <span className="w-1.5 h-1.5 bg-accent/0 group-hover:bg-accent rounded-full transition-all" />
              Work With Us
            </Link>
          </div>
        </div>

        {/* Contact/Info Column */}
        <div className="flex flex-col gap-5">
          <h4 className="font-display font-black text-xs uppercase tracking-widest text-accent flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-accent" /> SWEET HEADQUARTERS
          </h4>
          <div className="flex flex-col gap-3.5 text-xs font-semibold text-cream-dark/80">
            <p className="flex items-start gap-2.5 leading-relaxed">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>Gurugram & New Delhi NCR</span>
            </p>
            <p className="flex items-start gap-2.5 leading-relaxed">
              <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>Delivering Daily: 10:00 AM - 12:00 AM</span>
            </p>
            <p className="flex items-center gap-2.5 leading-none">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <a href="tel:+918800844740" className="hover:text-white transition-colors">+91 8800844740</a>
            </p>
            <p className="flex items-center gap-2.5 leading-none">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <a href="mailto:sweetvibes@ameeco.com" className="hover:text-white transition-colors">sweetvibes@ameeco.com</a>
            </p>
          </div>
        </div>

        {/* Social Links Column */}
        <div className="flex flex-col gap-5">
          <h4 className="font-display font-black text-xs uppercase tracking-widest text-accent flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-accent" /> BE OUR BESTIE
          </h4>
          <p className="text-xs font-semibold text-cream-dark/65 leading-relaxed">
            Follow our dessert drops, secret menu releases, and satisfying cookie pull videos.
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-accent border border-white/10 hover:border-accent text-cream-light flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
              title="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://whatsapp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-600 border border-white/10 hover:border-emerald-600 text-cream-light flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-600/20 cursor-pointer"
              title="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            {/* Custom Sticker button */}
            <Link 
              href="/#menu"
              className="inline-flex items-center gap-1.5 bg-accent text-white font-display text-[9px] font-black px-4.5 py-2.5 rounded-xl border border-accent/20 hover:bg-amber-600 transition-all shadow-sm hover:shadow-[0_4px_12px_rgba(217,119,6,0.2)] hover:-translate-y-0.5 uppercase tracking-wider cursor-pointer"
            >
              🍪 ORDER NOW
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[10px] font-black tracking-widest text-cream-dark/45 uppercase relative z-10">
        <span>© {new Date().getFullYear()} AMEECO DESSERTS. ALL RIGHTS RESERVED.</span>
        <span className="flex items-center gap-1">
          MADE WITH <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse" /> IN GURUGRAM, DELHI NCR
        </span>
      </div>
    </footer>
  );
}
