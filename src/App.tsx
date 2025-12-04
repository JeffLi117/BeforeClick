import { useState } from 'react'
import './App.css'
import scanCardImage from './assets/scan-card.png'
import hero1Image from './assets/hero-1.png'
import hero2Image from './assets/hero-2.png'
import person1Image from './assets/person-1.jpg'
import person2Image from './assets/person-2.jpg'
import person3Image from './assets/person-3.jpg'
import person4Image from './assets/person-4.jpg'
import person5Image from './assets/person-5.jpg'
import person6Image from './assets/person-6.jpg'
import tools1Image from './assets/tools-1.png'
import tools2Image from './assets/tools-2.png'
import tools3Image from './assets/tools-3.png'
import tools4Image from './assets/tools-4.png'
import tools5Image from './assets/tools-5.png'
import tools6Image from './assets/tools-6.png'
import lockIcon from './assets/lock-icon.png'
import WaitlistForm from './components/WaitlistForm'
import BeforeClickLogo from './components/BeforeClickLogo'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="app">
      <header className="site-header">
        <div className="nav-brand">
          <BeforeClickLogo />
        </div>
        <button 
          className="hamburger-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger-icon ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
          <a href="#security" onClick={() => setIsMobileMenuOpen(false)}>Security</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-lights" aria-hidden="true">
            <div className="hero-light light-1" />
            <div className="hero-light light-2" />
          </div>
          <div className="hero-content">
            {/* <p className="eyebrow">Know if a link is safe, before you click</p> */}
            <h1>Know If A Link Is Safe, Before You Click</h1>
            <p className="hero-copy">
              Even the best antivirus misses 1% of threats. BeforeClick checks links before you click, to reveal if they’re safe.
            </p>
            <WaitlistForm
              className="hero-form"
              buttonClassName="btn btn-primary hero-submit"
              placeholder="Enter your work email"
              ariaLabel="Work email address"
            />
            <div className="hero-proof">
              <div className="hero-avatars">
                <img src={person1Image} alt="Avatar" className="hero-avatar" />
                <img src={person2Image} alt="Avatar" className="hero-avatar" />
                <img src={person3Image} alt="Avatar" className="hero-avatar" />
              </div>
              <p>
                Join <strong>250+ people</strong> already on the waitlist
              </p>
            </div>
            {/* <div className="trust-row">
              <div className="trust-badge">★ Rated 4.9 on SecurityHub</div>
              <div className="trust-badge">Trusted by 20K+ businesses</div>
            </div> */}
          </div>
          <div className="hero-mockup">
            <div className="mockup-card">
              <img src={hero1Image} alt="Hero" />
            </div>
            <div className="mockup-card-secondary">
              <img src={hero2Image} alt="Hero" />
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="features-connector" aria-hidden="true">
            <div className="connector-line" />
            <div className="connector-node">
              <span />
            </div>
          </div>
          <div className="features-heading">
            <h2>Keeping You Safe From Fake Links, Before You Even Click.</h2>
            <p>
              BeforeClick instantly scans every link, catching phishing and fake domains before they reach you.
            </p>
          </div>
          <div className="features-layout">
            <img src={scanCardImage} alt="Link scan preview" className="scan-card" />
            <ol className="feature-steps">
              <li className="feature-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Every Email, Instantly Scanned</h3>
                  <p>BeforeClick automatically checks every incoming email, analyzing each link before it even reaches your inbox.</p>
                </div>
              </li>
              <li className="feature-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Smarter Detection With AI</h3>
                  <p>
                    Our AI recognizes phishing attempts, fake domains, and cloned login pages that traditional filters miss. It spots
                    what humans can&apos;t, in milliseconds.
                  </p>
                </div>
              </li>
              <li className="feature-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Clear Warnings, Simple Decisions</h3>
                  <p>You immediately see whether a link is safe, suspicious, or dangerous—making it easy to decide what&apos;s trustworthy.</p>
                </div>
              </li>
              <li className="feature-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Privacy First, Always</h3>
                  <p>We don&apos;t track or store your data. Your inbox stays private, your safety untouched.</p>
                </div>
              </li>
            </ol>
          </div>
          <div className="features-form-container">
            <WaitlistForm
              className="hero-form features-form"
              buttonClassName="btn btn-primary hero-submit"
              placeholder="Enter your work email"
              ariaLabel="Work email address"
            />
          </div>
        </section>

        <section id="how-it-works" className="tools">
          <div className="tools-header">
            <div className="features-heading">
              <h2>Your Tools For Safer Clicking</h2>
              <p>AI tools that protect you before threats even reach your screen.</p>
            </div>
            {/* <button className="btn btn-outline">See Platform Tour</button> */}
          </div>
          <div className="tools-layout">
            <div className="tools-grid-container">
              <div className="tools-grid">
                <div className="tool-card">
                  <img src={tools1Image} alt="Tool" className="tool-icon" />
                  <h3>Instant Risk</h3>
                  <p>Hover links to see a color-coded safety score.</p>
                </div>
                <div className="tool-card">
                  <img src={tools2Image} alt="Tool" className="tool-icon" />
                  <h3>Privacy First</h3>
                  <p>No tracking, no storage, fully GDPR compliant.</p>
                </div>
                <div className="tool-card">
                  <img src={tools3Image} alt="Tool" className="tool-icon" />
                  <h3>Threat Insights</h3>
                  <p>Understand why a link is risky before you decide.</p>
                </div>
              </div>

              <div className="tools-grid">
                <div className="tool-card">
                  <img src={tools4Image} alt="Tool" className="tool-icon" />
                  <h3>Safe History</h3>
                  <p>Keep track of your scanned links for better awareness.</p>
                </div>
                <div className="tool-card">
                  <img src={tools5Image} alt="Tool" className="tool-icon" />
                  <h3>Manual Scan</h3>
                  <p>Paste any link to instantly check if it’s safe.</p>
                </div>
                <div className="tool-card">
                  <img src={tools6Image} alt="Tool" className="tool-icon" />
                  <h3>Hard Mode</h3>
                  <p>Blocks risky clicks until you confirm manually.</p>
                </div>
              </div>
            </div>
            <div className="tools-mockup-container">
              <img src={hero1Image} alt="Tools" className="tools-mockup" />
            </div>
          </div>
        </section>

        <section id="security" className="security-banner">
          <div className="security-banner-inner">
            <div className="banner-content">
              <h2>Built for Privacy, Backed by Security</h2>
              <p>End-to-end encryption, SOC2 Type II compliance, and zero-knowledge architecture.</p>
            </div>
          </div>
          <div className="banner-icons" aria-hidden="true">
            <img src={lockIcon} alt="" className="banner-lock lock-1" />
            <img src={lockIcon} alt="" className="banner-lock lock-2" />
            <img src={lockIcon} alt="" className="banner-lock lock-3" />
            <img src={lockIcon} alt="" className="banner-lock lock-4" />
            <img src={lockIcon} alt="" className="banner-lock lock-5" />
          </div>
        </section>

        <section className="testimonials">
          <div className="testimonial-lights" aria-hidden="true">
            <div className="testimonial-light light-1" />
            <div className="testimonial-light light-2" />
          </div>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-author">
                <img src={person1Image} alt="Jonathan H." className="testimonial-avatar" />
                <span className="testimonial-name">Jonathan H.</span>
              </div>
              <p className="testimonial-quote">I signed up for the waitlist the moment I saw it. I get fake shipping mails almost every week, and sometimes they look so real it’s scary. If BeforeClick can tell me what’s safe before I click, I’ll finally stop second-guessing every email.</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-author">
                <img src={person3Image} alt="Liam S." className="testimonial-avatar" />
                <span className="testimonial-name">Liam S.</span>
              </div>
              <p className="testimonial-quote">I’m the kind of person who checks every link twice, and even then I’m not sure. BeforeClick sounds like something that should already exist. I joined the waitlist because I’d love to stop worrying about clicking the wrong link one day.</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-author">
                <img src={person4Image} alt="Rayan D." className="testimonial-avatar" />
                <span className="testimonial-name">Rayan D.</span>
              </div>
              <p className="testimonial-quote">I deal with tons of client emails daily, and I’m tired of worrying about fake links. BeforeClick could finally save me time and peace of mind.</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-author">
                <img src={person6Image} alt="Taylor V." className="testimonial-avatar" />
                <span className="testimonial-name">Taylor V.</span>
              </div>
              <p className="testimonial-quote">I’m usually the guy friends ask about “is this link safe?” and even I can’t always tell. When I saw BeforeClick’s concept, it just made sense. I joined the waitlist right away because I want to be part of something that actually fixes that problem.</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-author">
                <img src={person5Image} alt="Alice R." className="testimonial-avatar" />
                <span className="testimonial-name">Alice R.</span>
              </div>
              <p className="testimonial-quote">Almost clicked a fake PayPal mail last month, the logo, tone, everything looked real. Since then, I don’t trust anything in my inbox. BeforeClick sounds like a game-changer, so I joined the waitlist the same day I found it.</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-author">
                <img src={person2Image} alt="James V." className="testimonial-avatar" />
                <span className="testimonial-name">James V.</span>
              </div>
              <p className="testimonial-quote">Every day there’s another fake delivery message or weird domain trying to scam people. It’s exhausting. When I heard about BeforeClick, it felt like the kind of tool that could actually make the internet safer again, that’s why I joined the waitlist.</p>
            </div>
          </div>
        </section>
        <div className="features-form-container">
          <WaitlistForm
            className="hero-form features-form"
            buttonClassName="btn btn-primary hero-submit"
            placeholder="Enter your work email"
            ariaLabel="Work email address"
          />
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-column">
            <BeforeClickLogo />
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Product</h3>
            <nav className="footer-links">
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#security">Security</a>
            </nav>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Legal & Socials</h3>
            <nav className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App