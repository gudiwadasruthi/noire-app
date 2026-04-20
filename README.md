
<a id="noire---luxury-fragrance-digital-platform"></a>

<p align="center">
  <img src="public/noire-logo.png" alt="NOIRÉ Banner" width="85%">
</p>

<h1 align="center">NOIRÉ 🖤</h1>
<p align="center">
  Luxury Fragrance Digital Platform — The Essence of Mystery, Elegance in Every Drop
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.x-black?logo=next.js">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?logo=react">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript">
  <img src="https://img.shields.io/badge/Three.js-0.169-000000?logo=three.js">
  <img src="https://img.shields.io/badge/Framer_Motion-12.x-pink?logo=framer">
  <img src="https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?logo=tailwindcss">
  <img src="https://img.shields.io/badge/license-MIT-gold">
</p>

**NOIRÉ** is a luxury Eau de Parfum brand crafted for the Indian climate — a digital platform that blends cinematic 3D storytelling, editorial content strategy, and a deep dark-gold aesthetic to embody the essence of *mystery, elegance, and presence.*
Built with Next.js, Three.js, and Framer Motion, it delivers an immersive brand experience across 16+ content pages covering the complete creative marketing funnel.

**Live Demo:** [https://noire-two.vercel.app/](https://noire-two.vercel.app/)

## Table of Contents
- [💡 About the Project](#about-the-project)
- [⚡ Quick Start](#quick-start)
- [✨ Features](#features)
- [🗂️ Project Structure](#project-structure)
- [🖥️ Tech Stack](#tech-stack)
- [📄 Pages & Sections](#pages--sections)
- [🎨 Design System](#design-system)
- [🚀 Getting Started](#getting-started)
- [📊 Creative Portfolio](#creative-portfolio)
- [🚀 Future Enhancements](#future-enhancements)
- [🤝 Contributing](#contributing)
- [🙏 Acknowledgements](#acknowledgements)
- [📜 License](#license)

---

## ⚡ Quick Start

```bash
git clone <repository-url>
cd noire-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the platform live. 🚀

<p align="right">(<a href="#noire---luxury-fragrance-digital-platform">⬆ Back to top</a>)</p>

---

## 💡 About the Project

**NOIRÉ** is a premium luxury fragrance digital platform built for an Indian Eau de Parfum brand. It is more than just a product website — it is a full creative content portfolio that showcases an immersive brand identity through editorial storytelling, 3D visuals, and elegantly designed content strategy pages.

The platform combines **Next.js App Router**, **Three.js 3D rendering**, and **Framer Motion animations** to deliver a cinematic, dark-gold aesthetic that embodies the brand's tagline — *"Define Presence."*

It covers the complete brand content lifecycle: from awareness (blogs, listicles, social media) and education (tutorials, FAQs, e-books) to authority (press releases, opinion journal) and trust-building (reviews, newsletters, email sequences).

<p align="right">(<a href="#noire---luxury-fragrance-digital-platform">⬆ Back to top</a>)</p>

---

## ✨ Features

- **Immersive Hero Section** — Full-screen video showcase with animated scent note icons (Oud, Amber, Musk, Vetiver), grain texture overlays, and ambient gold glows
- **3D Interactive Experience** — Three.js + React Three Fiber powered 3D product scene using `@react-three/drei`
- **Framer Motion Animations** — Smooth entrance animations, staggered reveals, and micro-interactions across all sections
- **Creative Portfolio** — 11+ strategically categorised content pages covering the full brand content funnel
- **Editorial Design** — Premium dark-on-gold typography using Cormorant Garamond and Montserrat fonts
- **Responsive Navigation** — Animated dropdown navbar with grouped section links (Awareness / Education / Authority / Trust & Conversion / Planning)
- **Dynamic Routing** — Next.js App Router-based dynamic pages (`/[page]`)
- **Content Calendar** — Structured publishing plan with an interactive calendar view
- **Storyboard** — Visual storyboard with brand narrative illustrations
- **Team & Persona Pages** — Team profiles and detailed customer persona analysis
- **Dark Mode First** — Deep obsidian (`#080604`) and gold (`#C9943A`) colour system throughout

<p align="right">(<a href="#noire---luxury-fragrance-digital-platform">⬆ Back to top</a>)</p>

---

## 🗂️ Project Structure

```
noire-app/
├── app/
│   ├── [page]/
│   │   └── page.tsx              # Dynamic route for all portfolio pages
│   ├── globals.css               # Global base styles
│   ├── home.css                  # Home section specific styles
│   ├── layout.tsx                # Root layout with Navbar
│   └── page.tsx                  # Home page entry point
│
├── components/
│   ├── Navbar.tsx                # Fixed top navbar with animated dropdowns
│   ├── HomeSection.tsx           # Hero section with video + scent notes
│   ├── ProductDescriptionSection.tsx  # Product detail & specs
│   ├── ThreeScene.tsx            # Three.js 3D interactive scene
│   │
│   │── ── Awareness ──
│   ├── BlogSection.tsx           # Blog posts & articles
│   ├── ListiclesSection.tsx      # Listicle format content
│   ├── SocialSection.tsx         # Social media captions
│   │
│   │── ── Education ──
│   ├── TutorialSection.tsx       # Tutorial articles (2:3 editorial images)
│   ├── FAQSection.tsx            # FAQs / Knowledge base
│   ├── EbooksSection.tsx         # E-books & digital guides
│   │
│   │── ── Authority ──
│   ├── OpinionSection.tsx        # The NOIRÉ Journal (opinion pieces)
│   ├── PressSection.tsx          # Press releases
│   │
│   │── ── Trust & Conversion ──
│   ├── ReviewsSection.tsx        # Reviews & testimonials
│   ├── NewslettersSection.tsx    # Newsletters / Email sequences
│   │
│   │── ── Planning ──
│   ├── ContentCalendarSection.tsx # Content calendar & strategy
│   │
│   │── ── About ──
│   ├── TeamSection.tsx           # Team profiles
│   ├── PersonaSection.tsx        # Customer persona templates
│   ├── FlyerSection.tsx          # Brand flyer
│   └── StoryboardSection.tsx     # Visual storyboard
│
├── lib/
│   ├── animations.ts             # Framer Motion animation variants
│   └── noire-storyboard-3x4.jpg.jpeg  # Storyboard asset
│
├── public/                       # Static assets (videos, images, icons)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

<p align="right">(<a href="#noire---luxury-fragrance-digital-platform">⬆ Back to top</a>)</p>

---

## 🖥️ Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript 5+
- **UI**: React 18 + Tailwind CSS 3
- **Fonts**: Cormorant Garamond (headings), Montserrat (body)

### Animation & 3D
- **Framer Motion** `^12.x` — Page transitions, staggered animations, micro-interactions
- **Three.js** `^0.169` — 3D scene rendering
- **@react-three/fiber** `^8.x` — React renderer for Three.js
- **@react-three/drei** `^9.x` — Ready-made 3D helpers and abstractions

### Styling
- **Tailwind CSS** `^3.4` — Utility-first CSS
- **Vanilla CSS** (`home.css`) — Custom design tokens, gradients, animations
- **PostCSS** + **Autoprefixer**

### Dev Tools
- **ESLint** + `eslint-config-next` — Code quality
- **TypeScript** strict type checking

<p align="right">(<a href="#noire---luxury-fragrance-digital-platform">⬆ Back to top</a>)</p>

---

## 📄 Pages & Sections

| Route | Section | Category |
|---|---|---|
| `/` | Hero + Product Description | Home |
| `/blog` | Blog Posts & Articles | Awareness |
| `/listicles` | Listicles | Awareness |
| `/social` | Social Media Captions | Awareness |
| `/tutorial` | Tutorial Articles | Education |
| `/faq` | FAQs / Knowledge Base | Education |
| `/ebooks` | E-Books & Digital Guides | Education |
| `/opinion` | The NOIRÉ Journal | Authority |
| `/press` | Press Release | Authority |
| `/reviews` | Reviews & Testimonials | Trust & Conversion |
| `/newsletters` | Newsletters / Email Sequences | Trust & Conversion |
| `/calendar` | Content Calendar | Planning |
| `/team` | Team | About |
| `/persona` | Customer Persona | About |
| `/flyer` | Brand Flyer | About |
| `/storyboard` | Visual Storyboard | About |

<p align="right">(<a href="#noire---luxury-fragrance-digital-platform">⬆ Back to top</a>)</p>

---

## 🎨 Design System

The NOIRÉ platform uses a curated dark-luxury design language:

| Token | Value | Usage |
|---|---|---|
| `--noir-black` | `#080604` | Page background |
| `--gold-primary` | `#C9943A` | Accents, borders, icons |
| `--gold-light` | `#F0D060` | Active states, highlights |
| `--cream` | `#D4C4A0` | Body text |
| `--card-bg` | `#0D0A06` | Card & dropdown backgrounds |
| `--card-hover` | `#1A1510` | Hover states |

**Typography**
- Headings: `Cormorant Garamond`, serif — `letter-spacing: 0.35em`
- Body: `Montserrat`, sans-serif

**Visual Motifs**
- Grain texture SVG overlays for tactile depth
- Radial gold ambient glows
- Vertical BG lines
- Gold corner bracket accents on media cards
- Shimmer sweep animations on headings

<p align="right">(<a href="#noire---luxury-fragrance-digital-platform">⬆ Back to top</a>)</p>

---

## 🚀 Getting Started

### Prerequisites
- Node.js `18+` and npm
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd noire-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

<p align="right">(<a href="#noire---luxury-fragrance-digital-platform">⬆ Back to top</a>)</p>

---

## 📊 Creative Portfolio

The NOIRÉ platform's Creative Portfolio is structured as a full **content marketing funnel**:

### 🔵 Awareness
Drive discovery and brand recognition through:
- **Blog Posts & Articles** — Long-form SEO content about perfumery and luxury
- **Listicles** — Curated lists (e.g. "Top Oud Fragrances", "Scent Notes Explained")
- **Social Media Captions** — Platform-ready copy for Instagram, LinkedIn, Twitter

### 🟡 Education
Build a knowledgeable community:
- **Tutorial Articles** — Step-by-step guides on fragrance application, layering
- **FAQs / Knowledge Base** — Common questions answered with editorial flair
- **E-Books & Digital Guides** — Downloadable deep-dive digital publications

### 🔴 Authority
Establish brand credibility:
- **The NOIRÉ Journal** — Opinion pieces and thought leadership essays
- **Press Release** — Official brand announcements formatted for media

### 🟢 Trust & Conversion
Convert interest into loyalty:
- **Reviews & Testimonials** — Curated customer voice content
- **Newsletters / Email Sequences** — Welcome series, re-engagement flows, editorial emails

### 🟣 Planning
Stay consistent and strategic:
- **Content Calendar** — Month-by-month publishing plan with platform alignment

<p align="right">(<a href="#noire---luxury-fragrance-digital-platform">⬆ Back to top</a>)</p>

---

## 🚀 Future Enhancements

- 🛒 E-commerce integration — Add to cart, checkout, payment gateway
- 🌍 Multi-language support — Hindi + English bilingual experience
- 🔎 Fragrance finder quiz — Personalized scent recommendation engine
- 📱 PWA support — Installable mobile app experience
- 📧 Newsletter sign-up form — Direct subscriber capture
- 🎬 AR Try-On — Augmented reality product visualization
- 📊 Analytics dashboard — Content performance tracking

<p align="right">(<a href="#noire---luxury-fragrance-digital-platform">⬆ Back to top</a>)</p>

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#noire---luxury-fragrance-digital-platform">⬆ Back to top</a>)</p>

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) — The React framework powering the platform
- [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) — 3D scene rendering
- [Framer Motion](https://www.framer.com/motion/) — Fluid animations and transitions
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Google Fonts](https://fonts.google.com/) — Cormorant Garamond & Montserrat typography

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*This project is maintained by **Gudiwada Sruthi**. For support, please open an issue in the repository.*
