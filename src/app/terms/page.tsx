import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Signtec',
  description: 'Terms of service for Signtec sign writing and graphics services in Coventry.',
}

export default function TermsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-bg" />
        <div className="hero-stripes" />
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Home</Link> / <span>Terms of Service</span>
          </div>
          <h1>Terms of <span className="red">Service</span></h1>
        </div>
      </div>

      <div className="sec wrap">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>Terms of Service</h2>
          <p>These terms govern your use of Signtec's website and services.</p>

          <h3>Quotes and Proposals</h3>
          <p>All quotes provided are valid for 30 days from the date of issue. Quotes are subject to availability and may be adjusted if project scope changes.</p>

          <h3>Payment Terms</h3>
          <p>Payment terms will be agreed upon in writing before project commencement. A deposit may be required to secure your project.</p>

          <h3>Project Changes</h3>
          <p>Any changes to the agreed scope of work may affect the timeline and cost. Changes will be documented and agreed upon in writing.</p>

          <h3>Liability</h3>
          <p>While we strive for excellence in all our work, Signtec's liability is limited to the amount paid for the services in question.</p>

          <h3>Cancellations</h3>
          <p>Cancellation policies will be discussed and agreed upon when you receive your quote. Early cancellation may result in charges for work already completed.</p>

          <h3>Intellectual Property</h3>
          <p>Upon full payment, you own the final artwork and designs created for your project. Signtec retains the right to use completed projects in our portfolio for promotional purposes.</p>

          <h3>Contact</h3>
          <p>For questions about our terms, please contact us:</p>
          <p>
            <strong>Signtec</strong><br />
            Phone: <a href="tel:08008497484">0800 849 7484</a><br />
            Email: <a href="mailto:info@signtec.co.uk">info@signtec.co.uk</a>
          </p>

          <p style={{ marginTop: '40px', fontSize: '0.9rem', color: '#666' }}>
            Last updated: January 2024
          </p>
        </div>
      </div>
    </>
  )
}
