"use client";

import { motion, type Variants } from "framer-motion";

/* ─── Persona Data ─────────────────────────────────────────────────── */
const persona = {
  label: "CUSTOMER PERSONA",
  name: "Arjun Mehta",
  age: 24,
  work: "Junior Software Engineer",
  family: "Single, Urban Dweller",
  location: "Hyderabad, India",
  character: "The Ambitious Professional",
  tagline: "I want to be remembered in every room I walk into.",
  traits: ["Ambitious", "Status-aware", "Detail-oriented", "Growth-minded"],
  goals: [
    "Project quiet confidence in professional settings",
    "Build a signature presence that people recall",
    "Invest in quality products that match his trajectory",
  ],
  frustrations: [
    "Mass-market scents that fade within 2–3 hours",
    "Generic profiles that feel juvenile or interchangeable",
    "Feeling invisible at networking events and client meetings",
  ],
  bio: "Arjun is an early-career engineering graduate in Hyderabad who treats personal presence as part of his professional toolkit. He is willing to invest in quality when it clearly signals competence and longevity—but he is skeptical of gimmicks and needs proof that a fragrance will last through long workdays and social evenings. He researches independently via Instagram, LinkedIn, and forums before committing to a purchase.",
  personality: [
    { left: "Introvert", right: "Extrovert", value: 35 },
    { left: "Thinking", right: "Feeling", value: 25 },
    { left: "Sensing", right: "Intuition", value: 60 },
    { left: "Judging", right: "Perceiving", value: 55 },
  ],
  motivation: [
    { label: "Status & Prestige", value: 88 },
    { label: "Fear of Being Forgotten", value: 72 },
    { label: "Career Growth", value: 80 },
    { label: "Self-Improvement", value: 75 },
    { label: "Social Validation", value: 65 },
  ],
  brands: ["BOSS", "PRADA", "ZARA", "FOREST\nESSENCIALS", "ARMANI"],
  channels: [
    { label: "Instagram & Social Media", value: 90 },
    { label: "Online Reviews & Forums", value: 78 },
    { label: "Peer Referral", value: 65 },
    { label: "LinkedIn Influencers", value: 55 },
    { label: "Traditional Ads", value: 30 },
  ],
};

