import Link from 'next/link'
import Image from 'next/image'
import Marquee from '@/components/Marquee'
import RevealOnScroll from '@/components/RevealOnScroll'
import MovingGallery from '@/components/MovingGallery'
import Reviews from '@/components/Reviews'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="hero-bg" />
        <div className="hero-stripes" />
        <div className="wrap hero-content">
          <div className="hero-text">
            <span className="eyebrow">West Midlands</span>
            <h1>
              <span className="line"><span>Professional</span></span>
              <span className="line"><span className="red">Sign Writing</span></span>
              <span className="line"><span>& Graphics</span></span>
            </h1>
            <p className="hero-sub">
              Professional-grade large format printing and custom graphics designed to make you stand
              out from the competition — vehicles, shopfronts, windows and full corporate branding.
            </p>
            <div className="hero-cta">
              <Link href="/work" className="btn btn-red">
                <span>
                  View Our Work
                  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="16" height="16">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                <span>Free Quote</span>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-glow" />
            <Image
              src="/Bus.webp"
              alt="Professional vehicle signage example - Fleet branding bus wrap"
              fill
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <Marquee />

      {/* INTRO */}
      <div className="intro">
        <div className="wrap intro-grid">
          <RevealOnScroll>
            <h2>Your experts in <span className="red">high quality</span> printing services</h2>
            <p>
              From the first sketch to the final fitted panel, we handle the entire journey of your
              visual identity. Cars, vans, entire corporate fleets, shopfronts and office interiors
              — all finished to perfection.
            </p>
            <p>
              Every job leaves our workshop ready for proud business owners to show off. That&apos;s
              the standard, every single time.
            </p>
            <p>
              We pride ourselves on more than just the finished product — our customers stay with us
              because of the experience. From your first call to final installation, expect honest
              advice, clear communication and a team that genuinely cares about getting it right.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay="2">
            <div className="stats">
              <div className="stat">
                <div className="stat-num">25<span className="red">+</span></div>
                <div className="stat-label">Years on the road</div>
              </div>
              <div className="stat">
                <div className="stat-num">720<span className="red">dpi</span></div>
                <div className="stat-label">Full colour print</div>
              </div>
              <div className="stat">
                <div className="stat-num">1000<span className="red">+</span></div>
                <div className="stat-label">Projects delivered</div>
              </div>
              <div className="stat">
                <div className="stat-num">100<span className="red">%</span></div>
                <div className="stat-label">Free quotations</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* SERVICES */}
      <div className="sec wrap">
        <div className="sec-head">
          <RevealOnScroll>
            <h2 className="sec-title">Our <span className="out">Services</span></h2>
            <p className="sec-desc">Three core divisions, one workshop. Pick a starting point — we&apos;ll take it from there.</p>
          </RevealOnScroll>
        </div>

        <div className="svc-grid">
          <RevealOnScroll delay="1" className="svc-card">
            <div className="svc-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                <circle cx="6.5" cy="16.5" r="2.5" />
                <circle cx="16.5" cy="16.5" r="2.5" />
              </svg>
            </div>
            <h3>Vehicle Graphics</h3>
            <p>Signage solutions for cars, vans and entire corporate fleets — plus full-colour vehicle wraps for a strong marketing presence.</p>
            <ul className="svc-list">
              <li>Car &amp; Van Sign Writing</li>
              <li>Fleet &amp; Corporate Writing</li>
              <li>Full Vehicle Wraps</li>
              <li>Vinyl Lettering &amp; Numbering</li>
            </ul>
            <span className="svc-big">01</span>
          </RevealOnScroll>

          <RevealOnScroll delay="2" className="svc-card">
            <div className="svc-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l1-5h16l1 5M4 9v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M4 9h16M9 21v-6h6v6" />
              </svg>
            </div>
            <h3>Signage Services</h3>
            <p>Full design, extensive material choice and free quotations on shop signs, corporate building signs and retail branding.</p>
            <ul className="svc-list">
              <li>Shop Signs &amp; Fascias</li>
              <li>Corporate Building Signs</li>
              <li>Reception &amp; Exhibition Signs</li>
              <li>Health &amp; Safety Signs</li>
            </ul>
            <span className="svc-big">02</span>
          </RevealOnScroll>

          <RevealOnScroll delay="3" className="svc-card">
            <div className="svc-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <h3>Other Printing</h3>
            <p>Retail and commercial window graphics, vinyl cutting, neon &amp; flex signs and full-colour printing at a crisp 720dpi.</p>
            <ul className="svc-list">
              <li>Window Graphics &amp; Tinting</li>
              <li>Vinyl Cutting Signs</li>
              <li>Neon, Flex &amp; Electronic Signs</li>
              <li>Logo &amp; Lettering Design</li>
            </ul>
            <span className="svc-big">03</span>
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <div style={{ textAlign: 'center', marginTop: '54px' }}>
            <Link href="/services" className="btn btn-dark">
              <span>
                Explore All Services
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="16" height="16">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </Link>
          </div>
        </RevealOnScroll>
      </div>

      {/* WORK PREVIEW */}
      <div className="sec work" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <RevealOnScroll>
              <h2 className="sec-title">Project <span className="out">Gallery</span></h2>
              <p className="sec-desc">A look at past projects transformed with creativity and care. Every job finished to perfection.</p>
            </RevealOnScroll>
          </div>
        </div>

        <MovingGallery />

        <div className="wrap">
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginTop: '54px', paddingBottom: '120px' }}>
              <Link href="/work" className="btn btn-red">
                <span>
                  See The Full Gallery
                  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="16" height="16">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* PROCESS */}
      <div className="sec wrap">
        <div className="sec-head">
          <RevealOnScroll>
            <h2 className="sec-title">The <span className="out">Process</span></h2>
            <p className="sec-desc">
              From initial design and scaling to professional installation — we handle the entire
              journey of your visual identity.
            </p>
          </RevealOnScroll>
        </div>

        <div className="process-grid">
          <RevealOnScroll delay="1" className="step">
            <div className="step-num">01</div>
            <h3>Design</h3>
            <p>We turn your brief and brand into artwork built to be seen — bold, legible and on-message.</p>
          </RevealOnScroll>
          <RevealOnScroll delay="2" className="step">
            <div className="step-num">02</div>
            <h3>Scaling</h3>
            <p>Every panel is scaled and proofed precisely to the surface, vehicle or window it&apos;s destined for.</p>
          </RevealOnScroll>
          <RevealOnScroll delay="3" className="step">
            <div className="step-num">03</div>
            <h3>Production</h3>
            <p>Printed at 720dpi on premium materials, then cut, laminated and quality-checked in our workshop.</p>
          </RevealOnScroll>
          <RevealOnScroll delay="4" className="step">
            <div className="step-num">04</div>
            <h3>Install</h3>
            <p>Professional on-site installation, finished to perfection and ready for proud business owners.</p>
          </RevealOnScroll>
        </div>
      </div>

      {/* REVIEWS */}
      <Reviews />

      {/* CTA */}
      <div className="cta-band">
        <div className="wrap cta-inner">
          <RevealOnScroll>
            <h2>Ready to <span className="out">stand out?</span></h2>
            <p>Tell us about your project and we&apos;ll get a free, no-obligation quote back to you fast.</p>
            <div className="cta-btns">
              <Link href="/contact" className="btn btn-dark"><span>Get Started</span></Link>
              <a href="tel:08008497484" className="btn btn-ghost" style={{ boxShadow: 'inset 0 0 0 2px var(--ink)', color: 'var(--ink)' }}>
                <span>Call 0800 849 7484</span>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </>
  )
}
