"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────── */
const platforms = [
  { id: "instagram", label: "Instagram" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "twitter", label: "X / Twitter" },
  { id: "threads", label: "Threads" },
];

/* ── Platform Sections Data ── */
const contentData = {
  instagram: {
    title: "Instagram",
    descriptor: "tone: visual, emotional, aspirational. Short captions that work alongside an image without repeating it.",
    posts: [
      {
        id: "ig-1",
        hook: "Some things don't announce themselves. They arrive.",
        body: "NOIRÉ Eau de Parfum — now available. Link in bio.",
        tags: "#NOIRÉ #EauDeParfum #LuxuryFragrance #IndianPerfume #DefinePresence #NicheFragrance #FragranceCommunity",
        cta: "Tell us — what does your signature scent say about you?",
        note: "Designed to accompany a minimal product flat-lay — the caption does not describe the image, it deepens it.",
      },
      {
        id: "ig-2",
        hook: "14 hours. Two cities. One fragrance.",
        body: "Mumbai morning meeting. Hyderabad dinner. NOIRÉ didn't leave. Neither did the impression. EDP concentration. Climate-formulated. Built to stay.",
        tags: "#NOIRÉ #FragranceLongevity #LuxuryEDP #IndianLuxury #ScentOfTheDay",
      },
      {
        id: "ig-3",
        hook: "Presence isn't loud.",
        body: "It's the second glance. The question asked quietly. The room that changes when you walk in. NOIRÉ.",
        tags: "#DefinePresence #NOIRÉ",
        note: "demonstrate ruthless editing, maximum impact in minimum words.",
      },
      {
        id: "ig-4",
        hook: "You've been wearing perfume wrong. Here's what to do instead.",
        body: "Swipe to learn the ritual. No rubbing. No guessing. Just NOIRÉ — applied correctly. Save this for your morning routine.",
        tags: "#FragranceTips #HowToWearPerfume #NOIRÉ #PerfumeTips #LuxuryFragrance",
        cta: "Save this",
      },
    ]
  },
  linkedin: {
    title: "LinkedIn",
    descriptor: "tone: professional, authoritative, thought-leadership. Longer paragraphs, business context, no hashtag stuffing.",
    posts: [
      {
        id: "li-1",
        hook: "The Indian fragrance market is worth billions. And most of it is built on an assumption that Indian consumers don't notice when they're being sold a diluted version of something better.",
        body: "They notice.\n\nNOIRÉ launched because we noticed. We noticed that every 'premium' fragrance available in India was either imported and eye-wateringly priced, or domestic and quietly disappointing. We noticed that the gap between what Indian consumers wanted and what they were being offered had never been addressed honestly.\n\nSo we addressed it. A high-concentration EDP. Formulated for the Indian climate. Priced for the Indian premium consumer. No shortcuts.\n\nThe response in the first month told us everything we needed to know.\n\nIf you're building a brand in a market that's been underestimated — build for what the consumer deserves, not what the market has historically accepted.\n\nThat's the only positioning that lasts.",
        cta: "What underserved market have you noticed that nobody is talking about honestly?",
        tags: "#Entrepreneurship #LuxuryBrands #IndiaMarket",
        note: "LinkedIn rewards vulnerability and specificity — this post gives both without a single marketing claim.",
      },
      {
        id: "li-2",
        hook: "We built NOIRÉ because we were tired of paying customs on fragrances that weren't made for us.",
        body: "(The problem) Western formulas fail here. Heat, humidity, and skin chemistry fundamentally alter how fragrance molecules behave.\n\n(The decision) We chose to engineer NOIRÉ from scratch for the Indian climate, rather than adapting downward.\n\n(The result) 10–14h longevity. A true climate-formulated EDP. Launched April 2026.\n\nSometimes the best brief is a personal frustration.",
        cta: "What personal frustration became your best product decision?",
      },
    ]
  },
  twitter: {
    title: "X / Twitter",
    descriptor: "tone: sharp, witty, opinionated. Maximum brevity. Single punchy lines or short two-tweet punches. No fluff.",
    posts: [
      {
        id: "tw-1",
        hook: "A fragrance that lasts 14 hours in Indian humidity isn't a luxury. It's the minimum standard. We just happen to be the first ones to meet it.",
        cta: "Agree or disagree?",
      },
      {
        id: "tw-2",
        hook: "Hot take: most 'premium' fragrances sold in India are Western formulas with the concentration quietly halved and the price quietly doubled.",
        body: "NOIRÉ exists because we found that unacceptable. Thread on why we built it differently 🧵",
        note: "Thread structure — tweet 1 is self-contained and provokes, tweet 2 pulls to the next. Each post earns the tap to continue.",
      },
      {
        id: "tw-3",
        hook: "Stop rubbing your wrists. You're killing the top notes. You're welcome.",
        cta: "RT if someone needed to hear this.",
      },
      {
        id: "tw-4",
        hook: "The best fragrance you've ever smelled on someone else was probably an EDP. The one you own is probably not. Fix that.",
        note: "Engagement prompt built into the post itself.",
      },
    ]
  },
  threads: {
    title: "Threads",
    descriptor: "tone: conversational, intimate, slightly unfiltered. Threads rewards authenticity and longer personal thoughts in a casual register.",
    posts: [
      {
        id: "th-1",
        hook: "I want to talk about why we made NOIRÉ and why it took longer than it should have.",
        body: "2/ We kept being told: Indian consumers won't pay for genuine luxury fragrance. Price it down. Simplify the formula. Make it accessible. We kept asking: by accessible, do you mean affordable — or do you mean mediocre? Nobody had a clean answer.\n\n3/ So we ignored the advice. We formulated for the climate first. We chose EDP concentration because anything less felt like a broken promise. We priced it at a point that respects the product and the consumer.\n\n4/ The first batch sold out in 11 days. Not because of advertising. Because someone wore it to a dinner and three people asked what it was.\n\n5/ Turns out Indian consumers will pay for something genuinely made for them. Who knew. (We knew.) NOIRÉ is available now — link in bio.",
        note: "Thread structure: each post ends with a pull — a thought that isn't quite complete — that draws the reader to tap the next one.",
      },
      {
        id: "th-2",
        hook: "genuine question: why do so many people rub their wrists together after applying perfume? it genuinely destroys the top notes. the fragrance industry has let this go uncorrected for decades. anyway. we wrote a whole guide about it. it's free. link in bio.",
        note: "Threads tone — lowercase, direct, slightly exasperated. The same information as the Instagram educational post, written completely differently for a different platform register.",
      },
    ]
  }
};

