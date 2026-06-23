"use client";

import { useState, useEffect } from "react";
import type { MenuSection, MenuItem } from "@/lib/menu";
import { defaultMenu } from "@/lib/menu";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [menu, setMenu] = useState<MenuSection[]>(defaultMenu);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  useEffect(() => {
    if (authed) {
      fetch("/api/menu").then((r) => r.json()).then(setMenu);
    }
  }, [authed]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, menu }),
    });
    if (res.ok) {
      setAuthed(true);
      setAuthError("");
    } else {
      setAuthError("Wrong password. Try again.");
    }
  }

  async function handleSave() {
    setSaving(true);
    setSaveMsg("");
    const res = await fetch("/api/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, menu }),
    });
    setSaving(false);
    setSaveMsg(res.ok ? "✅ Menu saved!" : "❌ Save failed.");
    setTimeout(() => setSaveMsg(""), 3000);
  }

  function updateItem(sIdx: number, iIdx: number, field: keyof MenuItem, value: string | number) {
    setMenu((prev) => prev.map((s, si) =>
      si !== sIdx ? s : {
        ...s,
        items: s.items.map((item, ii) =>
          ii !== iIdx ? item : { ...item, [field]: value }
        ),
      }
    ));
  }

  function addItem(sIdx: number) {
    setMenu((prev) => prev.map((s, si) =>
      si !== sIdx ? s : { ...s, items: [...s.items, { name: "New Item", price: 0, desc: "" }] }
    ));
  }

  function removeItem(sIdx: number, iIdx: number) {
    setMenu((prev) => prev.map((s, si) =>
      si !== sIdx ? s : { ...s, items: s.items.filter((_, ii) => ii !== iIdx) }
    ));
  }

  function updateNote(sIdx: number, value: string) {
    setMenu((prev) => prev.map((s, si) => si !== sIdx ? s : { ...s, note: value }));
  }

  function updateTheme(sIdx: number, value: string) {
    setMenu((prev) => prev.map((s, si) => si !== sIdx ? s : { ...s, theme: value }));
  }

  if (!authed) {
    return (
      <main className="min-h-screen bg-[#1a0a00] flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="bg-[#2e1200] border border-amber-900 rounded-2xl p-8 w-full max-w-sm text-center">
          <h1 className="text-2xl font-bold text-amber-300 mb-2">Admin Login</h1>
          <p className="text-amber-500 text-sm mb-6">Plates by Amber staff only</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full bg-[#1a0a00] border border-amber-800 rounded-lg px-4 py-3 text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-400 mb-4"
          />
          {authError && <p className="text-red-400 text-sm mb-3">{authError}</p>}
          <button type="submit" className="w-full bg-amber-400 hover:bg-amber-300 text-black font-bold py-3 rounded-full transition-colors">
            Login
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#1a0a00] px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-amber-300">Menu Editor</h1>
            <p className="text-amber-500 text-sm mt-1">Make changes then click Save Menu at the bottom.</p>
          </div>
          <a href="/" className="text-amber-500 hover:text-amber-300 text-sm transition-colors">← Back to site</a>
        </div>

        <div className="space-y-8">
          {menu.map((section, sIdx) => (
            <div key={sIdx} className="bg-[#2e1200] border border-amber-900 rounded-2xl overflow-hidden">
              <div className="bg-[#3b1800] px-6 py-4 flex flex-col sm:flex-row gap-3">
                <span className="text-amber-300 font-bold text-lg w-32 shrink-0">{section.day}</span>
                <input
                  value={section.theme}
                  onChange={(e) => updateTheme(sIdx, e.target.value)}
                  className="flex-1 bg-[#1a0a00] border border-amber-800 rounded-lg px-3 py-1 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
                  placeholder="Theme name"
                />
              </div>

              <div className="px-6 py-5 space-y-3">
                {section.items.map((item, iIdx) => (
                  <div key={iIdx} className="grid grid-cols-[1fr_80px_auto] gap-2 items-start">
                    <div className="space-y-1">
                      <input
                        value={item.name}
                        onChange={(e) => updateItem(sIdx, iIdx, "name", e.target.value)}
                        className="w-full bg-[#1a0a00] border border-amber-800 rounded-lg px-3 py-2 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
                        placeholder="Item name"
                      />
                      <input
                        value={item.desc ?? ""}
                        onChange={(e) => updateItem(sIdx, iIdx, "desc", e.target.value)}
                        className="w-full bg-[#1a0a00] border border-amber-900 rounded-lg px-3 py-1.5 text-amber-500 text-xs focus:outline-none focus:border-amber-700"
                        placeholder="Description (optional)"
                      />
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-amber-500 text-sm">$</span>
                      <input
                        type="number"
                        min="0"
                        value={item.price}
                        onChange={(e) => updateItem(sIdx, iIdx, "price", Number(e.target.value))}
                        className="w-full bg-[#1a0a00] border border-amber-800 rounded-lg pl-6 pr-2 py-2 text-amber-100 text-sm focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <button
                      onClick={() => removeItem(sIdx, iIdx)}
                      className="text-red-700 hover:text-red-400 font-bold text-lg transition-colors mt-1"
                      title="Remove item"
                    >
                      ×
                    </button>
                  </div>
                ))}

                <button
                  onClick={() => addItem(sIdx)}
                  className="text-amber-600 hover:text-amber-400 text-sm font-semibold transition-colors mt-1"
                >
                  + Add item
                </button>

                <div className="mt-3 pt-3 border-t border-amber-900">
                  <label className="block text-amber-700 text-xs mb-1">Section note</label>
                  <input
                    value={section.note ?? ""}
                    onChange={(e) => updateNote(sIdx, e.target.value)}
                    className="w-full bg-[#1a0a00] border border-amber-900 rounded-lg px-3 py-2 text-amber-500 text-xs focus:outline-none focus:border-amber-700"
                    placeholder="Note shown at the bottom of this section"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-black font-bold text-lg px-10 py-4 rounded-full transition-colors shadow-lg"
          >
            {saving ? "Saving…" : "Save Menu"}
          </button>
          {saveMsg && <span className="text-amber-300 font-medium">{saveMsg}</span>}
        </div>
      </div>
    </main>
  );
}