/* ─── Animation Variants ────────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const barVariant: Variants = {
  hidden: { scaleX: 0 },
  visible: (w: number) => ({
    scaleX: w / 100,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  }),
};

/* ─── Sub-components ────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-3 font-heading text-lg font-semibold text-[#C9943A]">
      {children}
    </h4>
  );
}

function GoldBar({ value, delay = 0 }: { value: number; delay?: number }) {
  return (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-[#1A1510]">
      <motion.div
        className="absolute inset-y-0 left-0 origin-left rounded-full bg-gradient-to-r from-[#C9943A] to-[#F0D060]"
        variants={barVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={value}
        style={{ width: "100%" }}
        transition={{ delay }}
      />
    </div>
  );
}

function PersonalitySlider({
  left,
  right,
  value,
  index,
}: {
  left: string;
  right: string;
  value: number;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className="space-y-1"
    >
      <div className="flex justify-between font-sans text-[10px] uppercase tracking-widest text-[#6B5D40]">
        <span>{left}</span>
        <span>{right}</span>
      </div>
      <div className="relative h-1.5 w-full rounded-full bg-[#1A1510]">
        <motion.div
          className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-[#C9943A]/30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        />
        {/* Thumb */}
        <motion.div
          className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-[#F0D060] bg-[#C9943A] shadow-[0_0_6px_rgba(201,148,58,0.7)]"
          initial={{ left: "50%" }}
          whileInView={{ left: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 + 0.2 }}
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────── */
export default function PersonaSection() {
  return (
    <section
      id="persona"
      className="w-full bg-[#080604] px-4 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="font-sans text-[10px] font-medium tracking-[0.32em] text-[#C9943A] sm:text-xs">
            {persona.label}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-[#D4C4A0] sm:text-4xl">
            {persona.character}
          </h2>
          <div className="mx-auto mt-3 h-px w-20 bg-gradient-to-r from-transparent via-[#C9943A]/60 to-transparent" />
        </motion.div>

        {/* ── 3-Column Card ───────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="overflow-hidden rounded-2xl border border-[#C9943A]/30 bg-[#0D0A06] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.9)]"
        >
          {/* ── Name Banner ─────────────────────────────────────────── */}
          <div className="border-b border-[#C9943A]/20 bg-gradient-to-r from-[#C9943A]/10 via-[#C9943A]/5 to-transparent px-8 py-5">
            <h3 className="font-heading text-2xl font-semibold tracking-wide text-[#D4C4A0] sm:text-3xl">
              {persona.name}
            </h3>
          </div>

          <div className="grid grid-cols-1 divide-y divide-[#C9943A]/12 lg:grid-cols-[280px_1fr_280px] lg:divide-x lg:divide-y-0">

            {/* ══ LEFT COLUMN ══════════════════════════════════════════ */}
            <div className="space-y-7 p-6 sm:p-8">

              {/* Avatar */}
              <div className="flex flex-col items-center">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-[#C9943A]/50 bg-gradient-to-br from-[#1C1508] to-[#080604] shadow-[0_0_30px_rgba(201,148,58,0.15)]">
                  <span className="font-heading text-5xl font-bold text-[#C9943A]">
                    {persona.name.charAt(0)}
                  </span>
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border border-[#080604] bg-[#C9943A]" />
                </div>
                <blockquote className="mt-4 text-center font-heading text-sm italic leading-snug text-[#D4C4A0]/75">
                  &ldquo;{persona.tagline}&rdquo;
                </blockquote>
              </div>

              {/* Bio Details */}
              <div className="rounded-lg border border-[#C9943A]/15 bg-[#0A0804] p-4 space-y-2">
                {[
                  { label: "Age", value: `${persona.age} years` },
                  { label: "Work", value: persona.work },
                  { label: "Family", value: persona.family },
                  { label: "Location", value: persona.location },
                  { label: "Character", value: persona.character },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-2 font-sans text-xs leading-snug">
                    <span className="w-16 shrink-0 text-[#6B5D40]">{label}:</span>
                    <span className="font-semibold text-[#C9943A]">{value}</span>
                  </div>
                ))}
              </div>

              {/* Personality */}
              <div>
                <SectionLabel>Personality</SectionLabel>
                <div className="space-y-4">
                  {persona.personality.map((p, i) => (
                    <PersonalitySlider key={p.left} {...p} index={i} />
                  ))}
                </div>
              </div>
            </div>

            {/* ══ CENTER COLUMN ════════════════════════════════════════ */}
            <div className="space-y-7 p-6 sm:p-8">

              {/* Trait Tags */}
              <div className="flex flex-wrap gap-2">
                {persona.traits.map((t, i) => (
                  <motion.span
                    key={t}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    className="rounded-full border border-[#C9943A]/40 bg-[#C9943A]/10 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-widest text-[#C9943A]"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* Goals */}
              <div>
                <SectionLabel>Goals</SectionLabel>
                <ul className="space-y-2">
                  {persona.goals.map((g, i) => (
                    <motion.li
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i}
                      className="flex items-start gap-2 font-sans text-sm leading-relaxed text-[#8A7550]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9943A]" />
                      {g}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-[#C9943A]/10" />

              {/* Frustrations */}
              <div>
                <SectionLabel>Frustrations</SectionLabel>
                <ul className="space-y-2">
                  {persona.frustrations.map((f, i) => (
                    <motion.li
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i}
                      className="flex items-start gap-2 font-sans text-sm leading-relaxed text-[#8A7550]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6B4A20]" />
                      {f}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-[#C9943A]/10" />

              {/* Bio */}
              <div>
                <SectionLabel>Bio</SectionLabel>
                <div className="rounded-lg border border-[#C9943A]/12 bg-[#0A0804] p-4">
                  <p className="font-sans text-sm leading-[1.75] text-[#7A6A4A]">
                    {persona.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* ══ RIGHT COLUMN ═════════════════════════════════════════ */}
            <div className="space-y-7 p-6 sm:p-8">

              {/* Motivation */}
              <div>
                <SectionLabel>Motivation</SectionLabel>
                <div className="space-y-3">
                  {persona.motivation.map(({ label, value }, i) => (
                    <motion.div
                      key={label}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i}
                      className="space-y-1"
                    >
                      <div className="flex justify-between font-sans text-[11px] text-[#6B5D40]">
                        <span>{label}</span>
                        <span className="text-[#C9943A]">{value}%</span>
                      </div>
                      <GoldBar value={value} delay={i * 0.08} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Brands & Influencers */}
              <div>
                <SectionLabel>Brands &amp; Influencers</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  {persona.brands.map((brand, i) => (
                    <motion.div
                      key={brand}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9943A]/25 bg-[#0A0804] text-center font-sans text-[8px] font-bold uppercase leading-tight tracking-wider text-[#8A7550] transition-all duration-300 hover:border-[#C9943A]/60 hover:text-[#C9943A] hover:shadow-[0_0_12px_rgba(201,148,58,0.2)]"
                    >
                      {brand}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Preferred Channels */}
              <div>
                <SectionLabel>Preferred Channels</SectionLabel>
                <div className="space-y-3">
                  {persona.channels.map(({ label, value }, i) => (
                    <motion.div
                      key={label}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i}
                      className="space-y-1"
                    >
                      <div className="flex justify-between font-sans text-[11px] text-[#6B5D40]">
                        <span>{label}</span>
                        <span className="text-[#C9943A]">{value}%</span>
                      </div>
                      <GoldBar value={value} delay={i * 0.08 + 0.3} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
