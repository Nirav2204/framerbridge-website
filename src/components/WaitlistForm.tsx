"use client";

import { useState, FormEvent } from "react";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setStatus("loading");

    // Simulate API call — replace with your backend endpoint
    await new Promise((r) => setTimeout(r, 800));

    const waitlist = JSON.parse(
      localStorage.getItem("framerbridge_waitlist") || "[]"
    );
    waitlist.push({ name, email, date: new Date().toISOString() });
    localStorage.setItem("framerbridge_waitlist", JSON.stringify(waitlist));

    setStatus("success");
    setName("");
    setEmail("");

    setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <div className="bg-[rgba(20,20,30,0.8)] border border-white/10 rounded-[20px] p-9 backdrop-blur-2xl">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-[22px] font-bold tracking-tight mb-7">
        Join the waitlist
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3.5">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            autoComplete="name"
            className="w-full px-[18px] py-3.5 bg-white/5 border border-white/10 rounded-xl text-white text-[15px] placeholder-gray-400 outline-none transition-all focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(79,70,229,0.15)]"
          />
        </div>
        <div className="mb-3.5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            autoComplete="email"
            className="w-full px-[18px] py-3.5 bg-white/5 border border-white/10 rounded-xl text-white text-[15px] placeholder-gray-400 outline-none transition-all focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(79,70,229,0.15)]"
          />
        </div>
        <button
          type="submit"
          disabled={status !== "idle"}
          className={`w-full py-3.5 rounded-xl text-base font-semibold transition-all cursor-pointer mt-1.5 ${
            status === "success"
              ? "bg-emerald-600 text-white"
              : "bg-indigo-600 text-white hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,70,229,0.4)]"
          } disabled:cursor-not-allowed`}
        >
          {status === "loading"
            ? "Joining..."
            : status === "success"
              ? "You're on the list!"
              : "Join the waitlist"}
        </button>
      </form>

      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/10">
        <div className="flex">
          {[
            "from-orange-500 to-red-500",
            "from-violet-500 to-indigo-500",
            "from-cyan-500 to-blue-500",
            "from-emerald-500 to-green-600",
          ].map((gradient, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full border-2 border-[#0A0A0F] bg-gradient-to-br ${gradient} flex items-center justify-center text-[13px] font-semibold text-white ${i > 0 ? "-ml-2" : ""}`}
            >
              {["A", "K", "M", "S"][i]}
            </div>
          ))}
        </div>
        <span className="text-[13px] text-gray-400 font-medium">
          Join <strong className="text-white">500+</strong> others on the
          waitlist
        </span>
      </div>
    </div>
  );
}
