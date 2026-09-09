import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Disc3,
  Headphones,
  Linkedin,
  Music2,
  Pause,
  Play,
  Radio,
  Sparkles,
  Terminal,
  Waves,
  Zap,
} from "lucide-react";
import { Instagram } from "@/lib/lucide-react";

const portraits = [
  {
    tag: "VK",
    title: "Vansh Khadoliya",
    description: "The signal behind the sound.",
    image:
      "https://vansh-vibes-visuals.lovable.app/__l5e/assets-v1/0103ba4d-7a7e-4e9e-b857-fcfe78eecc92/vansh-hero.jpg",
    accent: "emerald",
  },
  {
    tag: "THE TWO",
    title: "The Two",
    description: "Rhythm, expression, energy, friendship.",
    image:
      "https://vansh-vibes-visuals.lovable.app/__l5e/assets-v1/df59db91-0d8b-44fd-9db6-5e00bdd0269b/the-two-portrait.jpg",
    accent: "amber",
  },
] as const;

const interests = [
  { label: "Rap", detail: "Writing · Flow · Performance", icon: Music2 },
  { label: "Trumpet", detail: "5+ years in school band", icon: Radio },
  { label: "Flute", detail: "Melody and breath", icon: Waves },
  { label: "Harmonica", detail: "Pocket-sized expression", icon: Sparkles },
  { label: "Technology", detail: "Code · AI · Building", icon: Code2 },
  { label: "Sports", detail: "Energy · Teamwork · Focus", icon: Zap },
];

const socialLinks = [
  {
    label: "Instagram — VK",
    href: "https://www.instagram.com/vvvvvkkkkkkkkkkkkkkkk/",
    icon: Instagram,
    testId: "social-link-instagram-vk",
  },
  {
    label: "Instagram — The Two",
    href: "https://www.instagram.com/officialthetwo_/",
    icon: Instagram,
    testId: "social-link-instagram-the-two",
  },
  {
    label: "LinkedIn — Vansh Khadoliya",
    href: "https://www.linkedin.com/in/vansh-khadoliya-189a13434",
    icon: Linkedin,
    testId: "social-link-linkedin-vansh",
  },
];

