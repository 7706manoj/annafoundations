
"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Phone, Mail } from "lucide-react";
const services = [
  {
    title: "Food Distribution",
    verse: "Isaiah 58:10",
    description:
      "Sharing food and essential supplies with people facing hardship.",
    icon: "♡",
  },
  {
    title: "Orphans & Children",
    verse: "James 1:27",
    description:
      "Promoting the care, education, dignity, and well-being of children.",
    icon: "♧",
  },
  {
    title: "Widows & Families",
    verse: "James 1:27",
    description:
      "Offering compassionate support to widows and vulnerable families.",
    icon: "♡",
  },
  {
    title: "Elderly Care",
    verse: "Matthew 25:36",
    description:
      "Encouraging care, companionship, and respect for older people.",
    icon: "✧",
  },
  {
    title: "Medical Assistance",
    verse: "Matthew 25:36",
    description:
      "Supporting compassionate care for people facing illness and hardship.",
    icon: "✚",
  },
  {
    title: "Community Support",
    verse: "Galatians 6:10",
    description:
      "Doing good and supporting people in need without discrimination.",
    icon: "♧",
  },
];

const scriptures = [
  {
    verse:
      "He that hath pity upon the poor lendeth unto the LORD; and that which he hath given will he pay him again.",
    reference: "Proverbs 19:17",
  },
  {
    verse:
      "As we have therefore opportunity, let us do good unto all men.",
    reference: "Galatians 6:10",
  },
  {
    verse: "By love serve one another.",
    reference: "Galatians 5:13",
  },
  {
    verse:
      "Even so faith, if it hath not works, is dead, being alone.",
    reference: "James 2:17",
  },
];

