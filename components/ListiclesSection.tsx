"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────────────────────── */
type ListItem = {
  title: string;
  body: string;
};

type Listicle = {
  id: string;
  count: number;
  category: string;
  readTime: string;
  headline: string;
  imageSrc: string;
  imageAlt: string;
  items: ListItem[];
};

/* ─────────────────────────────────────────────────────────────
   DATA
   Image files → save to: public/listicles/
   ───────────────────────────────────────────────────────────── */
const listicles: Listicle[] = [
  {
    id: "perfume-fades",
    count: 7,
    category: "Fragrance Education",
    readTime: "4 min",
    headline: "7 Reasons Your Perfume Fades Before Lunch — and What NOIRÉ Does Differently.",
    // FILE: public/listicles/list-01-skin.png
    // GEMINI PROMPT: "Close-up editorial photograph of water droplets on smooth dark skin — warm gold rim light from behind, very dark background. Ultra-macro, cinematic. Conveys skin hydration and texture. No faces, just skin and light. Luxury editorial feel. 16:9 landscape."
    imageSrc: "/listicles/list-01-skin.png",
    imageAlt: "Close-up of water droplets on dark skin with warm gold rim lighting",
    items: [
      {
        title: "You're applying to dry skin.",
        body: "Dehydrated skin has no surface to hold fragrance molecules. They absorb immediately and disappear within hours. Hydrated skin gives fragrance something to cling to — extending longevity by hours, not minutes.",
      },
      {
        title: "You're rubbing your wrists together.",
        body: "Friction heat crushes the top notes — the bright opening accords that make a fragrance memorable. Once they're gone, they don't come back. Spray and leave it alone.",
      },
      {
        title: "You're using an EDT or body mist, not an EDP.",
        body: "Concentration matters more than quantity. An Eau de Toilette contains 8 to 12 percent fragrance oil. NOIRÉ is an EDP — 15 to 20 percent. The difference is not subtle.",
      },
      {
        title: "You're applying too close to the skin.",
        body: "Holding the bottle against your skin creates a saturated patch rather than an even veil. 10 to 15 centimetres is the distance that allows proper diffusion.",
      },
      {
        title: "You're ignoring the climate.",
        body: "Most fragrances sold in India were not formulated for Indian heat and humidity. They were designed for controlled European environments. NOIRÉ was engineered for the subcontinent's conditions specifically.",
      },
      {
        title: "You're spraying on fabric first.",
        body: "Fabric holds scent differently than skin — some materials amplify, others distort. Always apply to skin at pulse points first.",
      },
      {
        title: "You're judging the fragrance in the first ten minutes.",
        body: "Top notes are the introduction, not the fragrance. The real performance — and NOIRÉ's genuine character — emerges after the heart and base notes develop. Give it time.",
      },
    ],
  },
  {
    id: "luxury-edp",
    count: 5,
    category: "Industry",
    readTime: "3 min",
    headline: "5 Things That Separate a Luxury EDP From Everything Else on the Shelf.",
    // FILE: public/listicles/list-02-shelf.png
    // GEMINI PROMPT: "Wide editorial photograph of a luxury fragrance shelf in an upscale darkened store. Multiple dark glass perfume bottles of varying heights are arranged on a polished black marble shelf, backlit softly with warm amber-gold light from behind. The rest of the space is near-black. Cinematic, aspirational, premium retail. 16:9 landscape."
    imageSrc: "/listicles/list-02-shelf.png",
    imageAlt: "Luxury fragrance bottles on a dark marble shelf with warm gold backlighting",
    items: [
      {
        title: "Concentration.",
        body: "The single most important factor in how a fragrance performs. Luxury EDPs contain a significantly higher percentage of fragrance oil than mass-market alternatives. This is why they last longer, project further, and evolve more interestingly on skin.",
      },
      {
        title: "Raw material quality.",
        body: "The difference between synthetic oud and genuine oud is not subtle — it is the difference between a photograph of a sunset and the sunset itself. Luxury fragrance uses better ingredients. The price reflects this honestly.",
      },
      {
        title: "Formulation intelligence.",
        body: "A great fragrance is not a list of good ingredients. It is a composition — the relationship between those ingredients, the order in which they reveal themselves, and the way they interact with heat and skin chemistry over time.",
      },
      {
        title: "Longevity by design.",
        body: "Mass-market fragrances fade because they are designed to be reapplied — more purchases, more revenue. Luxury EDPs are formulated to last because the brand's reputation depends on the promise being kept. NOIRÉ's 10 to 14 hour standard is not a marketing claim. It is a design specification.",
      },
      {
        title: "The absence of compromise.",
        body: "Luxury is not a feature set. It is what remains when every shortcut has been refused. Every decision in NOIRÉ's formulation had one question behind it: is this the best we can do? When the answer was no, we went back.",
      },
    ],
  },
  {
    id: "signature-scent",
    count: 9,
    category: "Culture & Lifestyle",
    readTime: "5 min",
    headline: "9 Signs You've Found Your Signature Scent.",
    // FILE: public/listicles/list-03-signature.png
    // GEMINI PROMPT: "Close-up editorial of a dark luxury perfume bottle standing upright on a dark stone surface, with a warm halo of soft gold ambient light surrounding it. The background fades to absolute black. The bottle has a cinematic, almost mythic quality — as if it is the only object in the world. Still, contemplative, personal. 16:9 landscape."
    imageSrc: "/listicles/list-03-signature.png",
    imageAlt: "NOIRÉ perfume bottle with a gold halo on dark stone, black background",
    items: [
      {
        title: "You stop noticing it on yourself — but everyone else still does.",
        body: "Olfactory adaptation means you stop smelling your own fragrance after a while. This is not fading. Others are still experiencing it fully. The fact that you've stopped noticing means it has become part of you.",
      },
      {
        title: "You reach for it without thinking.",
        body: "Signature scents are not chosen each morning. They are simply what you wear. The decision has already been made.",
      },
      {
        title: "People ask what you're wearing before they ask your name.",
        body: "A signature scent precedes you. It enters a room, stays after you've left, and becomes part of how people remember you.",
      },
      {
        title: "You feel slightly wrong without it.",
        body: "Not incomplete — just slightly less like yourself. This is the sign that a fragrance has become identity rather than accessory.",
      },
      {
        title: "You've stopped browsing.",
        body: "The decision has been made. You're not looking anymore.",
      },
      {
        title: "It smells different on you than on anyone else.",
        body: "This is the most important sign. A true signature scent interacts with your skin chemistry uniquely. NOIRÉ on you is not NOIRÉ on anyone else.",
      },
      {
        title: "You buy a backup before the first bottle is finished.",
        body: "This requires no explanation.",
      },
      {
        title: "It has become part of specific memories.",
        body: "Fragrance is the sense most closely linked to memory. When your scent starts appearing in other people's recollections of you, it has become a signature.",
      },
      {
        title: "You've stopped trying to explain it and started letting it speak.",
        body: "The best signature scents need no justification. They simply are. This is where NOIRÉ aims to take you.",
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   INTERNAL LINK CARDS
   ───────────────────────────────────────────────────────────── */
const relatedLinks = [
  { label: "Tutorial Articles", sub: "The application ritual", href: "/tutorial" },
  { label: "The NOIRÉ Journal", sub: "Opinion & brand stories", href: "/opinion" },
  { label: "FAQs", sub: "Knowledge base", href: "/faq" },
];

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
   ───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────── */
export default function ListiclesSection() {
  return (
    <main
      className="min-h-screen pt-20 bg-[#080604] text-[#ede8d4] font-light"
      style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* ══════════ HERO ══════════ */}
      <section className="relative px-6 pt-24 pb-16 md:pt-32 md:pb-20 text-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-[#c9943a]/[0.05] blur-[130px] pointer-events-none" />

        <p className="relative z-10 font-medium text-[9px] tracking-[0.45em] text-[#c9943a] uppercase mb-6 m-0">
          LISTICLES &nbsp;·&nbsp; CURATED READS
        </p>

        <h1
          className="relative z-10 max-w-4xl mx-auto text-[38px] md:text-[56px] font-normal leading-[1.1] text-[#ede8d4] mb-5 m-0"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          The Lists That Actually Tell You Something.
        </h1>

        <p className="relative z-10 font-light text-[14.5px] leading-[1.85] text-[#ede8d4]/60 max-w-[40rem] mx-auto mb-0 m-0">
          Skimmable, specific, and written with NOIRÉ's signature conviction — each list is a complete thought, not a content placeholder.
        </p>
      </section>

      {/* ══════════ LISTICLES ══════════ */}
      <div className="max-w-5xl mx-auto px-6 pb-24 flex flex-col gap-24">
        {listicles.map((list) => (
          <article key={list.id}>

            {/* ── LISTICLE HEADER (Text) ── */}
            <div className="relative mb-8 px-2 md:px-4">
              {/* Large faded count number behind text */}
              <div
                className="absolute top-1/2 right-4 md:right-10 -translate-y-1/2 select-none pointer-events-none leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(100px, 16vw, 220px)",
                  color: "rgba(201,148,58,0.06)",
                  fontWeight: 300,
                  zIndex: -1,
                }}
              >
                {list.count}
              </div>

              <div className="flex items-center gap-3 mb-5">
                <span className="font-medium text-[7.5px] tracking-[0.3em] text-[#c9943a] uppercase bg-[#c9943a]/[0.08] border border-[#c9943a]/25 px-3 py-1.5 rounded-sm">
                  {list.category}
                </span>
                <span className="font-light text-[8px] tracking-[0.2em] text-[#ede8d4]/40 uppercase">
                  {list.readTime} read
                </span>
              </div>
              <h2
                className="text-[28px] md:text-[38px] font-normal leading-[1.2] text-[#f0d060] max-w-3xl m-0"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {list.headline}
              </h2>
            </div>

            {/* ── LISTICLE IMAGE (Clean) ── */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#c9943a]/20 mb-10 bg-[#0a0805]">
              <div className="relative w-full" style={{ aspectRatio: "16/7" }}>
                <Image
                  src={list.imageSrc}
                  alt={list.imageAlt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 40%" }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>
            </div>

            {/* ── LIST ITEMS ── */}
            <div className="flex flex-col gap-3">
              {list.items.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="flex gap-0 border border-[#c9943a]/15 rounded-xl overflow-hidden hover:border-[#c9943a]/35 transition-colors duration-300 group"
                  style={{ background: "rgba(201,148,58,0.015)" }}
                >
                  {/* Number column */}
                  <div
                    className="flex items-center justify-center px-5 md:px-8 py-6 shrink-0 border-r border-[#c9943a]/12 min-w-[60px] md:min-w-[80px] select-none"
                    style={{ background: "rgba(201,148,58,0.025)" }}
                  >
                    <span
                      className="font-normal leading-none"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(28px, 4vw, 44px)",
                        color: "rgba(201,148,58,0.25)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content column */}
                  <div className="flex flex-col gap-2 px-6 md:px-8 py-6 flex-1">
                    <h3
                      className="text-[20px] md:text-[23px] font-normal leading-[1.25] text-[#ede8d4] m-0 group-hover:text-[#f0d060] transition-colors duration-300"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="font-light text-[13.5px] leading-[1.85] text-[#ede8d4]/60 m-0">
                      {item.body}
                    </p>
                  </div>

                  {/* Gold accent bar — left edge on first and last items */}
                  {(i === 0 || i === list.items.length - 1) && (
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c9943a] to-[#c9943a]/20 pointer-events-none" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* ── Thin separator after each listicle except last ── */}
            {list.id !== listicles[listicles.length - 1].id && (
              <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#c9943a]/20 to-transparent" />
            )}

          </article>
        ))}
      </div>

      {/* ══════════ INTERNAL LINKING BLOCK ══════════ */}
      <section className="max-w-5xl mx-auto px-6 pb-28">
        <p className="font-medium text-[9px] tracking-[0.4em] text-[#c9943a] uppercase mb-8 m-0 text-center">
          Read More From the NOIRÉ Edit
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between gap-4 border border-[#c9943a]/20 rounded-xl px-6 py-5 hover:border-[#c9943a]/50 hover:bg-[#c9943a]/[0.03] transition-all duration-300"
            >
              <div className="flex flex-col gap-1">
                <span
                  className="text-[17px] font-normal text-[#ede8d4] group-hover:text-[#f0d060] transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {link.label}
                </span>
                <span className="font-light text-[9px] tracking-[0.2em] uppercase text-[#c9943a]/50">
                  {link.sub}
                </span>
              </div>
              <span className="text-[#c9943a] group-hover:text-[#f0d060] group-hover:translate-x-1 transition-all duration-300 text-lg shrink-0">
                →
              </span>
            </Link>
          ))}
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
          Listicles · 2026
        </p>
      </footer>

    </main>
  );
}
