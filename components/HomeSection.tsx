"use client";

import React, { useRef } from "react";
import ProductDescriptionSection from "./ProductDescriptionSection";

export default function HomeSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <div style={{ background: "#080604", position: "relative", overflow: "hidden", fontFamily: "'Montserrat', sans-serif" }}>

        {/* ── GRAIN TEXTURE OVERLAY ── */}
        <div
          className="pointer-events-none"
          style={{
            position: "absolute", inset: 0, zIndex: 1,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            opacity: 0.025,
          }}
        />

        {/* ── AMBIENT GLOW BEHIND LEFT CONTENT ── */}
        <div
          className="pointer-events-none"
          style={{
            position: "absolute", top: "10%", left: "-5%",
            width: "55%", height: "80%",
            background: "radial-gradient(ellipse at 30% 50%, rgba(201,148,58,0.07) 0%, transparent 65%)",
            zIndex: 0,
          }}
        />

        {/* ── AMBIENT GLOW BEHIND RIGHT VIDEO ── */}
        <div
          className="pointer-events-none"
          style={{
            position: "absolute", top: "5%", right: "-10%",
            width: "60%", height: "90%",
            background: "radial-gradient(ellipse at 65% 45%, rgba(201,148,58,0.1) 0%, transparent 60%)",
            zIndex: 0,
          }}
        />

        {/* ── BG LINES ── */}
        <div className="bg-lines">
          <div className="bg-line" />
          <div className="bg-line" />
          <div className="bg-line" />
        </div>

        {/* ── HERO GRID ── */}
        <div className="noire-hero" style={{ paddingTop: "80px", minHeight: "680px" }}>

          {/* LEFT */}
          <div className="left-panel" style={{ paddingBottom: "80px" }}>

            {/* Eyebrow */}
            <div className="eyebrow">
              <div className="eyebrow-line" />
              <div className="eyebrow-text">Eau de Parfum</div>
              <div className="eyebrow-dot" />
            </div>

            {/* Heading */}
            <div className="heading-wrap">
              <div className="heading-ghost">NOIRÉ</div>
              <div className="main-heading">
                NOIRÉ
                {/* Shimmer sweep overlay */}
                <span className="heading-shimmer" aria-hidden="true" />
              </div>
            </div>

            {/* Tagline */}
            <div className="tagline">Define Presence.</div>

            {/* Scent notes */}
            <div className="notes-strip">
              {[
                { label: "Oud", icon: <path d="M12 2C8 2 5 7 5 12c0 3.9 2.8 7 7 7s7-3.1 7-7c0-5-3-10-7-10z" /> },
                { label: "Amber", icon: <path d="M12 3c-1 3-4 5-4 9a4 4 0 008 0c0-4-3-6-4-9z M10 17.5a2 2 0 004 0" /> },
                { label: "Musk", icon: <><circle cx="12" cy="10" r="4" /><path d="M12 6V3M8.5 8.5L6 6M6 10H3M8.5 11.5L6 14M12 14v3M15.5 11.5L18 14M18 10h3M15.5 8.5L18 6" /></> },
                { label: "Vetiver", icon: <path d="M12 22c-4 0-7-3-7-7 0-2.5 1.5-4.5 3-6l4-5 4 5c1.5 1.5 3 3.5 3 6 0 4-3 7-7 7z" /> },
              ].map(({ label, icon }) => (
                <div key={label} className="note-item">
                  <div className="note-icon">
                    <svg viewBox="0 0 24 24">{icon}</svg>
                  </div>
                  <div className="note-label">{label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="desc">
              The Essence of Mystery. Elegance in Every Drop — a high-concentration EDP formulated for the Indian climate, designed to linger.
            </p>

            {/* CTAs */}
            <div className="cta-row">
              <button
                className="btn-primary"
                onClick={() => document.getElementById("product-description")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span>Discover the Scent</span>
              </button>
              <button className="btn-ghost">
                Explore Notes <span className="arrow" />
              </button>
            </div>
          </div>

          {/* RIGHT — Video */}
          <div className="right-panel flex h-full w-full items-center justify-center">

            {/* Outer glow ring */}
            <div
              className="pointer-events-none"
              style={{
                position: "absolute",
                width: "420px", height: "520px",
                borderRadius: "20px",
                background: "radial-gradient(ellipse, rgba(201,148,58,0.12) 0%, transparent 70%)",
                filter: "blur(40px)",
                zIndex: 0,
              }}
            />

            {/* Video card */}
            <div className="video-card">
              {/* Gold corner accents */}
              <span className="corner corner-tl" />
              <span className="corner corner-tr" />
              <span className="corner corner-bl" />
              <span className="corner corner-br" />

              {/* Loading skeleton */}
              <div className="video-skeleton" />

              <video
                ref={videoRef}
                src="/home_page_video.mp4"
                autoPlay
                muted
                playsInline
                onEnded={(e) => e.currentTarget.pause()}
                style={{
                  position: "relative", zIndex: 2,
                  width: "100%", height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Bottom gradient fade into page */}
              <div
                className="pointer-events-none"
                style={{
                  position: "absolute", inset: 0, zIndex: 3,
                  background: "linear-gradient(to top, rgba(8,6,4,0.55) 0%, transparent 55%)",
                }}
              />
            </div>
          </div>

        </div>

        {/* ── STAT STRIP ── */}
        <div className="stat-strip-full" style={{ zIndex: 2, position: "relative" }}>
          {[
            { value: "15–20%", label: "Fragrance Concentration" },
            { value: "10–14h", label: "Longevity" },
            { value: "Indian", label: "Climate Engineered" },
            { value: "EDP", label: "Concentration Grade" },
          ].map(({ value, label }) => (
            <div key={label} className="stat-item">
              <div className="stat-value">{value}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>

        {/* ── SCROLL INDICATOR ── */}
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>

      </div>

      {/* ── Product Description ── */}
      <ProductDescriptionSection />
    </>
  );
}
