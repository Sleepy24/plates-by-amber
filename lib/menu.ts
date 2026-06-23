export type MenuItem = {
  name: string;
  price: number;
  desc?: string;
};

export type MenuSection = {
  day: string;
  theme: string;
  items: MenuItem[];
  note?: string;
};

export const defaultMenu: MenuSection[] = [
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
      { name: "Classic Munchie Box", price: 17, desc: "Cheeseburger, Loaded Bacon Cheese Fries, 3 Hot Cheeto Mozzarella Sticks" },
      { name: "Deluxe Munchie Box", price: 20, desc: "Choice of Cheeseburger or 2 Hot Cheeto Birria Balls + Fries, 3 Mozz Sticks, 3 Wings" },
    ],
    note: "Add-Ons: Double Cheeseburger +$3 · 2 Birria Balls +$4 · 3 Wings +$5 · Mozzarella Stick +$2",
  },
  {
    day: "Wednesday",
    theme: "Wing Wednesday",
    items: [
      { name: "6 Piece Wing Combo", price: 15, desc: "Includes fries, Cajun corn & drink" },
      { name: "10 Piece Wing Combo", price: 19, desc: "Includes fries, Cajun corn & drink" },
      { name: "12 Piece Wing Combo", price: 21, desc: "Includes fries, Cajun corn & drink" },
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
      { name: "Birria Ball Alfredo Plate", price: 15, desc: "2 Birria Balls & Alfredo Pasta" },
      { name: "Sampler Plate", price: 20, desc: "2 Birria Balls, 4 Wings & Alfredo Pasta" },
      { name: "Birria Balls À La Carte", price: 0, desc: "2 Birria Balls, no pasta included" },
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
      { name: "Baked Chicken", price: 18, desc: "Includes 2 sides & cornbread" },
      { name: "Smothered Chicken", price: 20, desc: "Includes 2 sides & cornbread" },
      { name: "Fried Catfish", price: 20, desc: "Includes 2 sides & cornbread" },
      { name: "Salmon", price: 24, desc: "Includes 2 sides & cornbread" },
    ],
    note: "Available 1st & 3rd Sunday only. Sides: Mac & Cheese, Collard Greens, Candied Yams. Add drink +$1",
  },
  {
    day: "Kids & Lite Bites",
    theme: "Budget-friendly options",
    items: [
      { name: "Alfredo Pasta", price: 8, desc: "Add Chicken +$2" },
      { name: "Wings & Fries", price: 8, desc: "4 wings + fries" },
      { name: "Cheeseburger & Fries", price: 8, desc: "Served with ketchup, mayo, lettuce, pickles & tomato" },
    ],
  },
];
