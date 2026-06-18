"use client";

import React, { useState } from 'react';
import { useCart } from './CartContext';
import { ShoppingBag, Sparkles, MapPin, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { setIsCartOpen, cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);

  React.useEffect(() => {
    const checkUser = () => {
      const stored = localStorage.getItem('ameeco_user');
      if (stored) {
        try {
          setUser(JSON.parse(stored));
        } catch (e) {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };
    checkUser();
    
    window.addEventListener('storage', checkUser);
    window.addEventListener('ameeco-auth', checkUser);
    return () => {
      window.removeEventListener('storage', checkUser);
      window.removeEventListener('ameeco-auth', checkUser);
    };
  }, []);

  return (
    <header className="sticky top-0 w-full z-40 px-4 py-4 md:px-8">
      {/* Floating Capsule Container */}
      <div className="max-w-7xl mx-auto bg-cream-warm/95 backdrop-blur-md border-2 border-brown-dark rounded-2xl shadow-[4px_4px_0px_0px_rgba(60,34,24,1)] px-4 py-3 md:px-8 flex items-center justify-between transition-all duration-300">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="font-display font-black text-2xl md:text-3xl tracking-tight text-brown-dark relative">
            ameeco<span className="text-accent text-3xl">.</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-brown-dark transition-all group-hover:w-full rounded" />
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 bg-brown-dark text-cream-light font-display text-[9px] font-bold px-2 py-0.5 rounded-full tracking-widest uppercase">
            <Sparkles className="w-2.5 h-2.5 text-accent animate-pulse" /> EGGLESS
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 font-display font-black text-[11px] tracking-widest text-brown-dark uppercase">
          <a href="/" className="hover:text-accent transition-colors relative group py-1">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </a>
          <a href="/#menu" className="hover:text-accent transition-colors relative group py-1">
            Order
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </a>
          <a href="/about" className="hover:text-accent transition-colors relative group py-1">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </a>
          <a href="/gifting" className="hover:text-accent transition-colors relative group py-1">
            Corporate Gifting
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </a>
          <a href="/contact" className="hover:text-accent transition-colors relative group py-1">
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </a>
          <a href="/work" className="hover:text-accent transition-colors relative group py-1">
            Work With Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Location status badge */}
          <div className="hidden lg:flex items-center gap-1.5 bg-cream-light border border-brown-light/40 px-3 py-1.5 rounded-full text-xs font-semibold text-brown-default">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>Delhi & Gurugram</span>
          </div>

          {/* User Auth Button */}
          {user ? (
            <a
              href="/login"
              className="flex items-center justify-center gap-1.5 bg-cream-light hover:bg-cream-warm text-brown-dark font-display font-black text-[10px] tracking-widest px-3 md:px-4 py-2.5 rounded-xl border border-brown-dark shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse border border-brown-dark" />
              <span className="hidden sm:inline">HI, {user.name.split(' ')[0].toUpperCase()}!</span>
              <span className="sm:hidden">ME</span>
            </a>
          ) : (
            <a
              href="/login"
              className="flex items-center justify-center gap-1.5 bg-cream-light hover:bg-cream-warm text-brown-dark font-display font-black text-[10px] tracking-widest px-3 md:px-4 py-2.5 rounded-xl border border-brown-dark shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              LOGIN
            </a>
          )}

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center justify-center gap-2 bg-brown-dark hover:bg-brown-default text-cream-light font-display font-black text-sm px-4 py-2.5 rounded-xl border border-brown-dark shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">CART</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white font-bold text-xs w-5.5 h-5.5 flex items-center justify-center rounded-full border border-brown-dark animate-bounce shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark hover:bg-cream-warm"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-24 bg-cream-warm border-2 border-brown-dark rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(60,34,24,1)] z-30 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3 font-display font-black text-base text-brown-dark uppercase">
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl border border-transparent hover:border-brown-dark hover:bg-cream-light transition-all"
            >
              Home
            </a>
            <a
              href="/#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl border border-transparent hover:border-brown-dark hover:bg-cream-light transition-all"
            >
              Order
            </a>
            <a
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl border border-transparent hover:border-brown-dark hover:bg-cream-light transition-all"
            >
              About Us
            </a>
            <a
              href="/gifting"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl border border-transparent hover:border-brown-dark hover:bg-cream-light transition-all"
            >
              Corporate Gifting
            </a>
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl border border-transparent hover:border-brown-dark hover:bg-cream-light transition-all"
            >
              Contact Us
            </a>
            <a
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl border border-transparent hover:border-brown-dark hover:bg-cream-light transition-all"
            >
              Work With Us
            </a>
            <a
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl border border-transparent bg-accent text-white hover:bg-accent/90 text-center transition-all shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] font-display font-black"
            >
              {user ? `MY PROFILE (${user.name.split(' ')[0].toUpperCase()})` : 'LOGIN / REGISTER'}
            </a>
          </nav>
          <div className="h-0.5 bg-brown-dark/20 w-full" />
          <div className="flex items-center justify-between text-brown-default px-2">
            <span className="flex items-center gap-1.5 text-xs font-bold">
              <MapPin className="w-4 h-4 text-accent" /> Delhi & Gurugram
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest bg-brown-dark text-cream-light px-2 py-1 rounded-full">
              Eggless & Fresh
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
