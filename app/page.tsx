export default function Home() {
  const menu = [
    {
      day: "Monday",
      theme: "Pasta Monday",
      items: [
        { name: "Chicken Alfredo", price: "$15" },
        { name: "Shrimp Alfredo", price: "$18" },
        { name: "Lamb Chop Alfredo", price: "$25" },
        { name: "Chicken Rasta Pasta", price: "$16" },
        { name: "Shrimp Rasta Pasta", price: "$18" },
        { name: "Lamb Chop Rasta Pasta", price: "$25" },
      ],
      note: "All pasta plates served with garlic bread.",
    },
    {
      day: "Tuesday",
      theme: "Munchie Tuesdays",
      items: [
        {
          name: "Classic Munchie Box",
          price: "$17",
          desc: "Cheeseburger, Loaded Bacon Cheese Fries, 3 Hot Cheeto Mozzarella Sticks",
        },
        {
          name: "Deluxe Munchie Box",
          price: "$20",
          desc: "Choice of Cheeseburger or 2 Hot Cheeto Birria Balls + Loaded Bacon Cheese Fries, 3 Hot Cheeto Mozzarella Sticks, 3 Wings (BBQ, Buffalo, Lemon Pepper, or Hot Lemon Pepper)",
        },
      ],
      note: "Add-Ons: Upgrade to Double Cheeseburger +$3 · 2 Birria Balls +$4 · 3 Wings +$5 · Mozzarella Stick +$2",
    },
    {
      day: "Wednesday",
      theme: "Wing Wednesday",
      items: [
        { name: "6 Piece Wing Combo", price: "$15", desc: "Includes fries, Cajun corn & drink" },
        { name: "10 Piece Wing Combo", price: "$19", desc: "Includes fries, Cajun corn & drink" },
        { name: "12 Piece Wing Combo", price: "$21", desc: "Includes fries, Cajun corn & drink" },
      ],
      note: "Upgrade to loaded bacon cheese fries +$2",
    },
    {
      day: "Thursday",
      theme: "Stuffed Salmon Thursday",
      items: [
        { name: "Baked Salmon", price: "$24" },
        { name: "Spinach & Cream Cheese Stuffed Salmon", price: "$27" },
        { name: "Crab Stuffed Salmon", price: "$30" },
        { name: "Spinach & Crab Stuffed Salmon", price: "$32" },
      ],
      note: "Served with Mashed Potatoes & Green Beans.",
    },
    {
      day: "Friday",
      theme: "Fan Favorite Friday!",
      items: [
        { name: "Birria Ball Alfredo Plate", price: "$15", desc: "2 Birria Balls & Alfredo Pasta" },
        { name: "Sampler Plate", price: "$20", desc: "2 Birria Balls, 4 Wings & Alfredo Pasta" },
        { name: "Birria Balls (À La Carte)", price: "", desc: "2 Birria Balls — no pasta included" },
      ],
    },
    {
      day: "Saturday",
      theme: "Customers Choice!",
      items: [],
      note: "Choose from any meal featured Monday–Friday. Limited quantities available. Once an item sells out it will no longer be available for Saturday orders. Pre-orders MUST be made at least 24 hours in advance.",
    },
    {
      day: "Sunday",
      theme: "Soulfood Sunday",
      items: [
        { name: "Baked Chicken", price: "$18" },
        { name: "Smothered Chicken", price: "$20" },
        { name: "Fried Catfish", price: "$20" },
        { name: "Salmon", price: "$24" },
      ],
      note: "Available the 1st and 3rd Sunday of each month. Includes choice of 2 sides & cornbread. Sides: Mac & Cheese, Collard Greens, Candied Yams. Add drink +$1",
    },
  ];

  const kidsMenu = [
    { name: "Alfredo Pasta", price: "$8", desc: "Add Chicken +$2" },
    { name: "Wings & Fries", price: "$8", desc: "4 wings + fries" },
    { name: "Cheeseburger & Fries", price: "$8", desc: "Served with ketchup, mayo, lettuce, pickles & tomato" },
  ];

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
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe-BWbuNUvDDqYxyPK5Ol4EhycRa7y__MHo8M6fNoq3kN-ljA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
        >
          Place a Pre-Order
        </a>
      </section>

      {/* Weekly Menu */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-300 text-center mb-12">Weekly Menu</h2>
        <div className="space-y-10">
          {menu.map((day) => (
            <div key={day.day} className="bg-[#2e1200] border border-amber-900 rounded-2xl overflow-hidden">
              <div className="bg-[#3b1800] px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="text-2xl font-extrabold text-amber-300 uppercase tracking-wide">{day.day}</span>
                <span className="sm:ml-3 text-amber-500 italic text-lg">{day.theme}</span>
              </div>
              <div className="px-6 py-5">
                {day.items.length > 0 && (
                  <ul className="space-y-3 mb-4">
                    {day.items.map((item) => (
                      <li key={item.name} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                        <div>
                          <span className="text-amber-100 font-semibold">{item.name}</span>
                          {"desc" in item && item.desc && (
                            <p className="text-amber-500 text-sm mt-0.5">{item.desc}</p>
                          )}
                        </div>
                        {item.price && (
                          <span className="text-amber-400 font-bold shrink-0">{item.price}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                {day.note && (
                  <p className="text-amber-600 text-sm border-t border-amber-900 pt-3 mt-3">{day.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kids & Lite Bites */}
      <section className="px-4 py-12 max-w-4xl mx-auto">
        <div className="bg-[#2e1200] border border-amber-900 rounded-2xl overflow-hidden">
          <div className="bg-[#3b1800] px-6 py-4">
            <span className="text-2xl font-extrabold text-amber-300 uppercase tracking-wide">Kids &amp; Lite Bites Menu</span>
            <p className="text-amber-500 text-sm mt-1">Perfect for kids, lighter appetites, portion control, or anyone looking for a budget-friendly meal option.</p>
          </div>
          <div className="px-6 py-5">
            <ul className="space-y-3">
              {kidsMenu.map((item) => (
                <li key={item.name} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <div>
                    <span className="text-amber-100 font-semibold">{item.name}</span>
                    <p className="text-amber-500 text-sm mt-0.5">{item.desc}</p>
                  </div>
                  <span className="text-amber-400 font-bold shrink-0">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="bg-[#2e1200] px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-300 text-center mb-10">How to Order</h2>
          <ol className="space-y-6">
            {[
              "Fill out the pre-order form with your name, phone number, and pickup or delivery preference.",
              "Text your order to 562-667-7845 — include your name, order, desired pickup date & time, and payment method.",
              "Pay via Cashapp ($platedbyamber), Zelle, or Apple Pay.",
              "Pick up in San Jacinto or receive delivery (available for orders $25+).",
            ].map((text, i) => (
              <li key={i} className="flex gap-5 items-start">
                <span className="bg-amber-400 text-black font-bold rounded-full w-9 h-9 flex items-center justify-center shrink-0 text-lg">
                  {i + 1}
                </span>
                <p className="text-amber-100 leading-relaxed pt-1">{text}</p>
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
          <p>💳 Zelle &amp; Apple Pay accepted</p>
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
