export default function PressSection() {
  return (
    <main className="min-h-screen pt-20 bg-[#080604] text-[#ede8d4] font-light" style={{ fontFamily: "'Montserrat', ui-sans-serif, system-ui, sans-serif" }}>

      {/* ══════════ TOP RELEASE BAR ══════════ */}
      <section className="border-b border-[#C9943A]/15 bg-[#C9943A]/[0.03]">
        <div className="max-w-4xl mx-auto px-6 py-3.5 flex items-center gap-6 flex-wrap">
          <span className="font-medium text-[9px] tracking-[0.35em] text-[#c9943a] border border-[#c9943a]/50 bg-[#c9943a]/[0.08] px-3.5 py-1 rounded-full uppercase shrink-0">
            FOR IMMEDIATE RELEASE
          </span>
          <span className="font-light text-[11px] tracking-[0.08em] text-[#ede8d4]/50 uppercase">
            HYDERABAD, INDIA — APRIL 11, 2026
          </span>
        </div>
      </section>

      {/* ══════════ HEADER ══════════ */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-[46px] font-semibold leading-[1.12] text-[#ede8d4] max-w-[760px]" style={{ fontFamily: "'Cormorant Garamond', ui-serif, Georgia, serif" }}>
            NOIRÉ Launches India's First Climate-Formulated Luxury Eau de Parfum,
            Setting a New Standard for Premium Fragrance in the Subcontinent
          </h1>
          <div className="h-px w-full bg-gradient-to-r from-[#c9943a] via-[#c9943a]/10 to-transparent" />
          <p className="font-light text-[15px] leading-[1.85] text-[#ede8d4]/70 max-w-[704px]">
            The luxury fragrance brand NOIRÉ today announced the official launch of its debut
            Eau de Parfum — a high-concentration, India-specific formulation engineered to last
            10 to 14 hours in the subcontinent's heat and humidity.
          </p>
        </div>
      </section>

      {/* ══════════ BODY COPY ══════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="flex flex-col gap-8">

          {/* Lead paragraph */}
          <p className="font-light leading-loose text-[15px] text-[#ede8d4]/90 border-l-2 border-[#c9943a]/30 pl-5">
            NOIRÉ, a luxury fragrance brand founded in Hyderabad, India, today announced the
            commercial launch of its debut product — NOIRÉ Eau de Parfum, a high-concentration
            EDP designed specifically for India's climate. The launch marks the first time a
            homegrown Indian luxury fragrance brand has engineered its formula from the ground up
            around the heat, humidity, and skin chemistry of the subcontinent, rather than adapting
            a Western formula downward.
          </p>

          {/* Product details */}
          <p className="font-light text-sm leading-loose text-[#ede8d4]/80">
            The NOIRÉ EDP is formulated at Eau de Parfum concentration — the highest standard for
            long-wear fragrance performance. Independent wear-testing conducted on Indian participants
            in controlled and real-world climate conditions returned an average longevity of 10 to
            14 hours on skin. The fragrance composition opens with citrus and green top notes before
            moving through a floral-spice heart and settling into a base of oud, musk, and amber.
            Each stage of the composition was calibrated to perform specifically in warm, high-humidity
            conditions — a technical consideration absent from the majority of imported luxury fragrances
            currently available in the Indian market.
          </p>

          {/* Market context */}
          <p className="font-light text-sm leading-loose text-[#ede8d4]/80">
            India became the world's fifth-largest fragrance market in 2025, yet the premium
            homegrown brand segment remains significantly undersupplied. Consumer research conducted
            by NOIRÉ prior to launch identified a cohort of Indian buyers actively importing niche
            and artisan fragrances from international markets — citing a consistent failure to find
            domestic products with equivalent longevity, material quality, or identity specificity.
            NOIRÉ positions itself within this gap, targeting consumers who regard scent as an
            extension of personal identity rather than a functional product. The brand's positioning
            line, "Define Presence," reflects this orientation.
          </p>

          {/* Availability */}
          <p className="font-light text-sm leading-loose text-[#ede8d4]/80">
            NOIRÉ Eau de Parfum is available for purchase beginning April 11, 2026, exclusively
            through the brand's direct-to-consumer platform at noiré.in. Physical retail distribution
            in Hyderabad, Mumbai, and Bengaluru is scheduled for Q3 2026, with selected luxury
            lifestyle and niche fragrance retail partners to be announced in advance of that expansion.
          </p>

          {/* ─── QUOTES ─── */}
          <div className="flex flex-col gap-8 py-4">

            {/* Quote 1 */}
            <figure className="relative py-10 px-8 border-y border-[#c9943a]/15 m-0">
              <span className="absolute top-2 left-5 text-8xl leading-none text-[#c9943a]/20 pointer-events-none select-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>&ldquo;</span>
              <blockquote className="text-[22px] md:text-2xl italic font-normal leading-[1.65] text-[#ede8d4] mb-5 relative z-10 m-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                We didn't set out to make a perfume. We set out to make a statement — that India
                is not a market to be watered down for, but a culture to be crafted for. NOIRÉ
                is the result of that conviction.
              </blockquote>
              <figcaption className="flex flex-col gap-1">
                <span className="font-medium text-[10px] tracking-[0.2em] text-[#c9943a] uppercase">The NOIRÉ Collective</span>
                <span className="font-light text-[9px] tracking-[0.15em] text-[#c9943a]/55 uppercase">Founders, NOIRÉ Parfum</span>
              </figcaption>
            </figure>

            {/* Quote 2 */}
            <figure className="relative py-10 px-8 border-y border-[#c9943a]/15 m-0">
              <span className="absolute top-2 left-5 text-8xl leading-none text-[#c9943a]/20 pointer-events-none select-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>&ldquo;</span>
              <blockquote className="text-[22px] md:text-2xl italic font-normal leading-[1.65] text-[#ede8d4] mb-5 relative z-10 m-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                I've spent years importing niche fragrances because nothing available in India
                held up past a few hours. NOIRÉ is the first time I've worn something made here
                that genuinely surprised me — it was still alive on my skin at midnight.
              </blockquote>
              <figcaption className="flex flex-col gap-1">
                <span className="font-medium text-[10px] tracking-[0.2em] text-[#c9943a] uppercase">Early Access Customer</span>
                <span className="font-light text-[9px] tracking-[0.15em] text-[#c9943a]/55 uppercase">Hyderabad</span>
              </figcaption>
            </figure>

          </div>

          {/* ─── ABOUT BOILERPLATE ─── */}
          <div className="border-t-2 border-[#c9943a] bg-[#c9943a]/[0.03] pt-7 pb-7 px-8 rounded-b-md flex flex-col gap-4">
            <p className="font-medium text-[8px] tracking-[0.45em] text-[#c9943a] uppercase m-0">ABOUT NOIRÉ</p>
            <p className="font-light text-[13px] leading-[1.85] text-[#ede8d4]/55 m-0">
              NOIRÉ is a luxury Eau de Parfum brand founded in Hyderabad, India. Built around
              the philosophy that presence is not worn — it is declared — NOIRÉ engineers its
              fragrances specifically for the Indian climate, targeting consumers who regard scent
              as an extension of identity. The brand's debut EDP delivers 10 to 14 hours of wear,
              composed of oud, musk, amber, and a floral-spice heart. Available exclusively
              at noiré.in.
            </p>
          </div>

          {/* ─── MEDIA CONTACT ─── */}
          <div className="border border-[#c9943a]/20 rounded-md flex flex-col md:flex-row overflow-hidden">
            <div className="bg-[#c9943a]/[0.04] p-8 md:w-48 border-b md:border-b-0 md:border-r border-[#c9943a]/15 shrink-0 flex items-start md:pt-9">
              <p className="font-medium text-[8px] tracking-[0.4em] text-[#c9943a] uppercase whitespace-nowrap m-0">MEDIA CONTACT</p>
            </div>
            <div className="flex-1 py-6 px-7 flex flex-col">
              {[
                { label: "Name", value: "NOIRÉ Press Office" },
                { label: "Email", value: "press@noire.in" },
                { label: "Phone", value: "+91 98765 43210" },
                { label: "Website", value: "www.noire.in" },
              ].map((row, i) => (
                <div key={i} className="flex items-baseline gap-4 py-3 border-b border-[#c9943a]/[0.08] last:border-b-0">
                  <span className="font-normal text-[9px] tracking-[0.15em] text-[#c9943a]/50 uppercase w-16 shrink-0">{row.label}</span>
                  <span className="font-light text-[13px] text-[#ede8d4]/85 tracking-[0.02em]">{row.value}</span>
                </div>
              ))}
              <p className="font-light text-[11px] leading-[1.75] text-[#ede8d4]/40 mt-5 italic">
                High-resolution imagery, product samples, and founder interviews available upon
                request. Please quote <strong className="text-[#c9943a]/70 font-medium not-italic">'NOIRÉ PRESS'</strong>{" "}
                in your subject line.
              </p>
            </div>
          </div>

          {/* ─── ASSETS STRIP ─── */}
          <div className="flex flex-col gap-6">
            <p className="font-medium text-[8px] tracking-[0.45em] text-[#c9943a] uppercase m-0">ASSETS AVAILABLE TO PRESS</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              <div className="border border-[#c9943a]/20 rounded-md p-7 flex flex-col gap-3 transition-colors duration-300 bg-[#c9943a]/[0.02] hover:border-[#c9943a]/50 hover:bg-[#c9943a]/[0.05]">
                <div className="text-[#c9943a]/60 flex items-center">
                  {/* Camera icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                  </svg>
                </div>
                <p className="font-medium text-[11px] tracking-[0.15em] text-[#ede8d4]/85 uppercase m-0">Photography</p>
                <p className="font-light text-[11px] leading-[1.75] text-[#ede8d4]/40 m-0">High-resolution product images available in 300dpi TIFF and JPG formats</p>
              </div>

              <div className="border border-[#c9943a]/20 rounded-md p-7 flex flex-col gap-3 transition-colors duration-300 bg-[#c9943a]/[0.02] hover:border-[#c9943a]/50 hover:bg-[#c9943a]/[0.05]">
                <div className="text-[#c9943a]/60 flex items-center">
                  {/* Mic icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <line x1="12" y1="19" x2="12" y2="23"/>
                    <line x1="8" y1="23" x2="16" y2="23"/>
                  </svg>
                </div>
                <p className="font-medium text-[11px] tracking-[0.15em] text-[#ede8d4]/85 uppercase m-0">Interviews</p>
                <p className="font-light text-[11px] leading-[1.75] text-[#ede8d4]/40 m-0">Founder video, audio, or written Q&amp;A available within 48 hours of request</p>
              </div>

              <div className="border border-[#c9943a]/20 rounded-md p-7 flex flex-col gap-3 transition-colors duration-300 bg-[#c9943a]/[0.02] hover:border-[#c9943a]/50 hover:bg-[#c9943a]/[0.05]">
                <div className="text-[#c9943a]/60 flex items-center">
                  {/* Chart icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                    <line x1="2" y1="20" x2="22" y2="20"/>
                  </svg>
                </div>
                <p className="font-medium text-[11px] tracking-[0.15em] text-[#ede8d4]/85 uppercase m-0">Data</p>
                <p className="font-light text-[11px] leading-[1.75] text-[#ede8d4]/40 m-0">India fragrance market statistics and consumer survey findings available</p>
              </div>

            </div>
          </div>

          {/* ─── END MARK ─── */}
          <div className="text-center text-lg text-[#c9943a] tracking-[0.5em] pt-8 pb-4 opacity-70">
            ◆ &nbsp;&nbsp; ◆ &nbsp;&nbsp; ◆
          </div>

        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="border-t border-[#c9943a]/[0.12] py-10 px-6 text-center">
        <h2 className="text-2xl text-[#c9943a] tracking-[0.4em] mb-3 m-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>NOIRÉ</h2>
        <p className="font-light text-[9px] tracking-[0.3em] text-[#ede8d4]/40 uppercase mb-2 m-0">The Essence of Mystery · Elegance in Every Drop</p>
        <p className="font-light text-[8px] tracking-[0.2em] text-[#ede8d4]/20 uppercase m-0">Press Release · April 2026</p>
      </footer>

    </main>
  );
}
