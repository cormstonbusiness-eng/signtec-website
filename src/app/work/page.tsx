import Link from 'next/link'
import Image from 'next/image'
import RevealOnScroll from '@/components/RevealOnScroll'

export const metadata = {
  title: 'Our Work — Signtec | Project Gallery Coventry',
}

export default function WorkPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="hero-bg" />
        <div className="hero-stripes" />
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Home</Link> / <span>Our Work</span>
          </div>
          <h1>Project <span className="red">Gallery</span></h1>
          <p>
            Take a look at our past projects transformed with creativity and care. Every job is
            finished to perfection, ready for proud business owners.
          </p>
        </div>
      </div>

      {/* GALLERY */}
      <div className="sec wrap">
        <div className="gallery">
          <RevealOnScroll delay="1" className="g-item g-w6 g-tall">
            <div className="g-image">
              <Image src="/portfolio/9.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              <div className="ph-label">Project 1</div>
            </div>
            <div className="g-cap"><span>Shop Signs</span><h4>Project 1</h4></div>
          </RevealOnScroll>

          <RevealOnScroll delay="2" className="g-item g-w6">
            <div className="g-image">
              <Image src="/portfolio/10.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              <div className="ph-label">Project 2</div>
            </div>
            <div className="g-cap"><span>Fascia Signage</span><h4>Project 2</h4></div>
          </RevealOnScroll>

          <RevealOnScroll delay="3" className="g-item g-w6">
            <div className="g-image">
              <Image src="/portfolio/11.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              <div className="ph-label">Project 3</div>
            </div>
            <div className="g-cap"><span>Vehicle Graphics</span><h4>Project 3</h4></div>
          </RevealOnScroll>

          <RevealOnScroll delay="1" className="g-item g-w4">
            <div className="g-image">
              <Image src="/portfolio/12.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              <div className="ph-label">Project 4</div>
            </div>
            <div className="g-cap"><span>Large Format</span><h4>Project 4</h4></div>
          </RevealOnScroll>

          <RevealOnScroll delay="2" className="g-item g-w4">
            <div className="g-image">
              <Image src="/portfolio/13.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              <div className="ph-label">Project 5</div>
            </div>
            <div className="g-cap"><span>Event Graphics</span><h4>Project 5</h4></div>
          </RevealOnScroll>

          <RevealOnScroll delay="3" className="g-item g-w4">
            <div className="g-image">
              <Image src="/portfolio/14.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              <div className="ph-label">Project 6</div>
            </div>
            <div className="g-cap"><span>Corporate Signage</span><h4>Project 6</h4></div>
          </RevealOnScroll>

          <RevealOnScroll delay="1" className="g-item g-w8">
            <div className="g-image">
              <Image src="/portfolio/15.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              <div className="ph-label">Project 7</div>
            </div>
            <div className="g-cap"><span>Fleet Branding</span><h4>Project 7</h4></div>
          </RevealOnScroll>

          <RevealOnScroll delay="2" className="g-item g-w4">
            <div className="g-image">
              <Image src="/portfolio/16.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              <div className="ph-label">Project 8</div>
            </div>
            <div className="g-cap"><span>Window Tinting</span><h4>Project 8</h4></div>
          </RevealOnScroll>
        </div>
      </div>

      {/* TRUST BAND */}
      <div className="intro">
        <div className="wrap intro-grid">
          <RevealOnScroll>
            <h2>Built to be <span className="red">seen</span></h2>
            <p>
              Every project in this gallery started as a conversation and a brief. Retailers,
              tradespeople, offices and corporate fleets across Coventry and the West Midlands trust
              us to turn their brand into something physical and unmissable.
            </p>
            <p>Yours could be next.</p>
            <div style={{ marginTop: '30px' }}>
              <Link href="/contact" className="btn btn-red">
                <span>
                  Start Your Project
                  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="16" height="16">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay="2">
            <div className="stats">
              <div className="stat">
                <div className="stat-num">Shop<span className="red">.</span></div>
                <div className="stat-label">Fronts &amp; fascias</div>
              </div>
              <div className="stat">
                <div className="stat-num">Fleet<span className="red">.</span></div>
                <div className="stat-label">Vans &amp; cars wrapped</div>
              </div>
              <div className="stat">
                <div className="stat-num">Glass<span className="red">.</span></div>
                <div className="stat-label">Graphics &amp; tinting</div>
              </div>
              <div className="stat">
                <div className="stat-num">Print<span className="red">.</span></div>
                <div className="stat-label">Large format 720dpi</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </>
  )
}
