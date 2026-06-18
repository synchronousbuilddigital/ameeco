"use client";

import React, { useState } from 'react';
import { CartProvider } from '../../components/CartContext';
import Navbar from '../../components/Navbar';
import Cart from '../../components/Cart';
import { 
  Sparkles, 
  ArrowRight, 
  Gift, 
  Building, 
  Calendar, 
  Package, 
  MessageCircle, 
  CheckCircle,
  Mail,
  Phone
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function GiftingPage() {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('50-100');
  const [date, setDate] = useState('');
  const [requirements, setRequirements] = useState('');

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

  const handleGiftingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!companyName.trim() || !contactName.trim() || !email.trim()) {
      setError('Please provide your company name, contact person, and email.');
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
    setCompanyName('');
    setContactName('');
    setEmail('');
    setPhone('');
    setDate('');
    setRequirements('');
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-cream-default text-brown-dark relative overflow-x-hidden selection:bg-accent selection:text-white">
        
        {/* Floating Header */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12 md:px-8 relative z-10 flex flex-col gap-12">
          
          {/* Decorative floating animations */}
          <div className="absolute top-1/3 left-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none animate-float-slow" />
          <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-brown-default/5 rounded-full blur-2xl pointer-events-none animate-pulse" />

          {/* Header block */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 bg-brown-dark text-cream-light font-display text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase shadow-[3px_3px_0px_0px_rgba(217,119,6,1)] mb-6">
              🎁 BULK TREATS • EVENT VIBES
            </span>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-brown-dark tracking-tight leading-[1.1] uppercase mb-6">
              Gifting & Bulk Order
            </h1>
            <p className="font-display font-bold text-lg md:text-xl text-brown-light leading-relaxed max-w-2xl mx-auto italic">
              &ldquo;Ameeco provides customise gifting options for bulk and corporate gifting.&rdquo;
            </p>
            <p className="text-sm font-semibold text-brown-light mt-4 max-w-md mx-auto">
              Get in touch by sharing your details and requirements below and we&apos;ll be right there to assist you!
            </p>
          </div>

          {/* Bento Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Column: Vibe details & direct chat triggers */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              
              {/* Info card */}
              <div className="bg-cream-warm border-2 border-brown-dark p-6 rounded-3xl shadow-[5px_5px_0px_0px_rgba(60,34,24,1)]">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center border border-brown-dark/15 text-2xl mb-4">
                  🎨
                </div>
                <h3 className="font-display font-black text-xs text-brown-dark tracking-wider uppercase mb-2">
                  CUSTOM DESIGNED BOXES
                </h3>
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  Choose your box colors, add custom handwritten thank-you notes, select specific gelato pairings, and customize chunky cookie sizes to fit your budget and brand.
                </p>
              </div>

              {/* Delivery stats card */}
              <div className="bg-white border-2 border-brown-dark p-6 rounded-3xl shadow-[5px_5px_0px_0px_rgba(60,34,24,1)]">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center border border-brown-dark/15 text-2xl mb-4">
                  📦
                </div>
                <h3 className="font-display font-black text-xs text-brown-dark tracking-wider uppercase mb-2">
                  DELIVERY & LOGISTICS
                </h3>
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  Direct dispatch in dry-iced packaging across Gurgaon and New Delhi. We ensure cookies stay soft-baked and gelatos stay cold and slow-churned until they reach your besties.
                </p>
              </div>

              {/* Let's Chat WhatsApp direct card */}
              <a 
                href="https://wa.me/918800844740?text=Hey%20Ameeco%20Team!%20I'd%20love%20to%20know%20more%20about%20corporate%20gifting%20and%20bulk%20dessert%20pricing..."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-brown-dark rounded-3xl p-6 shadow-[5px_5px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(60,34,24,1)] transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center border border-brown-dark/15 text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xs text-brown-light tracking-widest uppercase mb-1">
                    Instant Gifting Chat
                  </h3>
                  <p className="font-display font-black text-lg text-brown-dark">
                    Let&apos;s Chat!
                  </p>
                  <span className="text-[10px] font-semibold text-emerald-700 mt-1.5 block uppercase tracking-wide">
                    💬 Chat directly on WhatsApp
                  </span>
                </div>
              </a>

            </div>

            {/* Right Column: Inquiry Form card */}
            <div className="lg:col-span-2">
              <div className="bg-white border-4 border-brown-dark rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(60,34,24,1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

                {submitted ? (
                  /* Gifting Success state */
                  <div className="text-center py-12 flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center text-3xl mb-2 shadow-[2px_2px_0px_0px_rgba(60,34,24,1)]">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-black text-2xl uppercase text-brown-dark tracking-tight">
                      BULK QUERY SUBMITTED!
                    </h3>
                    <p className="text-sm font-semibold text-brown-light max-w-md leading-relaxed">
                      Thank you for sharing your event details! We have logged your request. One of our gifting captains will contact you at your email or phone number in less than 2 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 bg-cream-warm text-brown-dark hover:bg-cream-dark font-display font-black text-xs px-6 py-3 border border-brown-dark rounded-xl shadow-[3px_3px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-0.5 active:translate-y-0 transition-transform"
                    >
                      SEND ANOTHER BULK QUERY
                    </button>
                  </div>
                ) : (
                  /* Corporate Form */
                  <form onSubmit={handleGiftingSubmit} className="flex flex-col gap-5">
                    <div className="border-b border-brown-dark/15 pb-4">
                      <h2 className="font-display font-black text-2xl text-brown-dark uppercase tracking-tight">
                        SHARE YOUR DETAILS & REQUIREMENTS
                      </h2>
                      <p className="text-xs font-semibold text-brown-light">
                        Provide your target details and we will formulate a customized quote proposal.
                      </p>
                    </div>

                    {error && (
                      <div className="p-3 bg-rose-500/10 border-2 border-rose-500 rounded-xl text-xs font-black text-rose-700 animate-in fade-in slide-in-from-top-2 duration-150">
                        ⚠️ {error}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase flex items-center gap-1">
                          <Building className="w-3 h-3 text-accent" /> COMPANY NAME
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Acme Corporation"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase">
                          CONTACT PERSON
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Gourmet Liaison"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase flex items-center gap-1">
                          <Mail className="w-3 h-3 text-accent" /> BUSINESS EMAIL
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="hr@acme.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase flex items-center gap-1">
                          <Phone className="w-3 h-3 text-accent" /> MOBILE NUMBER
                        </label>
                        <input
                          type="tel"
                          placeholder="99999 99999"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                          className="w-full px-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase flex items-center gap-1">
                          <Package className="w-3 h-3 text-accent" /> ESTIMATED QUANTITY
                        </label>
                        <select
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-bold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all uppercase"
                        >
                          <option value="20-50">20 - 50 Boxes 📦</option>
                          <option value="50-100">50 - 100 Boxes 📦</option>
                          <option value="100-500">100 - 500 Boxes 📦</option>
                          <option value="500+">500+ Custom Packages 🎁</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-accent" /> TARGET EVENT DATE
                        </label>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase flex items-center justify-between">
                        <span>WHAT ARE YOU DREAMING OF?</span>
                        <span className="text-[8px] text-brown-light/60 lowercase">(flavors, logo additions, custom notes)</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your event theme, custom card details, or favorite flavors..."
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
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
                          SUBMIT QUERY
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