// Replace the placeholder names with the real names.
// Put each person's photo in public/images using the matching filename.
const leaders = [
  {
    name: "Dr. GARLAPATI NARAYANA",
    role: "Founder/Chairman of Trust",
    image: "/images/founder.png",
  },

  {
    name: "Mr. GUDISA NARASIMHA RAO",
    role: "Trustee/Vice Chairman",
    image: "/images/vice-chairman.png",
  },
  {
    name: "Mrs. GARLAPATI PRAMEELA ",
    role: "Trustee/Treasurer",
    image: "/images/treasurer.png",
  },
   {
    name: "Mrs. Shaik Saidabee ",
    role: "Trustee",
    image: "/images/trustee.png",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main id="home">
  
<header className="header">
  <a href="#home" className="brand">
    <Image
      src="/images/Logo.png"
      alt="ANNA FOUNDATIONS logo"
      width={60}
      height={60}
      priority
      className="brand-logo"
    />

    <span className="brand-text">
      <span className="brand-name">
        <strong className="brand-anna">ANNA</strong>
        <strong className="brand-foundations">FOUNDATIONS</strong>
      </span>
      <small>Regd. No. 170/2026</small>
    </span>
  </a>

  {/* Desktop Navigation */}
  <nav className="nav desktop-nav">
    <a href="#home">Home</a>
    <a href="#about">About Us</a>
    <a href="#services">Our Work</a>
    <a href="#scripture">Scripture</a>
    <a href="#leadership">Our Team</a>
    <a href="#contact">Contact</a>
  </nav>

  <a className="button header-button desktop-button" href="#contact">
    Get Involved
  </a>

  {/* Mobile Hamburger Button */}
  <button
    className="mobile-menu-button"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label={menuOpen ? "Close menu" : "Open menu"}
    aria-expanded={menuOpen}
  >
    {menuOpen ? <X size={26} /> : <Menu size={26} />}
  </button>

  {/* Mobile Navigation */}
 {menuOpen && (
  <nav className="mobile-nav">
    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
    <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
    <a href="#services" onClick={() => setMenuOpen(false)}>Our Work</a>
    <a href="#scripture" onClick={() => setMenuOpen(false)}>Scripture</a>
    <a href="#leadership" onClick={() => setMenuOpen(false)}>Our Team</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

    <a
      className="button mobile-get-involved"
      href="#contact"
      onClick={() => setMenuOpen(false)}
    >
      Get Involved
    </a>
  </nav>
)}
</header>


      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">FAITH · COMPASSION · SERVICE</p>
          <h1>Serving the Needy Is Serving Christ.</h1>

          <p className="hero-verse">
            “Inasmuch as ye have done it unto one of the least of
            these my brethren, ye have done it unto me.”
          </p>

          <p className="verse-reference">MATTHEW 25:40 · KJV</p>

          <p className="hero-description">
            ANNA FOUNDATIONS is dedicated to serving poor and needy
            people, orphans, widows, elderly people, and vulnerable
            communities with compassion, dignity, and Christian love.
          </p>

          <div className="hero-actions">
            <a className="button" href="#about">
              Discover Our Mission →
            </a>
            <a className="button button-outline" href="#services">
              Explore Our Work
            </a>
          </div>

          <p className="registration">
            A commitment to love, care, and service to humanity.
          </p>
        </div>

        <div className="hero-image">
          <div className="image-message">
            <span>♡</span>
            <div>
              <strong>Love in Action</strong>
              <p>Faith expressed through service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="principles">
        <article>
          <span className="principle-icon">♡</span>
          <div>
            <h3>Compassion</h3>
            <p>Care for people in need.</p>
          </div>
        </article>

        <article>
          <span className="principle-icon">✝</span>
          <div>
            <h3>Christian Values</h3>
            <p>Faith expressed through love.</p>
          </div>
        </article>

        <article>
          <span className="principle-icon">♧</span>
          <div>
            <h3>Human Dignity</h3>
            <p>Respect for every person.</p>
          </div>
        </article>

        <article>
          <span className="principle-icon">✧</span>
          <div>
            <h3>Hope for All</h3>
            <p>Serving without discrimination.</p>
          </div>
        </article>
      </section>

      <section className="section about" id="about">
        <div
          className="about-image"
          role="img"
          aria-label="Community service and people helping one another"
        >
          <div className="about-note">
            <span>“</span>
            <p>Love should be seen in the way we serve others.</p>
            <small>OUR GUIDING PRINCIPLE</small>
          </div>
        </div>

        <div className="about-content">
          <p className="eyebrow">WHO WE ARE</p>
          <h2>A Heart for People. A Mission of Love.</h2>

          <p>
            ANNA FOUNDATIONS is a charitable foundation inspired by
            Christian compassion and the call to serve people in need.
            We believe every person deserves dignity, kindness, and hope.
          </p>

          <p>
            Our purpose is to support vulnerable communities through
            practical assistance, caring relationships, and opportunities
            to build a better future.
          </p>

          <div className="mission-box">
            <h3>Our Mission</h3>
            <p>
              To serve poor and vulnerable communities with compassion,
              dignity, and practical support inspired by Christian love.
            </p>
          </div>

          <div className="mission-box">
            <h3>Our Vision</h3>
            <p>
              A community where everyone can experience care, hope,
              dignity, and opportunities for a better life.
            </p>
          </div>

          <a className="text-link" href="#scripture">
            Discover our guiding Scripture →
          </a>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <p className="eyebrow">COMPASSION IN ACTION</p>
          <h2>How We Hope to Make a Difference</h2>
          <p>
            Guided by faith and love, we aim to support those who need
            care, encouragement, and practical assistance.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon" aria-hidden="true">
                {service.icon}
              </span>

              <p className="service-verse">{service.verse}</p>
              <h3>{service.title}</h3>
              <p className="service-description">
                {service.description}
              </p>

              <a href="#contact" className="text-link">
                Enquire about support →
              </a>
            </article>
          ))}
        </div>

        <p className="program-note">
          These are the foundation's proposed service areas. Specific
          activities and programmes will be published as they are confirmed.
        </p>
      </section>

      <section className="featured-scripture" id="scripture">
        <div className="scripture-inner">
          <p className="eyebrow">OUR FOUNDATION IN THE WORD OF GOD</p>
          <span className="open-quote" aria-hidden="true">
            “
          </span>

          <h2>
            “Pure religion and undefiled before God and the Father
            is this, To visit the fatherless and widows in their affliction…”
          </h2>

          <p className="verse-reference">JAMES 1:27 · KJV</p>

          <p>
            Caring for orphans, widows, and vulnerable people is an
            important expression of genuine Christian faith.
          </p>

          <a className="button button-light" href="#verses">
            More Bible Verses
          </a>
        </div>
      </section>

      <section className="section verses-section" id="verses">
        <div className="section-heading">
          <p className="eyebrow">SCRIPTURE THAT INSPIRES US</p>
          <h2>Faith That Becomes Action</h2>
          <p>
            Biblical principles that guide our commitment to helping others.
          </p>
        </div>

        <div className="verse-grid">
          {scriptures.map((item) => (
            <article className="verse-card" key={item.reference}>
              <span className="verse-card-icon">✦</span>
              <blockquote>“{item.verse}”</blockquote>
              <p>{item.reference} · KJV</p>
            </article>
          ))}
        </div>
      </section>

      {/* Leadership section: each person gets their own photo */}
      <section className="section leadership" id="leadership">
        <div className="section-heading">
          <p className="eyebrow">THE PEOPLE BEHIND OUR MISSION</p>
          <h2>Meet Our Leadership</h2>
          <p>
            Introducing the people entrusted with guiding and managing
            ANNA FOUNDATIONS.
          </p>
        </div>

        <div className="leader-grid">
          {leaders.map((leader) => (
            <article className="leader-card" key={leader.role}>
              <img
                src={leader.image}
                alt={`Photo of ${leader.name}`}
                className="leader-photo"
              />

              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="callout" id="contact">
        <div>
          <p className="eyebrow">LOVE YOUR NEIGHBOUR</p>
          <h2>Be a Part of Our Mission.</h2>
          <p>
            Together, we can offer kindness, encouragement, and hope
            to people who need support.
          </p>
        </div>

        {/* Replace this with the foundation's official email */}
        <a className="button button-gold" href="#contact-details">
          Contact the Foundation →
        </a>
      </section>
<footer className="footer" id="contact-details">
  <div className="footer-main">

    {/* Column 1: Foundation details */}
    <div className="footer-about">
      <a className="footer-brand" href="#home">
        <span className="brand-anna">ANNA</span>{" "}
        <span className="brand-foundations">FOUNDATIONS</span>
      </a>

      <p>Regd. No. 170/2026</p>

      <address className="footer-address">
        DOOR NO: 5-6-170/e/2/2
        <br />
        PARSIBANDHAM
        <br />
        KHAMMAM URBAN
        <br />
        KHAMMAM
        <br />
        TELANGANA - INDIA
        <br />
        PIN: 507001
      </address>

      <p>Serving the Needy Is Serving Christ.</p>
      <p className="footer-verse">Matthew 25:40</p>
    </div>

    {/* Column 2: Explore */}
    <div className="footer-links">
      <h3>Explore</h3>
      <a href="#about">About Us</a>
      <a href="#services">Our Work</a>
      <a href="#scripture">Our Scripture</a>
      <a href="#leadership">Our Leadership</a>
    </div>

    {/* Column 3: Values */}
    <div className="footer-values">
      <h3>Our Values</h3>
      <p>Faith</p>
      <p>Compassion</p>
      <p>Service</p>
      <p>Human Dignity</p>
    </div>

    {/* Column 4: Contact and Social Media */}
    <div className="footer-contact-column">
      <h3>Contact</h3>
      <p>DR. GARLAPATI NARAYANA</p>

      <p className="footer-contact">
        <Phone size={16} />
        <a href="tel:+919505743404">+91 9505743404</a>
      </p>

      <p className="footer-contact">
        <Phone size={16} />
        <a href="tel:+917997678368">+91 7997678368</a>
      </p>

      <p className="footer-contact">
        <Mail size={16} />
        <a href="mailto:info@annafoundations.org">
          info@annafoundations.org
        </a>
      </p>

      <div className="footer-social">
        <h3>Follow Us</h3>

        <div className="social-links">
          <a
            href="https://www.instagram.com/`"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" className="instagram-icon">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" className="youtube-icon">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 ANNA FOUNDATIONS</p>
    <p>By love serve one another. — Galatians 5:13</p>
  </div>
</footer>
    </main>
  );
}
