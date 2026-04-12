"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export type ContentStatus = "Planned" | "In Progress" | "Done";

export type CalendarRow = {
  platform: string;
  topic: string;
  format: string;
  owner: string;
  status: ContentStatus;
};

export type WeekTab = {
  week: number;
  label: string;
  range: string;
};

export const weekTabs: WeekTab[] = [
  { week: 1, label: "Week 1", range: "Apr 1–7" },
  { week: 2, label: "Week 2", range: "Apr 8–14" },
  { week: 3, label: "Week 3", range: "Apr 15–21" },
  { week: 4, label: "Week 4", range: "Apr 22–30" },
];

/** Platform → pill background (subtle, readable on dark) */
export const platformPillClass: Record<string, string> = {
  Twitter: "bg-[#0d8bd9]/25 text-[#7ec8f5] ring-1 ring-[#0d8bd9]/40",
  Instagram: "bg-[#c13584]/20 text-[#f0a8d0] ring-1 ring-[#c13584]/35",
  YouTube: "bg-[#c41e1e]/25 text-[#fca5a5] ring-1 ring-[#c41e1e]/35",
  LinkedIn: "bg-[#0a66c2]/25 text-[#93c5fd] ring-1 ring-[#0a66c2]/40",
  Facebook: "bg-[#1877f2]/20 text-[#93bbfc] ring-1 ring-[#1877f2]/35",
  Newsletter: "bg-[#7c6a4e]/30 text-[#d4c4a0] ring-1 ring-[#C9943A]/30",
  Website: "bg-[#C9943A]/15 text-[#e8c47a] ring-1 ring-[#C9943A]/45",
  Podcast: "bg-[#6b21a8]/25 text-[#d8b4fe] ring-1 ring-[#9333ea]/35",
};

const defaultPill =
  "bg-[#2a2620] text-[#8A7550] ring-1 ring-[#C9943A]/20";

function pillClassFor(platform: string) {
  return platformPillClass[platform] ?? defaultPill;
}

function statusBadgeClass(status: ContentStatus) {
  switch (status) {
    case "Planned":
      return "bg-[#C9943A]/12 text-[#C9943A] ring-1 ring-[#C9943A]/40";
    case "In Progress":
      return "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/35";
    case "Done":
      return "bg-teal-500/15 text-teal-300 ring-1 ring-teal-400/40";
    default:
      return "";
  }
}

