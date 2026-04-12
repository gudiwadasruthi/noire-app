"use client";

import React from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────
   EMAIL DATA
   ───────────────────────────────────────────────────────────── */
const emails = [
  {
    step: "01",
    cadence: "Immediately on signup",
    subject: "You just made a very considered decision.",
    preview: "Welcome to NOIRÉ. Here's what happens next.",
    buttonOutline: true,
    buttonText: "EXPLORE NOIRÉ",
    buttonHref: "/",
    content: (
      <>
        <p>Welcome.</p>
        <p>
          You didn't sign up for a newsletter. You signed up because something about NOIRÉ
          caught your attention — and you trusted that instinct. We don't take that lightly.
        </p>
        <p>
          Over the next few days, we'll share a few things with you — not product announcements,
          not discount codes. The story behind NOIRÉ, the thinking that went into it, and one
          ritual that will change how you wear fragrance forever.
        </p>
        <p className="font-semibold text-[#ede8d4]">This is not a brand that shouts. It is one that stays.</p>
        <p>Until the next letter —<br />NOIRÉ.</p>
      </>
    ),
  },
  {
    step: "02",
    cadence: "Day 2",
    subject: "Why we built a perfume India didn't know it was waiting for.",
    preview: "It started with a frustration most fragrance lovers in India will recognise.",
    buttonOutline: true,
    buttonText: "READ THE FULL STORY",
    buttonHref: "/storyboard",
    content: (
      <>
        <p>Here is the honest version of how NOIRÉ started:</p>
        <p className="font-semibold text-[#ede8d4]">
          We were tired of paying import duties on fragrances that were never made for us.
        </p>
        <p>
          Not for our climate. Not for our skin chemistry. Not for the way heat interacts with
          oud and amber differently here than it does in Paris or New York. We were buying beautiful
          products built for someone else's world and wondering why they didn't quite work in ours.
        </p>
        <p>
          So we built one that does. NOIRÉ is formulated specifically for the Indian climate —
          engineered to open correctly in heat, evolve through humidity, and last on skin the way a
          luxury EDP should: 10 to 14 hours, not two.
        </p>
        <p className="font-semibold text-[#ede8d4]">
          The formula is the statement. Everything else is just packaging.
        </p>
        <p>Tomorrow, we'll show you how to wear it.</p>
      </>
    ),
  },
  {
    step: "03",
    cadence: "Day 4",
    subject: "The one thing almost everyone does wrong with perfume.",
    preview: "It takes two seconds and it ruins everything.",
    buttonOutline: false,
    buttonText: "DISCOVER NOIRÉ EDP",
    buttonHref: "/tutorial",
    content: (
      <>
        <p className="font-semibold text-[#ede8d4]">Stop rubbing your wrists together.</p>
        <p>
          We know. Everyone does it. It feels natural. But rubbing generates friction heat that
          crushes the top notes — those first bright, attention-catching accords — and collapses
          the fragrance before it has a chance to open. You end up smelling the base immediately,
          without the journey.
        </p>
        <p>
          Here's the ritual instead: spray NOIRÉ onto your pulse points — inner wrists, base of
          throat, nape of neck. Hold the bottle 10 to 15 centimetres away. Then do nothing.
          Let the mist settle. Give it three minutes. The fragrance will find you.
        </p>
        <p className="font-semibold text-[#ede8d4]">Presence is not rushed.</p>
        <p>If you haven't tried NOIRÉ yet, this is the ritual it was built for.</p>
      </>
    ),
  },
  {
    step: "04",
    cadence: "Day 7",
    subject: "What happened at Siddharth's meeting in Delhi.",
    preview: "He didn't tell them it was an Indian brand until they asked twice.",
    buttonOutline: true,
    buttonText: "READ ALL REVIEWS",
    buttonHref: "/reviews",
    content: (
      <>
        <p>We'll let Siddharth tell it:</p>

        {/* Pull Quote Block */}
        <div className="relative py-6 pl-4 md:pl-10 my-8">
          <span className="absolute top-0 left-0 text-[100px] leading-none text-[#c9943a]/15 pointer-events-none select-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            &ldquo;
          </span>
          <p className="relative z-10 m-0 text-xl font-normal italic text-[#ede8d4]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            I was in a meeting with people who have worn Creed and Tom Ford for years. I walked in wearing NOIRÉ. By the end of the hour, two of them had asked me what I was wearing. I didn't tell them it was an Indian brand until they asked twice. The look on their faces was worth more than the bottle.
          </p>
          <p className="relative z-10 mt-4 m-0 font-medium text-[9px] tracking-[0.25em] text-[#c9943a] uppercase">
            SIDDHARTH N. &nbsp;·&nbsp; DELHI &nbsp;·&nbsp; VERIFIED PURCHASE
          </p>
        </div>

        <p>
          Siddharth is not alone. 847 verified reviews. 4.9 out of 5. Cities across India.
        </p>
        <p className="font-semibold text-[#ede8d4]">NOIRÉ doesn't ask for attention. It commands it.</p>
      </>
    ),
  },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENTS
   ───────────────────────────────────────────────────────────── */
export default function NewslettersSection() {
  return (
    <main
      className="min-h-screen pt-20 bg-[#080604] text-[#ede8d4] font-light"
      style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* ══════════ HERO ══════════ */}
      <section className="relative px-6 pt-24 pb-16 md:pt-32 text-center overflow-hidden">
        {/* ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#c9943a]/[0.05] blur-[120px] pointer-events-none" />

        <p className="relative z-10 font-medium text-[9px] tracking-[0.45em] text-[#c9943a] uppercase mb-6 m-0">
          EMAIL SEQUENCES &nbsp;·&nbsp; THE NOIRÉ LETTER
        </p>

        <h1
          className="relative z-10 max-w-4xl mx-auto text-[38px] md:text-[56px] font-normal leading-[1.12] text-[#ede8d4] mb-5 m-0"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Five Emails. One Journey.<br />The Art of Building Presence.
        </h1>

        <p className="relative z-10 font-light text-[14.5px] leading-[1.85] text-[#ede8d4]/65 max-w-[42rem] mx-auto mb-20 m-0">
          A curated drip sequence for every new NOIRÉ subscriber — designed so that each email
          builds on the last, and by the fifth, the reader doesn't just know NOIRÉ. They feel it.
        </p>

        {/* ── Sequence Arc Visual ── */}
        <div className="relative z-10 max-w-5xl mx-auto flex items-start justify-between">
          <div className="absolute top-[18px] left-[10%] right-[10%] h-px bg-gradient-to-r from-[#c9943a]/20 via-[#c9943a]/60 to-[#c9943a]/20" />
          {[
            { n: "01", l: "Welcome" },
            { n: "02", l: "The Story" },
            { n: "03", l: "The Ritual" },
            { n: "04", l: "Social Proof" },
            { n: "05", l: "The Invitation" },
          ].map((node, i) => (
            <div key={i} className="relative z-20 flex flex-col items-center gap-4 bg-[#080604] px-2 md:px-4">
              <div className="w-9 h-9 rounded-full border border-[#c9943a] bg-[#0c0906] shadow-[0_0_15px_rgba(201,148,58,0.2)] flex items-center justify-center font-medium text-xs text-[#f0d060]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {node.n}
              </div>
              <span className="font-medium text-[9px] tracking-[0.2em] text-[#c9943a]/80 uppercase hidden md:block">
                {node.l}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ EMAILS FEED ══════════ */}
      <section className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-12">
        {emails.map((email, i) => (
          <div
            key={i}
            className="bg-[#0c0906] border border-[#c9943a]/20 rounded-lg overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
          >
            {/* ── Metadata Strip ── */}
            <div className="border-b border-[#c9943a]/15 bg-[#0a0805] px-6 md:px-10 pt-8 pb-6 relative">
              <span className="absolute top-4 right-6 font-medium text-[8px] tracking-[0.2em] text-[#c9943a]/60 uppercase border border-[#c9943a]/20 px-2 py-1 bg-[#c9943a]/[0.05] rounded-sm">
                Sent: {email.cadence}
              </span>

              <p className="font-medium text-[10px] tracking-[0.1em] text-[#ede8d4]/40 mb-4 m-0 uppercase">
                From: <span className="text-[#ede8d4]/80 ml-2">NOIRÉ hello@noire.in</span>
              </p>

              <h2
                className="text-[22px] md:text-[28px] font-medium leading-[1.3] text-[#f0d060] m-0"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Subject: {email.subject}
              </h2>

              <p className="mt-2 font-light text-[13px] italic text-[#ede8d4]/50 m-0">
                Preview text: “{email.preview}”
              </p>
            </div>

            {/* ── Email Body ── */}
            <div className="px-6 md:px-10 py-10 md:py-14 flex flex-col gap-6 text-[14.5px] leading-[1.8] text-[#ede8d4]/75">
              {email.content}

              {/* CTA Button */}
              <div className="mt-6">
                <Link
                  href={email.buttonHref || "/"}
                  className={`inline-block font-medium text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 py-3.5 px-8
                    ${email.buttonOutline
                      ? "border border-[#c9943a] text-[#c9943a] hover:bg-[#c9943a]/10 hover:text-[#f0d060] hover:border-[#f0d060]"
                      : "bg-[#c9943a] text-[#080604] border border-[#c9943a] hover:bg-[#f0d060] hover:border-[#f0d060]"}`}
                >
                  {email.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ══════════ SEQUENCE LOGIC SUMMARY ══════════ */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <div className="border border-[#c9943a]/25 rounded-md overflow-hidden bg-[#0a0805]">
          <div className="border-b border-[#c9943a]/25 px-6 py-5 bg-[#c9943a]/[0.05]">
            <h3 className="m-0 font-medium text-[11px] tracking-[0.3em] text-[#f0d060] uppercase">
              HOW THIS SEQUENCE IS BUILT
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#c9943a]/15 bg-[#080604]">
                  <th className="font-medium text-[9px] tracking-[0.2em] text-[#c9943a]/70 uppercase py-4 px-6 whitespace-nowrap">Day</th>
                  <th className="font-medium text-[9px] tracking-[0.2em] text-[#c9943a]/70 uppercase py-4 px-6 whitespace-nowrap">Topic</th>
                  <th className="font-medium text-[9px] tracking-[0.2em] text-[#c9943a]/70 uppercase py-4 px-6 whitespace-nowrap">Core Idea</th>
                  <th className="font-medium text-[9px] tracking-[0.2em] text-[#c9943a]/70 uppercase py-4 px-6 whitespace-nowrap">Value / Ask</th>
                </tr>
              </thead>
              <tbody className="text-[13px] font-light text-[#ede8d4]/80 border-b border-[#c9943a]/15">
                {[
                  { d: "Day 0", t: "Welcome", c: "Sets tone and expectation", a: "No ask" },
                  { d: "Day 2", t: "The Story", c: "Brand origin and differentiation", a: "No ask" },
                  { d: "Day 4", t: "The Ritual", c: "Practical fragrance knowledge", a: "Soft product introduction" },
                  { d: "Day 7", t: "Social Proof", c: "Real customer voice", a: "Directed to reviews" },
                  { d: "Day 10", t: "The Invitation", c: "Final purchase path", a: "Direct purchase CTA" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[#c9943a]/10 last:border-0 hover:bg-[#c9943a]/[0.02] transition-colors">
                    <td className="py-4 px-6 font-medium text-[#c9943a] whitespace-nowrap">{row.d}</td>
                    <td className="py-4 px-6 whitespace-nowrap">{row.t}</td>
                    <td className="py-4 px-6">{row.c}</td>
                    <td className="py-4 px-6">{row.a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════ SEND CADENCE NOTE ══════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="border-l-[3px] border-[#c9943a] bg-[#c9943a]/[0.04] p-6 md:p-8 rounded-r-md">
          <p className="m-0 font-light text-[13.5px] leading-[1.9] text-[#ede8d4]/65">
            This sequence runs over 10 days. Subscribers who purchase before Day 10 are automatically
            removed from the remaining sequence and moved to the post-purchase journey. Subscribers who
            reach Day 10 without purchasing are moved to the monthly NOIRÉ Letter — a consistent send
            cadence that builds habit and expectation without pressure.
          </p>
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
          Email Sequences · 2026
        </p>
      </footer>

    </main>
  );
}
