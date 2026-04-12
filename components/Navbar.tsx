"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isPortfolioActive = ["/calendar", "/opinion", "/press", "/faq", "/reviews", "/newsletters", "/social"].includes(pathname || "");

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPortfolioOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#080604]/90 backdrop-blur-md z-50 px-8 py-4 flex justify-between items-center border-b border-[#C9943A]/10">

      <h1 className="text-[#C9943A] text-lg font-bold tracking-widest cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.35em" }}>
        <Link href="/">NOIRÉ</Link>
      </h1>

      <div className="flex items-center space-x-6 text-xs uppercase tracking-wider text-[#D4C4A0]">
        <Link href="/" className="hover:text-[#C9943A] transition-colors">Home</Link>
        <Link href="/team" className="hover:text-[#C9943A] transition-colors">Team</Link>
        <Link href="/persona" className="hover:text-[#C9943A] transition-colors">Persona</Link>
        <Link href="/flyer" className="hover:text-[#C9943A] transition-colors">Flyer</Link>
        <Link href="/storyboard" className="hover:text-[#C9943A] transition-colors">Storyboard</Link>
        <Link href="/tutorial" className={`transition-colors ${pathname === "/tutorial" ? "text-[#F0D060]" : "hover:text-[#C9943A]"}`}>Tutorial</Link>

        {/* Creative Portfolio Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
            className={`flex items-center gap-1.5 transition-colors focus:outline-none ${isPortfolioActive ? "text-[#F0D060]" : "hover:text-[#C9943A]"}`}
          >
            Creative Portfolio
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-300 ${isPortfolioOpen ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* active underline */}
          {isPortfolioActive && (
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#F0D060]" />
          )}

          <AnimatePresence>
            {isPortfolioOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-6 w-56 bg-[#0D0A06] border border-[#C9943A]/30 rounded-md shadow-2xl overflow-hidden flex flex-col py-2 z-50"
              >
                {/* ── NEW: Calendar ── */}
                <Link
                  href="/calendar"
                  onClick={() => setIsPortfolioOpen(false)}
                  className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/calendar" ? "text-[#F0D060] bg-[#1A1510]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}
                >
                  <span className="text-[#C9943A] text-xs">◈</span>
                  Content Calendar
                </Link>
                <div className="mx-4 my-1 h-px bg-[#C9943A]/10" />
                {/* ── Social Media Captions ── */}
                <Link
                  href="/social"
                  onClick={() => setIsPortfolioOpen(false)}
                  className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/social" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}
                >
                  <span className="text-[#C9943A] text-xs">◈</span>
                  Social Media Captions
                </Link>
                <div className="mx-4 my-1 h-px bg-[#C9943A]/10" />
                {/* ── Opinion Article ── */}
                <Link
                  href="/opinion"
                  onClick={() => setIsPortfolioOpen(false)}
                  className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/opinion" ? "text-[#F0D060] bg-[#1A1510]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}
                >
                  <span className="text-[#C9943A] text-xs">◈</span>
                  The NOIRÉ Journal
                </Link>
                <div className="mx-4 my-1 h-px bg-[#C9943A]/10" />
                {/* ── Press Release ── */}
                <Link
                  href="/press"
                  onClick={() => setIsPortfolioOpen(false)}
                  className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/press" ? "text-[#F0D060] bg-[#1A1510]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}
                >
                  <span className="text-[#C9943A] text-xs">◈</span>
                  Press Release
                </Link>
                <div className="mx-4 my-1 h-px bg-[#C9943A]/10" />
                {/* ── Newsletters / Email Sequences ── */}
                <Link
                  href="/newsletters"
                  onClick={() => setIsPortfolioOpen(false)}
                  className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/newsletters" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}
                >
                  <span className="text-[#C9943A] text-xs">◈</span>
                  Newsletters / Email Sequences
                </Link>
                <div className="mx-4 my-1 h-px bg-[#C9943A]/10" />
                {/* ── FAQs ── */}
                <Link
                  href="/faq"
                  onClick={() => setIsPortfolioOpen(false)}
                  className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/faq" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}
                >
                  <span className="text-[#C9943A] text-xs">◈</span>
                  FAQs / Knowledge Base
                </Link>
                <div className="mx-4 my-1 h-px bg-[#C9943A]/10" />
                {/* ── Reviews & Testimonials ── */}
                <Link
                  href="/reviews"
                  onClick={() => setIsPortfolioOpen(false)}
                  className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/reviews" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}
                >
                  <span className="text-[#C9943A] text-xs">◈</span>
                  Reviews &amp; Testimonials
                </Link>
                <div className="mx-4 my-1 h-px bg-[#C9943A]/10" />

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </nav>
  );
}