export const calendarByWeek: Record<number, CalendarRow[]> = {
  1: [
    {
      platform: "Twitter",
      topic: "Why your cheap perfume costs more than you think",
      format: "Thread",
      owner: "Sruthi",
      status: "Planned",
    },
    {
      platform: "Instagram",
      topic: "The moment someone says you smell amazing",
      format: "Reel",
      owner: "Gayathri",
      status: "Planned",
    },
    {
      platform: "YouTube",
      topic: "We tested NOIRÉ for 30 days — honest review",
      format: "Video",
      owner: "Sai",
      status: "Planned",
    },
    {
      platform: "LinkedIn",
      topic: "What your scent says about your personal brand",
      format: "Carousel",
      owner: "Sruthi",
      status: "Planned",
    },
    {
      platform: "Facebook",
      topic: "The invisible accessory nobody talks about",
      format: "Image",
      owner: "Hima",
      status: "Planned",
    },
    {
      platform: "Newsletter",
      topic: "Why we built NOIRÉ — brand origin story",
      format: "Newsletter",
      owner: "Hima",
      status: "Planned",
    },
    {
      platform: "Website",
      topic: "Homepage live — hero, product, team sections",
      format: "Update",
      owner: "Sai",
      status: "In Progress",
    },
    {
      platform: "Podcast",
      topic: "Define Presence — why confidence is real luxury",
      format: "Episode",
      owner: "Gayathri",
      status: "Planned",
    },
  ],
  2: [
    {
      platform: "Twitter",
      topic: "EDP vs EDT: why concentration changes everything",
      format: "Thread",
      owner: "Hima",
      status: "Planned",
    },
    {
      platform: "Instagram",
      topic: "One bottle, three occasions — styling NOIRÉ",
      format: "Carousel",
      owner: "Sruthi",
      status: "Planned",
    },
    {
      platform: "YouTube",
      topic: "Inside the lab: how NOIRÉ is formulated for Indian climate",
      format: "Short",
      owner: "Gayathri",
      status: "Planned",
    },
    {
      platform: "LinkedIn",
      topic: "Luxury is consistency — what we learned building NOIRÉ",
      format: "Article",
      owner: "Gayathri",
      status: "Planned",
    },
    {
      platform: "Facebook",
      topic: "Poll: When do you reach for fragrance most?",
      format: "Poll",
      owner: "Hima",
      status: "Planned",
    },
    {
      platform: "Newsletter",
      topic: "April focus: presence, longevity, and first impressions",
      format: "Newsletter",
      owner: "Sruthi",
      status: "In Progress",
    },
    {
      platform: "Website",
      topic: "Product page — notes pyramid, wear time, FAQs",
      format: "Update",
      owner: "Sai",
      status: "Planned",
    },
    {
      platform: "Podcast",
      topic: "Scent memory: why smell sticks in the mind",
      format: "Episode",
      owner: "Hima",
      status: "Planned",
    },
  ],
  3: [
    {
      platform: "Twitter",
      topic: "5 myths about niche perfumery (debunked)",
      format: "Thread",
      owner: "Sruthi",
      status: "Planned",
    },
    {
      platform: "Instagram",
      topic: "POV: the room goes quiet when you walk in",
      format: "Reel",
      owner: "Gayathri",
      status: "Planned",
    },
    {
      platform: "YouTube",
      topic: "Unboxing NOIRÉ — packaging that feels like a ritual",
      format: "Video",
      owner: "Sai",
      status: "Planned",
    },
    {
      platform: "LinkedIn",
      topic: "Hiring values: craft, restraint, and brand guardianship",
      format: "Post",
      owner: "Gayathri",
      status: "Planned",
    },
    {
      platform: "Facebook",
      topic: "Customer story — “I stopped buying three cheap bottles”",
      format: "Image",
      owner: "Hima",
      status: "Planned",
    },
    {
      platform: "Newsletter",
      topic: "How to apply fragrance so it lasts (without over-spraying)",
      format: "Newsletter",
      owner: "Hima",
      status: "Planned",
    },
    {
      platform: "Website",
      topic: "Blog: the psychology of being remembered",
      format: "Article",
      owner: "Sai",
      status: "In Progress",
    },
    {
      platform: "Podcast",
      topic: "Designing for touch, weight, and silence — with Sruthi",
      format: "Episode",
      owner: "Gayathri",
      status: "Planned",
    },
  ],
  4: [
    {
      platform: "Twitter",
      topic: "Launch week: what “Define Presence” means to us",
      format: "Thread",
      owner: "Gayathri",
      status: "Planned",
    },
    {
      platform: "Instagram",
      topic: "Launch day — behind the scenes from the studio",
      format: "Stories + Reel",
      owner: "Sruthi",
      status: "Planned",
    },
    {
      platform: "YouTube",
      topic: "NOIRÉ brand film — elegance in every drop",
      format: "Video",
      owner: "Sai",
      status: "Planned",
    },
    {
      platform: "LinkedIn",
      topic: "April recap: reach, lessons, and what’s next for NOIRÉ",
      format: "Carousel",
      owner: "Gayathri",
      status: "Planned",
    },
    {
      platform: "Facebook",
      topic: "Live Q&A — founders on longevity, price, and trust",
      format: "Live",
      owner: "Hima",
      status: "Planned",
    },
    {
      platform: "Newsletter",
      topic: "Thank you + May teaser: community and collabs",
      format: "Newsletter",
      owner: "Sruthi",
      status: "Planned",
    },
    {
      platform: "Website",
      topic: "Checkout flow, shipping policy, and trust badges live",
      format: "Update",
      owner: "Sai",
      status: "In Progress",
    },
    {
      platform: "Podcast",
      topic: "Season wrap — presence, identity, and the road ahead",
      format: "Episode",
      owner: "Gayathri",
      status: "Done",
    },
  ],
};

const bottomStats = [
  { value: "8", label: "Platforms" },
  { value: "32", label: "Content Pieces" },
  { value: "4", label: "Weeks" },
  { value: "4", label: "Team Members" },
] as const;

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.045,
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
} satisfies import("framer-motion").Variants;

