"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────────────────────
   FAQ DATA
   ───────────────────────────────────────────────────────────── */
const sections = [
  {
    id: "fragrance",
    category: "The Fragrance",
    label: "THE FRAGRANCE",
    reviewed: "April 2026",
    faqs: [
      {
        q: "What does NOIRÉ smell like?",
        a: "NOIRÉ opens with bright citrus and green top notes that settle quickly into a warm floral-spice heart — think layered florals with a touch of cardamom and pepper. The base is deep and grounding: oud, musk, and amber that develop slowly on skin and stay for hours. It is sophisticated without being heavy, and it evolves differently on every person.",
      },
      {
        q: "Is NOIRÉ a masculine or feminine fragrance?",
        a: "NOIRÉ is intentionally ungendered. It was designed to complement skin chemistry rather than conform to a gender category. The composition leans toward warmth and depth — qualities that work beautifully on anyone who wears it with intention.",
      },
      {
        q: "How is an EDP different from an EDT or body mist?",
        a: "EDP stands for Eau de Parfum — a higher concentration of fragrance oil than an Eau de Toilette (EDT) or body mist. This means NOIRÉ's scent lasts significantly longer on skin, projects further, and requires fewer sprays. It is the most efficient and long-lasting format for everyday wear.",
      },
      {
        q: "Why does NOIRÉ smell different on me than in the bottle?",
        a: "This is completely normal and actually a sign of a well-made fragrance. Your skin's pH, temperature, diet, and natural chemistry all interact with the fragrance molecules — creating a signature that is uniquely yours. NOIRÉ was formulated to encourage this individuality.",
      },
      {
        q: "What are the key fragrance notes in NOIRÉ?",
        a: "Top notes: Citrus, Green Accord. Heart notes: Florals, Cardamom, Black Pepper. Base notes: Oud, Musk, Amber, Vetiver. The base notes are what give NOIRÉ its distinctive staying power and depth.",
      },
    ],
  },
  {
    id: "application",
    category: "Application",
    label: "APPLICATION & LONGEVITY",
    reviewed: "April 2026",
    faqs: [
      {
        q: "How many sprays should I use?",
        a: "Three to four sprays is the ideal amount for NOIRÉ. Because it is a high-concentration EDP, more is rarely better. Apply to pulse points — inner wrists, base of throat, nape of neck — and allow the fragrance to settle naturally without rubbing.",
      },
      {
        q: "Why does my NOIRÉ fade faster than expected?",
        a: "The most common reason is dry skin — dehydrated skin absorbs fragrance quickly rather than holding it on the surface. Apply an unscented moisturiser to your pulse points before spraying. You can also apply a light spray to fabric or clothing hem, which holds scent longer than skin in dry or air-conditioned environments.",
      },
      {
        q: "Should I rub my wrists together after applying?",
        a: "No — and this is one of the most important things to know. Rubbing your wrists together generates friction heat that crushes the top notes and flattens the fragrance's natural evolution. Spray and let it settle on its own.",
      },
      {
        q: "How long does NOIRÉ last on skin?",
        a: "NOIRÉ is formulated to last 10 to 14 hours on skin under normal conditions. In very dry or heavily air-conditioned environments, longevity may be slightly shorter. In warm, humid conditions — the climate NOIRÉ was designed for — it often performs at its very best.",
      },
    ],
  },
  {
    id: "ingredients",
    category: "Ingredients",
    label: "INGREDIENTS & SAFETY",
    reviewed: "April 2026",
    faqs: [
      {
        q: "Is NOIRÉ safe for sensitive skin?",
        a: "NOIRÉ is formulated without common sensitisers and is dermatologically considered safe for most skin types. However, if you have a known fragrance allergy or very reactive skin, we recommend doing a patch test on the inner elbow 24 hours before full application. If irritation occurs, discontinue use and consult a dermatologist.",
      },
      {
        q: "Does NOIRÉ contain alcohol?",
        a: "Yes. Like all Eau de Parfum formulations, NOIRÉ contains perfumers' alcohol, which is the carrier that allows the fragrance to disperse on skin and dry down correctly. The alcohol dissipates within seconds of application, leaving only the fragrance on your skin.",
      },
      {
        q: "Is NOIRÉ cruelty-free?",
        a: "Yes. NOIRÉ does not test on animals at any stage of production, and we work only with suppliers who meet the same standard. We are committed to ethical sourcing across our entire supply chain.",
      },
    ],
  },
  {
    id: "shipping",
    category: "Shipping & Orders",
    label: "ORDERS, SHIPPING & RETURNS",
    reviewed: "April 2026",
    faqs: [
      {
        q: "Where can I buy NOIRÉ?",
        a: "NOIRÉ is currently available exclusively through our official website at noiré.in. We are expanding to select luxury retail partners in Hyderabad, Mumbai, and Bengaluru in Q3 2026. We do not authorise any third-party sellers — if you see NOIRÉ listed elsewhere, it is not a genuine product.",
      },
      {
        q: "How long does delivery take?",
        a: "Standard delivery within India takes 3 to 5 business days. Express delivery (1 to 2 business days) is available at checkout for most metro areas. All orders are shipped in NOIRÉ's signature packaging — sealed and protected for transit.",
      },
      {
        q: "Can I return or exchange my order?",
        a: "Due to the nature of fragrance products, we are unable to accept returns on opened bottles. If your order arrives damaged or with a manufacturing defect, please contact us within 48 hours of receipt with photographs and we will arrange a replacement at no cost to you.",
      },
      {
        q: "I have a question that isn't answered here — how do I reach the team?",
        a: "We would love to hear from you. Reach us at hello@noire.in or through the contact form on our website. Our team responds within one business day. For press and media enquiries, use press@noire.in.",
      },
    ],
  },
];

