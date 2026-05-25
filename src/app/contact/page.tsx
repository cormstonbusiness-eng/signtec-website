import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/RevealOnScroll'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Signtec | Free Quote Coventry',
}

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="hero-bg" />
        <div className="hero-stripes" />
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Home</Link> / <span>Contact</span>
          </div>
          <h1>Contact <span className="red">Us</span></h1>
          <p>Tell us about your project and we&apos;ll get a free, no-obligation quote back to you as fast as we can.</p>
        </div>
      </div>

      {/* CONTACT GRID */}
      <div className="sec wrap">
        <div className="contact-grid">

          {/* Info */}
          <RevealOnScroll className="contact-info">
            <h2>Let&apos;s make you <span className="red">noticed</span></h2>
            <p>
              Whether it&apos;s a single van, a whole shopfront or a corporate fleet rollout — drop
              us a line and we&apos;ll take it from there.
            </p>

            <div className="info-block">
              <div className="info-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h4>Call Us — Freephone</h4>
                <p><a href="tel:08008497484">0800 849 7484</a></p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
              </div>
              <div>
                <h4>Email Us</h4>
                <p><a href="mailto:info@ellardsigns.com">info@ellardsigns.com</a></p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4>Workshop</h4>
                <p>Unit D3, Park Lane, Castle Vale Enterprise Park,<br />Coventry, B35 6LJ</p>
              </div>
            </div>

            <div className="info-block" style={{ borderBottom: 0 }}>
              <div className="info-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h4>Opening Hours</h4>
                <p>Mon–Fri: 8:00am – 5:30pm<br />Saturday: By appointment</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Form Card */}
          <RevealOnScroll delay="2" className="form-card">
            <ContactForm />
          </RevealOnScroll>

        </div>
      </div>

      {/* MAP BAND */}
      <div className="map-band">
        <div className="ph ph-1" style={{ position: 'absolute', inset: 0 }}>
          <div className="ph-label">Castle Vale Enterprise Park · Coventry · B35 6LJ</div>
        </div>
        <div className="map-pin">
          <svg viewBox="0 0 24 24" fill="var(--red)" stroke="#fff" strokeWidth="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" fill="#fff" />
          </svg>
        </div>
      </div>
    </>
  )
}
