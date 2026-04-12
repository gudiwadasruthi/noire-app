"use client";

import React from "react";
import { useState } from "react";

/* ─────────────────────────────────────────────────────────────
   REVIEWS DATA
   ───────────────────────────────────────────────────────────── */
const reviews = [
  {
    id: 1,
    featured: true,
    stars: 5,
    tag: "Daily Wear",
    quote: "I've been wearing imported niche fragrances for six years and paying customs on every bottle. NOIRÉ is the first Indian EDP that made me stop and think — why have I been doing that? It opened beautifully in the Hyderabad heat, the oud came through in the evening without turning sour, and I had three people ask what I was wearing at a dinner I almost didn't attend. I haven't reached for anything else in three weeks.",
    reviewer: "ARJUN M.",
    city: "HYDERABAD",
    persona: "FRAGRANCE ENTHUSIAST",
  },
  {
    id: 2,
    featured: false,
    stars: 5,
    tag: "First Impressions",
    quote: "I was honestly sceptical. I've been burned by 'premium Indian fragrance' brands before — beautiful bottles, mediocre liquid. NOIRÉ was different from the first spray. The top notes were bright without being sharp, and by the time I got to my office meeting it had settled into something warm and genuinely sophisticated. My colleague leaned over and said 'you smell incredible' mid-presentation. I've never had that happen before.",
    reviewer: "PRIYA S.",
    city: "MUMBAI",
    persona: "BRAND STRATEGIST",
  },
  {
    id: 3,
    featured: false,
    stars: 5,
    tag: "Longevity",
    quote: "The longevity claim felt like marketing until it wasn't. Applied at 7am. Still getting compliments at 9pm. That's fourteen hours in Bengaluru humidity and two flights of stairs to a humid office. I don't know what they've put in the base but it doesn't budge. Oud and musk sitting quietly all day — never loud, never gone.",
    reviewer: "ROHAN K.",
    city: "BENGALURU",
    persona: "PRODUCT MANAGER",
  },
  {
    id: 4,
    featured: true,
    stars: 5,
    tag: "Gifting",
    quote: "I bought this for my husband's birthday because he'd mentioned wanting a fragrance that felt 'serious'. I had no idea what I was getting into. He opened the box, sprayed once, and went quiet for a moment. Then he said 'this smells like something I'd have paid three times this for abroad.' He's been wearing it every day since. I've already ordered a second bottle — for myself.",
    reviewer: "MEERA T.",
    city: "CHENNAI",
    persona: "GIFTED TO PARTNER",
  },
  {
    id: 5,
    featured: false,
    stars: 4,
    tag: "Sensitive Skin",
    quote: "I have reactive skin and fragrance is usually a gamble for me — I patch test everything. NOIRÉ passed the 24-hour test without any irritation, which already put it ahead of two foreign EDPs I'd tried. The scent itself is beautiful — the floral heart is present without being overwhelming. I'm giving four stars only because I wish it came in a smaller travel size. The full bottle is worth every rupee.",
    reviewer: "KAVYA R.",
    city: "PUNE",
    persona: "SENSITIVE SKIN VERIFIED",
  },
  {
    id: 6,
    featured: false,
    stars: 5,
    tag: "First Impressions",
    quote: "I was in a meeting with people who have worn Creed and Tom Ford for years. I walked in wearing NOIRÉ. By the end of the hour, two of them had asked me what I was wearing and one asked where to buy it. I didn't tell them it was an Indian brand until they asked twice. The look on their faces was worth more than the bottle.",
    reviewer: "SIDDHARTH N.",
    city: "DELHI",
    persona: "CONSULTING PROFESSIONAL",
  },
  {
    id: 7,
    featured: false,
    stars: 5,
    tag: "Daily Wear",
    quote: "I was looking for a signature scent — something that people would associate specifically with me. NOIRÉ does something interesting on my skin: the amber comes forward more than I expected and the oud hangs back just enough to feel like a secret. Three months in, people say they smell me before they see me. That's exactly what I wanted.",
    reviewer: "ANANYA V.",
    city: "HYDERABAD",
    persona: "ARCHITECT",
  },
  {
    id: 8,
    featured: false,
    stars: 5,
    tag: "Longevity",
    quote: "Bought this after reading about it. I had low expectations — I've been disappointed by the 'luxury Indian fragrance' category too many times. Wore it on a long day that started at 6am and ended at a dinner at 10pm. It was still there. Not just a ghost of it — actually there, warm and present. I don't give five stars easily. NOIRÉ earned it.",
    reviewer: "VIKRAM D.",
    city: "MUMBAI",
    persona: "FIRST-TIME NOIRÉ CUSTOMER",
  },
];

