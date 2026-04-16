"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────────────────────── */
type Ebook = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  pages: string;
  category: string;
  pdfSrc: string;        // /ebooks/filename.pdf
  coverColor: string;    // fallback gradient when no cover image
  coverImageSrc?: string; // Optional image to display instead of text
};

/* ─────────────────────────────────────────────────────────────
   DATA  — Add your PDFs to public/ebooks/ and update pdfSrc
   ───────────────────────────────────────────────────────────── */
const ebooks: Ebook[] = [
  {
    id: "art-of-presence",
    title: "The Art of Presence",
    subtitle: "A NOIRÉ Guide to Fragrance & Identity",
    description:
      "A comprehensive guide on fragrance philosophy, skin chemistry, how to build a signature scent, and why NOIRÉ was engineered specifically for the Indian climate. Free, no email required.",
    pages: "Full Guide",
    category: "Education",
    pdfSrc: "/NOIRE_Art_of_Presence_Ebook (1).pdf",
    coverColor: "linear-gradient(145deg, #1a1207 0%, #2d1f0a 40%, #c9943a22 100%)",
    coverImageSrc: "/ebook_frontpage.jpeg",
  },
];


/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
   ───────────────────────────────────────────────────────────── */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.96, y: 24, transition: { duration: 0.25, ease: [0.6, 0, 0.8, 0] } },
};

/* ─────────────────────────────────────────────────────────────
   EBOOK CARD
   ───────────────────────────────────────────────────────────── */
