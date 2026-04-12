"use client";

import { useState, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   TEAM DATA
   Image: place 400×500px portrait in /public/team/<id>.jpg
   Recommended ratio: 4 : 5  (width : height)
   ───────────────────────────────────────────────────────────── */
const teamMembers = [
  {
    id: "gayathri",
    name: "Gayathri Yatheesh",
    role: "Strategy & Marketing",
    shortLine: "Shaping brand narrative, positioning, and growth.",
    description:
      "Gayathri is the strategic mind driving NOIRÉ's brand positioning and go-to-market intelligence. She maps market opportunities, architects the brand narrative, and ensures every campaign speaks to exactly the right Indian luxury consumer. Her work bridges the gap between creative vision and commercial reality — turning cultural insight into measurable growth. Before NOIRÉ, she studied consumer psychology and brand management, developing a sharp instinct for what moves people from curiosity to conviction.",
    imageSrc: "/team/gayathri.jpg",
  },
  {
    id: "sruthi",
    name: "Gudiwada Sruthi",
    role: "Design & Branding",
    shortLine: "Defining visual language and luxury craft across touchpoints.",
    description:
      "Sruthi is responsible for NOIRÉ's entire visual identity — from packaging and typography to digital experience and art direction. She brings a deep understanding of how luxury brands communicate through restraint, precision, and texture. Every gold accent, every serif choice, every proportion in the NOIRÉ identity has passed through her eye. She believes that great design is not decoration; it is the first argument a brand makes before a single word is read.",
    imageSrc: "/team/sruthi.jpg",
  },
  {
    id: "hima",
    name: "Hima",
    role: "Content & Research",
    shortLine: "Grounding every story in insight, tone, and authenticity.",
    description:
      "Hima is the voice and the researcher behind NOIRÉ's editorial output. She writes the copy that holds the brand's tone — authoritative, precise, never aspirational in the cheap sense. More importantly, she does the groundwork: consumer research, competitor analysis, fragrance culture deep-dives, and the cultural ethnography that helps NOIRÉ speak to Indian buyers with genuine specificity. If NOIRÉ sounds intelligent, it is because Hima made sure it had something intelligent to say.",
    imageSrc: "/team/hima.jpg",
  },
  {
    id: "sai",
    name: "Sai Sankar Yandamuri",
    role: "Development",
    shortLine: "Building fast, refined experiences that feel as good as they look.",
    description:
      "Sai translates NOIRÉ's design language into living digital experiences. He architects the front-end, ensures every animation runs at 60fps, and obsesses over the details that most users never consciously notice — but would absolutely feel if they were gone. He brings an engineering discipline to creative work: systematic, measurable, and always in service of the experience rather than the technology. His standard is simple — if it is online and it carries the NOIRÉ name, it must feel premium.",
    imageSrc: "/team/sai.jpg",
  },
];

type Member = (typeof teamMembers)[number];

/* ─── Image with placeholder fallback ─────────────────────── */
function MemberImage({ src, name, className }: { src: string; name: string; className?: string }) {
  const [errored, setErrored] = useState(false);
  return errored ? (
    <div className={`flex flex-col items-center justify-center gap-3 bg-[#12100a] ${className}`}>
      <span className="text-5xl text-[#c9943a]/25">◈</span>
      <span className="font-light text-[8px] tracking-[0.3em] text-[#c9943a]/35 uppercase">Add photo</span>
      <span className="font-light text-[7px] tracking-[0.15em] text-[#c9943a]/20 uppercase">4 : 5 · 400 × 500 px</span>
    </div>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      className={`object-cover object-top ${className}`}
      onError={() => setErrored(true)}
    />
  );
}

/* ─── Modal ────────────────────────────────────────────────── */
function MemberModal({
  member,
  onClose,
  onPrev,
  onNext,
  index,
  total,
}: {
  member: Member;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  index: number;
  total: number;
}) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    /* ── Backdrop ── */
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(8,6,4,0.88)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      {/* ── Modal panel ── */}
      <div
        className="relative w-full max-w-3xl flex flex-col md:flex-row rounded-2xl overflow-hidden border border-[#c9943a]/30 shadow-[0_40px_120px_rgba(0,0,0,0.9),0_0_0_1px_rgba(201,148,58,0.15)]"
        style={{ background: "#0d0a06", maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ══ LEFT — Photo (4:5) ══ */}
        <div className="relative md:w-[42%] shrink-0 aspect-[4/5] md:aspect-auto">
          <MemberImage
            src={member.imageSrc}
            name={member.name}
            className="w-full h-full"
          />
          {/* gold gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(8,6,4,0.85), transparent)" }} />

          {/* name badge on photo */}
          <div className="absolute bottom-5 left-5 right-5">
            <p className="font-light text-[8px] tracking-[0.35em] text-[#c9943a] uppercase mb-1">{member.role}</p>
            <h2 className="text-3xl font-semibold text-[#f0d060] m-0 leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {member.name}
            </h2>
          </div>
        </div>

        {/* ══ RIGHT — Info ══ */}
        <div className="flex-1 flex flex-col justify-between overflow-y-auto" style={{ padding: "2.5rem 2.5rem 2rem" }}>
          {/* top section */}
          <div className="flex flex-col gap-5">
            {/* header */}
            <div>
              <div className="h-px w-10 bg-[#c9943a] mb-5" />
              <p className="font-light text-[9px] tracking-[0.4em] text-[#c9943a] uppercase m-0 mb-2">About</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#f0d060] m-0 leading-[1.2]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {member.name}
              </h3>
              <p className="font-medium text-[9px] tracking-[0.2em] text-[#c9943a] uppercase mt-1 m-0">
                {member.role}
              </p>
            </div>

            {/* short line */}
            <p className="font-light text-sm italic text-[#d4c4a0]/70 border-l-2 border-[#c9943a]/30 pl-4 m-0" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}>
              "{member.shortLine}"
            </p>

            {/* full bio */}
            <p className="font-light text-[13px] leading-[1.95] text-[#d4c4a0]/80 m-0">
              {member.description}
            </p>
          </div>

          {/* ── Bottom nav ── */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#c9943a]/15">
            {/* pagination */}
            <span className="font-light text-[9px] tracking-[0.3em] text-[#c9943a]/50 uppercase">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>

            {/* prev / next */}
            <div className="flex items-center gap-3">
              <button
                onClick={onPrev}
                className="w-9 h-9 rounded-full border border-[#c9943a]/30 flex items-center justify-center text-[#c9943a] hover:border-[#c9943a] hover:bg-[#c9943a]/10 transition-colors duration-200"
                aria-label="Previous member"
              >
                ←
              </button>
              <button
                onClick={onNext}
                className="w-9 h-9 rounded-full border border-[#c9943a]/30 flex items-center justify-center text-[#c9943a] hover:border-[#c9943a] hover:bg-[#c9943a]/10 transition-colors duration-200"
                aria-label="Next member"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* ── Close button ── */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#080604]/80 border border-[#c9943a]/30 flex items-center justify-center text-[#c9943a] hover:border-[#c9943a] hover:bg-[#c9943a]/10 transition-colors duration-200 text-base"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

/* ─── Main Section ─────────────────────────────────────────── */
export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = (index: number) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);
  const prevMember = () =>
    setActiveIndex((i) => (i === null ? 0 : (i - 1 + teamMembers.length) % teamMembers.length));
  const nextMember = () =>
    setActiveIndex((i) => (i === null ? 0 : (i + 1) % teamMembers.length));

  return (
    <main className="min-h-screen pt-20 bg-[#080604] text-[#d4c4a0] font-light" style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}>

      {/* ══════════ HERO HEADER ══════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#c9943a]/[0.04] blur-[120px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-14 text-center">
          <p className="font-light text-[9px] tracking-[0.45em] text-[#c9943a] uppercase mb-5 m-0">
            THE NOIRÉ COLLECTIVE
          </p>
          <h1 className="text-[40px] md:text-[56px] font-light leading-[1.15] text-[#f0d060] m-0 tracking-[0.04em]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The Minds Behind NOIRÉ
          </h1>
          <p className="font-light text-[14px] leading-[1.8] text-[#d4c4a0]/65 max-w-xl mx-auto mt-5 mb-0">
            Four disciplines. One obsession. Every decision made in the pursuit of
            presence, craft, and identity.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6 h-px bg-gradient-to-r from-transparent via-[#c9943a]/30 to-transparent" />
      </section>

      {/* ══════════ CLICK HINT ══════════ */}
      <div className="text-center pt-10 pb-2">
        <span className="font-light text-[9px] tracking-[0.3em] text-[#c9943a]/45 uppercase">
          ↓ &nbsp; Click a card to learn more &nbsp; ↓
        </span>
      </div>

      {/* ══════════ TEAM GRID ══════════ */}
      <section className="max-w-6xl mx-auto px-6 py-12 pb-28">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none m-0 p-0">
          {teamMembers.map((member, index) => (
            <li key={member.id} className="flex flex-col">
              <article
                onClick={() => openModal(index)}
                className="group flex flex-col cursor-pointer rounded-xl border border-[#c9943a]/25 bg-[#0f0c09] overflow-hidden transition-all duration-300 ease-out hover:border-[#c9943a]/60 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(201,148,58,0.14)]"
              >
                {/* ── Photo 4:5 ── */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <MemberImage
                    src={member.imageSrc}
                    name={member.name}
                    className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-[#c9943a]/0 group-hover:bg-[#c9943a]/[0.06] transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-light text-[8px] tracking-[0.3em] text-[#f0d060] uppercase bg-[#080604]/70 border border-[#c9943a]/40 px-4 py-2 rounded-full">
                      View Profile
                    </span>
                  </div>
                </div>

                {/* ── Card footer ── */}
                <div className="px-5 pt-4 pb-5 flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-[#d4c4a0] tracking-wide m-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {member.name}
                  </h3>
                  <p className="font-medium text-[8px] tracking-[0.2em] text-[#c9943a] uppercase m-0">
                    {member.role}
                  </p>
                  <p className="font-light text-xs leading-relaxed text-[#d4c4a0]/55 mt-2 m-0">
                    {member.shortLine}
                  </p>
                  <p className="font-light text-[8px] tracking-[0.2em] text-[#c9943a]/40 uppercase mt-3 m-0 group-hover:text-[#c9943a]/70 transition-colors">
                    Read more →
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="border-t border-[#c9943a]/12 py-10 px-6 text-center">
        <h2 className="text-2xl text-[#c9943a] tracking-[0.4em] mb-3 m-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>NOIRÉ</h2>
        <p className="font-light text-[9px] tracking-[0.3em] text-[#d4c4a0]/40 uppercase mb-2 m-0">The Essence of Mystery · Elegance in Every Drop</p>
        <p className="font-light text-[8px] tracking-[0.2em] text-[#d4c4a0]/20 uppercase m-0">© 2026 NOIRÉ Parfum</p>
      </footer>

      {/* ══════════ MODAL ══════════ */}
      {activeIndex !== null && (
        <MemberModal
          member={teamMembers[activeIndex]}
          index={activeIndex}
          total={teamMembers.length}
          onClose={closeModal}
          onPrev={prevMember}
          onNext={nextMember}
        />
      )}
    </main>
  );
}
