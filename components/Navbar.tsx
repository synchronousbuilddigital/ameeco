"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';
import { ShoppingBag, Sparkles, MapPin, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { setIsCartOpen, cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Delay transition to capsule until scrolled past 350px (beyond hero section)
      if (currentScrollY > 350) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const checkUser = () => {
      const stored = localStorage.getItem('ameeco_user');
      if (stored) {
        try {
          setUser(JSON.parse(stored));
        } catch {
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
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${isScrolled ? 'py-3 px-4 md:px-6 bg-transparent' : 'py-4 px-4 md:px-8 bg-[#432317]/90 backdrop-blur-md border-b border-white/10 shadow-sm'
      }`}>
      {/* Container morphs from full-width flat to floating capsule (small & round) with dark chocolate theme */}
      <div className={`max-w-7xl mx-auto flex items-center justify-between flex-nowrap whitespace-nowrap transition-all duration-500 ease-in-out ${isScrolled
          ? 'py-2.5 px-6 max-w-4xl bg-[#432317]/90 backdrop-blur-lg border border-white/15 rounded-full shadow-[0_12px_32px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.05)]'
          : 'py-2 px-0 w-full bg-transparent border-0 rounded-none shadow-none'
        }`}>

        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <span className={`font-display font-black tracking-[0.2em] text-white uppercase transition-all duration-500 ease-in-out ${isScrolled ? 'text-xs md:text-sm' : 'text-sm md:text-base'
            }`}>
            ameeco<span className="text-accent">.</span>
          </span>
          <span className={`hidden sm:inline-flex items-center gap-1 font-display text-[9px] font-bold px-2 py-0.5 rounded-full tracking-widest uppercase transition-all duration-500 ${isScrolled
              ? 'bg-white/10 text-white/90 scale-90 opacity-80'
              : 'bg-white/10 text-white/90 border border-white/20 scale-100 opacity-100'
            }`}>

          </span>
        </Link>

        <nav className={`hidden lg:flex items-center whitespace-nowrap flex-nowrap shrink-0 font-display font-black tracking-[0.18em] uppercase text-white/80 transition-all duration-500 ease-in-out ${isScrolled ? 'gap-4 text-[10px]' : 'gap-6 text-[12px]'
          }`}>
          <Link href="/" className="hover:text-accent transition-colors relative group py-1">
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0" />
          </Link>
          <Link href="/#menu" className="hover:text-accent transition-colors relative group py-1">
            Order
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0" />
          </Link>
          <Link href="/about" className="hover:text-accent transition-colors relative group py-1">
            About Us
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0" />
          </Link>
          <Link href="/contact" className="hover:text-accent transition-colors relative group py-1">
            Contact Us
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0" />
          </Link>
          <Link href="/work" className="hover:text-accent transition-colors relative group py-1">
            Work With Us
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0" />
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4 flex-nowrap shrink-0">
          <div className={`hidden lg:flex items-center gap-1.5 rounded-full font-semibold bg-white/5 border border-white/10 text-white/80 transition-all duration-500 hover:bg-white/10 ${isScrolled ? 'px-2.5 py-1 text-[10px]' : 'px-3.5 py-1.5 text-xs'
            }`}>
            <MapPin className="w-3.5 h-3.5 text-white" />
            <span>Delhi & Gurugram</span>
          </div>

          {user ? (
            <Link
              href="/login"
              className={`flex items-center justify-center gap-1.5 font-display font-black tracking-widest border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 ${isScrolled
                  ? 'px-4 py-2 text-[9px] rounded-full'
                  : 'px-5 py-2.5 text-[11px] rounded-xl'
                }`}
            >
              <span className="w-2.5 h-2.5 rounded-full animate-pulse border bg-emerald-400 border-white" />
              <span className="hidden sm:inline">HI, {user.name.split(' ')[0].toUpperCase()}!</span>
              <span className="sm:hidden">ME</span>
            </Link>
          ) : (
            <Link
              href="/login"
              className={`flex items-center justify-center gap-1.5 font-display font-black tracking-widest border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 ${isScrolled
                  ? 'px-4 py-2 text-[9px] rounded-full'
                  : 'px-5 py-2.5 text-[11px] rounded-xl'
                }`}
            >
              LOGIN
            </Link>
          )}

          <button
            onClick={() => setIsCartOpen(true)}
            className={`relative flex items-center justify-center gap-2 font-display font-black bg-white hover:bg-cream-warm text-[#432317] border border-white/15 transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 ${isScrolled
                ? 'px-4 py-2 text-xs rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)]'
                : 'px-5 py-2.5 text-sm rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]'
              }`}
          >
            <ShoppingBag className="w-4 h-4 text-[#432317]" />
            <span className="hidden sm:inline">CART</span>
            {cartCount > 0 && (
              <span className={`absolute bg-accent text-white font-bold text-xs flex items-center justify-center rounded-full border border-white animate-bounce shadow-md transition-all duration-500 ${isScrolled ? '-top-1 -right-1 w-4.5 h-4.5 text-[10px]' : '-top-2 -right-2 w-5.5 h-5.5'
                }`}>
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden flex items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-500 ${isScrolled ? 'p-2 rounded-full' : 'p-2.5'
              }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden fixed inset-x-4 bg-[#432317]/95 backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-[0_24px_50px_rgba(0,0,0,0.5)] z-30 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-200 transition-all duration-500 ${isScrolled ? 'top-[84px]' : 'top-[104px]'
          }`}>
          <nav className="flex flex-col gap-3 font-display font-black text-sm tracking-wider text-white/90 uppercase">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all"
            >
              Home
            </Link>
            <Link
              href="/#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all"
            >
              Order
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all"
            >
              Work With Us
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white text-center transition-all shadow-md font-display font-black text-xs tracking-widest"
            >
              {user ? `MY PROFILE (${user.name.split(' ')[0].toUpperCase()})` : 'LOGIN / REGISTER'}
            </Link>
          </nav>
          <div className="h-px bg-white/10 w-full" />
          <div className="flex items-center justify-between text-white/70 px-2">
            <span className="flex items-center gap-1.5 text-xs font-bold">
              <MapPin className="w-4 h-4 text-accent" /> Delhi & Gurugram
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest bg-white/10 text-white px-2.5 py-1 rounded-full">
              Keep Eggless & Fresh
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
