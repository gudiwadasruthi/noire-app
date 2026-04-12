"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

/* ── animation variants ─────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 } },
};

/* ── feature icons (minimal SVG outlines) ───────────────── */
function IconBottle() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9943A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2h6M10 2v3l-2 2v13a1 1 0 001 1h6a1 1 0 001-1V7l-2-2V2" />
      <path d="M9 12c1 1.5 5 1.5 6 0" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9943A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14.5" />
    </svg>
  );
}
function IconLeaf() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9943A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c0-8 6-14 6-14S12 5 6 8c-3 1.5-4 5-2 8 1.5 2 4 3 8 6z" />
      <path d="M12 22V12" />
    </svg>
  );
}

/* ── paragraphs ─────────────────────────────────────────── */
const paragraphs = [
  <>
    <strong style={{ color: "#EDE8D4", fontWeight: 500 }}>NOIRÉ</strong> is a high-performance Eau de Parfum designed for{" "}
    <strong style={{ color: "#EDE8D4", fontWeight: 500 }}>everyday wear and special occasions</strong> alike — a fragrance that moves between a morning meeting and a midnight dinner without losing its authority.
  </>,
  <>
    Formulated at a{" "}
    <strong style={{ color: "#EDE8D4", fontWeight: 500 }}>higher concentration of fragrance oils</strong> than the industry standard for India, NOIRÉ delivers a lasting performance of{" "}
    <strong style={{ color: "#EDE8D4", fontWeight: 500 }}>10 to 14 hours</strong> — engineered specifically for the subcontinent's heat and humidity, where most fragrances quietly surrender within hours.
  </>,
  <>
    Unlike brands that prioritise quantity over character, NOIRÉ focuses on a{" "}
    <strong style={{ color: "#EDE8D4", fontWeight: 500 }}>single, deeply considered signature fragrance</strong> — smooth opening notes of citrus and green, a warm floral-spice heart, and a rich base of{" "}
    <strong style={{ color: "#EDE8D4", fontWeight: 500 }}>oud, musk, and amber</strong> that deepens on skin over time rather than fading away.
  </>,
  <>
    The result is a premium experience that does not feel synthetic, does not overpower, and does not demand attention —{" "}
    <strong style={{ color: "#EDE8D4", fontWeight: 500 }}>it simply commands it.</strong> Luxury and performance, without the compromise of affordability.
  </>,
  <>
    In simple terms: NOIRÉ combines{" "}
    <strong style={{ color: "#EDE8D4", fontWeight: 500 }}>luxury, performance, and value</strong> in one product — because there was no reason these three things could not exist together. We simply decided to prove it.
  </>,
];

/* ── feature strip data ─────────────────────────────────── */
const features = [
  {
    icon: <IconBottle />,
    label: "EDP Concentration",
    desc: "Higher fragrance oil ratio",
  },
  {
    icon: <IconClock />,
    label: "10–14H Longevity",
    desc: "Engineered for Indian climate",
  },
  {
    icon: <IconLeaf />,
    label: "India Formulated",
    desc: "No synthetic compromise",
  },
];

/* ── main component ──────────────────────────────────────── */
export default function ProductDescriptionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="product-description"
      ref={sectionRef}
      style={{
        background: "#080604",
        fontFamily: "'Montserrat', sans-serif",
        paddingTop: "0",
        paddingBottom: "100px",
        position: "relative",
      }}
    >
      {/* ── Separator rule ── */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(201,148,58,0.35), transparent)",
          marginBottom: "80px",
        }}
      />

      {/* ── Container ── */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 20px",
        }}
        className="px-5 sm:px-8 md:px-14 lg:px-20 xl:px-24"
      >
        {/* ── Section heading block ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 400,
              letterSpacing: "0.2em",
              color: "#C9943A",
              margin: "0 0 20px",
              lineHeight: 1.2,
            }}
          >
            PRODUCT DESCRIPTION
          </p>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: "14px",
              letterSpacing: "0.04em",
              color: "rgba(237,232,212,0.55)",
              margin: "0 0 28px",
              maxWidth: "560px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.7,
            }}
          >
            Crafted for those who understand that a fragrance is not what you wear — it is what you leave behind.
          </p>

          {/* ◆ ◆ ◆ decorative separator */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
            <span style={{ color: "#C9943A", opacity: 0.5, fontSize: "8px" }}>◆</span>
            <span style={{ color: "#C9943A", opacity: 0.8, fontSize: "10px" }}>◆</span>
            <span style={{ color: "#C9943A", opacity: 0.5, fontSize: "8px" }}>◆</span>
          </div>
        </motion.div>

        {/* ── Two-column content grid ── */}
        <div className="pd-grid">

          {/* ── LEFT: Image frame ── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="pd-image-col"
          >
            <div className="pd-image-frame">
              <Image
                src="/noire-product.png"
                alt="NOIRÉ Eau de Parfum bottle"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Gradient bleed at bottom */}
              <div className="pd-image-bleed" />
            </div>
          </motion.div>

          {/* ── RIGHT: Text content ── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="pd-text-col"
          >
            {/* Display line */}
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "22px",
                fontWeight: 400,
                color: "#C9943A",
                margin: "0 0 36px",
                letterSpacing: "0.04em",
                lineHeight: 1.4,
              }}
            >
              Eau de Parfum · 60ml · India Formulated
            </p>

            {/* Body paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "44px" }}>
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                    fontSize: "14px",
                    color: "rgba(237,232,212,0.7)",
                    lineHeight: 1.9,
                    margin: 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* ── Feature strip ── */}
            <div className="pd-feature-strip">
              {features.map((feat, i) => (
                <div key={feat.label} className="pd-feature-item" style={{ display: "flex" }}>
                  {i > 0 && <div className="pd-feature-divider" />}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", flex: 1 }}>
                    <div style={{ marginBottom: "4px" }}>{feat.icon}</div>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 500,
                        fontSize: "8.5px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "#C9943A",
                        margin: 0,
                      }}
                    >
                      {feat.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 300,
                        fontSize: "11px",
                        color: "rgba(237,232,212,0.45)",
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