export default function ContentCalendarSection() {
  const [activeWeek, setActiveWeek] = useState(1);
  const rows = calendarByWeek[activeWeek] ?? [];

  return (
    <section
      id="calendar"
      className="w-full bg-[#0E0B06] px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center md:mb-14">
          <p className="font-sans text-[10px] font-medium tracking-[0.32em] text-[#C9943A] sm:text-xs">
            CONTENT CALENDAR
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold tracking-[0.02em] text-[#D4C4A0] sm:text-3xl md:text-4xl">
            April 2025 — Brand Strategy
          </h2>
          <p className="mt-3 font-sans text-sm text-[#8A7550] sm:text-base">
            8 Platforms · 4 Weeks · 32 Content Pieces
          </p>
        </header>

        <div
          className="mb-8 flex flex-wrap items-end justify-center gap-1 border-b border-[#C9943A]/15 sm:gap-2 md:mb-10"
          role="tablist"
          aria-label="Select week"
        >
          {weekTabs.map((tab) => {
            const isActive = activeWeek === tab.week;
            return (
              <button
                key={tab.week}
                type="button"
                role="tab"
                aria-selected={isActive}
                id={`calendar-tab-${tab.week}`}
                className={`border-b-2 px-3 py-3 font-sans text-sm transition-colors duration-200 sm:px-5 sm:text-base ${
                  isActive
                    ? "border-[#C9943A] text-[#D4C4A0]"
                    : "border-transparent text-[#8A7550]/80 hover:text-[#8A7550]"
                }`}
                onClick={() => setActiveWeek(tab.week)}
              >
                <span className="block font-medium">{tab.label}</span>
                <span className="mt-0.5 block text-xs font-normal opacity-80">
                  ({tab.range})
                </span>
              </button>
            );
          })}
        </div>

        <div className="overflow-x-auto rounded-lg border border-[#C9943A]/20 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.6)]">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#C9943A]/25 bg-[#080604]">
                <th className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#C9943A] sm:px-5 sm:py-4">
                  Platform
                </th>
                <th className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#C9943A] sm:px-5">
                  Topic
                </th>
                <th className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#C9943A] sm:px-5">
                  Format
                </th>
                <th className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#C9943A] sm:px-5">
                  Owner
                </th>
                <th className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#C9943A] sm:px-5">
                  Status
                </th>
              </tr>
            </thead>
            <AnimatePresence mode="wait">
              <motion.tbody
                key={activeWeek}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {rows.map((row, index) => (
                  <motion.tr
                    key={`${activeWeek}-${row.platform}-${index}`}
                    custom={index}
                    variants={rowVariants}
                    initial="hidden"
                    animate="show"
                    className={`group border-b border-[#C9943A]/10 transition-[background-color,box-shadow] duration-200 ${
                      index % 2 === 0 ? "bg-[#0E0B06]" : "bg-[#080604]"
                    } hover:bg-[#14120e] hover:shadow-[inset_4px_0_0_0_#C9943A,0_0_24px_-8px_rgba(201,148,58,0.12)]`}
                  >
                    <td className="px-4 py-3 align-middle sm:px-5 sm:py-3.5">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 font-sans text-xs font-medium ${pillClassFor(row.platform)}`}
                      >
                        {row.platform}
                      </span>
                    </td>
                    <td className="max-w-[280px] px-4 py-3 font-sans text-sm leading-snug text-[#D4C4A0]/90 sm:max-w-none sm:px-5 sm:text-[0.9375rem]">
                      {row.topic}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 font-sans text-sm text-[#8A7550] sm:px-5">
                      {row.format}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 font-sans text-sm text-[#D4C4A0]/85 sm:px-5">
                      {row.owner}
                    </td>
                    <td className="px-4 py-3 sm:px-5">
                      <span
                        className={`inline-flex rounded-md px-2 py-1 font-sans text-xs font-medium ${statusBadgeClass(row.status)}`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </AnimatePresence>
          </table>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-[#C9943A]/15 pt-12 md:mt-16 md:grid-cols-4 md:gap-6 md:pt-14">
          {bottomStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-semibold text-[#C9943A] sm:text-4xl md:text-[2.5rem]">
                {stat.value}
              </p>
              <p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-[#8A7550] sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
