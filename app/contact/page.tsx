"use client";

import React, { useState } from 'react';
import { CartProvider } from '../../components/CartContext';
import Navbar from '../../components/Navbar';
import Cart from '../../components/Cart';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Sparkles, 
  ArrowRight, 
  Heart, 
  MapPin, 
  Clock, 
  Smile, 
  CheckCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('order');
  const [message, setMessage] = useState('');
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formLoading, setFormLoading] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#d97706', '#5c3a21', '#f5ede2', '#ebdccb', '#ea4335']
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormLoading(true);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormError('Please fill in all the message fields.');
      setFormLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormError('Please enter a valid email address.');
      setFormLoading(false);
      return;
    }

    // Mock network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormLoading(false);
    setFormSubmitted(true);
    triggerConfetti();

    // Reset fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-cream-default text-brown-dark relative overflow-x-hidden selection:bg-accent selection:text-white">
        
        {/* Floating Navbar */}
        <Navbar />

        {/* Contact Body Container */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12 md:px-8 relative z-10 flex flex-col gap-12">
          
          {/* Decorative animations */}
          <div className="absolute top-1/3 left-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none animate-float-slow" />
          <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-brown-default/5 rounded-full blur-2xl pointer-events-none animate-pulse" />

          {/* Heading intro */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1 bg-brown-dark text-cream-light font-display text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase shadow-[3px_3px_0px_0px_rgba(217,119,6,1)] mb-6">
              <Heart className="w-3.5 h-3.5 text-accent fill-accent animate-pulse" /> WE&apos;D LOVE TO CHAT
            </span>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-brown-dark tracking-tight leading-[1.1] uppercase mb-6">
              We&apos;d Love to hear from you!
            </h1>
            <p className="font-display font-bold text-lg md:text-xl text-brown-light leading-relaxed max-w-2xl mx-auto italic">
              &ldquo;Whether it&apos;s about your order, custom treat or collab - we&apos;d love to hear from you!&rdquo;
            </p>
          </div>

          {/* Contact details bento section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Quick Contact Cards Column */}
            <div className="flex flex-col gap-6 lg:col-span-1">
              
              {/* Phone Card */}
              <a 
                href="tel:+918800844740"
                className="bg-white border-2 border-brown-dark rounded-3xl p-6 shadow-[5px_5px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(60,34,24,1)] transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center border border-brown-dark/15 text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xs text-brown-light tracking-widest uppercase mb-1">
                    Call Sweet Line
                  </h3>
                  <p className="font-display font-black text-lg text-brown-dark">
                    +91 8800844740
                  </p>
                  <span className="text-[10px] font-semibold text-brown-light mt-1.5 block uppercase tracking-wide">
                    📞 Tap to dial instantly
                  </span>
                </div>
              </a>

              {/* Chat / WhatsApp Card */}
              <a 
                href="https://wa.me/918800844740?text=Hey%20Ameeco%20Bestie!%20I'd%20love%20to%20know%20more%20about..."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-brown-dark rounded-3xl p-6 shadow-[5px_5px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(60,34,24,1)] transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center border border-brown-dark/15 text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xs text-brown-light tracking-widest uppercase mb-1">
                    WhatsApp Chat
                  </h3>
                  <p className="font-display font-black text-lg text-brown-dark">
                    Active Support
                  </p>
                  <span className="text-[10px] font-semibold text-emerald-700 mt-1.5 block uppercase tracking-wide">
                    💬 Chat directly on WhatsApp
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a 
                href="mailto:contact@ameeco.com"
                className="bg-white border-2 border-brown-dark rounded-3xl p-6 shadow-[5px_5px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(60,34,24,1)] transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center border border-brown-dark/15 text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xs text-brown-light tracking-widest uppercase mb-1">
                    Gourmet Emails
                  </h3>
                  <p className="font-display font-black text-lg text-brown-dark break-all">
                    contact@ameeco.com
                  </p>
                  <span className="text-[10px] font-semibold text-brown-light mt-1.5 block uppercase tracking-wide">
                    ✉️ Tap to compose mail
                  </span>
                </div>
              </a>

              {/* Delivery Zone badge block */}
              <div className="bg-cream-warm border-2 border-brown-dark p-6 rounded-3xl shadow-[5px_5px_0px_0px_rgba(60,34,24,1)]">
                <h4 className="font-display font-black text-xs text-brown-dark uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-accent" /> DELIVERY RADIUS
                </h4>
                <p className="text-xs font-semibold text-brown-light leading-relaxed mb-4">
                  We deliver fresh NYC chunky cookies and slow-churned gelato daily to spots across Gurugram and New Delhi NCR.
                </p>
                <div className="flex flex-col gap-2 font-display font-bold text-[10px] uppercase text-brown-dark tracking-wide">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-accent" /> Delivering Daily: 10AM - 12AM</span>
                  <span className="flex items-center gap-1.5"><Smile className="w-3.5 h-3.5 text-accent" /> Fresh batch baked every 4 hours</span>
                </div>
              </div>

            </div>

            {/* Form card Column */}
            <div className="lg:col-span-2">
              <div className="bg-white border-4 border-brown-dark rounded-[32px] p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(60,34,24,1)] relative overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

                {formSubmitted ? (
                  /* Form Success State */
                  <div className="text-center py-12 flex flex-col items-center justify-center gap-4 h-full my-auto animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center text-3xl mb-2 shadow-[2px_2px_0px_0px_rgba(60,34,24,1)]">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-black text-2xl uppercase text-brown-dark tracking-tight">
                      SWEET SUCCESS!
                    </h3>
                    <p className="text-sm font-semibold text-brown-light max-w-sm leading-relaxed">
                      We have received your treat query. A pastry representative from the Ameeco team will get in touch with you shortly!
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 bg-cream-warm text-brown-dark hover:bg-cream-dark font-display font-black text-xs px-6 py-3 border border-brown-dark rounded-xl shadow-[3px_3px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-0.5 active:translate-y-0 transition-transform"
                    >
                      SEND ANOTHER INQUIRY
                    </button>
                  </div>
                ) : (
                  /* Contact Form */
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 h-full justify-between">
                    <div>
                      <div className="border-b border-brown-dark/15 pb-4 mb-6">
                        <h2 className="font-display font-black text-2xl text-brown-dark uppercase tracking-tight">
                          SEND US A MESSAGE
                        </h2>
                        <p className="text-xs font-semibold text-brown-light">
                          Leave your details below and we will get back to you within 2 hours.
                        </p>
                      </div>

                      {formError && (
                        <div className="p-3 bg-rose-500/10 border-2 border-rose-500 rounded-xl text-xs font-black text-rose-700 mb-4 animate-in fade-in slide-in-from-top-2 duration-150">
                          ⚠️ {formError}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase">
                            YOUR NAME
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Chef Lover"
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
                            placeholder="bestie@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5 mb-4">
                        <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase">
                          INQUIRY CATEGORY
                        </label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-bold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all uppercase"
                        >
                          <option value="order">Order Inquiry / Support 📦</option>
                          <option value="treat">Custom Cookie or Gelato Treat 🎂</option>
                          <option value="collab">Brand Collab / PR 🎀</option>
                          <option value="feedback">General Love / Suggestions 💖</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1.5 mb-4">
                        <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase">
                          YOUR MESSAGE
                        </label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Tell us about your order number, event details, or partnership ideas..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] resize-none transition-all"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={formLoading}
                      className="flex items-center justify-center gap-2 h-14 bg-brown-dark hover:bg-brown-default text-cream-light font-display font-black text-xs tracking-widest rounded-xl border-2 border-brown-dark shadow-[4px_4px_0px_0px_rgba(217,119,6,1)] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(217,119,6,1)] active:translate-y-0 transition-all disabled:opacity-75 disabled:pointer-events-none text-center cursor-pointer uppercase mt-2"
                    >
                      {formLoading ? (
                        <span className="inline-block w-4.5 h-4.5 border-2 border-cream-light border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          SUBMIT MESSAGE
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