/* ─────────────────────────────────────────────────────────────
   COMPONENTS
   ───────────────────────────────────────────────────────────── */

function Avatar() {
  return (
    <div className="shrink-0 w-10 h-10 rounded-full border border-[#c9943a]/50 bg-[#0c0906] flex items-center justify-center font-medium text-lg text-[#f0d060]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      N
    </div>
  );
}

function PostCard({ post }: { post: any }) {
  return (
    <div className="relative group bg-[#0a0805] border border-[#c9943a]/25 rounded-md p-6 lg:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
      
      {/* ── Hook indicator ── */}
      <span className="absolute -left-3 top-8 -translate-y-1/2 flex items-center gap-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 xl:translate-x-[-100%] xl:opacity-100 xl:top-[3.25rem]">
        <span className="font-medium text-[9px] tracking-[0.3em] text-[#c9943a] uppercase">Hook</span>
        <span className="text-[#c9943a] text-xs">→</span>
      </span>

      {/* ── Profile header ── */}
      <div className="flex items-center gap-4 mb-5">
        <Avatar />
        <div className="flex flex-col">
          <span className="font-semibold text-[13px] tracking-wide text-[#ede8d4] m-0">NOIRÉ</span>
          <span className="font-light text-[11px] text-[#ede8d4]/50 m-0">@noireparfum</span>
        </div>
      </div>

      {/* ── Post Content ── */}
      <div className="font-light text-[14px] leading-[1.8] text-[#ede8d4]/85 whitespace-pre-wrap flex flex-col gap-4">
        {/* Hook */}
        <p className="m-0 font-medium text-[#ede8d4]">{post.hook}</p>
        
        {/* Body */}
        {post.body && (
          <p className="m-0">{post.body}</p>
        )}

        {/* Tags */}
        {post.tags && (
          <p className="m-0 text-[#c9943a] text-[13px] leading-[1.8]">{post.tags}</p>
        )}
      </div>

      {/* ── Engagement Prompt / CTA ── */}
      {post.cta && (
        <div className="mt-5 pt-4 border-t border-[#c9943a]/15">
          <p className="m-0 font-medium text-[11px] uppercase tracking-[0.1em] text-[#c9943a]/80">
            <span className="text-[#c9943a]/40 mr-2">↳</span> {post.cta}
          </p>
        </div>
      )}

      {/* ── Side Note Context ── */}
      {post.note && (
        <div className="mt-5 bg-[#c9943a]/[0.05] border-l-2 border-[#c9943a]/40 p-4 rounded-r-sm">
          <p className="m-0 font-light text-[11px] leading-[1.7] text-[#ede8d4]/60 italic">
            <span className="font-medium not-italic text-[#c9943a] uppercase text-[9px] tracking-[0.2em] block mb-1">Context</span>
            {post.note}
          </p>
        </div>
      )}
    </div>
  );
}