function SectionEyebrow({ children, id }: { children: string; id: string }) {
  return (
    <p data-testid={`${id}-eyebrow`} className="eyebrow">
      {children}
    </p>
  );
}

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main data-testid="portfolio-page" className="min-h-screen overflow-hidden bg-[#0b0c0e] text-zinc-100">
      <header data-testid="portfolio-header" className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0c0e]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <a data-testid="header-brand-link" href="#top" className="group flex items-center gap-3" aria-label="Vansh Khadoliya home">
            <span className="flex h-9 w-9 items-center justify-center border border-emerald-400/40 bg-emerald-400/10 font-mono text-sm font-bold text-emerald-300 transition-transform duration-300 group-hover:rotate-6">VK</span>
            <span data-testid="header-brand-name" className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 sm:block">Independent signal</span>
          </a>
          <nav data-testid="desktop-navigation" className="hidden items-center gap-6 md:flex">
            {["about", "journey", "interests", "connect"].map((item) => (
              <a data-testid={`nav-link-${item}`} key={item} href={`#${item}`} className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 transition-colors duration-300 hover:text-emerald-300">{item}</a>
            ))}
          </nav>
          <a data-testid="header-listen-link" href="#player" className="flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/70 hover:bg-emerald-400/20">
            <Headphones size={13} /> Listen now
          </a>
        </div>
      </header>

      <section id="top" data-testid="hero-section" className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
        <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-[110px]" aria-hidden="true" />
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
          <div data-testid="hero-record-indicator" className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500"><span className="record-dot" /> REC <span className="text-emerald-300">● VK</span></div>
          <p data-testid="hero-kicker" className="eyebrow mb-5">Independent signal · Side A</p>
          <h1 data-testid="hero-title" className="max-w-3xl font-heading text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.06em] text-zinc-100 sm:text-7xl lg:text-[7.7rem]">Vansh<br /><span className="text-emerald-400">Khadoliya</span></h1>
          <p data-testid="hero-subtitle" className="mt-8 max-w-lg font-mono text-xs uppercase leading-6 tracking-[0.18em] text-zinc-400 sm:text-sm">Computer Science Student <span className="text-amber-400">•</span> Rapper <span className="text-amber-400">•</span> Musician <span className="text-amber-400">•</span> Creator</p>
          <p data-testid="hero-description" className="mt-6 max-w-md text-base leading-7 text-zinc-400">Building with code, expressing through music, and constantly finding new ways to create.</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a data-testid="hero-journey-link" href="#about" className="group inline-flex items-center gap-3 bg-emerald-400 px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#0b0c0e] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300">Explore my journey <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-1" /></a>
            <a data-testid="hero-connect-link" href="#connect" className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:text-emerald-300">Connect with me <ArrowUpRight size={14} /></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} data-testid="portrait-gallery" className="relative grid gap-4 sm:grid-cols-2">
          {portraits.map((portrait, index) => (
            <article data-testid={`portrait-card-${index + 1}`} key={portrait.tag} className={`portrait-card group ${index === 0 ? "sm:mt-14" : ""}`}>
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                <img data-testid={`portrait-image-${index + 1}`} src={portrait.image} alt={portrait.title} className="h-full w-full object-cover grayscale-[35%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/15" />
                <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/80"><span className="record-dot" /> Live visual</div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span data-testid={index === 0 ? "portrait-tag-first" : `portrait-tag-${index + 1}`} className={`inline-flex border px-3 py-1 font-mono text-[10px] font-bold tracking-[0.18em] ${portrait.accent === "emerald" ? "border-emerald-400/40 bg-emerald-400/15 text-emerald-300" : "border-amber-400/40 bg-amber-400/15 text-amber-300"}`}>{portrait.tag}</span>
                  <h2 data-testid={`portrait-title-${index + 1}`} className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-white">{portrait.title}</h2>
                  <p data-testid={`portrait-description-${index + 1}`} className="mt-1 text-sm text-zinc-300">{portrait.description}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </section>

      <section id="about" data-testid="about-section" className="border-t border-white/10 bg-[#101216]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
          <div><SectionEyebrow id="about" >A · About me</SectionEyebrow><h2 data-testid="about-title" className="mt-5 max-w-sm font-heading text-4xl font-bold uppercase leading-none tracking-[-0.04em] sm:text-5xl">The<br /><span className="text-emerald-400">artist</span></h2></div>
          <div className="grid gap-5 sm:grid-cols-2">
            {["Pursuing B.Tech in Computer Science at JECRC University.", "Rapper, flute, trumpet and harmonica player.", "Head trumpeter in my school band for more than five years.", "Sports, technology, new experiences, and the drive to keep growing."] .map((text, index) => <div data-testid={`about-fact-${index + 1}`} key={text} className="border-l border-emerald-400/40 pl-5 text-base leading-7 text-zinc-400"><span className="mb-2 block font-mono text-[10px] text-emerald-300">0{index + 1} / NOW</span>{text}</div>)}
          </div>
        </div>
      </section>

      <section id="journey" data-testid="journey-section" className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
        <SectionEyebrow id="journey">B · Artist profile</SectionEyebrow>
        <div className="mt-5 flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end"><h2 data-testid="journey-title" className="font-heading text-4xl font-bold uppercase leading-none tracking-[-0.04em] sm:text-5xl">My musical<br /><span className="text-emerald-400">journey</span></h2><p data-testid="journey-intro" className="max-w-xs text-sm leading-6 text-zinc-500">A few frequencies that shaped the signal, from school band to independent releases.</p></div>
        <div data-testid="journey-list" className="grid divide-y divide-white/10">
          {["5+ YEARS — School Band · Head Trumpeter", "RAP ARTIST — Individual performances and creative work", "THE TWO — Member of the rap duo The Two", "MULTI-INSTRUMENTALIST — Flute · Trumpet · Harmonica"].map((item, index) => <div data-testid={`journey-item-${index + 1}`} key={item} className="group flex items-center gap-5 py-6 transition-colors duration-300 hover:bg-white/[0.02] sm:gap-10"><span className="font-mono text-xs text-emerald-400">0{index + 1}</span><span className="font-heading text-lg font-semibold uppercase tracking-tight text-zinc-300 transition-colors duration-300 group-hover:text-white sm:text-2xl">{item}</span><ArrowUpRight size={18} className="ml-auto text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-300" /></div>)}
        </div>
      </section>

      <section id="interests" data-testid="interests-section" className="border-y border-white/10 bg-[#101216]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10"><SectionEyebrow id="interests">D · Frequencies</SectionEyebrow><div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 data-testid="interests-title" className="font-heading text-4xl font-bold uppercase leading-none tracking-[-0.04em] sm:text-5xl">Music &amp;<br /><span className="text-amber-400">interests</span></h2><Radio data-testid="interests-icon" className="hidden text-emerald-400 md:block" size={42} /></div><div data-testid="interest-grid" className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">{interests.map(({ label, detail, icon: Icon }, index) => <div data-testid={`interest-card-${index + 1}`} key={label} className="group bg-[#13151a] p-6 transition-colors duration-300 hover:bg-[#1a1d24]"><Icon data-testid={`interest-icon-${index + 1}`} size={20} className="mb-12 text-emerald-400 transition-transform duration-300 group-hover:scale-110" /><h3 data-testid={`interest-label-${index + 1}`} className="font-heading text-xl font-semibold uppercase tracking-tight text-zinc-200">{label}</h3><p data-testid={`interest-detail-${index + 1}`} className="mt-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500">{detail}</p></div>)}</div></div>
      </section>

      <section id="code-music" data-testid="code-music-section" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"><div><SectionEyebrow id="code-music">E · Two worlds</SectionEyebrow><h2 data-testid="code-music-title" className="mt-5 font-heading text-4xl font-bold uppercase leading-none tracking-[-0.04em] sm:text-5xl">Code <span className="text-emerald-400">×</span><br />music</h2><p data-testid="code-music-description" className="mt-6 max-w-sm text-base leading-7 text-zinc-400">Two different worlds. One creative mindset. I’m learning to think in systems without losing the instinct to create.</p></div><div data-testid="terminal-card" className="terminal-card"><div className="flex items-center justify-between border-b border-white/10 px-5 py-3"><span data-testid="terminal-title" className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">vansh.signal / live</span><Terminal size={14} className="text-emerald-400" /></div><pre data-testid="terminal-code" className="overflow-x-auto p-6 font-mono text-xs leading-8 text-zinc-400"><span className="text-emerald-400">const</span> mindset = [<span className="text-amber-300">"curiosity"</span>, <span className="text-amber-300">"rhythm"</span>];{`\n\n`}<span className="text-emerald-400">function</span> <span className="text-white">create</span>(code, music) {'{'}{`\n  `}<span className="text-emerald-400">return</span> code + music + <span className="text-amber-300">"new possibilities"</span>;{`\n`}{'}'}</pre></div></section>

      <section data-testid="next-chapter-section" className="border-y border-white/10 bg-[#101216]"><div className="mx-auto max-w-7xl px-5 py-24 lg:px-10"><SectionEyebrow id="next-chapter">F · The next chapter</SectionEyebrow><h2 data-testid="next-chapter-title" className="mt-5 max-w-3xl font-heading text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl">The journey has<br /><span className="text-emerald-400">just started.</span></h2><p data-testid="next-chapter-quote" className="mt-12 max-w-xl border-l border-amber-400/50 pl-5 font-heading text-xl italic leading-8 text-zinc-300">“अभी में हूँ, अभी कहानी बाकी है।”</p></div></section>

      <section id="connect" data-testid="connect-section" className="mx-auto max-w-7xl px-5 py-24 pb-40 lg:px-10"><SectionEyebrow id="connect">G · Final track</SectionEyebrow><h2 data-testid="connect-title" className="mt-5 max-w-2xl font-heading text-5xl font-bold uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl">Let’s<br /><span className="text-emerald-400">connect.</span></h2><p data-testid="connect-description" className="mt-8 max-w-md text-base leading-7 text-zinc-400">Music, technology, ideas, collaborations — I’m always open to discovering what’s next.</p><div data-testid="social-links" className="mt-10 flex flex-wrap gap-3">{socialLinks.map(({ label, href, icon: Icon, testId }) => <a data-testid={testId} key={label} href={href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 border border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:text-emerald-300"><Icon size={15} />{label}<ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>)}</div></section>

      <div id="player" data-testid="global-audio-player" className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-2xl border border-emerald-400/25 bg-[#111419]/95 p-3 shadow-2xl shadow-emerald-950/30 backdrop-blur-xl"><div className="flex items-center gap-4"><button data-testid="audio-player-toggle" type="button" onClick={() => setIsPlaying((value) => !value)} aria-label={isPlaying ? "Pause VK Side A" : "Play VK Side A"} className="flex h-10 w-10 shrink-0 items-center justify-center bg-emerald-400 text-[#0b0c0e] transition-transform duration-300 hover:scale-105">{isPlaying ? <Pause size={16} /> : <Play size={16} fill="currentColor" />}</button><div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-3"><p data-testid="audio-track-name" className="truncate font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-200">VK — Side A</p><span data-testid="audio-track-status" className="font-mono text-[9px] uppercase tracking-wider text-emerald-400">{isPlaying ? "Playing" : "Ready"}</span></div><div data-testid="audio-visualizer" className={`visualizer mt-2 ${isPlaying ? "is-playing" : ""}`} aria-hidden="true">{Array.from({ length: 34 }, (_, index) => <span key={index} style={{ "--bar-height": `${12 + ((index * 17) % 24)}px` } as React.CSSProperties} />)}</div></div><Disc3 data-testid="audio-disc-icon" size={21} className={isPlaying ? "animate-spin text-amber-400" : "text-zinc-600"} /></div></div>
    </main>
  );
}
