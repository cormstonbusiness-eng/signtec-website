import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Services | Sign Writing & Graphics Coventry - Signtec',
  description: 'Professional sign writing services in Coventry: vehicle wraps, shop signs, fascias, window graphics, tinting & large format printing.',
  openGraph: {
    title: 'Services | Sign Writing & Graphics Coventry - Signtec',
    description: 'Professional sign writing services in Coventry: vehicle wraps, shop signs, fascias, window graphics, tinting & large format printing.',
    url: 'https://signtec.co.uk/services',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Services | Sign Writing & Graphics Coventry - Signtec',
    description: 'Professional sign writing services in Coventry: vehicle wraps, shop signs, fascias, window graphics, tinting & large format printing.',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="hero-bg" />
        <div className="hero-stripes" />
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Home</Link> / <span>Services</span>
          </div>
          <h1>Sign Writing & <span className="red">Graphics Services</span></h1>
          <p>From initial design and scaling to professional installation, we handle the entire journey of your visual identity.</p>
        </div>
      </div>

      {/* SERVICE DETAILS */}
      <div className="wrap">

        {/* Vehicle Graphics */}
        <RevealOnScroll className="svc-detail">
          <div className="svc-detail-visual">
            <div className="ph ph-3"><div className="ph-label">Vehicle Wrap<br />&amp; Fleet Signage</div></div>
          </div>
          <div className="svc-detail-text">
            <h2>Vehicle Graphics</h2>
            <p>
              Your vehicles are mobile billboards. We provide signage solutions for cars, vans and
              entire corporate fleets — plus full-colour vehicle wraps that give your brand a strong,
              consistent marketing presence wherever you drive.
            </p>
            <p>
              Precision vinyl lettering, numbering and fleet-wide branding, all colour-matched and
              built to last on the road.
            </p>
            <div className="tag-row">
              <span className="tag">Car Sign Writing</span>
              <span className="tag">Van Sign Writing</span>
              <span className="tag">Fleet &amp; Corporate</span>
              <span className="tag">Vehicle Wraps</span>
              <span className="tag">Vinyl Lettering</span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Signage Services */}
        <RevealOnScroll className="svc-detail">
          <div className="svc-detail-visual">
            <div className="ph ph-1"><div className="ph-label">Shopfront<br />&amp; Building Signage</div></div>
          </div>
          <div className="svc-detail-text">
            <h2>Signage Services</h2>
            <p>
              We offer full design, an extensive choice of materials and free quotations on every shop
              sign project. From illuminated fascias to corporate building signs, your storefront
              becomes an invitation.
            </p>
            <p>
              Reception signs, exhibition graphics and health &amp; safety signage — specialist
              signage and branding for retail and corporate clients alike.
            </p>
            <div className="tag-row">
              <span className="tag">Shop Signs</span>
              <span className="tag">Corporate Building Signs</span>
              <span className="tag">Reception Signs</span>
              <span className="tag">Exhibition Signs</span>
              <span className="tag">Health &amp; Safety Signs</span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Other Printing */}
        <RevealOnScroll className="svc-detail">
          <div className="svc-detail-visual">
            <div className="ph ph-5"><div className="ph-label">Window Graphics<br />&amp; Tinting</div></div>
          </div>
          <div className="svc-detail-text">
            <h2>Other Printing</h2>
            <p>
              Retail and commercial vinyl window graphics, professional office window tinting, vinyl
              cutting, neon &amp; flex signs and electronic outdoor signage — all finished with
              full-colour printing at a crisp 720dpi.
            </p>
            <p>Need a logo or custom lettering designed from scratch? That&apos;s covered too.</p>
            <div className="tag-row">
              <span className="tag">Window Graphics</span>
              <span className="tag">Office Window Tinting</span>
              <span className="tag">Vinyl Cutting</span>
              <span className="tag">Neon &amp; Flex Signs</span>
              <span className="tag">Logo &amp; Lettering</span>
              <span className="tag">720dpi Printing</span>
            </div>
          </div>
        </RevealOnScroll>

      </div>

      {/* CTA */}
      <div className="cta-band">
        <div className="wrap cta-inner">
          <RevealOnScroll>
            <h2>Not sure where to <span className="out">start?</span></h2>
            <p>Tell us what you&apos;re trying to achieve and we&apos;ll recommend the right approach — with a free quote attached.</p>
            <div className="cta-btns">
              <Link href="/contact" className="btn btn-dark"><span>Request a Quote</span></Link>
              <Link href="/work" className="btn btn-ghost" style={{ boxShadow: 'inset 0 0 0 2px var(--ink)', color: 'var(--ink)' }}>
                <span>See Our Work</span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </>
  )
}
