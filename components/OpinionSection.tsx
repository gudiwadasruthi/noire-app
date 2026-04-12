export default function OpinionSection() {
  return (
    <main className="min-h-screen pt-20 bg-[#080604] text-[#d4c4a0] font-light" style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}>

      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden">
        {/* ambient glow */}
        <div className="absolute -top-24 -right-24 w-[700px] h-[700px] rounded-full bg-[#c9943a]/[0.04] blur-[140px] pointer-events-none" />
        
        {/* ghost watermark */}
        <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none">
          <span className="text-[16rem] md:text-[22rem] font-bold text-[#c9943a]/[0.03] tracking-[0.2em] whitespace-nowrap translate-x-32" style={{ fontFamily: "'Cormorant Garamond', serif" }}>PRESENCE</span>
        </div>

        <div className="relative max-w-6xl md:max-w-3xl mx-auto pt-24 pb-20 px-6 md:px-12 md:pt-36 md:pb-24">
          {/* breadcrumb */}
          <p className="font-light text-[9px] tracking-[0.35em] text-[#c9943a] uppercase mb-7 m-0">
            THE NOIRÉ JOURNAL &nbsp;·&nbsp; INDUSTRY PERSPECTIVES &nbsp;·&nbsp; FRAGRANCE CULTURE
          </p>

          {/* opinion pill */}
          <span className="inline-block font-medium text-[10px] tracking-[0.25em] uppercase text-[#c9943a] border border-[#c9943a]/50 bg-[#c9943a]/[0.08] px-4 py-1.5 rounded-full mb-7">Opinion</span>

          {/* headline */}
          <h1 className="text-[44px] md:text-6xl font-semibold leading-[1.1] text-[#f0d060] mb-6 m-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The Indian Perfume Consumer Has Grown Up.{" "}
            <em className="italic text-[#ede8d4]">The Industry Has Not.</em>
          </h1>

          {/* sub-headline */}
          <p className="font-light text-[15px] leading-[1.8] text-[#ede8d4]/75 max-w-[44rem] mb-10 m-0">
            The next generation of Indian fragrance buyers demands complexity, longevity, and
            identity — not just a pleasant smell. Most brands are still selling nostalgia.
            We are not most brands.
          </p>

          {/* author row */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full border border-[#c9943a] bg-[#c9943a]/10 flex items-center justify-center text-lg font-semibold text-[#f0d060] shrink-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>N</div>
            <div>
              <p className="font-medium text-xs text-[#d4c4a0] mb-1 tracking-wider m-0">The NOIRÉ Collective</p>
              <p className="font-light text-[10px] text-[#d4c4a0]/50 tracking-wider uppercase m-0">Founders &amp; Creative Direction, NOIRÉ Parfum</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
            <div className="h-px w-full bg-gradient-to-r from-[#c9943a]/50 to-transparent" />
        </div>
      </section>

      {/* ══════════ OPENING THESIS ══════════ */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="relative border-l-4 border-[#c9943a] bg-gradient-to-r from-[#c9943a]/[0.06] to-transparent py-10 pr-8 pl-12 rounded-r-lg">
          <span className="absolute -top-4 left-4 text-[8rem] text-[#c9943a]/20 leading-none pointer-events-none select-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>&ldquo;</span>
          <blockquote className="text-[22px] md:text-[26px] italic leading-[1.65] text-[#ede8d4] m-0 relative z-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            For too long, the Indian fragrance market has been told its consumers want
            familiarity over depth, price over quality, and mass appeal over identity.
            We believe that is not a truth — it is a convenient excuse to keep selling
            mediocrity at scale.
          </blockquote>
        </div>
      </section>

      {/* ══════════ TWO-COLUMN BODY ══════════ */}
      <section className="max-w-6xl mx-auto pt-8 pb-20 px-6 flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
        {/* ── LEFT: article body ── */}
        <article className="flex-1 min-w-0 flex flex-col gap-16">

          {/* ─── SECTION I ─── */}
          <div className="flex flex-col gap-5">
            <p className="font-light text-[9px] tracking-[0.4em] text-[#c9943a] uppercase m-0">I &nbsp;·&nbsp; THE SHIFT</p>
            <h2 className="text-[28px] md:text-3xl font-semibold text-[#f0d060] m-0 leading-[1.2]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              A Generation That Wears Fragrance as a Statement, Not a Habit
            </h2>
            <p className="font-light text-[14px] leading-[1.95] text-[#ede8d4]/85 m-0">
              Something has changed quietly but irreversibly in India's relationship with scent.
              A generation that grew up watching global luxury unfold on their screens — and earning
              enough to reach for it — is no longer satisfied with the options presented to them.
            </p>
            <p className="font-light text-[14px] leading-[1.95] text-[#ede8d4]/85 m-0">
              They are reading fragrance notes. They are discussing oud, benzoin, and hedione in
              comment sections. They are importing niche perfumes and paying customs duties without
              hesitation. They are educated consumers being underserved by an industry that still
              markets to their parents.
            </p>

            {/* inline pull quote */}
            <div className="border-l-2 border-[#c9943a] py-4 pl-6 my-2">
              <p className="text-xl italic text-[#ede8d4] leading-[1.6] m-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                "Fragrance, for this generation, is not what you wear to smell good. It is how
                you signal who you are before you have said a word."
              </p>
            </div>

            <p className="font-light text-[14px] leading-[1.95] text-[#ede8d4]/85 m-0">
              India's premium fragrance segment has grown significantly faster than the mass segment.
              Social content around niche and artisan perfumery consistently outperforms generic
              lifestyle content in engagement. The appetite is real. The supply, in India, is
              still catching up.
            </p>
          </div>

          {/* ─── SECTION II ─── */}
          <div className="flex flex-col gap-5">
            <p className="font-light text-[9px] tracking-[0.4em] text-[#c9943a] uppercase m-0">II &nbsp;·&nbsp; THE INDUSTRY'S FAILURE</p>
            <h2 className="text-[28px] md:text-3xl font-semibold text-[#f0d060] m-0 leading-[1.2]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Why "Made for India" Has Come to Mean "Made Down for India"
            </h2>
            <p className="font-light text-[14px] leading-[1.95] text-[#ede8d4]/85 m-0">
              Most international and domestic fragrance brands have taken a Western formula,
              stripped its concentration, replaced expensive materials with synthetics, packaged
              it in aspirational-adjacent branding, and called it localisation.
            </p>
            <p className="font-light text-[14px] leading-[1.95] text-[#ede8d4]/85 m-0">
              The assumption buried in this is insulting — it says Indian consumers won't notice
              the dilution, won't pay for genuine quality, and want the logo not the liquid.
            </p>

            {/* counterargument box */}
            <div className="border border-[#c9943a]/25 bg-[#080604]/80 rounded-md p-6 flex flex-col gap-3">
              <span className="font-medium text-[8px] tracking-[0.35em] text-[#c9943a] uppercase">THE COUNTERARGUMENT — AND WHY IT FAILS</span>
              <p className="font-light text-[13px] leading-[1.85] text-[#d4c4a0]/70 italic m-0">
                Some argue price sensitivity is simply the market reality in India. This is true
                in aggregate. But it is not true for the premium segment — and conflating the two
                is precisely the failure of imagination that leaves the luxury tier perpetually
                undersupplied.
              </p>
            </div>

            <p className="font-light text-[14px] leading-[1.95] text-[#ede8d4]/85 m-0">
              What these brands have failed to understand is that aspiration in India has changed
              direction. The new aspiration is not to smell like a Western celebrity's licensed
              fragrance. It is to wear something that speaks specifically and personally to who
              you are.
            </p>
          </div>

          {/* ─── SECTION III ─── */}
          <div className="flex flex-col gap-5">
            <p className="font-light text-[9px] tracking-[0.4em] text-[#c9943a] uppercase m-0">III &nbsp;·&nbsp; THE NOIRÉ POSITION</p>
            <h2 className="text-[28px] md:text-3xl font-semibold text-[#f0d060] m-0 leading-[1.2]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Why We Built a Perfume for Presence, Not for Mass Approval
            </h2>
            <p className="font-light text-[14px] leading-[1.95] text-[#ede8d4]/85 m-0">
              NOIRÉ was not built to appeal to everyone. It was built for people who understand —
              instinctively or through education — that a scent must do more than smell pleasant.
              It must last. It must evolve. It must carry something of the person wearing it into
              every room they enter.
            </p>
            <p className="font-light text-[14px] leading-[1.95] text-[#ede8d4]/85 m-0">
              This is why we formulated NOIRÉ specifically for the Indian climate — not as a
              compromise, but as a precision decision. High humidity and heat change how fragrance
              opens, evolves, and settles. A formula built without this in mind will disappoint.
            </p>

            {/* pull quote */}
            <div className="border-l-2 border-[#c9943a] py-4 pl-6 my-2">
              <p className="text-xl italic text-[#ede8d4] leading-[1.6] m-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                "Luxury is not a price point. It is the quality of attention paid to every
                decision — including the ones most consumers never consciously notice."
              </p>
            </div>

            <p className="font-light text-[14px] leading-[1.95] text-[#ede8d4]/85 m-0">
              We chose EDP concentration because a fragrance asking for your attention and your
              investment must have the integrity to stay. Ten to fourteen hours is not a marketing
              claim. It is a standard we hold ourselves to, because anything less is a broken
              promise dressed in expensive packaging.
            </p>
          </div>

        </article>

        {/* ── RIGHT: sidebar ── */}
        <aside className="shrink-0 w-full lg:w-[22rem] lg:sticky lg:top-24 flex flex-col gap-6">

          {/* Card 1 */}
          <div className="border border-[#c9943a]/25 rounded-lg p-6 bg-[#c9943a]/[0.03] flex flex-col gap-3.5 transition-colors duration-300 hover:border-[#f0d060]/40 hover:bg-[#c9943a]/[0.06]">
            <p className="font-medium text-[8px] tracking-[0.4em] text-[#c9943a] uppercase m-0">MARKET SIGNAL</p>
            <p className="text-[72px] font-bold text-[#f0d060] leading-none m-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>3.2<span className="text-3xl text-[#c9943a]">×</span></p>
            <p className="font-light text-[11px] leading-[1.75] text-[#d4c4a0]/65 m-0">
              Growth rate of India's premium fragrance segment vs. mass market (2022–2025)
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-[#c9943a]/25 rounded-lg p-6 bg-[#c9943a]/[0.03] flex flex-col gap-3.5 transition-colors duration-300 hover:border-[#f0d060]/40 hover:bg-[#c9943a]/[0.06]">
            <p className="font-medium text-[8px] tracking-[0.4em] text-[#c9943a] uppercase m-0">THE NOIRÉ STANDARD</p>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {[
                "EDP concentration",
                "10–14h wear on skin",
                "Climate-formulated for India",
                "No celebrity licensing",
                "No synthetic substitution of key materials",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-light text-xs text-[#d4c4a0]/80 leading-[1.6]">
                  <span className="text-[#c9943a] text-[10px] shrink-0 mt-1">◈</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="border border-[#c9943a]/25 rounded-lg p-6 bg-[#c9943a]/[0.03] flex flex-col gap-3.5 transition-colors duration-300 hover:border-[#f0d060]/40 hover:bg-[#c9943a]/[0.06]">
            <p className="font-medium text-[8px] tracking-[0.4em] text-[#c9943a] uppercase m-0">TIMELY HOOK</p>
            <p className="font-light text-xs leading-[1.8] text-[#d4c4a0]/65 m-0">
              India became the world's 5th-largest fragrance market in 2025 — yet premium
              Indian-born brands remain fewer than a dozen. This is the gap NOIRÉ was built
              to occupy.
            </p>
          </div>

        </aside>
      </section>

      {/* ══════════ CLOSING STANCE ══════════ */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="border-y border-[#c9943a]/20 py-16 flex flex-col gap-6 max-w-[52rem] mx-auto">
          <div className="h-px w-16 bg-gradient-to-r from-[#c9943a] to-transparent" />
          <p className="font-light text-[9px] tracking-[0.45em] text-[#c9943a] uppercase m-0">IV &nbsp;·&nbsp; THE STANCE</p>
          <h2 className="text-3xl md:text-[44px] font-semibold text-[#f0d060] m-0 leading-[1.2]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            We Are Not Asking Permission to Be Luxury
          </h2>
          <p className="font-light text-sm leading-[1.95] text-[#ede8d4]/80 m-0">
            The brands that will define India's fragrance identity for the next decade are not
            waiting for Western validation or chasing mass-market volume. They are the ones
            willing to make a product that demands something of its wearer — and delivers
            completely.
          </p>
          <p className="font-light text-sm leading-[1.95] text-[#ede8d4]/80 m-0">
            NOIRÉ is not a safe choice. It is a deliberate one. It asks you to slow down, to
            notice, to choose presence over convenience. In return, it promises something cheaper,
            safer, more diluted alternatives cannot: the experience of wearing a fragrance built
            entirely around you.
          </p>
          <p className="text-lg italic font-medium text-[#ede8d4] border-l-2 border-[#c9943a] pl-5 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The Indian consumer has grown up. It is time the industry did too.
          </p>
        </div>
      </section>

      {/* ══════════ TAGS / SHARE ══════════ */}
      <section className="max-w-6xl mx-auto pt-4 pb-16 px-6">
        <div className="flex flex-col items-center gap-6 pb-8 border-b border-[#c9943a]/10">
          <p className="font-light text-[11px] tracking-[0.15em] text-[#c9943a]/70 uppercase text-center m-0">
            Share this perspective — start the conversation.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Fragrance Culture", "Luxury India", "NOIRÉ Journal", "Industry Opinion"].map(
              (tag) => (
                <span key={tag} className="font-light text-[9px] tracking-[0.2em] uppercase text-[#c9943a] border border-[#c9943a]/30 bg-[#c9943a]/[0.06] py-2 px-5 rounded-full transition-colors duration-250 hover:border-[#f0d060]/50 hover:bg-[#f0d060]/[0.08] hover:text-[#f0d060] cursor-default">
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="py-10 px-6 text-center">
        <h2 className="text-2xl text-[#c9943a] tracking-[0.4em] mb-3 m-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>NOIRÉ</h2>
        <p className="font-light text-[9px] tracking-[0.3em] text-[#d4c4a0]/45 uppercase mb-2 m-0">The Essence of Mystery · Elegance in Every Drop</p>
        <p className="font-light text-[8px] tracking-[0.2em] text-[#d4c4a0]/25 uppercase m-0">Opinion · April 2026</p>
      </footer>

    </main>
  );
}
