"use client";

import dynamic from "next/dynamic";
import React from "react";

const ThreeScene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
  loading: () => <div className="placeholder-text flex h-full w-full items-center justify-center">Loading 3D Scene...</div>,
});

export default function HomeSection() {
  return (
    <>


      <div style={{ background: "#080604", position: "relative", overflow: "hidden", minHeight: "640px", fontFamily: "'Montserrat', sans-serif" }}>



        {/* BG LINES */}
        <div className="bg-lines">
          <div className="bg-line"></div>
          <div className="bg-line"></div>
          <div className="bg-line"></div>
        </div>

        {/* GRID */}
        <div className="noire-hero" style={{ paddingTop: "64px", minHeight: "640px" }}>

          {/* LEFT */}
          <div className="left-panel" style={{ paddingBottom: "80px" }}>

            {/* Eyebrow */}
            <div className="eyebrow">
              <div className="eyebrow-line"></div>
              <div className="eyebrow-text">Eau de Parfum</div>
              <div className="eyebrow-dot"></div>
            </div>

            {/* Heading */}
            <div className="heading-wrap">
              <div className="heading-ghost">NOIRÉ</div>
              <div className="main-heading">NOIRÉ</div>
            </div>

            {/* Tagline */}
            <div className="tagline">Define Presence.</div>

            {/* Scent note icons */}
            <div className="notes-strip">
              <div className="note-item">
                <div className="note-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2C8 2 5 7 5 12c0 3.9 2.8 7 7 7s7-3.1 7-7c0-5-3-10-7-10z"/></svg>
                </div>
                <div className="note-label">Oud</div>
              </div>
              <div className="note-item">
                <div className="note-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 3c-1 3-4 5-4 9a4 4 0 008 0c0-4-3-6-4-9z M10 17.5a2 2 0 004 0"/></svg>
                </div>
                <div className="note-label">Amber</div>
              </div>
              <div className="note-item">
                <div className="note-icon">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="10" r="4"/><path d="M12 6V3M8.5 8.5L6 6M6 10H3M8.5 11.5L6 14M12 14v3M15.5 11.5L18 14M18 10h3M15.5 8.5L18 6"/></svg>
                </div>
                <div className="note-label">Musk</div>
              </div>
              <div className="note-item">
                <div className="note-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 22c-4 0-7-3-7-7 0-2.5 1.5-4.5 3-6l4-5 4 5c1.5 1.5 3 3.5 3 6 0 4-3 7-7 7z"/></svg>
                </div>
                <div className="note-label">Vetiver</div>
              </div>
            </div>

            {/* Desc */}
            <p className="desc">The Essence of Mystery. Elegance in Every Drop — a high-concentration EDP formulated for the Indian climate, designed to linger.</p>

            {/* CTA */}
            <div className="cta-row">
              <button className="btn-primary"><span>Discover the Scent</span></button>
              <button className="btn-ghost">
                Explore Notes
                <span className="arrow"></span>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="right-panel flex h-full w-full items-center justify-center">
             <div className="h-[400px] w-[500px]">
                <ThreeScene />
             </div>
          </div>

        </div>

        {/* STAT STRIP */}
        <div className="stat-strip">
          <div className="stat-item">
            <div className="stat-value">10–14h</div>
            <div className="stat-label">Lasting Performance</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">EDP</div>
            <div className="stat-label">High Concentration</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">India</div>
            <div className="stat-label">Climate Formulated</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>

      </div>
    </>
  );
}
