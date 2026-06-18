"use client";

import React, { useState } from 'react';
import { useCart } from './CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, CreditCard, CheckCircle, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Cart() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    clearCart,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'success'>('cart');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Gurgaon');
  const [phone, setPhone] = useState('');

  if (!isCartOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address || !phone) return;

    // Trigger full screen success confetti blast
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#3c2218', '#ebdccb', '#d97706'],
    });

    setCheckoutStep('success');
  };

  const handleCloseSuccess = () => {
    clearCart();
    setCheckoutStep('cart');
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop overlay */}
      <div
        onClick={() => {
          if (checkoutStep !== 'success') {
            setIsCartOpen(false);
          }
        }}
        className="absolute inset-0 bg-brown-dark/45 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-cream-default h-full border-l-4 border-brown-dark shadow-[-8px_0px_24px_rgba(60,34,24,0.15)] flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 border-b-2 border-brown-dark flex items-center justify-between bg-cream-warm">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-brown-dark" />
            <h2 className="font-display font-black text-xl text-brown-dark uppercase tracking-wide">
              {checkoutStep === 'success' ? 'Order Success!' : 'Shopping Bag'}
            </h2>
          </div>
          {checkoutStep !== 'success' && (
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-lg border border-brown-dark/20 hover:border-brown-dark hover:bg-cream-light text-brown-dark transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Dynamic Steps Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {checkoutStep === 'cart' && (
            <>
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full border-4 border-dashed border-brown-light/30 flex items-center justify-center text-brown-light/40">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-lg text-brown-dark uppercase mb-1">
                      BAG IS EMPTY
                    </h3>
                    <p className="text-sm text-brown-light max-w-[240px]">
                      Add chunky cookies and gelato to get this vibe going.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border-2 border-brown-dark rounded-2xl p-4 flex gap-4 shadow-[3px_3px_0px_0px_rgba(60,34,24,1)]"
                    >
                      {/* CSS-based Mini Visual Icon */}
                      <div className="w-12 h-12 rounded-xl bg-cream-warm border border-brown-dark/20 flex items-center justify-center flex-shrink-0 text-lg">
                        {item.type === 'cookie' ? '🍪' : item.type === 'gelato' ? '🍧' : '🎁'}
                      </div>

                      {/* Item Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-black text-sm text-brown-dark uppercase truncate">
                          {item.name}
                        </h4>
                        <p className="text-[10px] font-semibold text-brown-light truncate mb-2">
                          {item.details}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          {/* Quantity selector */}
                          <div className="flex items-center border border-brown-dark rounded-lg overflow-hidden bg-cream-light">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-2.5 py-1 hover:bg-cream-dark transition-colors text-brown-dark"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 text-xs font-black text-brown-dark">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-2.5 py-1 hover:bg-cream-dark transition-colors text-brown-dark"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          
                          {/* Price details */}
                          <span className="font-display font-black text-sm text-brown-dark">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-brown-light/40 hover:text-red-500 transition-colors p-1 align-top self-start"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {checkoutStep === 'shipping' && (
            <form onSubmit={handleCheckout} className="flex flex-col gap-5">
              <h3 className="font-display font-black text-sm text-brown-light tracking-widest uppercase mb-2">
                SHIPPING DETAILS
              </h3>
              
              <div>
                <label className="block font-display font-bold text-xs text-brown-dark uppercase mb-1">
                  DELIVERY CITY
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCity('Gurgaon')}
                    className={`py-2 rounded-lg border-2 font-display font-bold text-xs transition-all ${
                      city === 'Gurgaon'
                        ? 'bg-brown-dark text-cream-light border-brown-dark'
                        : 'bg-white text-brown-dark border-brown-dark/20 hover:border-brown-dark'
                    }`}
                  >
                    GURGAON
                  </button>
                  <button
                    type="button"
                    onClick={() => setCity('Delhi')}
                    className={`py-2 rounded-lg border-2 font-display font-bold text-xs transition-all ${
                      city === 'Delhi'
                        ? 'bg-brown-dark text-cream-light border-brown-dark'
                        : 'bg-white text-brown-dark border-brown-dark/20 hover:border-brown-dark'
                    }`}
                  >
                    DELHI
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-display font-bold text-xs text-brown-dark uppercase mb-1">
                  DELIVERY ADDRESS
                </label>
                <textarea
                  required
                  placeholder="Street details, house number, landmark..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full h-24 p-3 rounded-xl border-2 border-brown-dark bg-white text-brown-dark font-medium text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block font-display font-bold text-xs text-brown-dark uppercase mb-1">
                  WHATSAPP NUMBER
                </label>
                <input
                  required
                  type="tel"
                  placeholder="e.g. +91 99999 99999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-xl border-2 border-brown-dark bg-white text-brown-dark font-medium text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="bg-cream-warm border border-brown-dark/25 p-4 rounded-xl flex gap-3">
                <Truck className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-xs font-semibold text-brown-light leading-relaxed">
                  Delivering fresh within 45 minutes in Delhi NCR. All orders are hand-packed under sanitized controls.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="py-3.5 border-2 border-brown-dark bg-white text-brown-dark rounded-xl font-display font-black text-xs tracking-widest uppercase hover:bg-cream-warm"
                >
                  BACK TO BAG
                </button>
                <button
                  type="submit"
                  className="py-3.5 border-2 border-brown-dark bg-accent text-white rounded-xl font-display font-black text-xs tracking-widest uppercase hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(60,34,24,1)] active:translate-y-0"
                >
                  PLACE ORDER
                </button>
              </div>
            </form>
          )}

          {checkoutStep === 'success' && (
            <div className="h-full flex flex-col items-center justify-center text-center p-4">
              <CheckCircle className="w-16 h-16 text-emerald-600 mb-4 animate-bounce" />
              <h3 className="font-display font-black text-2xl text-brown-dark uppercase tracking-tight mb-2">
                Order Received!
              </h3>
              <p className="text-sm font-medium text-brown-light leading-relaxed mb-6 max-w-[260px]">
                Your gourmet treats are being packed. We will ping you on Whatsapp at <strong className="text-brown-dark">{phone}</strong> with tracking details.
              </p>
              
              <button
                onClick={handleCloseSuccess}
                className="w-full py-4 border-2 border-brown-dark bg-brown-dark text-cream-light rounded-xl font-display font-black text-xs tracking-widest uppercase hover:bg-brown-default shadow-[3px_3px_0px_0px_rgba(217,119,6,1)]"
              >
                CRAVE MORE
              </button>
            </div>
          )}
        </div>

        {/* Footer math (Only in Cart / Shipping step) */}
        {cart.length > 0 && checkoutStep !== 'success' && (
          <div className="p-6 border-t-2 border-brown-dark bg-cream-warm">
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex justify-between text-xs font-bold text-brown-light">
                <span>SUBTOTAL</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-brown-light">
                <span>SHIPPING</span>
                <span className="text-emerald-600 uppercase font-black">FREE</span>
              </div>
              <div className="h-0.5 bg-brown-dark/15 w-full my-1" />
              <div className="flex justify-between font-display font-black text-lg text-brown-dark">
                <span>TOTAL</span>
                <span>₹{cartTotal}</span>
              </div>
            </div>

            {checkoutStep === 'cart' && (
              <button
                onClick={() => setCheckoutStep('shipping')}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-brown-dark text-cream-light font-display font-black text-sm tracking-widest border border-brown-dark hover:bg-brown-default shadow-[4px_4px_0px_0px_rgba(217,119,6,1)] transition-transform hover:-translate-y-0.5"
              >
                <CreditCard className="w-4 h-4" />
                CHECKOUT DETAILS
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
