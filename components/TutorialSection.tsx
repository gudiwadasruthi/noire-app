"use client";

import { useState } from "react";

/* ─── Step data ────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Cleanse & Dry Your Pulse Points",
    body: "Pat dry wrists, inner elbows, throat base, nape of neck. These pulse points radiate heat, turning skin into a natural fragrance diffuser.",
    tip: "In humid Indian climates, even slight moisture dilutes top notes. Completely dry skin is non-negotiable for NOIRÉ's full sillage.",
    hasTip: true,
    image: "/noire-ritual-wrist.png",
    imageAlt: "Drying pulse points — placeholder for Gemini-generated image",
  },
  {
    num: "02",
    title: "Prime With Unscented Moisturiser",
    body: "Apply fragrance-free moisturiser to pulse points, wait 2 minutes. Hydrated skin holds fragrance molecules far longer — extending sillage by 2–3 hours.",
    tip: "Skip for a cleaner, purer NOIRÉ signature. Choose based on your skin type and whether longevity or purity matters more today.",
    hasTip: true,
    image: null,
    imageAlt: null,
  },
  {
    num: "03",
    title: "Hold the Bottle at the Right Distance",
    body: "10–15 cm from skin. Too close = heavy concentrated patch. Too far = mist disperses before landing. This distance lets fragrance blend with your natural chemistry.",
    hasTip: false,
    image: null,
    imageAlt: null,
  },
  {
    num: "04",
    title: "Apply to 3–4 Pulse Points — No More",
    body: "Both inner wrists and base of throat. Optional: nape of neck or behind ears for deeper sillage. NOIRÉ is high-concentration EDP — restraint is power.",
    tip: "Never spray directly on hair. Spray into the air and walk through the mist instead. NOIRÉ's alcohol base can dry out strands.",
    hasTip: true,
    image: "/noire-pulse-points.png",
    imageAlt: "Pulse point placement — placeholder for Gemini-generated image",
  },
  {
    num: "05",
    title: "Do Not Rub — Let It Breathe",
    body: "Never rub wrists together. Friction heat crushes top notes and flattens the fragrance journey. Let the mist rest and settle. Trust the formula.",
    hasTip: false,
    image: null,
    imageAlt: null,
  },
  {
    num: "06",
    title: "Allow 3–5 Minutes for the Full Bloom",
    body: "NOIRÉ unfolds in stages: top notes (citrus, green) → heart notes (floral, spice) → base notes (oud, musk, amber). Wait before dressing to avoid fabric transfer.",
    tip: "Use this time as part of your ritual — presence is not rushed. These minutes are where NOIRÉ speaks most honestly.",
    hasTip: true,
    image: null,
    imageAlt: null,
  },
  {
    num: "07",
    title: "Mid-Day Touch-Up If Needed",
    body: "NOIRÉ lasts 10–14 hours. If scent has softened, one spray on wrist or throat is sufficient. Over-application kills mystery. Less is always more with a luxury EDP.",
    hasTip: false,
    image: null,
    imageAlt: null,
  },
];

/* ─── Troubleshooting data ─────────────────────────────────── */
const faqs = [
  {
    q: "Scent fades within 3–4 hours",
    a: "Dry skin absorbs quickly. Apply moisturiser first. Consider applying to clothing hem — fabric holds longer in dry climates.",
  },
  {
    q: "Fragrance smells too intense at first spray",
    a: "You're smelling top notes. They dissipate in 15–20 minutes. Wait for the heart to open — that's where the true character lives.",
  },
  {
    q: "NOIRÉ smells different on me than in the bottle",
    a: "This is a feature. Skin chemistry, diet, and pH alter fragrance molecules — every wearer creates a unique signature. NOIRÉ is designed to adapt and become yours.",
  },
  {
    q: "Pump sprays unevenly or weakly",
    a: "Store bottle upright, away from sunlight and heat. Contact the NOIRÉ team if issue persists.",
  },
];

/* ─── What you mastered ────────────────────────────────────── */
const masteredItems = [
  "How to prepare skin for maximum longevity",
  "Correct spray distance & quantity",
  "Pulse point placement",
  "Why you should never rub wrists",
  "How NOIRÉ's EDP layers unfold in stages",
  "Mid-day touch-up strategy",
  "Troubleshooting common scent issues",
  "Climate-adapted fragrance habits for India",
];

