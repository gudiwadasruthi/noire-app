"use client";

import { motion } from "framer-motion";

function StoryboardDescription() {
  return (
    <p className="font-sans text-sm font-light leading-[1.85] text-[#8A7550] md:text-base md:leading-[1.9]">
      This storyboard captures the transformation of an individual from being
      unnoticed in everyday social settings to becoming confident, charismatic,
      and unforgettable. Initially, he follows a routine using ordinary
      fragrance, blending into the background without impact. Upon discovering{" "}
      <span className="font-medium text-[#C9943A]">NOIRÉ</span>, a symbol of
      elegance and sophistication, his{" "}
      <span className="font-medium text-[#C9943A]">presence</span> begins to
      evolve. With each moment, he exudes confidence, attracts attention, and
      leaves a lasting impression. The journey highlights how the right
      fragrance is more than just a scent—it is an{" "}
      <span className="font-medium text-[#C9943A]">identity</span>.{" "}
      <span className="font-medium text-[#C9943A]">NOIRÉ</span> empowers you to
      stand out, command attention, and truly define your{" "}
      <span className="font-medium text-[#C9943A]">presence</span>.
    </p>
  );
}

export default function StoryboardSection() {
  return (
    <section id="storyboard" className="bg-[#0A0804] py-24 text-center">
      <h2 className="mb-6 text-3xl text-[#C9943A] md:text-5xl">
        The NOIRÉ Story
      </h2>

      <p className="mb-10 text-[#8A7550] italic md:mb-12">
        From invisible to unforgettable.
      </p>

      <motion.div
        className="mx-auto mb-12 max-w-[700px] px-6 md:mb-16"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-48px 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="mx-auto mb-8 h-px max-w-[120px] bg-gradient-to-r from-transparent via-[#C9943A]/90 to-transparent md:mb-10"
          aria-hidden
        />
        <StoryboardDescription />
      </motion.div>

      {/* STORYBOARD IMAGE */}
      <div className="mb-16 flex justify-center px-6">
        <img
          src="/images/noire-storyboard-3x4.jpg"
          alt="Noire Storyboard"
          className="w-full max-w-4xl rounded-lg shadow-lg"
        />
      </div>

      {/* 3 ACT CARDS */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 text-left md:grid-cols-3">
        <div className="border-l-4 border-[#C9943A] pl-4">
          <h3 className="mb-2 text-xl text-[#C9943A]">Act 1 — The Struggle</h3>
          <p className="text-sm text-[#8A7550]">
            He blends in. Unnoticed. The cheap scent fades. No one remembers.
          </p>
        </div>

        <div className="border-l-4 border-[#C9943A] pl-4">
          <h3 className="mb-2 text-xl text-[#C9943A]">
            Act 2 — The Discovery
          </h3>
          <p className="text-sm text-[#8A7550]">
            Scrolling through Instagram, he finds NOIRÉ. The elegance. The
            promise.
          </p>
        </div>

        <div className="border-l-4 border-[#C9943A] pl-4">
          <h3 className="mb-2 text-xl text-[#C9943A]">
            Act 3 — The Transformation
          </h3>
          <p className="text-sm text-[#8A7550]">
            He applies NOIRÉ. Heads turn. &ldquo;You smell amazing.&rdquo; He is
            remembered.
          </p>
        </div>
      </div>
    </section>
  );
}
