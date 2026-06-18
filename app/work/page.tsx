"use client";

import React, { useState } from 'react';
import { CartProvider } from '../../components/CartContext';
import Navbar from '../../components/Navbar';
import Cart from '../../components/Cart';
import { 
  Sparkles, 
  ArrowRight, 
  Heart, 
  Briefcase, 
  GraduationCap, 
  CheckCircle,
  FileText,
  BadgeAlert
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WorkPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('cookie-tester');
  const [resume, setResume] = useState('');
  const [pitch, setPitch] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#d97706', '#5c3a21', '#f5ede2', '#ebdccb', '#ea4335']
    });
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!name.trim() || !email.trim() || !pitch.trim()) {
      setError('Please fill in your name, email, and vibe pitch.');
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    // Mock network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
    triggerConfetti();

    // Reset inputs
    setName('');
    setEmail('');
    setResume('');
    setPitch('');
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-cream-default text-brown-dark relative overflow-x-hidden selection:bg-accent selection:text-white">
        
        {/* Floating Header */}
        <Navbar />

        {/* Work Us Body */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12 md:px-8 relative z-10 flex flex-col gap-12">
          
          {/* Animated decorative graphics */}
          <div className="absolute top-1/3 left-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none animate-float-slow" />
          <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-brown-default/5 rounded-full blur-2xl pointer-events-none animate-pulse" />

          {/* Heading block */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 bg-brown-dark text-cream-light font-display text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase shadow-[3px_3px_0px_0px_rgba(217,119,6,1)] mb-6">
              🚀 GROW WITH AMEECO
            </span>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-brown-dark tracking-tight leading-[1.1] uppercase mb-6">
              Work With Us
            </h1>
            <p className="font-display font-bold text-lg md:text-xl text-brown-light leading-relaxed max-w-2xl mx-auto italic">
              &ldquo;At Ameeco, we take desserts seriously but ourselves, not so much!&rdquo;
            </p>
          </div>

          {/* Bento recruitment layout info grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Vibe description cards */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              
              {/* Vibe outline */}
              <div className="bg-white border-2 border-brown-dark p-6 rounded-3xl shadow-[5px_5px_0px_0px_rgba(60,34,24,1)] relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center border border-brown-dark/15 text-2xl mb-4">
                  🍩
                </div>
                <h3 className="font-display font-black text-sm text-brown-dark uppercase tracking-wide mb-2">
                  PLAYFUL & PASSIONATE
                </h3>
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  We’re playful, detail-obsessed, and deeply passionate about what we do, from perfecting textures to creating moments of pure comfort.
                </p>
              </div>

              {/* Qualities card */}
              <div className="bg-white border-2 border-brown-dark p-6 rounded-3xl shadow-[5px_5px_0px_0px_rgba(60,34,24,1)] relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center border border-brown-dark/15 text-2xl mb-4">
                  ✨
                </div>
                <h3 className="font-display font-black text-sm text-brown-dark uppercase tracking-wide mb-2">
                  CHARACTER & VIBES
                </h3>
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  Skills are important but they can also be taught, the major qualities we look for are integrity, dedication and discipline! Oh, and good vibes!
                </p>
              </div>

              {/* Intention Card */}
              <div className="bg-white border-2 border-brown-dark p-6 rounded-3xl shadow-[5px_5px_0px_0px_rgba(60,34,24,1)] relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center border border-brown-dark/15 text-2xl mb-4">
                  💖
                </div>
                <h3 className="font-display font-black text-sm text-brown-dark uppercase tracking-wide mb-2">
                  WORK WITH HEART
                </h3>
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  If you love great desserts, big ideas, and working with intention (and a lot of heart), you’ll fit right in. Come grow, learn, and create happiness one dessert at a time.
                </p>
              </div>

            </div>

            {/* Application form card */}
            <div className="lg:col-span-2">
              <div className="bg-white border-4 border-brown-dark rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(60,34,24,1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

                {submitted ? (
                  /* Application Success state */
                  <div className="text-center py-12 flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center text-3xl mb-2 shadow-[2px_2px_0px_0px_rgba(60,34,24,1)]">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-black text-2xl uppercase text-brown-dark tracking-tight">
                      APPLICATION RECEIVED!
                    </h3>
                    <p className="text-sm font-semibold text-brown-light max-w-md leading-relaxed">
                      Thank you for pitching your vibes! We have saved your application. Chef Ipsita and our recruiting cookie captains will review your profile and get back to you if we fit.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 bg-cream-warm text-brown-dark hover:bg-cream-dark font-display font-black text-xs px-6 py-3 border border-brown-dark rounded-xl shadow-[3px_3px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-0.5 active:translate-y-0 transition-transform"
                    >
                      SUBMIT A DIFFERENT PITCH
                    </button>
                  </div>
                ) : (
                  /* Job Form */
                  <form onSubmit={handleApplySubmit} className="flex flex-col gap-5">
                    <div className="border-b border-brown-dark/15 pb-4">
                      <h2 className="font-display font-black text-2xl text-brown-dark uppercase tracking-tight">
                        APPLY FOR A POSITION
                      </h2>
                      <p className="text-xs font-semibold text-brown-light">
                        Tell us why you want to bake, scoop, or grow with the Ameeco crew.
                      </p>
                    </div>

                    {error && (
                      <div className="p-3 bg-rose-500/10 border-2 border-rose-500 rounded-xl text-xs font-black text-rose-700 animate-in fade-in slide-in-from-top-2 duration-150">
                        ⚠️ {error}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase">
                          FULL NAME
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Iipsita Sharma"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase">
                          TARGET ROLE
                        </label>
                        <select
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-bold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all uppercase"
                        >
                          <option value="pastry-chef">Pastry Assistant 👩‍🍳</option>
                          <option value="gelato-maker">Gelato Master 🍧</option>
                          <option value="cookie-tester">Official Cookie Tester (Vibe Captain) 🍪</option>
                          <option value="operations">Store Operations / Admin 📦</option>
                          <option value="pr-design">PR / Social Media & Design 🎨</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase flex items-center justify-between">
                          <span>RESUME / PORTFOLIO LINK</span>
                          <span className="text-[8px] text-brown-light/60 lowercase">(optional)</span>
                        </label>
                        <input
                          type="url"
                          placeholder="https://linkedin.com/in/username"
                          value={resume}
                          onChange={(e) => setResume(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase flex items-center justify-between">
                        <span>YOUR VIBE PITCH</span>
                        <span className="text-[8px] text-brown-light/60 lowercase">(minimum 20 characters)</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us about yourself, your dessert passion, and why you would fit right into the Ameeco crew..."
                        value={pitch}
                        onChange={(e) => setPitch(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] resize-none transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center justify-center gap-2 h-14 bg-brown-dark hover:bg-brown-default text-cream-light font-display font-black text-xs tracking-widest rounded-xl border-2 border-brown-dark shadow-[4px_4px_0px_0px_rgba(217,119,6,1)] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(217,119,6,1)] active:translate-y-0 transition-all disabled:opacity-75 disabled:pointer-events-none text-center cursor-pointer uppercase mt-2"
                    >
                      {loading ? (
                        <span className="inline-block w-4.5 h-4.5 border-2 border-cream-light border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          SUBMIT APPLICATION
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </main>

        {/* Brand Vibe footer divider copy */}
        <footer className="bg-brown-dark text-cream-light py-8 px-6 text-center text-[10px] font-black tracking-widest uppercase border-t-4 border-brown-dark relative z-10">
          <span>© {new Date().getFullYear()} AMEECO DESSERTS. ALL RIGHTS RESERVED.</span>
        </footer>

        {/* Sliding cart context */}
        <Cart />

      </div>
    </CartProvider>
  );
}
