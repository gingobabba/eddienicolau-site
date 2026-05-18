import './index.css'

const STRIPES = ['s-blue', 's-yellow', 's-pink']

function Stripes() {
  return (
    <div className="stripes">
      {STRIPES.map(s => <span key={s} className={s} />)}
    </div>
  )
}

// Wrap vowels in a pink span, everything else plain
const VOWELS = new Set('aeiouAEIOU')
function ColoredVowels({ children }) {
  return (
    <>
      {String(children).split('').map((ch, i) =>
        VOWELS.has(ch)
          ? <span key={i} className="vowel">{ch}</span>
          : ch
      )}
    </>
  )
}

const BRANDS = [
  {
    name: 'Facebook',
    logo: '/logos/facebook.png',
    roles: 'AI Captain of Content Design. AI workstreams. Design language. Voice + tone. Brand + content standards.',
    keepFront: true,
  },
  {
    name: 'Meta AI',
    logo: '/logos/meta-ai.png',
    roles: 'Content designer. Design systems architect.',
    keepFront: true,
  },
  {
    name: 'Wayfair',
    logo: '/logos/wayfair.png',
    roles: 'Brand specialist. Content designer.',
  },
  {
    name: 'Zipcar',
    logo: '/logos/zipcar.png',
    roles: 'Content creator. Copywriter.',
  },
  {
    name: 'EF Education First',
    logo: '/logos/ef.png',
    roles: 'Content creator. Illustrator. Copywriter.',
  },
  {
    name: 'Internet Archive',
    logo: '/logos/internet-archive.png',
    roles: 'Blogger. Digital archivist.',
    noInvert: true,
  },
]

const FACTS = [
  { label: 'Role',     value: 'AI Captain of Content Design' },
  { label: 'Company',  value: 'Facebook' },
  { label: 'Based',    value: 'San Francisco, CA' },
  { label: 'Focus',    value: <>AI workstreams, design language,<br />voice + tone,<br />brand + content standards</>, stacked: true },
]

export default function App() {
  return (
    <>
      <Stripes />

      <nav>
        <a href="#home" className="nav-logo">EN</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section id="home">
        <div className="hero">
          <div className="hero-text">
            <p className="hero-eyebrow">Writer · Illustrator · Vibecoder</p>
            <h1 className="hero-name">
              Eddie<br />
              Nicolau<span className="period">.</span>
            </h1>
            <p className="hero-desc">
              I make sure the words you see in the apps you use don't sound like they were written by robots.
            </p>
            <a href="#work" className="hero-cta">Brand experience</a>
          </div>

          {/* CMYK-style overlapping organic shapes */}
          <div className="circles" aria-hidden="true">
            <div className="circle c-cyan" />
            <div className="circle c-yellow" />
            <div className="circle c-magenta" />
          </div>
        </div>
      </section>

      <Stripes />

      {/* About */}
      <section id="about">
        <p className="section-label">About</p>
        <div className="about-grid">
          <div>
            <h2 className="section-title">Some jobs<br />still need<br />a pulse</h2>
            <div className="about-body">
              <p>
                We're in the middle of an AI frenzy, but you can't prompt for taste. While sitting at the helm of design workflow optimization at Meta, I realized there are three things that only real designers can do well:
              </p>
              <ul className="about-list">
                <li><strong>Believe</strong> in a vision</li>
                <li><strong>Compromise</strong> for the right reasons</li>
                <li><strong>Predict and create culture</strong> for the world we live in</li>
              </ul>
              <p className="about-footnote">*This blurb was written before AGI.</p>
            </div>
          </div>
          <div className="about-facts">
            {FACTS.map(f => (
              <div key={f.label} className={`fact-row${f.stacked ? ' fact-row--stacked' : ''}`}>
                <span className="fact-label">{f.label}</span>
                <span className="fact-value">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stripes />

      {/* Work */}
      <section id="work">
        <p className="section-label">Work</p>
        <h2 className="section-title">Brand<br />portfolio</h2>
        <p className="section-subhead"><a href="mailto:edwardnicolau@gmail.com" className="section-subhead-link">Contact me</a> for samples.</p>
        <div className="brand-grid">
          {BRANDS.map(b => (
            <div key={b.name} className={`brand-card${b.keepFront ? ' brand-card--keep-front' : ''}${b.noInvert ? ' brand-card--no-invert' : ''}`}>
              <div className="brand-front">
                <img src={b.logo} alt={b.name} className="brand-logo" />
              </div>
              <div className="brand-back">
                <p className="brand-back-name">{b.name}</p>
                <p className="brand-back-roles">{b.roles}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Stripes />

      {/* Contact */}
      <section id="contact">
        <p className="section-label">Contact</p>
        <div className="contact-inner">
          <div>
            <h2 className="section-title">Let's<br />talk</h2>
            <p className="contact-body">
              Open to interesting conversations about content, design, language, and anything in between.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:edwardnicolau@gmail.com" className="contact-link">
              Email <span>↗</span>
            </a>
            <a href="https://www.linkedin.com/in/eddie-nicolau-38823a44/" target="_blank" rel="noreferrer" className="contact-link">
              LinkedIn <span>↗</span>
            </a>
            <a href="https://www.instagram.com/imposterink/" target="_blank" rel="noreferrer" className="contact-link">
              Instagram <span>↗</span>
            </a>
            <a href="https://www.mixcloud.com/eddienicolau/" target="_blank" rel="noreferrer" className="contact-link">
              Mixcloud <span>↗</span>
            </a>
            <a href="https://shop.eddienicolau.com/" target="_blank" rel="noreferrer" className="contact-link">
              Buy my stuff <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <Stripes />

      <footer>
        <span>© 2026 Eddie Nicolau</span>
        <span>AI Captain of Content Design · San Francisco</span>
      </footer>
    </>
  )
}
