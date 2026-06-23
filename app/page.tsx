"use client";

import { useState } from "react";

const menuData = [
  {
    day: "Monday",
    theme: "Pasta Monday",
    items: [
      { name: "Chicken Alfredo", price: 15 },
      { name: "Shrimp Alfredo", price: 18 },
      { name: "Lamb Chop Alfredo", price: 25 },
      { name: "Chicken Rasta Pasta", price: 16 },
      { name: "Shrimp Rasta Pasta", price: 18 },
      { name: "Lamb Chop Rasta Pasta", price: 25 },
    ],
    note: "All pasta plates served with garlic bread.",
  },
  {
    day: "Tuesday",
    theme: "Munchie Tuesdays",
    items: [
      { name: "Classic Munchie Box (Cheeseburger, Loaded Bacon Cheese Fries, 3 Hot Cheeto Mozzarella Sticks)", price: 17 },
      { name: "Deluxe Munchie Box (Choice of Cheeseburger or 2 Hot Cheeto Birria Balls + Fries, 3 Mozz Sticks, 3 Wings)", price: 20 },
    ],
    note: "Add-Ons: Double Cheeseburger +$3 · 2 Birria Balls +$4 · 3 Wings +$5 · Mozzarella Stick +$2",
  },
  {
    day: "Wednesday",
    theme: "Wing Wednesday",
    items: [
      { name: "6 Piece Wing Combo (fries, Cajun corn & drink)", price: 15 },
      { name: "10 Piece Wing Combo (fries, Cajun corn & drink)", price: 19 },
      { name: "12 Piece Wing Combo (fries, Cajun corn & drink)", price: 21 },
    ],
    note: "Upgrade to loaded bacon cheese fries +$2",
  },
  {
    day: "Thursday",
    theme: "Stuffed Salmon Thursday",
    items: [
      { name: "Baked Salmon", price: 24 },
      { name: "Spinach & Cream Cheese Stuffed Salmon", price: 27 },
      { name: "Crab Stuffed Salmon", price: 30 },
      { name: "Spinach & Crab Stuffed Salmon", price: 32 },
    ],
    note: "Served with Mashed Potatoes & Green Beans.",
  },
  {
    day: "Friday",
    theme: "Fan Favorite Friday",
    items: [
      { name: "Birria Ball Alfredo Plate (2 Birria Balls & Alfredo Pasta)", price: 15 },
      { name: "Sampler Plate (2 Birria Balls, 4 Wings & Alfredo Pasta)", price: 20 },
      { name: "Birria Balls À La Carte (2 Birria Balls, no pasta)", price: 0 },
    ],
  },
  {
    day: "Saturday",
    theme: "Customers Choice",
    items: [],
    note: "Choose from any meal featured Monday–Friday. Pre-orders MUST be made at least 24 hours in advance.",
  },
  {
    day: "Sunday",
    theme: "Soulfood Sunday",
    items: [
      { name: "Baked Chicken (2 sides & cornbread)", price: 18 },
      { name: "Smothered Chicken (2 sides & cornbread)", price: 20 },
      { name: "Fried Catfish (2 sides & cornbread)", price: 20 },
      { name: "Salmon (2 sides & cornbread)", price: 24 },
    ],
    note: "Available 1st & 3rd Sunday only. Sides: Mac & Cheese, Collard Greens, Candied Yams. Add drink +$1",
  },
  {
    day: "Kids & Lite Bites",
    theme: "Budget-friendly options",
    items: [
      { name: "Alfredo Pasta (Add Chicken +$2)", price: 8 },
      { name: "Wings & Fries (4 wings + fries)", price: 8 },
      { name: "Cheeseburger & Fries (ketchup, mayo, lettuce, pickles & tomato)", price: 8 },
    ],
  },
];

