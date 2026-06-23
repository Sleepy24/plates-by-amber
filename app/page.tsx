export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a0a00] text-white font-sans">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-[#3b1200] to-[#1a0a00]">
        <p className="text-amber-400 tracking-widest uppercase text-sm font-semibold mb-3">San Jacinto, CA</p>
        <h1 className="text-5xl sm:text-7xl font-bold text-amber-300 drop-shadow-lg mb-4">
          Plates by Amber
        </h1>
        <p className="text-lg sm:text-xl text-amber-100 max-w-xl mb-8">
          Homemade food, made with love. Fried chicken, wings, mac & cheese, yams, and more — available for pickup and delivery.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe-BWbuNUvDDqYxyPK5Ol4EhycRa7y__MHo8M6fNoq3kN-ljA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
        >
          Place a Pre-Order
        </a>
      </section>

      {/* Menu highlights */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-300 text-center mb-10">What&apos;s on the Menu</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          {[
            { emoji: "🍗", name: "Fried Chicken Plates" },
            { emoji: "🔥", name: "Wings" },
            { emoji: "🧀", name: "Mac & Cheese" },
            { emoji: "🍠", name: "Yams" },
            { emoji: "🍝", name: "Pasta" },
            { emoji: "🐟", name: "Salmon" },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-[#2e1200] border border-amber-900 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-amber-400 transition-colors"
            >
              <span className="text-4xl">{item.emoji}</span>
              <span className="text-amber-100 font-medium">{item.name}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-amber-500 mt-8 text-sm">
          Menu changes weekly — follow on TikTok for the latest drops.
        </p>
      </section>

      {/* How to order */}
      <section className="bg-[#2e1200] px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-300 text-center mb-10">How to Order</h2>
          <ol className="space-y-6">
            {[
              { step: "1", text: "Fill out the pre-order form with your name, phone number, and whether you want pickup or delivery." },
              { step: "2", text: "Text your order details to 562-667-7845 — include your name, order, desired pickup date & time, and payment method." },
              { step: "3", text: "Pay via Cashapp ($platedbyamber), Zelle, or Apple Pay." },
              { step: "4", text: "Pick up in San Jacinto or receive delivery (available for orders $25+)." },
            ].map((item) => (
              <li key={item.step} className="flex gap-5 items-start">
                <span className="bg-amber-400 text-black font-bold rounded-full w-9 h-9 flex items-center justify-center shrink-0 text-lg">
                  {item.step}
                </span>
                <p className="text-amber-100 leading-relaxed pt-1">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Order CTA */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-amber-300 mb-4">Ready to Order?</h2>
        <p className="text-amber-200 mb-8">Pre-orders are taken weekly. Grab your plate before they&apos;re gone!</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe-BWbuNUvDDqYxyPK5Ol4EhycRa7y__MHo8M6fNoq3kN-ljA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg inline-block"
        >
          Pre-Order Form
        </a>
      </section>

      {/* Contact */}
      <section className="bg-[#2e1200] px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-amber-300 mb-6">Get in Touch</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-amber-100">
          <a href="tel:5626677845" className="hover:text-amber-300 transition-colors text-lg">
            📞 562-667-7845
          </a>
          <span className="hidden sm:inline text-amber-700">|</span>
          <a
            href="https://www.tiktok.com/@platesbyamber"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors text-lg"
          >
            🎵 TikTok: @platesbyamber
          </a>
        </div>
        <div className="mt-6 text-amber-500 text-sm space-y-1">
          <p>💳 Cashapp: $platedbyamber</p>
          <p>💳 Zelle & Apple Pay accepted</p>
          <p>📍 Pickup: San Jacinto, CA</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 text-center text-amber-800 text-sm">
        © {new Date().getFullYear()} Plates by Amber. All rights reserved.
      </footer>
    </main>
  );
}