export default function TutorialSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen pt-20 bg-[#080604] text-[#d4c4a0] font-light" style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}>

      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden">
        {/* ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#c9943a]/[0.05] blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto pt-24 pb-20 px-6 flex flex-col md:flex-row items-start md:items-center gap-12 md:px-12 md:pt-36 md:pb-24 lg:gap-16">

          {/* ── text side ── */}
          <div className="flex-1 animate-[fadeUp_0.8s_ease_both]">
            <span className="block font-light text-[10px] tracking-[0.35em] text-[#c9943a] uppercase mb-6">HOW-TO GUIDE · FRAGRANCE RITUAL</span>

            <h1 className="text-[40px] md:text-[60px] font-light leading-[1.15] text-[#f0d060] mb-8 mt-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              How to Layer NOIRÉ for an All-Day Presence That Turns Heads
            </h1>

            {/* meta pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Beginner Friendly", "15 Minutes", "EDP Application", "India Climate Optimised"].map(
                (label) => (
                  <span key={label} className="font-light text-[10px] tracking-[0.25em] px-4 py-1.5 rounded-full uppercase text-[#c9943a] border border-[#c9943a]/40 bg-[#c9943a]/[0.08]">
                    {label}
                  </span>
                )
              )}
            </div>

            {/* time badge */}
            <div className="inline-flex items-center gap-2 bg-[#c9943a]/10 border border-[#c9943a]/30 rounded-md py-3 px-5">
              <span className="text-[#f0d060] text-lg leading-none">◷</span>
              <span className="font-light text-[11px] tracking-[0.05em] text-[#d4c4a0]">
                Total time: approximately 15 minutes · Best applied in the morning ritual
              </span>
            </div>
          </div>

          {/* ── image side ── */}
          <div className="shrink-0 w-full md:w-80 animate-[fadeUp_0.8s_ease_both] [animation-delay:0.2s]">
            <div className="flex w-full rounded-lg overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-[#c9943a]/15">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/noire-hero-bottle.png"
                alt="NOIRÉ EDP Bottle"
                className="w-full h-auto rounded-lg object-contain block"
              />
            </div>
          </div>
        </div>

        {/* section divider */}
        <div className="max-w-6xl mx-auto px-6 h-px bg-gradient-to-r from-[#c9943a]/40 to-transparent" />
      </section>

      {/* ══════════ PREREQUISITES ══════════ */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <p className="font-light text-[10px] tracking-[0.4em] text-[#c9943a] uppercase mb-10 mx-0 mt-0">BEFORE YOU BEGIN</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Your NOIRÉ EDP bottle",
            "Freshly showered dry skin",
            "Unscented moisturiser (optional)",
            "5 minutes of unhurried time",
            "Clean lint-free clothes",
            "A mirror (optional)",
          ].map((item, i) => (
            <div key={i} className="border border-[#c9943a]/[0.22] rounded-md p-5 flex items-start gap-4 transition duration-300 hover:border-[#f0d060]/50 hover:bg-[#c9943a]/[0.05]">
              <span className="text-[#c9943a] text-2xl leading-none shrink-0 -mt-0.5">·</span>
              <span className="font-light text-[13px] leading-[1.7]">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ STEPS ══════════ */}
      <section className="max-w-6xl mx-auto pb-20 px-6">
        <div className="mb-12">
          <div className="h-px bg-gradient-to-r from-[#c9943a]/40 to-transparent mb-8" />
          <h2 className="text-3xl md:text-[40px] font-light text-[#f0d060] tracking-[0.05em] m-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Ritual — Step by Step</h2>
        </div>

        <div className="flex flex-col gap-6">
          {steps.map((step) => (
            <div key={step.num} className="border border-[#c9943a]/[0.18] rounded-lg overflow-hidden flex flex-col md:flex-row transition duration-300 hover:border-[#f0d060]/55 hover:shadow-[0_0_28px_rgba(201,148,58,0.08)]">
              {/* step number */}
              <div className="shrink-0 w-full md:w-28 flex items-start justify-start md:justify-center pt-6 px-6 pb-0 md:py-8 md:px-0">
                <span className="text-[80px] md:text-[96px] font-bold text-[#c9943a]/[0.12] leading-none select-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{step.num}</span>
              </div>

              {/* content */}
              <div className="flex-1 p-6 md:py-8 md:pr-8 md:pl-4">
                <h3 className="text-xl md:text-2xl font-medium text-[#f0d060] mt-0 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{step.title}</h3>
                <p className="font-light text-[13px] leading-[1.9] text-[#d4c4a0] mt-0 mb-4">{step.body}</p>

                {step.hasTip && (
                  <div className="border-l-2 border-[#c9943a] bg-[#c9943a]/[0.06] rounded-r-md p-4 mb-4">
                    <span className="block font-light text-[9px] tracking-[0.3em] text-[#c9943a] uppercase mb-1">Tip</span>
                    <p className="font-light text-xs leading-[1.7] text-[#d4c4a0]/85 m-0">{step.tip}</p>
                  </div>
                )}

                {step.image && (
                  <div className="mt-6 w-full rounded-md overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-[#c9943a]/15">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.image}
                      alt={step.imageAlt || ""}
                      className="w-full h-auto object-contain rounded-md block"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ MASTERED SUMMARY ══════════ */}
      <section className="max-w-6xl mx-auto pb-20 px-6">
        <div className="relative border border-[#c9943a]/25 rounded-xl p-10 md:p-14 overflow-hidden">
          {/* watermark */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
            <span className="text-[12rem] md:text-[18rem] font-bold text-[#c9943a]/[0.04] leading-none tracking-[0.2em] whitespace-nowrap" style={{ fontFamily: "'Cormorant Garamond', serif" }}>NOIRÉ</span>
          </div>

          <div className="relative z-10">
            <p className="font-light text-[10px] tracking-[0.4em] text-[#c9943a] uppercase mb-2 mx-0 mt-0">Your Achievement</p>
            <h2 className="text-3xl md:text-[40px] font-light text-[#f0d060] tracking-[0.05em] m-0 mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              What You Have Mastered
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {masteredItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#c9943a] text-sm leading-[1.2] shrink-0 mt-px">★</span>
                  <span className="font-light text-[13px] leading-[1.7]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="border-t border-[#c9943a]/15 py-10 px-6 text-center">
        <h2 className="text-2xl text-[#c9943a] tracking-[0.4em] mb-3 m-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>NOIRÉ</h2>
        <p className="font-light text-[9px] tracking-[0.3em] text-[#d4c4a0]/50 uppercase mb-2 m-0">The Essence of Mystery · Elegance in Every Drop</p>
        <p className="font-light text-[8px] tracking-[0.2em] text-[#d4c4a0]/30 uppercase m-0">Fragrance Guide · 2026</p>
      </footer>

    </main>
  );
}
