import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RevealOnScroll from '@/components/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Project Gallery | Sign Writing Portfolio Coventry - Signtec',
  description: 'View Signtec\'s portfolio of completed sign writing projects in Coventry. Shop signs, fleet branding, vehicle wraps & corporate signage.',
  openGraph: {
    title: 'Project Gallery | Sign Writing Portfolio Coventry - Signtec',
    description: 'View Signtec\'s portfolio of completed sign writing projects in Coventry. Shop signs, fleet branding, vehicle wraps & corporate signage.',
    url: 'https://signtec.co.uk/work',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Project Gallery | Sign Writing Portfolio Coventry - Signtec',
    description: 'View Signtec\'s portfolio of completed sign writing projects in Coventry. Shop signs, fleet branding, vehicle wraps & corporate signage.',
  },
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
          <h1>Sign Writing <span className="red">Project Portfolio</span></h1>
          <p>
            Take a look at our past projects transformed with creativity and care. Every job is
            finished to perfection, ready for proud business owners.
          </p>
        </div>
      </div>

      {/* GALLERY */}
      <div className="sec wrap">
        <div className="gallery">
          <RevealOnScroll delay="1" className="g-item">
            <div className="g-image">
              <Image src="/portfolio/1.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay="2" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/2.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
            </RevealOnScroll>

          <div data-gallery-image data-index="2">
            <RevealOnScroll delay="3" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/3.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
            </RevealOnScroll>

          <div data-gallery-image data-index="3">
            <RevealOnScroll delay="1" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/4.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
            </RevealOnScroll>

          <div data-gallery-image data-index="4">
            <RevealOnScroll delay="2" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/5.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
            </RevealOnScroll>

          <div data-gallery-image data-index="5">
            <RevealOnScroll delay="3" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/6.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
            </RevealOnScroll>

          <div data-gallery-image data-index="6">
            <RevealOnScroll delay="1" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/7.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
            </RevealOnScroll>

          <div data-gallery-image data-index="7">
            <RevealOnScroll delay="2" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/8.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
            </RevealOnScroll>

          <div data-gallery-image data-index="8">
            <RevealOnScroll delay="3" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/9.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
            </RevealOnScroll>

          <div data-gallery-image data-index="9">
            <RevealOnScroll delay="1" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/10.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
            </RevealOnScroll>

          <div data-gallery-image data-index="10">
            <RevealOnScroll delay="2" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/11.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
            </RevealOnScroll>

          <div data-gallery-image data-index="11">
            <RevealOnScroll delay="3" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/12.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
            </RevealOnScroll>

          <div data-gallery-image data-index="12">
            <RevealOnScroll delay="1" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/13.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
            </RevealOnScroll>

          <div data-gallery-image data-index="13">
            <RevealOnScroll delay="2" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/14.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
            </RevealOnScroll>

          <div data-gallery-image data-index="14">
            <RevealOnScroll delay="3" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/15.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
            </RevealOnScroll>

          <div data-gallery-image data-index="15">
            <RevealOnScroll delay="1" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/16.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
            </RevealOnScroll>

          <div data-gallery-image data-index="16">
            <RevealOnScroll delay="2" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/17.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
            </RevealOnScroll>

          <div data-gallery-image data-index="17">
            <RevealOnScroll delay="3" className="g-item">
              <div className="g-image">
                <Image src="/portfolio/18.jpeg" alt="Project" fill style={{ objectFit: 'cover' }} />
              </div>
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