const categories = ["All", "The Fragrance", "Application", "Ingredients", "Shipping & Orders"];

/* ─── Accordion Row ────────────────────────────────────────── */
function AccordionRow({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      onClick={onToggle}
      className={`border-b cursor-pointer transition-colors duration-200 group
        ${isOpen ? "border-[#c9943a]/40" : "border-[#c9943a]/12 hover:border-[#c9943a]/35"}`}
    >
      {/* Question row */}
      <div className="flex items-start justify-between gap-6 py-5 px-1">
        <h3
          className={`text-[17px] md:text-[18px] font-normal leading-[1.45] transition-colors duration-200 m-0
            ${isOpen ? "text-[#f0d060]" : "text-[#ede8d4] group-hover:text-[#c9943a]"}`}
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {q}
        </h3>
        <span
          className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-sm leading-none mt-0.5 transition-all duration-300
            ${isOpen
              ? "border-[#f0d060]/50 text-[#f0d060] rotate-45"
              : "border-[#c9943a]/30 text-[#c9943a] group-hover:border-[#c9943a]"
            }`}
        >
          +
        </span>
      </div>

      {/* Answer — animated */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="font-light text-[13.5px] leading-[1.95] text-[#ede8d4]/65 border-l border-[#c9943a]/25 pl-5 pb-6 pr-8 m-0">
          {a}
        </p>
      </div>
    </div>
  );
}

/* ─── Main Component ───────────────────────────────────────── */
export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");

  const toggle = (key: string) => setOpenKey((prev) => (prev === key ? null : key));

  const filteredSections = sections
    .map((sec) => ({
      ...sec,
      faqs: sec.faqs.filter((faq) => {
        const matchCat = activeCategory === "All" || sec.category === activeCategory;
        const matchSearch =
          searchValue.trim() === "" ||
          faq.q.toLowerCase().includes(searchValue.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchValue.toLowerCase());
        return matchCat && matchSearch;
      }),
    }))
    .filter((sec) => sec.faqs.length > 0);

  return (
    <main
      className="min-h-screen pt-20 bg-[#080604] text-[#ede8d4] font-light"
      style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
    >

      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden">
        {/* ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#c9943a]/[0.05] blur-[130px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20 text-center">
          {/* eyebrow */}
          <p className="font-light text-[9px] tracking-[0.45em] text-[#c9943a] uppercase mb-6 m-0">
            KNOWLEDGE BASE &nbsp;·&nbsp; FRAGRANCE CONCIERGE
          </p>

          {/* heading */}
          <h1
            className="text-[38px] md:text-[56px] font-light leading-[1.12] text-[#ede8d4] mb-5 m-0"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Everything You Need to Know About NOIRÉ
          </h1>

          {/* subline */}
          <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/55 max-w-2xl mx-auto mb-10 m-0">
            Real questions from real people — answered in plain language, without jargon,
            by the people who made NOIRÉ.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-6 h-px bg-gradient-to-r from-transparent via-[#c9943a]/25 to-transparent" />
      </section>

      {/* ══════════ CATEGORY FILTER PILLS ══════════ */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2.5 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-light text-[9px] tracking-[0.25em] uppercase px-5 py-2 rounded-full border transition-all duration-200
                ${activeCategory === cat
                  ? "bg-[#c9943a] border-[#c9943a] text-[#080604] font-medium"
                  : "bg-transparent border-[#c9943a]/25 text-[#c9943a]/70 hover:border-[#c9943a] hover:text-[#c9943a]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ══════════ FAQ SECTIONS ══════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        {filteredSections.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#c9943a]/50 font-light text-sm tracking-wider">No results found for "{searchValue}"</p>
            <p className="text-[#ede8d4]/30 font-light text-xs mt-2 tracking-wider">Try a different search term or browse all categories.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-16">
            {filteredSections.map((sec) => (
              <div key={sec.id}>
                {/* Section heading */}
                <div className="mb-8">
                  <p className="font-medium text-[8px] tracking-[0.5em] text-[#c9943a] uppercase mb-3 m-0">
                    {sec.label}
                  </p>
                  <div className="h-px w-full bg-gradient-to-r from-[#c9943a]/40 to-transparent mb-3" />
                  <p className="font-light text-[8px] tracking-[0.15em] text-[#c9943a]/35 uppercase m-0">
                    Last reviewed: {sec.reviewed}
                  </p>
                </div>

                {/* Accordion rows */}
                <div>
                  {sec.faqs.map((faq, i) => {
                    const key = `${sec.id}-${i}`;
                    return (
                      <AccordionRow
                        key={key}
                        q={faq.q}
                        a={faq.a}
                        isOpen={openKey === key}
                        onToggle={() => toggle(key)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ══════════ ESCALATION PANEL ══════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-24 mt-8">
        <div className="relative border border-[#c9943a]/20 rounded-xl overflow-hidden">
          {/* gold top accent */}
          <div className="h-0.5 w-full bg-gradient-to-r from-[#c9943a] via-[#f0d060] to-[#c9943a]" />

          <div className="px-8 py-12 md:px-14 md:py-14 text-center flex flex-col items-center gap-6">
            {/* symbol */}
            <span className="text-3xl text-[#c9943a]/40">◈</span>

            <div className="flex flex-col gap-3">
              <h2
                className="text-[28px] md:text-[36px] font-light text-[#f0d060] m-0 leading-[1.2]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Didn't find what you were looking for?
              </h2>
              <p className="font-light text-[13.5px] leading-[1.9] text-[#ede8d4]/55 max-w-lg mx-auto m-0">
                Our team is here to help — whether you have a question about the fragrance,
                your order, or anything else. Reach us directly and we will respond within
                one business day.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <a
                href="mailto:hello@noire.in"
                className="font-medium text-[10px] tracking-[0.3em] uppercase text-[#c9943a] border border-[#c9943a] px-8 py-3.5 rounded-sm hover:bg-[#c9943a]/10 transition-colors duration-200"
              >
                Email Us
              </a>
              <a
                href="/"
                className="font-medium text-[10px] tracking-[0.3em] uppercase text-[#080604] bg-[#c9943a] px-8 py-3.5 rounded-sm hover:bg-[#f0d060] transition-colors duration-200"
              >
                Visit Contact Page
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="border-t border-[#c9943a]/12 py-10 px-6 text-center">
        <h2
          className="text-2xl text-[#c9943a] tracking-[0.4em] mb-3 m-0"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          NOIRÉ
        </h2>
        <p className="font-light text-[9px] tracking-[0.3em] text-[#ede8d4]/35 uppercase mb-2 m-0">
          The Essence of Mystery · Elegance in Every Drop
        </p>
        <p className="font-light text-[8px] tracking-[0.25em] text-[#ede8d4]/20 uppercase m-0">
          Knowledge Base · 2026
        </p>
      </footer>

    </main>
  );
}
