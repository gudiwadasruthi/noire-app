"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  const isPortfolioActive = ["/calendar", "/opinion", "/press", "/faq", "/reviews", "/newsletters", "/social", "/blog", "/listicles", "/case-studies", "/ebooks", "/tutorial"].includes(pathname || "");
  const isAboutActive = ["/team", "/persona", "/flyer", "/storyboard"].includes(pathname || "");

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (portfolioRef.current && !portfolioRef.current.contains(event.target as Node)) {
        setIsPortfolioOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#080604]/90 backdrop-blur-md z-50 px-4 md:px-8 py-4 flex justify-between items-center border-b border-[#C9943A]/10">

      <h1 className="text-[#C9943A] text-lg font-bold tracking-widest cursor-pointer" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.35em" }}>
        <Link href="/">NOIRÉ</Link>
      </h1>

      <style dangerouslySetInnerHTML={{__html: `
        .mobile-nav-scroll::-webkit-scrollbar { display: none; }
      `}} />
      <div 
        className="mobile-nav-scroll flex items-center space-x-5 md:space-x-6 text-[10.5px] md:text-xs uppercase tracking-wider text-[#D4C4A0] overflow-x-auto whitespace-nowrap w-full ml-4 md:ml-0 md:justify-end pr-2 md:pr-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        <Link href="/" className="hover:text-[#C9943A] transition-colors">Home</Link>

        {/* ── NEW ABOUT DROPDOWN ── */}
        <div className="relative" ref={aboutRef}>
          <button
            onClick={() => setIsAboutOpen(!isAboutOpen)}
            className={`flex items-center gap-1.5 transition-colors focus:outline-none ${isAboutActive ? "text-[#F0D060]" : "hover:text-[#C9943A]"}`}
          >
            About
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-300 ${isAboutOpen ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isAboutActive && (
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#F0D060]" />
          )}

          <AnimatePresence>
            {isAboutOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="fixed mt-5 w-48 bg-[#0D0A06] border border-[#C9943A]/30 rounded-md shadow-2xl overflow-hidden flex flex-col py-2 z-[100]"
              >
                <Link href="/team" onClick={() => setIsAboutOpen(false)} className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/team" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}>
                  <span className="text-[#C9943A] text-xs">◈</span>Team
                </Link>
                <div className=" mx-4 my-1 h-px bg-[#C9943A]/10" />
                <Link href="/persona" onClick={() => setIsAboutOpen(false)} className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/persona" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}>
                  <span className="text-[#C9943A] text-xs">◈</span>Persona
                </Link>
                <div className=" mx-4 my-1 h-px bg-[#C9943A]/10" />
                <Link href="/flyer" onClick={() => setIsAboutOpen(false)} className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/flyer" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}>
                  <span className="text-[#C9943A] text-xs">◈</span>Flyer
                </Link>
                <div className=" mx-4 my-1 h-px bg-[#C9943A]/10" />
                <Link href="/storyboard" onClick={() => setIsAboutOpen(false)} className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/storyboard" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}>
                  <span className="text-[#C9943A] text-xs">◈</span>Storyboard
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── CREATIVE PORTFOLIO DROPDOWN ── */}
        <div className="relative" ref={portfolioRef}>
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
                className="fixed right-4 md:right-8 top-[64px] w-64 max-h-[80vh] overflow-y-auto bg-[#0D0A06] border border-[#C9943A]/30 rounded-md shadow-2xl flex flex-col py-2 z-[100] custom-scroll"
              >
                
                {/* ── GROUP 1: AWARENESS ── */}
                <div className="px-4 pt-3 pb-1 text-[8px] font-semibold tracking-[0.3em] uppercase text-[#C9943A]/50">AWARENESS</div>
                <div className="mx-4 mb-1 h-px bg-[#C9943A]/10" />
                
                <Link href="/social" onClick={() => setIsPortfolioOpen(false)} className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/social" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}>
                  <span className="text-[#C9943A] text-xs">◈</span>Social Media Captions
                </Link>
                <div className="mx-4 my-1 h-px bg-[#C9943A]/10" />
                <Link href="/blog" onClick={() => setIsPortfolioOpen(false)} className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/blog" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}>
                  <span className="text-[#C9943A] text-xs">◈</span>Blog Posts &amp; Articles
                </Link>
                <div className="mx-4 my-1 h-px bg-[#C9943A]/10" />
                <Link href="/listicles" onClick={() => setIsPortfolioOpen(false)} className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/listicles" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}>
                  <span className="text-[#C9943A] text-xs">◈</span>Listicles
                </Link>

                {/* ── GROUP 2: AUTHORITY ── */}
                <div className="px-4 pt-3 pb-1 text-[8px] font-semibold tracking-[0.3em] uppercase text-[#C9943A]/50 mt-2">AUTHORITY</div>
                <div className="mx-4 mb-1 h-px bg-[#C9943A]/10" />
                
                <Link href="/opinion" onClick={() => setIsPortfolioOpen(false)} className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/opinion" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}>
                  <span className="text-[#C9943A] text-xs">◈</span>The NOIRÉ Journal
                </Link>
                <div className="mx-4 my-1 h-px bg-[#C9943A]/10" />
                <Link href="/press" onClick={() => setIsPortfolioOpen(false)} className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/press" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}>
                  <span className="text-[#C9943A] text-xs">◈</span>Press Release
                </Link>
                <div className="mx-4 my-1 h-px bg-[#C9943A]/10" />
                <Link href="/case-studies" onClick={() => setIsPortfolioOpen(false)} className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/case-studies" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}>
                  <span className="text-[#C9943A] text-xs">◈</span>Case Studies
                </Link>

                {/* ── GROUP 3: EDUCATION ── */}
                <div className="px-4 pt-3 pb-1 text-[8px] font-semibold tracking-[0.3em] uppercase text-[#C9943A]/50 mt-2">EDUCATION</div>
                <div className="mx-4 mb-1 h-px bg-[#C9943A]/10" />
                
                <Link href="/tutorial" onClick={() => setIsPortfolioOpen(false)} className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/tutorial" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}>
                  <span className="text-[#C9943A] text-xs">◈</span>Tutorial Articles
                </Link>
                <div className="mx-4 my-1 h-px bg-[#C9943A]/10" />
                <Link href="/faq" onClick={() => setIsPortfolioOpen(false)} className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/faq" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}>
                  <span className="text-[#C9943A] text-xs">◈</span>FAQs / Knowledge Base
                </Link>
                <div className="mx-4 my-1 h-px bg-[#C9943A]/10" />
                <Link href="/ebooks" onClick={() => setIsPortfolioOpen(false)} className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/ebooks" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}>
                  <span className="text-[#C9943A] text-xs">◈</span>E-Books &amp; Digital Guides
                </Link>

                {/* ── GROUP 4: TRUST & CONVERSION ── */}
                <div className="px-4 pt-3 pb-1 text-[8px] font-semibold tracking-[0.3em] uppercase text-[#C9943A]/50 mt-2">TRUST &amp; CONVERSION</div>
                <div className="mx-4 mb-1 h-px bg-[#C9943A]/10" />
                
                <Link href="/reviews" onClick={() => setIsPortfolioOpen(false)} className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/reviews" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}>
                  <span className="text-[#C9943A] text-xs">◈</span>Reviews &amp; Testimonials
                </Link>
                <div className="mx-4 my-1 h-px bg-[#C9943A]/10" />
                <Link href="/newsletters" onClick={() => setIsPortfolioOpen(false)} className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/newsletters" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}>
                  <span className="text-[#C9943A] text-xs">◈</span>Newsletters / Email Sequences
                </Link>

                {/* ── GROUP 5: PLANNING ── */}
                <div className="px-4 pt-3 pb-1 text-[8px] font-semibold tracking-[0.3em] uppercase text-[#C9943A]/50 mt-2">PLANNING</div>
                <div className="mx-4 mb-1 h-px bg-[#C9943A]/10" />
                
                <Link href="/calendar" onClick={() => setIsPortfolioOpen(false)} className={`px-4 py-2.5 text-[10px] tracking-widest transition-colors flex items-center gap-2 ${pathname === "/calendar" ? "text-[#F0D060] bg-[#1A1510] border-l-2 border-[#F0D060]" : "hover:bg-[#1A1510] hover:text-[#C9943A]"}`}>
                  <span className="text-[#C9943A] text-xs">◈</span>Content Calendar
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </nav>
  );
}