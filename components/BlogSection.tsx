"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────────────────────── */
type Article = {
  id: string;
  featured: boolean;
  category: string;
  readTime: string;
  imageSrc: string;
  imageAlt: string;
  headline: string;
  excerpt: string;
  content: React.ReactNode;
};

/* ─────────────────────────────────────────────────────────────
   ARTICLES
   Image files → place in: public/blog/
   ───────────────────────────────────────────────────────────── */
const articles: Article[] = [
  {
    id: "perfume-smells-different",
    featured: true,
    category: "Fragrance Education",
    readTime: "6 min read",
    // FILE: public/blog/01-botanicals.png
    // GEMINI PROMPT: "Overhead flat-lay of a dark luxury perfume bottle on polished black marble, surrounded by scattered dried botanicals — oud wood chips, chunks of amber resin, dried roses, and vetiver roots. Lit by warm candlelight from the left. Color palette is near-black, deep gold, and dark cream. Shot from directly above. Cinematic, editorial, ultra-luxury aesthetic. Aspect ratio 16:9."
    imageSrc: "/blog/01-botanicals.png",
    imageAlt: "NOIRÉ bottle on black marble with dried botanicals in candlelight",
    headline: "Why Your Perfume Smells Different on You Than in the Bottle — and Why That's the Point.",
    excerpt: "Your skin is not a neutral surface. It is an active ingredient. Here is the science and the art behind why NOIRÉ becomes yours.",
    content: (
      <div className="flex flex-col gap-6">
        <p className="font-light text-[14.5px] leading-[1.85] text-[#ede8d4]/75">
          You've likely experienced it: you smell a fragrance on someone else, ask what it is, buy it, and are immediately disappointed. It doesn't smell the same. This isn't a defect in the bottle — it is the science of skin chemistry, and it is the exact reason why mass-market fragrances often smell flat. They are designed to smell identical on a paper tester strip and on skin. True luxury fragrance is designed to evolve.
        </p>
        <h3 className="text-[22px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Chemistry of Skin</h3>
        <p className="font-light text-[14.5px] leading-[1.85] text-[#ede8d4]/75">
          Your skin is an active chemical environment. Its pH level, natural oil production, body temperature, and even your diet fundamentally alter how fragrance molecules behave. Dry skin absorbs volatile oils quickly — top notes vanish and projection is muted. Oily skin acts as an anchor, holding onto fragrance molecules and amplifying deeper base notes over time.
        </p>
        <h3 className="text-[22px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>What Top, Heart, and Base Notes Actually Mean</h3>
        <p className="font-light text-[14.5px] leading-[1.85] text-[#ede8d4]/75">
          These aren't just marketing terms — they refer to molecular weight and evaporation rate. Top notes are the lightest: citrus, green accords. They evaporate first, driven by body heat. Heart notes bridge the gap. Base notes — heavy woods, resins, musks — are the largest molecules. They don't evaporate. They bond with your skin's natural oils and become part of you.
        </p>
        <h3 className="text-[22px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Why NOIRÉ Was Designed With This in Mind</h3>
        <p className="font-light text-[14.5px] leading-[1.85] text-[#ede8d4]/75">
          When we formulated NOIRÉ, we anchored the base in oud and amber precisely because of how they interact with warmer skin temperatures common across India. In severe heat, lighter fragrances burn off immediately. NOIRÉ uses the heat as an engine — as your skin temperature rises, the resinous amber and complex oud are pushed outward, creating a scent that is richer and more unique to you.
        </p>
        <h3 className="text-[22px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>How to Work With Your Skin, Not Against It</h3>
        <p className="font-light text-[14.5px] leading-[1.85] text-[#ede8d4]/75">
          Moisturise first. An unscented lotion creates a lipid barrier that fragrance clings to. Apply to pulse points only — where blood flow generates the subtle heat needed to activate the notes. Never rub your wrists together. The friction crushes delicate top note molecules and muddies the fragrance. Spray, wait, and allow the full bloom.
        </p>
        <div className="mt-2 pt-6 border-t border-[#c9943a]/15">
          <Link href="/tutorial" className="inline-block font-medium text-[10px] tracking-[0.3em] uppercase text-[#c9943a] hover:text-[#f0d060] transition-colors">
            Ready to experience what NOIRÉ does on your skin? Discover the ritual →
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: "signature-scent",
    featured: false,
    category: "Culture & Lifestyle",
    readTime: "5 min read",
    // FILE: public/blog/02-wrist.png
    // GEMINI PROMPT: "Close-up of a well-dressed person's wrist applying a dark luxury perfume bottle, bathed in warm golden morning light. The person is wearing a dark sleeve and a gold watch. The luxury interior background is deeply blurred. Mood is intimate, cinematic, and aspirational. Aspect ratio 16:9. Ultra-realistic editorial photography style."
    imageSrc: "/blog/02-wrist.png",
    imageAlt: "Wrist applying NOIRÉ perfume in golden morning light",
    headline: "The Lost Art of the Signature Scent — and How to Find Yours.",
    excerpt: "A signature scent is not chosen. It is discovered — usually by accident, always by feel. Here is how to make that discovery deliberate.",
    content: (
      <div className="flex flex-col gap-6">
        <h3 className="text-[21px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>What Makes a Scent a Signature</h3>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          A true signature scent operates on a subconscious level. It is recognised by others before you announce yourself. It changes how a room responds to you. And ultimately, it becomes inseparable from memory — when someone smells it by chance years later, it is your face they see.
        </p>
        <h3 className="text-[21px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Why Most People Never Find One</h3>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          Most people buy fragrance for the wrong reasons — the weight of the bottle, a celebrity endorsement, or how it smells on a paper tester strip. They never give the liquid time to develop a relationship with their skin before dismissing it.
        </p>
        <h3 className="text-[21px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Three-Wear Rule</h3>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          Wear a fragrance three times on clean skin before deciding. First: to meet it. Second: to understand how it evolves on your skin over six hours. Third: to decide — not just "does this smell good?" but "does this feel like me?"
        </p>
        <h3 className="text-[21px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Building Your Signature With NOIRÉ</h3>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          NOIRÉ's oud-amber-musk base is designed to leave room for your skin chemistry to finish the formulation. It will not smell exactly the same on you as it does on your partner. Wear it for a full week before forming your final opinion.
        </p>
        <div className="mt-2 pt-6 border-t border-[#c9943a]/15">
          <Link href="/tutorial" className="inline-block font-medium text-[10px] tracking-[0.3em] uppercase text-[#c9943a] hover:text-[#f0d060] transition-colors">
            Start with the NOIRÉ ritual →
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: "origin-story",
    featured: false,
    category: "Brand Stories",
    readTime: "4 min read",
    // FILE: public/blog/03-bottle-noir.png
    // GEMINI PROMPT: "A single dark luxury perfume bottle lying on its side on deep textured black fabric. Dramatic raking side lighting from the right creates a long thin gold highlight along the bottle's edge and a long dark shadow extending left. The background is near-black. Mood is moody, artistic, and noir. Shot in portrait or 16:9 landscape. Ultra-luxury editorial style."
    imageSrc: "/blog/03-bottle-noir.png",
    imageAlt: "NOIRÉ bottle on dark fabric with dramatic gold side lighting",
    headline: "Built for India, Not Adapted for It — the NOIRÉ Origin Story.",
    excerpt: "Most luxury fragrances available in India were made elsewhere and adjusted downward. We started from a different question entirely.",
    content: (
      <div className="flex flex-col gap-6">
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          It started with a simple, expensive frustration. We were buying spectacular world-renowned fragrances from Paris and London — only to watch them collapse into sour, powdery messes the moment they met the humidity of Mumbai or the dry heat of Delhi. Masterpieces, but built for a temperate European climate.
        </p>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          We realized that most luxury brands view India as a distribution market, never as a formulation variable. Rather than adapting a western scent profile downward, we decided to engineer from scratch.
        </p>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          High-temperature skin chemistry is unforgiving. It burns through delicate citrus top notes in minutes and warps synthetic florals. To survive it, we had to build from the base up — anchoring the formula in genuine oud and deep amber resins that use heat as a projection engine rather than being destroyed by it.
        </p>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          Eau de Parfum concentration was non-negotiable. When the first true test batch was finalized, we wore it through a 14-hour summer day in Hyderabad. At 10 PM, it was still projecting. That was the moment we knew we had an answer.
        </p>
        <div className="mt-2 pt-6 border-t border-[#c9943a]/15">
          <Link href="/opinion" className="inline-block font-medium text-[10px] tracking-[0.3em] uppercase text-[#c9943a] hover:text-[#f0d060] transition-colors">
            Read our full story →
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: "anchor-scent",
    featured: false,
    category: "How-To",
    readTime: "5 min read",
    // FILE: public/blog/04-three-bottles.png
    // GEMINI PROMPT: "Minimalist top-down flat-lay of three identical dark luxury perfume bottles arranged in an equilateral triangle on a black stone surface. One bottle has its cap off, one has its cap on, and one has a visible thin gold mist spray suspended in the air to its right. Lighting is clean, cool, and precise from overhead. Pure black background. Ultra-luxury product photography style. 16:9."
    imageSrc: "/blog/04-three-bottles.png",
    imageAlt: "Three NOIRÉ bottles arranged on black stone with gold spray mist",
    headline: "How to Build a Fragrance Wardrobe With One Anchor Scent.",
    excerpt: "You do not need twenty fragrances to have a fragrance wardrobe. You need one exceptional anchor. Everything else follows.",
    content: (
      <div className="flex flex-col gap-6">
        <h3 className="text-[21px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>What an Anchor Scent Is</h3>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          Your anchor is the fragrance you reach for instinctively — for the meeting you're rushing to and the dinner you dressed for. It has no wrong moment. It becomes the baseline scent your clothes, your car, and your home subtly adopt.
        </p>
        <h3 className="text-[21px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Why NOIRÉ Works as an Anchor</h3>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          An anchor must be versatile without being forgettable. NOIRÉ solves this through evolution. The bright, spicy opening works for sharp morning meetings. The deep oud-musk dry-down projects quiet sophistication at evening dinners — no reapplication needed.
        </p>
        <h3 className="text-[21px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>How to Layer Around It</h3>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          Once you have your anchor, you can complicate it. For high-summer mornings, spray NOIRÉ on your chest and a light bitter-citrus on your wrists. The heat burns off the citrus by midday, leaving NOIRÉ's base in seamless control. For evenings, apply to skin and the hem of clothing for maximum projection.
        </p>
        <h3 className="text-[21px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Rule of Three</h3>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          A complete wardrobe requires only three profiles: your dark, complex anchor (NOIRÉ), a bracingly light daytime option for casual wear, and a seasonal scent for the extreme months. Begin with the anchor.
        </p>
        <div className="mt-2 pt-6 border-t border-[#c9943a]/15">
          <Link href="/" className="inline-block font-medium text-[10px] tracking-[0.3em] uppercase text-[#c9943a] hover:text-[#f0d060] transition-colors">
            Discover NOIRÉ →
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: "three-ingredients",
    featured: false,
    category: "Fragrance Education",
    readTime: "7 min read",
    // FILE: public/blog/05-raw-materials.png
    // GEMINI PROMPT: "Extreme close-up macro photograph of oud wood chips and large chunks of amber resin arranged on a pure black surface. Fine gold dust is scattered between the pieces. Warm single-source candlelight from the left creates deep shadow and dramatic texture on the wood chips. Color palette: near-black, deep gold, dark amber. Editorial, tactile, luxury. 16:9 aspect ratio."
    imageSrc: "/blog/05-raw-materials.png",
    imageAlt: "Oud wood chips and amber resin with gold dust in candlelight",
    headline: "Oud, Amber, Musk — the Three Ingredients That Define Modern Indian Luxury Fragrance.",
    excerpt: "These are not just fragrance notes. They are cultural materials with centuries of context — and they are the heart of NOIRÉ.",
    content: (
      <div className="flex flex-col gap-6">
        <h3 className="text-[21px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Oud — the Most Expensive Raw Material in Perfumery</h3>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          Oud forms when the Aquilaria tree defends itself against a specific mold infection, producing a dense, dark, wildly aromatic resin. It is the gold standard of luxury fragrance, carrying deep cultural resonance across South Asia and the Middle East. Its animalic, woody depth cannot be meaningfully replicated synthetically. It grounds a fragrance, giving it gravity.
        </p>
        <h3 className="text-[21px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Amber — Warmth, Depth, Longevity</h3>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          In perfumery, "amber" is not fossilized tree sap — it is an abstract accord, traditionally built from labdanum, benzoin, and vanilla. It provides the warm, sweet, golden glow at the base of a fragrance. Crucially, amber molecules are massive and evaporate incredibly slowly, which gives NOIRÉ its exceptional longevity in warm climates.
        </p>
        <h3 className="text-[21px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Musk — The Note That Makes It Personal</h3>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          Modern perfumery uses entirely ethical synthetic musks. Musk is the great translator — it takes the other ingredients and renders them in the language of human skin. It provides a clean warmth that prevents oud and amber from becoming overwhelming, and it is the primary mechanism by which a fragrance smells like a person rather than a product.
        </p>
        <h3 className="text-[21px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Why NOIRÉ Leads With All Three</h3>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          Most commercial fragrances choose one heavyweight base note. We anchored NOIRÉ in a complex triad simultaneously. They stabilize each other: the sweetness of amber softens the harshness of oud, while musk provides a clean canvas that ties the entire heavy base structure to the wearer's skin.
        </p>
      </div>
    ),
  },
  {
    id: "industry-numbers",
    featured: false,
    category: "Industry",
    readTime: "6 min read",
    // FILE: public/blog/06-retail.png
    // GEMINI PROMPT: "Wide editorial photograph of a dark luxury fragrance retail counter. Multiple dark glass perfume bottles are backlit from behind with warm golden light, creating glowing gold silhouettes. The counter surface is dark marble. Dramatic single-point overhead lighting. The environment is aspirational and premium — like a high-end store at night. 16:9 landscape. Cinematic, authoritative aesthetic."
    imageSrc: "/blog/06-retail.png",
    imageAlt: "Luxury fragrance counter with gold-backlit bottles on dark marble",
    headline: "India's Fragrance Market in 2026 — What the Numbers Say and What They Don't.",
    excerpt: "The data says India is the world's fifth-largest fragrance market. What the data doesn't say is who that market is actually being built for.",
    content: (
      <div className="flex flex-col gap-6">
        <h3 className="text-[21px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Numbers</h3>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          India's fragrance market is expanding at nearly 15% CAGR, positioning it as the fifth-largest globally. However, over 80% of this volume is concentrated in mass-market deodorant and body mist segments. The actual premium EDP market remains dominated by legacy French and Italian houses.
        </p>
        <h3 className="text-[21px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>What the Data Misses</h3>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          There is a glaring gap between what the Indian luxury consumer wants and what is being supplied locally. Homegrown brands default to "Ayurvedic" positioning or mass-market clone production. The data entirely misses the demographic of highly-educated, well-traveled Indian consumers who want genuine modern luxury — without ethnic marketing tropes or imported compromises.
        </p>
        <h3 className="text-[21px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Where the Opportunity Actually Is</h3>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          The whitespace lies in creating an authentically premium, homegrown product engineered specifically for the geography it is worn in — packaged and communicated with absolute global parity. This consumer is done with compromise. They will pay a premium, but only for indisputable quality.
        </p>
        <h3 className="text-[21px] text-[#f0d060] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>What This Means for NOIRÉ</h3>
        <p className="font-light text-[14px] leading-[1.85] text-[#ede8d4]/75">
          NOIRÉ was built specifically to inhabit this intersection. We are not competing with mass-market deodorant sprays, nor attempting to be a "budget alternative" to Tom Ford. We are building the luxury homegrown standard for the consumer the data forgot.
        </p>
        <div className="mt-2 pt-6 border-t border-[#c9943a]/15">
          <Link href="/opinion" className="inline-block font-medium text-[10px] tracking-[0.3em] uppercase text-[#c9943a] hover:text-[#f0d060] transition-colors">
            Read our full industry perspective →
          </Link>
        </div>
      </div>
    ),
  },
];

const categories = ["All", "Fragrance Education", "Culture & Lifestyle", "Brand Stories", "How-To", "Industry"];

/* ─────────────────────────────────────────────────────────────
   ARTICLE MODAL — centered popup, same pattern as Team page
   ───────────────────────────────────────────────────────────── */
function ArticleModal({
  article,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  article: Article;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    /* ── Backdrop ── */
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(8,6,4,0.88)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      {/* ── Modal panel ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full md:w-[75vw] max-w-6xl flex flex-col md:flex-row rounded-2xl overflow-hidden border border-[#c9943a]/30 shadow-[0_40px_120px_rgba(0,0,0,0.9),0_0_0_1px_rgba(201,148,58,0.15)]"
        style={{ background: "#0d0a06", maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ══ LEFT — Article image (16:9 on mobile, fixed col on desktop) ══ */}
        <div className="relative md:w-1/2 shrink-0 aspect-[16/9] md:aspect-auto">
          <Image
            src={article.imageSrc}
            alt={article.imageAlt}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          {/* Dark gradient at bottom of image */}
          <div
            className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(13,10,6,0.95), transparent)" }}
          />
          {/* Category + headline badge over image */}
          <div className="absolute bottom-5 left-5 right-5">
            <p className="font-medium text-[7.5px] tracking-[0.35em] text-[#c9943a] uppercase mb-1.5 m-0">
              {article.category}
            </p>
            <p className="font-light text-[8px] tracking-[0.15em] text-[#ede8d4]/50 uppercase m-0">
              {article.readTime}
            </p>
          </div>

        </div>

        {/* ══ RIGHT — Article content ══ */}
        <div
          className="flex-1 flex flex-col justify-between overflow-y-auto"
          style={{ padding: "2.5rem 2.5rem 2rem", scrollbarWidth: "thin", scrollbarColor: "rgba(201,148,58,0.2) transparent" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full border border-[#c9943a]/30 flex items-center justify-center text-[#c9943a] hover:border-[#c9943a] hover:bg-[#c9943a]/10 transition-colors duration-200 text-sm bg-[#0d0a06]/80"
          >✕</button>

          {/* Content */}
          <div className="flex flex-col gap-5" style={{ fontFamily: "'Montserrat', ui-sans-serif, sans-serif" }}>
            <div>
              <div className="h-px w-10 bg-[#c9943a] mb-5" />
              <p className="font-light text-[9px] tracking-[0.4em] text-[#c9943a] uppercase m-0 mb-2">
                {article.category}
              </p>
              <h2
                className="text-2xl md:text-3xl font-normal text-[#f0d060] m-0 leading-[1.2]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {article.headline}
              </h2>
            </div>

            {/* Excerpt as pull quote */}
            <p
              className="font-light text-sm italic text-[#d4c4a0]/70 border-l-2 border-[#c9943a]/30 pl-4 m-0"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
            >
              "{article.excerpt}"
            </p>

            {/* Full article body */}
            <div className="text-[#ede8d4]">
              {article.content}
            </div>
          </div>

          {/* ── Bottom nav: counter + prev/next ── */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#c9943a]/15">
            <span className="font-light text-[9px] tracking-[0.3em] text-[#c9943a]/50 uppercase">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="w-9 h-9 rounded-full border border-[#c9943a]/30 flex items-center justify-center text-[#c9943a] hover:border-[#c9943a] hover:bg-[#c9943a]/10 transition-colors duration-200"
                aria-label="Previous article"
              >←</button>
              <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="w-9 h-9 rounded-full border border-[#c9943a]/30 flex items-center justify-center text-[#c9943a] hover:border-[#c9943a] hover:bg-[#c9943a]/10 transition-colors duration-200"
                aria-label="Next article"
              >→</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────────────────── */
export default function BlogSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const featuredArticle = activeFilter === "All" ? articles.find((a) => a.featured) : null;
  const standardArticles = activeFilter === "All"
    ? articles.filter((a) => !a.featured)
    : articles.filter((a) => a.category === activeFilter);

  // All visible articles in display order (featured first) for prev/next navigation
  const visibleArticles = featuredArticle
    ? [featuredArticle, ...standardArticles]
    : standardArticles;

  const openArticle = (id: string) => {
    const idx = visibleArticles.findIndex((a) => a.id === id);
    if (idx !== -1) setActiveIndex(idx);
  };

  const activeArticle = activeIndex !== null ? visibleArticles[activeIndex] : null;
  const goPrev = () => setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : visibleArticles.length - 1));
  const goNext = () => setActiveIndex((i) => (i !== null && i < visibleArticles.length - 1 ? i + 1 : 0));

  return (
    <main
      className="min-h-screen pt-20 bg-[#080604] text-[#ede8d4] font-light"
      style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* ══════════ HERO ══════════ */}
      <section className="relative px-6 pt-24 pb-16 md:pt-32 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#c9943a]/[0.05] blur-[120px] pointer-events-none" />

        <p className="relative z-10 font-medium text-[9px] tracking-[0.45em] text-[#c9943a] uppercase mb-6 m-0">
          THE NOIRÉ EDIT &nbsp;·&nbsp; BLOG &amp; ARTICLES
        </p>

        <h1
          className="relative z-10 max-w-4xl mx-auto text-[38px] md:text-[56px] font-normal leading-[1.12] text-[#ede8d4] mb-5 m-0"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Stories Worth Reading. Knowledge Worth Keeping.
        </h1>

        <p className="relative z-10 font-light text-[14.5px] leading-[1.85] text-[#ede8d4]/65 max-w-[42rem] mx-auto mb-16 m-0">
          From the art of wearing fragrance to the culture that surrounds it — articles written with the same care that goes into every drop of NOIRÉ.
        </p>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-wrap gap-2.5 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-light text-[9px] tracking-[0.25em] uppercase px-5 py-2.5 rounded-full border transition-all duration-300
                ${activeFilter === cat
                  ? "bg-[#c9943a] border-[#c9943a] text-[#080604] font-medium shadow-[0_0_15px_rgba(201,148,58,0.2)]"
                  : "bg-transparent border-[#c9943a]/25 text-[#c9943a]/80 hover:border-[#f0d060] hover:text-[#f0d060]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ══════════ ARTICLE GRID ══════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-10 w-full group cursor-pointer transition-all duration-300 ease-out bg-[#c9943a]/[0.02] border border-[#c9943a]/15 hover:border-[#c9943a]/40 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(201,148,58,0.14)] rounded-xl overflow-hidden"
            onClick={() => openArticle(featuredArticle.id)}
          >
            {/* Image */}
            <div className="relative w-full overflow-hidden bg-[#0a0805]" style={{ aspectRatio: "16/9" }}>
              <Image
                src={featuredArticle.imageSrc}
                alt={featuredArticle.imageAlt}
                fill
                style={{ objectFit: "cover" }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0805] via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-8 md:p-12">
              <span className="inline-block font-medium text-[8px] tracking-[0.2em] text-[#c9943a] uppercase bg-[#c9943a]/[0.06] border border-[#c9943a]/20 px-3 py-1.5 mb-5 rounded-sm">
                {featuredArticle.category}
              </span>
              <h2 className="text-[32px] md:text-[40px] text-[#ede8d4] font-normal leading-[1.2] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {featuredArticle.headline}
              </h2>
              <p className="font-light text-[15px] leading-[1.7] text-[#ede8d4]/60 mb-8 max-w-3xl">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-6">
                <span className="font-medium text-[9px] tracking-[0.2em] text-[#c9943a]/60 uppercase">{featuredArticle.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-[#c9943a]/30" />
                <span className="font-medium text-[10px] tracking-[0.3em] uppercase text-[#c9943a] group-hover:text-[#f0d060] transition-colors">
                  Read Article →
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Standard Articles Grid */}
        {standardArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standardArticles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col group cursor-pointer transition-all duration-300 ease-out bg-[#c9943a]/[0.02] border border-[#c9943a]/15 hover:border-[#c9943a]/40 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(201,148,58,0.14)] rounded-xl overflow-hidden"
                onClick={() => openArticle(article.id)}
              >
                {/* Image */}
                <div className="relative w-full overflow-hidden bg-[#0a0805]" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    fill
                    style={{ objectFit: "cover" }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0805] via-transparent to-transparent opacity-90" />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="inline-block font-medium text-[7.5px] tracking-[0.2em] text-[#c9943a] uppercase bg-[#c9943a]/[0.06] border border-[#c9943a]/20 px-2.5 py-1 rounded-sm">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-[22px] text-[#ede8d4] font-normal leading-[1.25] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {article.headline}
                  </h2>
                  <p className="font-light text-[13px] leading-[1.65] text-[#ede8d4]/60 mb-6 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-[#c9943a]/15 pt-5 mt-auto">
                    <span className="font-medium text-[8.5px] tracking-[0.2em] text-[#c9943a]/60 uppercase">{article.readTime}</span>
                    <span className="font-medium text-[9px] tracking-[0.3em] uppercase text-[#c9943a] group-hover:text-[#f0d060] transition-colors">
                      Read Article →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !featuredArticle && (
            <div className="text-center py-20 text-[#c9943a]/60 text-sm tracking-wider uppercase font-light">
              No articles match this filter.
            </div>
          )
        )}
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
          Editorial · 2026
        </p>
      </footer>

      {/* ══════════ ARTICLE MODAL ══════════ */}
      <AnimatePresence>
        {activeArticle && activeIndex !== null && (
          <ArticleModal
            article={activeArticle}
            index={activeIndex}
            total={visibleArticles.length}
            onClose={() => setActiveIndex(null)}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>

    </main>
  );
}
