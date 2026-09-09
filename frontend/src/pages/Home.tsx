import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Code2, Linkedin, Terminal } from "lucide-react";
import { Instagram } from "@/lib/lucide-react";

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
  return (
    <main data-testid="portfolio-page" className="original-portfolio">
      <header data-testid="portfolio-header" className="site-header">
        <div className="shell header-inner">
          <a data-testid="header-brand-link" href="#top" className="brand-link" aria-label="Vansh Khadoliya home"><span data-testid="header-brand-mark" className="brand-mark">VK</span><span data-testid="header-brand-name" className="brand-name">VANSH KHADOLIYA</span></a>
          <a data-testid="header-connect-link" href="#connect" className="header-connect">CONNECT <ArrowUpRight size={13} /></a>
        </div>
      </header>

      <section id="top" data-testid="hero-section" className="hero-section shell">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="hero-copy">
          <SectionEyebrow id="hero">Independent signal · Side A</SectionEyebrow>
          <h1 data-testid="hero-title" className="hero-title">Vansh<br /><span>Khadoliya</span></h1>
          <p data-testid="hero-subtitle" className="hero-subtitle">Computer Science Student · Rapper · Musician · Creator</p>
          <p data-testid="hero-description" className="hero-description">Building with code, expressing through music, and constantly finding new ways to create.</p>
          <div className="hero-actions"><a data-testid="hero-journey-link" href="#about" className="button button-primary">Explore my journey <ArrowDown size={14} /></a><a data-testid="hero-connect-link" href="#connect" className="button button-secondary">Connect with me <ArrowUpRight size={14} /></a></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} data-testid="portrait-gallery" className="hero-portrait portrait-frame">
          <img data-testid="portrait-image-first" src="https://vansh-vibes-visuals.lovable.app/__l5e/assets-v1/0103ba4d-7a7e-4e9e-b857-fcfe78eecc92/vansh-hero.jpg" alt="Vansh Khadoliya portrait" />
          <span data-testid="hero-rec-label" className="rec-label">REC <i /></span>
          <span data-testid="portrait-tag-first" className="portrait-tag">VK</span>
        </motion.div>
      </section>

      <section id="about" data-testid="about-section" className="section-block shell two-column"><div><SectionEyebrow id="about">(A) · About me</SectionEyebrow><h2 data-testid="about-title" className="section-title">The<br /><span>artist</span></h2></div><div className="about-copy"><p data-testid="about-intro" className="large-copy">My name is Vansh Khadoliya. I live where rhythm, curiosity, and technology overlap.</p><div className="about-facts">{[["Now", "Pursuing B.Tech in Computer Science at JECRC University."], ["The sound", "I rap, play flute, trumpet and harmonica, and create as part of The Two."], ["The band", "Head Trumpeter in my school band for more than five years."], ["Beyond music", "Sports, technology, new experiences, and the drive to keep growing."]].map(([label, text], index) => <div data-testid={`about-fact-${index + 1}`} key={label}><span>{label}</span><p>{text}</p></div>)}</div></div></section>

      <section id="journey" data-testid="journey-section" className="section-block shell"><SectionEyebrow id="journey">(B) · Artist profile</SectionEyebrow><div className="section-heading-row"><h2 data-testid="journey-title" className="section-title">My musical<br /><span>journey</span></h2></div><div data-testid="journey-list" className="journey-list">{[["01", "5+ years", "School Band · Head Trumpeter"], ["02", "Rap artist", "Individual performances and creative work"], ["03", "The Two", "Member of the rap duo The Two"], ["04", "Multi-instrumentalist", "Flute · Trumpet · Harmonica"]].map(([number, title, text]) => <div data-testid={`journey-item-${number}`} key={number} className="journey-item"><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>

      <section id="duo" data-testid="duo-section" className="section-block shell duo-section"><div data-testid="portrait-card-second" className="duo-portrait portrait-frame"><img data-testid="portrait-image-second" src="https://vansh-vibes-visuals.lovable.app/__l5e/assets-v1/df59db91-0d8b-44fd-9db6-5e00bdd0269b/the-two-portrait.jpg" alt="The Two rap duo portrait" /><span data-testid="portrait-tag-second" className="portrait-tag portrait-tag-amber">THE TWO</span></div><div className="duo-copy"><SectionEyebrow id="duo">(C) · Featured duo</SectionEyebrow><h2 data-testid="duo-title" className="section-title">The<br /><span>two</span></h2><p data-testid="duo-description" className="large-copy">A rap duo built around rhythm, expression, energy, and the love for creating music and also a backbone called friendship.</p><a data-testid="social-link-instagram-the-two" href="https://www.instagram.com/officialthetwo_/" target="_blank" rel="noreferrer" className="text-link">Instagram — The Two <ArrowUpRight size={14} /></a></div></section>

      <section id="interests" data-testid="interests-section" className="section-block shell"><SectionEyebrow id="interests">(D) · Frequencies</SectionEyebrow><h2 data-testid="interests-title" className="section-title">Music &amp;<br /><span>interests</span></h2><div data-testid="interest-grid" className="interest-grid">{[["Rap", "Writing · Flow · Performance"], ["Trumpet", "5+ years in school band"], ["Flute", "Melody and breath"], ["Harmonica", "Pocket-sized expression"], ["Technology", "Code · AI · Building"], ["Sports", "Energy · Teamwork · Focus"]].map(([label, detail], index) => <div data-testid={`interest-card-${index + 1}`} key={label}><span>0{index + 1}</span><h3>{label}</h3><p>{detail}</p></div>)}</div></section>

      <section id="code-music" data-testid="code-music-section" className="section-block shell two-column"><div><SectionEyebrow id="code-music">(E) · Two worlds</SectionEyebrow><h2 data-testid="code-music-title" className="section-title">Code <span>×</span><br />music</h2><p data-testid="code-music-description" className="large-copy">Two different worlds. One creative mindset.</p><p className="body-copy">I’m pursuing B.Tech in Computer Science at JECRC University while continuing to develop my identity in music—learning to think in systems without losing the instinct to create.</p></div><div data-testid="terminal-card" className="terminal-card"><div className="terminal-bar"><span data-testid="terminal-title">vansh.signal live</span><Terminal size={14} /></div><pre data-testid="terminal-code"><span>const</span> mindset = [<b>"curiosity"</b>, <b>"rhythm"</b>];{`\n\n`}<span>function</span> create(code, music) {'{'}{`\n  `}<span>return</span> code + music + <b>"new possibilities"</b>;{`\n`}{'}'}</pre></div></section>

      <section data-testid="next-chapter-section" className="section-block shell next-chapter"><SectionEyebrow id="next-chapter">(F) · The next chapter</SectionEyebrow><h2 data-testid="next-chapter-title" className="section-title">The journey has<br /><span>just started.</span></h2><p data-testid="next-chapter-description" className="body-copy">At JECRC University, I’m looking forward to making the most of college—gaining experiences, developing technical skills, and growing in music.</p><div data-testid="next-chapter-list" className="tag-list">{["Learning new technologies", "Exploring AI", "Improving coding skills", "Meeting new people", "New experiences", "Creative growth", "Developing in music"].map((item) => <span key={item}>{item}</span>)}</div></section>

      <section id="connect" data-testid="connect-section" className="section-block shell connect-section"><SectionEyebrow id="connect">(G) · Final track</SectionEyebrow><h2 data-testid="connect-title" className="section-title">Let’s<br /><span>connect</span></h2><p data-testid="connect-description" className="large-copy">Music, technology, ideas, collaborations — I'm always open to discovering what's next.</p><div data-testid="social-links" className="social-links">{socialLinks.map(({ label, href, icon: Icon, testId }) => <a data-testid={testId} key={label} href={href} target="_blank" rel="noreferrer" className="social-link"><Icon size={14} />{label}<ArrowUpRight size={13} /></a>)}</div></section>

      <footer data-testid="portfolio-footer" className="portfolio-footer shell"><strong data-testid="footer-signature-name">VK VANSH KHADOLIYA</strong><span data-testid="footer-signature-line">A musician who codes.</span></footer>
    </main>
  );
}