const filters = [
  "All Reviews",
  "Longevity",
  "First Impressions",
  "Daily Wear",
  "Gifting",
  "Sensitive Skin",
];

/* ─── Star Rating Helper ──────────────────────────────────── */
function StarRating({ count }: { count: number }) {
  // Use a minimal diamond for star
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < count ? "#c9943a" : "transparent"} stroke="#c9943a" strokeWidth="1.5">
          <path d="M12 2L15 9h8l-6 5 2 9-7-5-7 5 2-9-6-5h8z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Review Modal ─────────────────────────────────────────── */
function ReviewModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(5,4,3,0.88)", backdropFilter: "blur(14px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0c0906] border border-[#c9943a]/30 rounded-xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top accent */}
        <div className="h-0.5 w-full bg-gradient-to-r from-[#c9943a] via-[#f0d060] to-[#c9943a]" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#080604]/80 border border-[#c9943a]/30 flex items-center justify-center text-[#c9943a] hover:border-[#c9943a] hover:bg-[#c9943a]/10 transition-colors duration-200 text-sm"
        >✕</button>

        <div className="px-8 pt-10 pb-12 md:px-12">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8 gap-5">
              <span className="text-4xl text-[#c9943a]/60">◈</span>
              <h2 className="text-[28px] font-normal text-[#f0d060] m-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Thank You.
              </h2>
              <p className="font-light text-[13.5px] leading-[1.9] text-[#ede8d4]/60 m-0 max-w-sm">
                Your review has been received. We read every word — and it matters more than you know.
              </p>
              <button
                onClick={onClose}
                className="mt-4 font-medium text-[10px] tracking-[0.3em] uppercase text-[#c9943a] border border-[#c9943a] px-8 py-3 hover:bg-[#c9943a]/10 transition-colors duration-200"
              >Close</button>
            </div>
          ) : (
            <>
              <p className="font-medium text-[9px] tracking-[0.4em] text-[#c9943a] uppercase mb-4 m-0">Share Your Experience</p>
              <h2 className="text-[26px] md:text-[30px] font-normal text-[#f0d060] m-0 mb-2 leading-[1.3]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Tell Us Your NOIRÉ Story.
              </h2>
              <p className="font-light text-[13px] text-[#ede8d4]/50 mb-8 m-0">Your honest words help others find their signature scent.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + City */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-medium text-[8.5px] tracking-[0.25em] text-[#c9943a] uppercase">Your Name</label>
                    <input required type="text" placeholder="e.g. Arjun M." className="bg-[#0d0a06] border border-[#c9943a]/25 px-4 py-3 text-[13px] font-light text-[#ede8d4] placeholder-[#c9943a]/30 outline-none focus:border-[#c9943a]/60 transition-colors rounded-sm" style={{ fontFamily: "'Montserrat', sans-serif" }} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-medium text-[8.5px] tracking-[0.25em] text-[#c9943a] uppercase">City</label>
                    <input required type="text" placeholder="e.g. Hyderabad" className="bg-[#0d0a06] border border-[#c9943a]/25 px-4 py-3 text-[13px] font-light text-[#ede8d4] placeholder-[#c9943a]/30 outline-none focus:border-[#c9943a]/60 transition-colors rounded-sm" style={{ fontFamily: "'Montserrat', sans-serif" }} />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-[8.5px] tracking-[0.25em] text-[#c9943a] uppercase">Your Rating</label>
                  <div className="flex items-center gap-2">
                    {[1,2,3,4,5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill={star <= (hoveredRating || rating) ? "#c9943a" : "transparent"} stroke="#c9943a" strokeWidth="1.5">
                          <path d="M12 2L15 9h8l-6 5 2 9-7-5-7 5 2-9-6-5h8z" strokeLinejoin="round" />
                        </svg>
                      </button>
                    ))}
                    {rating > 0 && <span className="font-light text-[11px] text-[#c9943a]/60 ml-1">{rating}/5</span>}
                  </div>
                </div>

                {/* Wear occasion */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-[8.5px] tracking-[0.25em] text-[#c9943a] uppercase">How do you wear NOIRÉ?</label>
                  <select required className="bg-[#0d0a06] border border-[#c9943a]/25 px-4 py-3 text-[13px] font-light text-[#ede8d4] outline-none focus:border-[#c9943a]/60 transition-colors rounded-sm appearance-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <option value="" className="text-[#c9943a]/40">Select an occasion</option>
                    <option value="Daily Wear">Daily Wear</option>
                    <option value="Office">Office / Professional</option>
                    <option value="Evening">Evening &amp; Special Occasions</option>
                    <option value="Gifting">Gifted to Someone</option>
                    <option value="Sensitive Skin">Sensitive Skin User</option>
                  </select>
                </div>

                {/* Review text */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-[8.5px] tracking-[0.25em] text-[#c9943a] uppercase">Your Experience</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us how NOIRÉ has changed the way a room responds to you, or simply how it made your morning ritual better..."
                    className="bg-[#0d0a06] border border-[#c9943a]/25 px-4 py-3 text-[13px] font-light text-[#ede8d4] placeholder-[#c9943a]/30 outline-none focus:border-[#c9943a]/60 transition-colors rounded-sm resize-none leading-[1.7]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                {/* One-word descriptor */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-[8.5px] tracking-[0.25em] text-[#c9943a] uppercase">In one word, NOIRÉ is...</label>
                  <input type="text" placeholder="e.g. Commanding, Elegant, Unforgettable" className="bg-[#0d0a06] border border-[#c9943a]/25 px-4 py-3 text-[13px] font-light text-[#ede8d4] placeholder-[#c9943a]/30 outline-none focus:border-[#c9943a]/60 transition-colors rounded-sm" style={{ fontFamily: "'Montserrat', sans-serif" }} />
                </div>

                <button
                  type="submit"
                  className="mt-2 relative overflow-hidden font-medium text-[10px] tracking-[0.3em] uppercase py-4 border border-[#c9943a] text-[#c9943a] hover:text-[#080604] transition-colors duration-400 group"
                >
                  <span className="absolute inset-0 bg-[#c9943a] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                  <span className="relative z-10">Submit Your Review</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ───────────────────────────────────────── */
export default function ReviewsSection() {
  const [activeFilter, setActiveFilter] = useState("All Reviews");
  const [showModal, setShowModal] = useState(false);

  const filteredReviews = reviews.filter(
    (r) => activeFilter === "All Reviews" || r.tag === activeFilter
  );

  return (
    <main
      className="min-h-screen pt-20 bg-[#080604] text-[#ede8d4] font-light"
      style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
    >

      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-6 text-center">
        <p className="font-medium text-[9px] tracking-[0.45em] text-[#c9943a] uppercase mb-6 m-0">
          VERIFIED VOICES &nbsp;·&nbsp; REAL CUSTOMERS
        </p>

        <h1
          className="max-w-4xl mx-auto text-[38px] md:text-[56px] font-normal leading-[1.12] text-[#ede8d4] mb-5 m-0"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          What NOIRÉ Does to a Room — and to the Person Wearing It.
        </h1>

        <p className="font-light text-[14.5px] leading-[1.85] text-[#ede8d4]/65 max-w-2xl mx-auto mb-16 m-0">
          Unedited perspectives from the people who wear NOIRÉ every day — specific, honest,
          and in their own words.
        </p>

        {/* ── Trust Summary Bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-center border-y border-[#c9943a]/15 max-w-4xl mx-auto py-8 gap-8 md:gap-0">
          
          <div className="flex flex-col items-center flex-1 px-8">
            <span className="text-[44px] text-[#c9943a] font-normal leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              4.9<span className="text-2xl text-[#c9943a]/60">/5</span>
            </span>
            <span className="font-medium text-[8px] tracking-[0.2em] text-[#c9943a]/70 uppercase mt-2">
              Average Rating
            </span>
          </div>
          
          <div className="hidden md:block w-px h-16 bg-[#c9943a]/15" />
          
          <div className="flex flex-col items-center flex-1 px-8">
            <span className="text-[44px] text-[#c9943a] font-normal leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              847
            </span>
            <span className="font-medium text-[8px] tracking-[0.2em] text-[#c9943a]/70 uppercase mt-2">
              Verified Reviews
            </span>
          </div>

          <div className="hidden md:block w-px h-16 bg-[#c9943a]/15" />

          <div className="flex flex-col items-center flex-1 px-8">
            <span className="text-[44px] text-[#c9943a] font-normal leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              12
            </span>
            <span className="font-medium text-[8px] tracking-[0.2em] text-[#c9943a]/70 uppercase mt-2">
              Cities Across India
            </span>
          </div>

        </div>
      </section>

      {/* ══════════ FILTER STRIP ══════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-light text-[9px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-full border transition-all duration-300
                ${activeFilter === filter
                  ? "bg-[#c9943a] border-[#c9943a] text-[#080604] font-medium shadow-[0_0_15px_rgba(201,148,58,0.2)]"
                  : "bg-transparent border-[#c9943a]/25 text-[#c9943a] hover:border-[#f0d060] hover:text-[#f0d060]"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* ══════════ MASONRY REVIEW GRID ══════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        {filteredReviews.length === 0 ? (
          <div className="text-center py-20 text-[#c9943a]/60 text-sm tracking-wider uppercase font-light">
            No reviews match this filter.
          </div>
        ) : (
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {filteredReviews.map((review) => (
              <div 
                key={review.id} 
                className={`break-inside-avoid relative flex flex-col p-8 transition-colors duration-300
                  bg-[#c9943a]/[0.02] border border-[#c9943a]/15 hover:border-[#c9943a]/40
                  ${review.featured ? "px-10 py-12 md:py-14 bg-[#c9943a]/[0.035]" : ""}`}
              >
                {/* ── Top row: stars & verified tag ── */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <StarRating count={review.stars} />
                  <span className="font-medium text-[8px] tracking-[0.2em] text-[#c9943a]/60 uppercase border border-[#c9943a]/20 bg-[#c9943a]/[0.04] px-2.5 py-1 rounded-sm whitespace-nowrap">
                    Verified Purchase
                  </span>
                </div>

                {/* ── The quote ── */}
                <span className="absolute top-6 -left-1 text-[80px] leading-none text-[#c9943a]/10 pointer-events-none select-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  &ldquo;
                </span>
                
                <h3 
                  className={`relative z-10 m-0 mb-8 italic text-[#ede8d4] font-normal
                    ${review.featured ? "text-[22px] md:text-2xl leading-[1.65]" : "text-[18px] md:text-xl leading-[1.7]"}`}
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {review.quote}
                </h3>

                {/* ── Attribution ── */}
                <div className="mt-auto border-t border-[#c9943a]/15 pt-5">
                  <p className="font-medium text-[9px] tracking-[0.25em] text-[#c9943a] uppercase m-0 leading-[1.8]">
                    {review.reviewer} &nbsp;·&nbsp; {review.city}
                  </p>
                  <p className="font-light text-[8px] tracking-[0.15em] text-[#c9943a]/60 uppercase m-0 mt-0.5">
                    {review.persona} &nbsp;·&nbsp; {review.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ══════════ FEATURED PULL QUOTE ══════════ */}
      <section className="bg-[#050403] border-y border-[#c9943a]/15 py-24 md:py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#c9943a]/[0.05] text-[300px] leading-none pointer-events-none select-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          &ldquo;
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-[32px] md:text-[46px] italic text-[#ede8d4] font-normal leading-[1.4] m-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The look on their faces was worth more than the bottle.
          </h2>
          <p className="font-medium text-[10px] tracking-[0.3em] text-[#c9943a] uppercase m-0 mt-8 md:mt-10">
            SIDDHARTH N. &nbsp;·&nbsp; DELHI
          </p>
        </div>
      </section>

      {/* ══════════ WRITE REVIEW CTA ══════════ */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="relative border border-[#c9943a]/20 rounded-xl overflow-hidden">
          {/* gold top accent */}
          <div className="h-0.5 w-full bg-gradient-to-r from-[#c9943a] via-[#f0d060] to-[#c9943a]" />

          <div className="px-8 py-16 md:px-14 md:py-20 text-center flex flex-col items-center gap-6">
            <h2
              className="text-[32px] md:text-[40px] font-normal text-[#f0d060] m-0 leading-[1.2]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Worn NOIRÉ? We want to hear your story.
            </h2>
            <p className="font-light text-[14.5px] leading-[1.9] text-[#ede8d4]/70 max-w-2xl mx-auto m-0">
              Every review on this page was written by a real customer. If NOIRÉ has changed
              how a room responds to you, or simply made your morning ritual better — tell us.
              Your voice adds to something we're building together.
            </p>

            <div className="mt-4">
              <button
                onClick={() => setShowModal(true)}
                className="font-medium text-[10px] tracking-[0.3em] uppercase text-[#c9943a] border border-[#c9943a] px-10 py-4 hover:bg-[#c9943a]/10 hover:border-[#f0d060] hover:text-[#f0d060] transition-colors duration-300"
              >
                Submit Your Review
              </button>
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
          Reviews &amp; Testimonials · 2026
        </p>
      </footer>

      {/* ══════════ MODAL ══════════ */}
      {showModal && <ReviewModal onClose={() => setShowModal(false)} />}

    </main>
  );
}