type CartItem = { name: string; price: number; qty: number };

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [fulfillment, setFulfillment] = useState<"Pickup" | "Delivery">("Pickup");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [payment, setPayment] = useState("Cashapp");
  const [specialRequests, setSpecialRequests] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function addToCart(item: { name: string; price: number }) {
    setCart((prev) => {
      const existing = prev.find((c) => c.name === item.name);
      if (existing) return prev.map((c) => c.name === item.name ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
  }

  function removeFromCart(name: string) {
    setCart((prev) => {
      const existing = prev.find((c) => c.name === name);
      if (!existing) return prev;
      if (existing.qty === 1) return prev.filter((c) => c.name !== name);
      return prev.map((c) => c.name === name ? { ...c, qty: c.qty - 1 } : c);
    });
  }

  function getQty(name: string) {
    return cart.find((c) => c.name === name)?.qty ?? 0;
  }

  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);

  function handleOrder() {
    const orderLines = cart.map((c) => `  - ${c.name}${c.price > 0 ? ` x${c.qty} ($${(c.price * c.qty)})` : ""}`).join("\n");
    const body = [
      `Hi Amber! I'd like to place an order:`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Fulfillment: ${fulfillment}`,
      `Pickup Date & Time: ${pickupDate} at ${pickupTime}`,
      `Payment: ${payment}`,
      ``,
      `Order:`,
      orderLines,
      total > 0 ? `\nTotal: $${total}` : "",
      specialRequests ? `\nSpecial Requests: ${specialRequests}` : "",
    ].filter(Boolean).join("\n");

    const smsUrl = `sms:5626677845?body=${encodeURIComponent(body)}`;
    window.open(smsUrl, "_blank");
    setSubmitted(true);
  }

  const canSubmit = name && phone && cart.length > 0 && pickupDate && pickupTime;

  return (
    <main className="min-h-screen bg-[#1a0a00] text-white font-sans">

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-[#3b1200] to-[#1a0a00]">
        <p className="text-amber-400 tracking-widest uppercase text-sm font-semibold mb-3">San Jacinto, CA</p>
        <h1 className="text-5xl sm:text-7xl font-bold text-amber-300 drop-shadow-lg mb-4">
          Plates by Amber
        </h1>
        <p className="text-lg sm:text-xl text-amber-100 max-w-xl mb-8">
          Homemade food, made with love. Weekly rotating menus with pickup and delivery available.
        </p>
        <a href="#order" className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg">
          Order Now
        </a>
      </section>

      {/* Order Section */}
      <section id="order" className="px-4 py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-300 text-center mb-2">Place Your Order</h2>
        <p className="text-amber-500 text-center text-sm mb-10">Select your items, fill in your details, then hit Submit — your order will open in your texting app ready to send.</p>

        {submitted ? (
          <div className="bg-[#2e1200] border border-amber-400 rounded-2xl p-10 text-center">
            <p className="text-4xl mb-4">🎉</p>
            <h3 className="text-2xl font-bold text-amber-300 mb-2">Order Ready to Send!</h3>
            <p className="text-amber-100 mb-6">Your texting app should have opened with your order pre-filled. Just hit send!</p>
            <button onClick={() => { setSubmitted(false); setCart([]); setName(""); setPhone(""); setPickupDate(""); setPickupTime(""); setSpecialRequests(""); }} className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-6 py-3 rounded-full transition-colors">
              Place Another Order
            </button>
          </div>
        ) : (
          <div className="space-y-8">

            {/* Menu selection */}
            {menuData.map((section) => (
              <div key={section.day} className="bg-[#2e1200] border border-amber-900 rounded-2xl overflow-hidden">
                <div className="bg-[#3b1800] px-6 py-4">
                  <span className="text-xl font-extrabold text-amber-300 uppercase tracking-wide">{section.day}</span>
                  <span className="ml-3 text-amber-500 italic">{section.theme}</span>
                </div>
                <div className="px-6 py-4">
                  {section.items.length === 0 ? (
                    <p className="text-amber-500 text-sm">{section.note}</p>
                  ) : (
                    <>
                      <ul className="space-y-3">
                        {section.items.map((item) => (
                          <li key={item.name} className="flex items-center justify-between gap-4">
                            <div className="flex-1">
                              <span className="text-amber-100 text-sm">{item.name}</span>
                              {item.price > 0 && <span className="ml-2 text-amber-400 font-semibold">${item.price}</span>}
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              {getQty(item.name) > 0 && (
                                <>
                                  <button onClick={() => removeFromCart(item.name)} className="w-7 h-7 rounded-full bg-amber-900 hover:bg-amber-700 text-white font-bold transition-colors flex items-center justify-center">−</button>
                                  <span className="w-5 text-center text-amber-300 font-bold">{getQty(item.name)}</span>
                                </>
                              )}
                              <button onClick={() => addToCart(item)} className="w-7 h-7 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-bold transition-colors flex items-center justify-center">+</button>
                            </div>
                          </li>
                        ))}
                      </ul>
                      {section.note && <p className="text-amber-700 text-xs mt-4 pt-3 border-t border-amber-900">{section.note}</p>}
                    </>
                  )}
                </div>
              </div>
            ))}

            {/* Cart summary */}
            {cart.length > 0 && (
              <div className="bg-[#3b1800] border border-amber-400 rounded-2xl px-6 py-5">
                <h3 className="text-lg font-bold text-amber-300 mb-3">Your Order</h3>
                <ul className="space-y-2 mb-3">
                  {cart.map((c) => (
                    <li key={c.name} className="flex justify-between text-amber-100 text-sm">
                      <span>{c.name} x{c.qty}</span>
                      {c.price > 0 && <span className="text-amber-400">${c.price * c.qty}</span>}
                    </li>
                  ))}
                </ul>
                {total > 0 && <p className="text-amber-300 font-bold text-right border-t border-amber-700 pt-2">Total: ${total}</p>}
              </div>
            )}

            {/* Customer details */}
            <div className="bg-[#2e1200] border border-amber-900 rounded-2xl px-6 py-6 space-y-4">
              <h3 className="text-lg font-bold text-amber-300">Your Details</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-amber-400 text-sm mb-1">First & Last Name *</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Smith" className="w-full bg-[#1a0a00] border border-amber-800 rounded-lg px-4 py-2 text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-400" />
                </div>
                <div>
                  <label className="block text-amber-400 text-sm mb-1">Phone Number *</label>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="555-555-5555" className="w-full bg-[#1a0a00] border border-amber-800 rounded-lg px-4 py-2 text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-400" />
                </div>
              </div>

              <div>
                <label className="block text-amber-400 text-sm mb-1">Pickup or Delivery? *</label>
                <div className="flex gap-4">
                  {(["Pickup", "Delivery"] as const).map((opt) => (
                    <button key={opt} onClick={() => setFulfillment(opt)} className={`flex-1 py-2 rounded-lg border font-semibold transition-colors ${fulfillment === opt ? "bg-amber-400 text-black border-amber-400" : "border-amber-800 text-amber-400 hover:border-amber-400"}`}>
                      {opt} {opt === "Delivery" ? "(orders $25+)" : "(San Jacinto)"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-amber-400 text-sm mb-1">Desired Date *</label>
                  <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} className="w-full bg-[#1a0a00] border border-amber-800 rounded-lg px-4 py-2 text-amber-100 focus:outline-none focus:border-amber-400" />
                </div>
                <div>
                  <label className="block text-amber-400 text-sm mb-1">Desired Time *</label>
                  <input type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} className="w-full bg-[#1a0a00] border border-amber-800 rounded-lg px-4 py-2 text-amber-100 focus:outline-none focus:border-amber-400" />
                </div>
              </div>

              <div>
                <label className="block text-amber-400 text-sm mb-1">Payment Method *</label>
                <div className="flex gap-3 flex-wrap">
                  {["Cashapp", "Zelle", "Apple Pay"].map((opt) => (
                    <button key={opt} onClick={() => setPayment(opt)} className={`px-4 py-2 rounded-lg border font-semibold transition-colors ${payment === opt ? "bg-amber-400 text-black border-amber-400" : "border-amber-800 text-amber-400 hover:border-amber-400"}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-amber-400 text-sm mb-1">Special Requests</label>
                <textarea value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} placeholder="Allergies, sauce preferences, extra items, etc." rows={3} className="w-full bg-[#1a0a00] border border-amber-800 rounded-lg px-4 py-2 text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-400 resize-none" />
              </div>
            </div>

            <button
              onClick={handleOrder}
              disabled={!canSubmit}
              className="w-full bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed text-black font-bold text-xl py-5 rounded-full transition-colors shadow-lg"
            >
              {canSubmit ? "Submit Order via Text 📱" : "Fill out all required fields to order"}
            </button>
          </div>
        )}
      </section>

      {/* Contact */}
      <section className="bg-[#2e1200] px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-amber-300 mb-6">Get in Touch</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-amber-100">
          <a href="tel:5626677845" className="hover:text-amber-300 transition-colors text-lg">📞 562-667-7845</a>
          <span className="hidden sm:inline text-amber-700">|</span>
          <a href="https://www.tiktok.com/@platesbyamber" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors text-lg">🎵 TikTok: @platesbyamber</a>
        </div>
        <div className="mt-6 text-amber-500 text-sm space-y-1">
          <p>💳 Cashapp: $platedbyamber &nbsp;·&nbsp; Zelle &amp; Apple Pay accepted</p>
          <p>📍 Pickup: San Jacinto, CA &nbsp;·&nbsp; Delivery available on orders $25+</p>
        </div>
      </section>

      <footer className="px-6 py-6 text-center text-amber-800 text-sm">
        © {new Date().getFullYear()} Plates by Amber. All rights reserved.
      </footer>
    </main>
  );
}
