"use client";

import React, { useState, useEffect } from 'react';
import { CartProvider } from '../../components/CartContext';
import Navbar from '../../components/Navbar';
import Cart from '../../components/Cart';
import { 
  Mail, 
  Lock, 
  User, 
  Phone, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ShieldCheck, 
  LogOut, 
  ShoppingBag, 
  Heart,
  KeyRound
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AmeecoUser {
  name: string;
  email: string;
  phone?: string;
  memberSince: string;
}

export default function LoginPage() {
  const [user, setUser] = useState<AmeecoUser | null>(null);

  // Form States
  const [isLogin, setIsLogin] = useState(true);
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email');
  
  // Field States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);

  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Load user session on mount
  useEffect(() => {
    const stored = localStorage.getItem('ameeco_user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {
        setUser(null);
      }
    }
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d97706', '#5c3a21', '#f5ede2', '#ebdccb']
    });
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Simulated network delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (authMethod === 'email') {
      if (!email || !password) {
        setError('Please fill in all email and password fields.');
        setLoading(false);
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Please enter a valid email address.');
        setLoading(false);
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
        setLoading(false);
        return;
      }

      if (isLogin) {
        // Mock Successful Login
        const mockUser: AmeecoUser = {
          name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').toUpperCase() || 'BESTIE',
          email: email.toLowerCase(),
          memberSince: 'June 2026',
        };
        localStorage.setItem('ameeco_user', JSON.stringify(mockUser));
        setUser(mockUser);
        setSuccess(true);
        triggerConfetti();
        window.dispatchEvent(new Event('ameeco-auth'));
      } else {
        // Register Mode
        if (!name.trim()) {
          setError('Please tell us your name so we can welcome you!');
          setLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          setError('Passwords do not match. Please verify your passwords.');
          setLoading(false);
          return;
        }

        const mockUser: AmeecoUser = {
          name: name.trim().toUpperCase(),
          email: email.toLowerCase(),
          memberSince: 'June 2026',
        };
        localStorage.setItem('ameeco_user', JSON.stringify(mockUser));
        setUser(mockUser);
        setSuccess(true);
        triggerConfetti();
        window.dispatchEvent(new Event('ameeco-auth'));
      }
    } else {
      // Phone Mode
      if (!phone || phone.length < 10) {
        setError('Please enter a valid 10-digit mobile number.');
        setLoading(false);
        return;
      }

      if (!showOtpField) {
        // Send OTP Simulation
        setShowOtpField(true);
        setLoading(false);
        // Pre-fill a mock OTP code
        setOtp('123456');
        return;
      } else {
        // Verify OTP Simulation
        if (otp !== '123456') {
          setError('Invalid OTP code. Use standard mock code 123456.');
          setLoading(false);
          return;
        }

        const mockUser: AmeecoUser = {
          name: name.trim() ? name.trim().toUpperCase() : 'GUEST BESTIE',
          email: email.trim() ? email.toLowerCase() : 'phone_user@ameeco.in',
          phone: phone,
          memberSince: 'June 2026',
        };
        localStorage.setItem('ameeco_user', JSON.stringify(mockUser));
        setUser(mockUser);
        setSuccess(true);
        triggerConfetti();
        window.dispatchEvent(new Event('ameeco-auth'));
      }
    }

    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('ameeco_user');
    setUser(null);
    setSuccess(false);
    setShowOtpField(false);
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setConfirmPassword('');
    setOtp('');
    window.dispatchEvent(new Event('ameeco-auth'));
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-cream-default text-brown-dark relative overflow-x-hidden selection:bg-accent selection:text-white">
        
        {/* Floating Header */}
        <Navbar />

        {/* Auth Page Body */}
        <main className="flex-1 flex items-center justify-center px-4 py-16 relative z-10 max-w-7xl mx-auto w-full">
          
          {/* Animated decorative blobs */}
          <div className="absolute top-1/4 left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none animate-float-slow" />
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-brown-default/5 rounded-full blur-2xl pointer-events-none animate-pulse" />

          {/* Floating Sticker Badges for visual premium feel */}
          <div className="hidden lg:block absolute left-20 top-1/3 bg-white border border-brown-dark text-[11px] font-black uppercase px-4 py-2 rounded-full rotate-[-6deg] shadow-[3px_3px_0px_0px_rgba(60,34,24,1)] animate-float-slow">
            🍪 Baked Fresh Daily
          </div>
          <div className="hidden lg:block absolute right-24 top-1/4 bg-accent text-white border border-brown-dark text-[11px] font-black uppercase px-4 py-2 rounded-full rotate-[4deg] shadow-[3px_3px_0px_0px_rgba(60,34,24,0.1)]">
            🍨 100% Eggless Gelato
          </div>
          <div className="hidden lg:block absolute left-24 bottom-1/4 bg-white border border-brown-dark text-[11px] font-black uppercase px-4 py-2 rounded-full rotate-[8deg] shadow-[3px_3px_0px_0px_rgba(60,34,24,1)]">
            💖 Chef Crafted
          </div>

          <div className="w-full max-w-xl transition-all duration-300">
            {user ? (
              /* Profile Dashboard View */
              <div className="bg-white border-4 border-brown-dark rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(60,34,24,1)] relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-cream-warm rounded-full border-4 border-brown-dark flex items-center justify-center font-display text-4xl">
                  ✨
                </div>

                <div className="flex flex-col items-center text-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full border-4 border-brown-dark bg-cream-warm flex items-center justify-center font-display font-black text-3xl text-accent shadow-[3px_3px_0px_0px_rgba(60,34,24,1)]">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" /> Active Session Verified
                    </span>
                    <h2 className="font-display font-black text-3xl text-brown-dark uppercase tracking-tight">
                      {user.name}
                    </h2>
                    <p className="text-sm font-semibold text-brown-light mt-1">
                      {user.email}
                    </p>
                    {user.phone && (
                      <p className="text-xs font-bold text-brown-light mt-0.5">
                        📞 {user.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Simulated Order and Favorites details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-cream-warm/50 border-2 border-brown-dark p-4 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <ShoppingBag className="w-4 h-4 text-accent" />
                      <span className="font-display font-black text-xs uppercase tracking-wider">Recent Orders</span>
                    </div>
                    <p className="text-[11px] font-bold text-brown-light leading-relaxed">
                      1x Custom Dessert Box of 4<br />
                      <span className="text-emerald-700">✓ Delivered (Gurugram)</span>
                    </p>
                  </div>
                  <div className="bg-cream-warm/50 border-2 border-brown-dark p-4 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                      <span className="font-display font-black text-xs uppercase tracking-wider">Your Faves</span>
                    </div>
                    <p className="text-[11px] font-bold text-brown-light leading-relaxed">
                      🍪 OG Chocochunk Cookie<br />
                      🍨 Dubai Kunafa Gelato
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/"
                    className="flex-1 flex items-center justify-center gap-2 h-12 bg-accent text-white font-display font-black text-xs tracking-wider rounded-xl border border-brown-dark shadow-[3px_3px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(60,34,24,1)] active:translate-y-0 text-center transition-all"
                  >
                    GO TO SHOPPING
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 h-12 px-6 bg-cream-light hover:bg-cream-warm text-brown-dark font-display font-black text-xs tracking-wider rounded-xl border border-brown-dark shadow-[3px_3px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(60,34,24,1)] active:translate-y-0 transition-all"
                  >
                    <LogOut className="w-4 h-4 text-brown-default" />
                    SIGN OUT
                  </button>
                </div>
              </div>
            ) : (
              /* Login/Register Card Container */
              <div className="bg-white border-4 border-brown-dark rounded-[32px] p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(60,34,24,1)] flex flex-col gap-8 relative overflow-hidden">
                
                {/* Header title */}
                <div className="text-center">
                  <span className="inline-flex items-center gap-1.5 bg-brown-dark text-cream-light font-display text-[9px] font-black px-3.5 py-1.5 rounded-full tracking-widest uppercase mb-3 shadow-[2px_2px_0px_0px_rgba(217,119,6,1)]">
                    <Sparkles className="w-3 h-3 text-accent animate-spin-slow" /> AMEECO PASS PORT
                  </span>
                  <h2 className="font-display font-black text-3xl md:text-4xl text-brown-dark tracking-tight uppercase leading-none">
                    {isLogin ? 'WELCOME BACK' : 'JOIN THE CLUB'}
                  </h2>
                  <p className="text-xs font-semibold text-brown-light mt-1.5 max-w-sm mx-auto">
                    {isLogin 
                      ? 'Sign in to access your gourmet orders and checkout faster.' 
                      : 'Create an account to stack custom combos and earn bestie rewards.'}
                  </p>
                </div>

                {/* Auth Mode & Switch Tabs */}
                <div className="grid grid-cols-2 gap-2 bg-cream-warm border border-brown-dark/20 p-1.5 rounded-2xl w-full">
                  <button
                    type="button"
                    onClick={() => {
                      setIsLogin(true);
                      setError(null);
                    }}
                    className={`py-3 rounded-xl font-display font-black text-xs tracking-wider uppercase transition-all ${
                      isLogin
                        ? 'bg-brown-dark text-cream-light shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)]'
                        : 'text-brown-light hover:text-brown-dark'
                    }`}
                  >
                    SIGN IN
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsLogin(false);
                      setError(null);
                    }}
                    className={`py-3 rounded-xl font-display font-black text-xs tracking-wider uppercase transition-all ${
                      !isLogin
                        ? 'bg-brown-dark text-cream-light shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)]'
                        : 'text-brown-light hover:text-brown-dark'
                    }`}
                  >
                    CREATE ACCOUNT
                  </button>
                </div>

                {/* OAuth Mock buttons (Google, Phone selector) */}
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        // Simulated Google OAuth
                        setLoading(true);
                        setTimeout(() => {
                          const mockUser: AmeecoUser = {
                            name: 'GOOGLE BESTIE',
                            email: 'google.user@gmail.com',
                            memberSince: 'June 2026',
                          };
                          localStorage.setItem('ameeco_user', JSON.stringify(mockUser));
                          setUser(mockUser);
                          setSuccess(true);
                          triggerConfetti();
                          window.dispatchEvent(new Event('ameeco-auth'));
                          setLoading(false);
                        }, 1000);
                      }}
                      className="flex items-center justify-center gap-2 h-12 bg-cream-light hover:bg-cream-warm border-2 border-brown-dark rounded-xl font-display font-black text-[10px] tracking-wider uppercase shadow-[3px_3px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-0.5 active:translate-y-0 transition-transform"
                    >
                      <svg className="w-3.5 h-3.5 mr-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                      </svg>
                      Google
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setAuthMethod(authMethod === 'email' ? 'phone' : 'email');
                        setError(null);
                        setShowOtpField(false);
                      }}
                      className="flex items-center justify-center gap-2 h-12 bg-cream-light hover:bg-cream-warm border-2 border-brown-dark rounded-xl font-display font-black text-[10px] tracking-wider uppercase shadow-[3px_3px_0px_0px_rgba(60,34,24,1)] hover:-translate-y-0.5 active:translate-y-0 transition-transform"
                    >
                      {authMethod === 'email' ? (
                        <>
                          <Phone className="w-3.5 h-3.5 text-accent" />
                          Phone OTP
                        </>
                      ) : (
                        <>
                          <Mail className="w-3.5 h-3.5 text-accent" />
                          Email Auth
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-3 my-2 text-brown-dark/20">
                    <div className="h-0.5 bg-brown-dark/10 flex-1" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-brown-light/50">OR SECURELY VIA</span>
                    <div className="h-0.5 bg-brown-dark/10 flex-1" />
                  </div>
                </div>

                {/* Form inputs */}
                <form onSubmit={handleAuthSubmit} className="flex flex-col gap-4">
                  {error && (
                    <div className="p-3 bg-rose-500/10 border-2 border-rose-500 rounded-xl text-xs font-black tracking-wide text-rose-700 animate-in fade-in slide-in-from-top-2 duration-150">
                      ⚠️ {error}
                    </div>
                  )}

                  {authMethod === 'email' ? (
                    <>
                      {/* Name Field (Only on Register) */}
                      {!isLogin && (
                        <div className="flex flex-col gap-1.5">
                          <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase">
                            YOUR NAME
                          </label>
                          <div className="relative">
                            <User className="w-4 h-4 text-brown-light/50 absolute left-3.5 top-3.5" />
                            <input
                              type="text"
                              required
                              placeholder="Iipsita Sharma"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all"
                            />
                          </div>
                        </div>
                      )}

                      {/* Email Field */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase">
                          EMAIL ADDRESS
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-brown-light/50 absolute left-3.5 top-3.5" />
                          <input
                            type="email"
                            required
                            placeholder="bestie@ameeco.in"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all"
                          />
                        </div>
                      </div>

                      {/* Password Field */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase flex items-center justify-between">
                          <span>PASSWORD</span>
                          {isLogin && (
                            <button
                              type="button"
                              onClick={() => {
                                alert("Reset link sent! Please check your mock inbox.");
                              }}
                              className="text-[9px] hover:underline text-accent text-right"
                            >
                              Forgot Password?
                            </button>
                          )}
                        </label>
                        <div className="relative">
                          <Lock className="w-4 h-4 text-brown-light/50 absolute left-3.5 top-3.5" />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-10 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3.5 top-3 text-brown-light/60 hover:text-brown-dark"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Confirm Password (Only on Register) */}
                      {!isLogin && (
                        <div className="flex flex-col gap-1.5">
                          <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase">
                            CONFIRM PASSWORD
                          </label>
                          <div className="relative">
                            <Lock className="w-4 h-4 text-brown-light/50 absolute left-3.5 top-3.5" />
                            <input
                              type={showPassword ? 'text' : 'password'}
                              required
                              placeholder="••••••••"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all"
                            />
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    /* Phone Authentication Field */
                    <>
                      {/* Name input on registration with phone */}
                      {!isLogin && !showOtpField && (
                        <div className="flex flex-col gap-1.5">
                          <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase">
                            YOUR NAME
                          </label>
                          <div className="relative">
                            <User className="w-4 h-4 text-brown-light/50 absolute left-3.5 top-3.5" />
                            <input
                              type="text"
                              required
                              placeholder="Iipsita Sharma"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] transition-all"
                            />
                          </div>
                        </div>
                      )}

                      {/* Phone Input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase">
                          MOBILE NUMBER
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-brown-light/50 absolute left-3.5 top-3.5" />
                          <span className="absolute left-9 top-3.5 text-sm font-bold text-brown-dark/70">+91</span>
                          <input
                            type="tel"
                            required
                            disabled={showOtpField}
                            maxLength={10}
                            placeholder="99999 99999"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                            className="w-full pl-17 pr-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] disabled:opacity-60 transition-all"
                          />
                        </div>
                      </div>

                      {/* OTP Input */}
                      {showOtpField && (
                        <div className="flex flex-col gap-1.5 animate-in fade-in duration-200">
                          <label className="font-display font-black text-[10px] text-brown-light tracking-widest uppercase flex justify-between">
                            <span>ENTER 6-DIGIT OTP</span>
                            <button
                              type="button"
                              onClick={() => {
                                setShowOtpField(false);
                                setOtp('');
                              }}
                              className="text-[9px] hover:underline text-accent text-right"
                            >
                              Change Number
                            </button>
                          </label>
                          <div className="relative">
                            <KeyRound className="w-4 h-4 text-brown-light/50 absolute left-3.5 top-3.5" />
                            <input
                              type="text"
                              required
                              maxLength={6}
                              placeholder="123456"
                              value={otp}
                              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-brown-dark bg-cream-light text-brown-dark font-semibold text-sm focus:outline-none focus:bg-cream-warm focus:shadow-[2px_2px_0px_0px_rgba(60,34,24,1)] tracking-widest transition-all"
                            />
                          </div>
                          <span className="text-[10px] font-bold text-emerald-700 italic mt-0.5">
                            * Mock verification OTP auto-filled: 123456
                          </span>
                        </div>
                      )}
                    </>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 flex items-center justify-center gap-2 h-14 bg-brown-dark hover:bg-brown-default text-cream-light font-display font-black text-sm tracking-widest rounded-2xl border-2 border-brown-dark shadow-[4px_4px_0px_0px_rgba(217,119,6,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(217,119,6,1)] active:translate-y-0 transition-all disabled:opacity-75 disabled:pointer-events-none text-center cursor-pointer"
                  >
                    {loading ? (
                      <span className="inline-block w-5 h-5 border-2 border-cream-light border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        {authMethod === 'email' 
                          ? (isLogin ? 'LOG IN NOW' : 'REGISTER & BAKE') 
                          : (showOtpField ? 'VERIFY & SIGN IN' : 'SEND OTP CODE')}
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-[10px] font-bold text-center text-brown-light/60">
                  By continuing, you agree to Ameeco&apos;s gourmet standard, terms, & cookie guidelines.
                </p>
              </div>
            )}
          </div>
        </main>

        {/* Footer info copy */}
        <footer className="bg-brown-dark text-cream-light py-8 px-6 text-center text-[10px] font-black tracking-widest uppercase border-t-4 border-brown-dark relative z-10">
          <span>© {new Date().getFullYear()} AMEECO DESSERTS. ALL RIGHTS RESERVED.</span>
        </footer>

        {/* Cart drawer overlay */}
        <Cart />

      </div>
    </CartProvider>
  );
}