function EbookCard({ book, index, onPreview }: { book: Ebook; index: number; onPreview: (b: Ebook) => void }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="flex flex-col rounded-2xl overflow-hidden border border-[#c9943a]/18 bg-[#0c0906] group"
      style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.5)" }}
    >
      {/* ── Book Cover ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "3/4", background: book.coverColor }}
      >
        {/* Shimmer overlay */}
        <div className="book-shimmer" />

        {/* Corner bracket accents */}
        <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#c9943a]/60 rounded-tl-sm z-10 pointer-events-none" />
        <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#c9943a]/60 rounded-tr-sm z-10 pointer-events-none" />
        <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#c9943a]/60 rounded-bl-sm z-10 pointer-events-none" />
        <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#c9943a]/60 rounded-br-sm z-10 pointer-events-none" />

        {/* Image or Centered Book Title on Cover */}
        {book.coverImageSrc ? (
          <Image
            src={book.coverImageSrc}
            alt={book.title}
            fill
            className="object-cover relative z-0"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-5">
            {/* NOIRÉ wordmark */}
            <p
              className="font-light text-[9px] tracking-[0.55em] text-[#c9943a]/60 uppercase mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              NOIRÉ
            </p>
            <h3
              className="text-[22px] font-normal leading-[1.25] text-[#ede8d4]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {book.title}
            </h3>
            <div className="w-10 h-px bg-[#c9943a]/50 mt-5 mb-5" />
            <p
              className="font-light text-[9px] tracking-[0.2em] text-[#c9943a]/70 uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {book.subtitle}
            </p>
          </div>
        )}

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(12,9,6,0.9), transparent)" }} />

        {/* Category pill */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="font-medium text-[7px] tracking-[0.3em] text-[#c9943a] uppercase bg-[#c9943a]/10 border border-[#c9943a]/25 px-3 py-1 rounded-full">
            {book.category}
          </span>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div>
          <p className="font-light text-[8.5px] tracking-[0.2em] text-[#c9943a]/50 uppercase mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {book.pages} · Free Download
          </p>
          <p
            className="font-light text-[13px] leading-[1.75] text-[#ede8d4]/65"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {book.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto pt-2">
          {/* Preview */}
          <button
            onClick={() => onPreview(book)}
            className="flex-1 py-3 text-[9px] font-medium tracking-[0.25em] uppercase border border-[#c9943a]/30 text-[#c9943a] rounded-lg hover:border-[#c9943a]/70 hover:bg-[#c9943a]/[0.06] transition-all duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Preview
          </button>

          {/* Download */}
          <a
            href={book.pdfSrc}
            download
            className="flex-1 py-3 text-[9px] font-medium tracking-[0.25em] uppercase text-center rounded-lg text-[#080604] transition-all duration-300 btn-download relative overflow-hidden"
            style={{ fontFamily: "'Montserrat', sans-serif", background: "#c9943a" }}
          >
            <span className="relative z-10">Download</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PDF PREVIEW MODAL
   ───────────────────────────────────────────────────────────── */
function PreviewModal({ book, onClose }: { book: Ebook; onClose: () => void }) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-3 md:p-6"
      style={{ background: "rgba(8,6,4,0.92)", backdropFilter: "blur(14px)" }}
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative w-full md:w-[78vw] rounded-2xl overflow-hidden border border-[#c9943a]/30 flex flex-col"
        style={{
          background: "#0d0a06",
          height: "90vh",
          boxShadow: "0 40px 120px rgba(0,0,0,0.9)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top accent */}
        <div
          className="h-0.5 w-full flex-shrink-0"
          style={{ background: "linear-gradient(to right, #c9943a, #f0d060, #c9943a)" }}
        />

        {/* Header — fixed height */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#c9943a]/15 flex-shrink-0">
          <div>
            <p
              className="font-medium text-[8px] tracking-[0.35em] text-[#c9943a] uppercase m-0"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {book.category} · {book.pages}
            </p>
            <h2
              className="text-[18px] font-normal text-[#f0d060] m-0 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {book.title}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={book.pdfSrc}
              download
              className="font-medium text-[8px] tracking-[0.25em] uppercase text-[#080604] bg-[#c9943a] hover:bg-[#f0d060] transition-colors duration-200 px-4 py-2 rounded-lg"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              onClick={(e) => e.stopPropagation()}
            >
              Download
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-[#c9943a]/30 flex items-center justify-center text-[#c9943a] hover:border-[#c9943a] hover:bg-[#c9943a]/10 transition-colors duration-200 text-sm"
            >✕</button>
          </div>
        </div>

        {/* PDF iframe — takes ALL remaining height */}
        <div className="flex-1 min-h-0 w-full overflow-hidden">
          <iframe
            src={`${book.pdfSrc}#toolbar=1&navpanes=0&scrollbar=1`}
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
            title={book.title}
          />
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN PAGE
   ───────────────────────────────────────────────────────────── */
export default function EbooksSection() {
  const [previewBook, setPreviewBook] = useState<Ebook | null>(null);

  return (
    <main
      className="min-h-screen pt-20 bg-[#080604] text-[#ede8d4]"
      style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        /* Shimmer sweep on book covers */
        .book-shimmer {
          position: absolute;
          inset: 0;
          z-index: 6;
          pointer-events: none;
          background: linear-gradient(
            110deg,
            transparent 30%,
            rgba(240, 208, 96, 0.07) 50%,
            transparent 70%
          );
          animation: bookShimmer 4s ease-in-out infinite;
        }
        @keyframes bookShimmer {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        /* Download button gold fill animation */
        .btn-download::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #f0d060;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .btn-download:hover::before { transform: scaleX(1); }
        .btn-download:hover { color: #080604; }

        /* Glowing pulse on Download buttons */
        @keyframes btnPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201,148,58,0.35); }
          50%       { box-shadow: 0 0 0 6px rgba(201,148,58,0); }
        }
        .btn-download { animation: btnPulse 2.4s ease-in-out infinite; }

        /* Card hover glow */
        .ebook-card-hover {
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .ebook-card-hover:hover {
          box-shadow: 0 12px 60px rgba(201,148,58,0.15), 0 4px 24px rgba(0,0,0,0.7);
        }
      `}</style>

      {/* ══════════ HERO ══════════ */}
      <section className="relative px-6 pt-24 pb-16 md:pt-32 md:pb-20 text-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(201,148,58,0.06) 0%, transparent 60%)", filter: "blur(20px)" }} />

        <p className="relative z-10 font-medium text-[9px] tracking-[0.45em] text-[#c9943a] uppercase mb-6 m-0">
          E-BOOKS &nbsp;·&nbsp; DIGITAL GUIDES &nbsp;·&nbsp; FREE RESOURCES
        </p>

        <h1
          className="relative z-10 max-w-4xl mx-auto text-[38px] md:text-[56px] font-normal leading-[1.1] text-[#ede8d4] mb-5 m-0"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Free Resources &amp; E-Books.
        </h1>

        <p className="relative z-10 font-light text-[14.5px] leading-[1.85] text-[#ede8d4]/60 max-w-[38rem] mx-auto mb-0 m-0">
          Curated long-form reading on fragrance, luxury, and the NOIRÉ approach — every guide is free, because education should not be paywalled.
        </p>

        {/* Divider */}
        <div className="relative z-10 mt-12 mx-auto max-w-xs h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,148,58,0.3), transparent)" }} />
      </section>

      {/* ══════════ EBOOK GRID ══════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            {ebooks.map((book, i) => (
              <EbookCard
                key={book.id}
                book={book}
                index={i}
                onPreview={setPreviewBook}
              />
            ))}
          </div>
        </div>

        {/* ── Info note ── */}
        <p className="text-center mt-14 font-light text-[10px] tracking-[0.2em] text-[#c9943a]/35 uppercase">
          All guides are completely free &nbsp;·&nbsp; No email required &nbsp;·&nbsp; Download directly
        </p>
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
          Free Resources · 2026
        </p>
      </footer>

      {/* ══════════ PDF PREVIEW MODAL ══════════ */}
      <AnimatePresence>
        {previewBook && (
          <PreviewModal book={previewBook} onClose={() => setPreviewBook(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}