export default function SocialSection() {
  const [activeTab, setActiveTab] = useState("instagram");

  const scrollToPlatform = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(`platform-${id}`);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <main
      className="min-h-screen pt-20 bg-[#080604] text-[#ede8d4] font-light"
      style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* ══════════ HERO ══════════ */}
      <section className="relative px-6 pt-24 pb-16 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#c9943a]/[0.05] blur-[150px] pointer-events-none" />

        <p className="relative z-10 font-medium text-[9px] tracking-[0.45em] text-[#c9943a] uppercase mb-6 m-0">
          SOCIAL CONTENT &nbsp;·&nbsp; CAPTIONS &amp; THREADS
        </p>

        <h1
          className="relative z-10 max-w-4xl mx-auto text-[38px] md:text-[56px] font-normal leading-[1.12] text-[#ede8d4] mb-5 m-0"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Every Platform Has a Different Voice.<br />
          NOIRÉ Has One — Adapted for All of Them.
        </h1>

        <p className="relative z-10 font-light text-[14.5px] leading-[1.85] text-[#ede8d4]/65 max-w-[46rem] mx-auto mb-16 m-0">
          A complete social content library for NOIRÉ — Instagram, LinkedIn, X/Twitter, and Threads —
          each written in the native register of its platform, each unmistakably NOIRÉ.
        </p>

        {/* ── Platform Tabs ── */}
        <div className="relative z-10 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {platforms.map((p) => (
            <button
              key={p.id}
              onClick={() => scrollToPlatform(p.id)}
              className={`font-medium text-[10px] tracking-[0.2em] uppercase px-6 py-3 rounded-full border transition-all duration-300
                ${activeTab === p.id
                  ? "bg-[#c9943a] border-[#c9943a] text-[#080604] shadow-[0_0_15px_rgba(201,148,58,0.25)]"
                  : "bg-transparent border-[#c9943a]/30 text-[#c9943a]/80 hover:border-[#f0d060] hover:text-[#f0d060]"
                }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </section>

      {/* ══════════ PLATFORM SECTIONS ══════════ */}
      <div className="max-w-4xl mx-auto px-6 pb-20 flex flex-col gap-24">
        {Object.entries(contentData).map(([key, data]) => (
          <section id={`platform-${key}`} key={key} className="scroll-mt-28">
            
            {/* Header */}
            <div className="mb-10">
              <h2
                className="text-[40px] md:text-[48px] font-normal text-[#f0d060] leading-none m-0 mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {data.title}
              </h2>
              <p className="font-light text-[13px] text-[#ede8d4]/50 leading-[1.6] m-0 mb-6 max-w-2xl">
                {data.descriptor}
              </p>
              <div className="h-px w-full bg-gradient-to-r from-[#c9943a]/50 to-transparent" />
            </div>

            {/* Posts Grid */}
            <div className="flex flex-col gap-10 pl-0 xl:pl-20">
              {data.posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

          </section>
        ))}
      </div>

      {/* ══════════ CADENCE & HASHTAG PANELS ══════════ */}
      <section className="max-w-5xl mx-auto px-6 pb-32 flex flex-col gap-8">
        
        {/* Posting Cadence Guide */}
        <div className="border border-[#c9943a]/20 bg-[#0a0805] rounded-lg overflow-hidden">
          <div className="h-0.5 w-full bg-gradient-to-r from-[#c9943a] via-[#f0d060] to-[#c9943a]" />
          <div className="p-8 md:p-12">
            <h3 className="m-0 mb-8 font-medium text-[11px] tracking-[0.3em] text-[#c9943a] uppercase">
              Consistency in Posting Cadence
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                { p: "Instagram", d: "4 posts / week", t: "Mon, Wed, Fri, Sun" },
                { p: "LinkedIn", d: "2 posts / week", t: "Tue, Thu" },
                { p: "X / Twitter", d: "Daily", t: "1 post minimum" },
                { p: "Threads", d: "3 posts / week", t: "Conversational" },
              ].map((sch, i) => (
                <div key={i} className="flex flex-col items-start gap-4">
                  <span className="font-medium text-[10px] tracking-[0.3em] text-[#080604] uppercase bg-[#c9943a] px-3 py-1 rounded-sm">
                    {sch.d}
                  </span>
                  <span className="text-[26px] text-[#ede8d4] leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {sch.p}
                  </span>
                  <span className="font-light text-[12px] text-[#ede8d4]/50">
                    {sch.t}
                  </span>
                </div>
              ))}
            </div>

            <p className="m-0 font-light text-[13.5px] leading-[1.8] text-[#ede8d4]/65 md:border-l-2 md:border-[#c9943a]/30 md:pl-5">
              Algorithm and audience both reward regularity. NOIRÉ's content calendar is built
              around this cadence — varied by format (single image, carousel, reel, text post)
              but consistent in frequency. The goal is not to go viral once. It is to be present always.
            </p>
          </div>
        </div>

        {/* Hashtag Strategy Panel */}
        <div className="border border-[#c9943a]/20 bg-[#0a0805] rounded-lg overflow-hidden p-8 md:p-12">
          <h3 className="m-0 mb-8 font-medium text-[11px] tracking-[0.3em] text-[#c9943a] uppercase">
            Hashtag Strategy
          </h3>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="flex-1">
              <p className="m-0 font-light text-[14px] leading-[2.2] text-[#c9943a]">
                #NOIRÉ #DefinePresence<br />
                #EauDeParfum #LuxuryFragrance<br />
                #IndianPerfume #NicheFragrance<br />
                #FragranceCommunity #LuxuryIndia<br />
                #PerfumeOfTheDay #ScentOfTheDay
              </p>
            </div>
            
            <div className="flex-[1.5]">
              <p className="m-0 font-light text-[13.5px] leading-[1.9] text-[#ede8d4]/65">
                Hashtags are used strategically, not stuffed. Instagram uses 6 to 9 per post —
                a mix of brand-specific, niche-community, and discovery tags. LinkedIn uses 3 maximum.
                X/Twitter uses 0 to 1 — hashtags interrupt the reading flow on that platform. Threads uses none.
                Every hashtag must be relevant, researched, and serve either discoverability or community
                alignment — never volume for its own sake.
              </p>
            </div>
          </div>
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
          Social Media Captions · 2026
        </p>
      </footer>

    </main>
  );
}
