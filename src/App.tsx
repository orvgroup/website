
import { useState } from 'react'
import {
  Menu,
  X,
  ArrowUpRight,
  Globe2,
  Cpu,
  Code2,
  Layers3
} from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigation = [
    'Home',
    'About',
    'Ecosystem',
    'AI Innovation',
    'Open Source',
    'Community'
  ]

  return (
    <main>
      <header className="navbar">
        <a href="#" className="logo">
          ORV<span>GROUP</span>
          <div className="logo-dot" />
        </a>

        <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
          {navigation.map((item) => (
            <a
              href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
              key={item}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-cta">
          Let's Connect <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            THE FUTURE STARTS HERE
          </div>

          <h1>
            Beyond
            <br />
            <span>Technology.</span>
            <br />
            Building the Future.
          </h1>

          <p>
            We build intelligent technology, autonomous AI
            systems and open-source experiences that move
            the world forward.
          </p>

          <div className="hero-actions">
            <a href="#ecosystem" className="primary-btn">
              Explore Our Universe <ArrowUpRight size={18} />
            </a>

            <a href="#about" className="secondary-btn">
              Discover ORVGROUP
            </a>
          </div>

          <div className="hero-meta">
            <span>AI INNOVATION</span>
            <span>OPEN SOURCE</span>
            <span>TECHNOLOGY</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="planet">
            <div className="planet-shine" />
          </div>
          <div className="planet-label">
            <Globe2 size={15} />
            DIGITAL UNIVERSE
          </div>
        </div>

        <div className="scroll-indicator">
          <span /> SCROLL TO EXPLORE
        </div>
      </section>

      <section className="intro-section" id="about">
        <span className="section-label">01 / WHO WE ARE</span>
        <h2>
          Technology is not just what we build.
          <span> It's what we make possible.</span>
        </h2>
        <p>
          ORVGROUP is a technology ecosystem focused on
          artificial intelligence, software innovation,
          open-source development and the future of digital
          experiences.
        </p>
      </section>

      <section className="ecosystem-section" id="ecosystem">
        <span className="section-label">02 / OUR ECOSYSTEM</span>
        <h2>One vision. Multiple possibilities.</h2>

        <div className="ecosystem-grid">
          <article className="eco-card">
            <Cpu />
            <h3>AI Innovation</h3>
            <p>Intelligent agents and autonomous systems.</p>
            <ArrowUpRight />
          </article>

          <article className="eco-card">
            <Code2 />
            <h3>Open Source</h3>
            <p>Building technology through collaboration.</p>
            <ArrowUpRight />
          </article>

          <article className="eco-card">
            <Layers3 />
            <h3>Developer Tools</h3>
            <p>Tools that empower the next generation.</p>
            <ArrowUpRight />
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <span className="section-label">03 / CONNECT WITH US</span>
        <h2>Let's build what's next.</h2>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          Explore GitHub <ArrowUpRight size={18} />
        </a>
      </section>

      <footer>
        <a href="#" className="logo">ORV<span>GROUP</span></a>
        <p>Beyond Technology. Building the Future.</p>
        <span>© 2026 ORVGROUP. All rights reserved.</span>
      </footer>
    </main>
  )
}

export default App
