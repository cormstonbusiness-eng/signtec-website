import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Signtec',
  description: 'Signtec privacy policy. Learn how we collect, use, and protect your personal data.',
}

export default function PrivacyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-bg" />
        <div className="hero-stripes" />
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Home</Link> / <span>Privacy Policy</span>
          </div>
          <h1>Privacy <span className="red">Policy</span></h1>
        </div>
      </div>

      <div className="sec wrap">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>Privacy Policy</h2>
          <p>This privacy policy explains how Signtec collects, uses, and protects your personal information.</p>

          <h3>Information Collection</h3>
          <p>We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or contact us by phone or email.</p>

          <h3>How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries</li>
            <li>Provide quotes and service information</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h3>Data Protection</h3>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>

          <h3>Third Parties</h3>
          <p>We do not sell, rent, or share your personal information with third parties except as required by law or necessary to provide our services.</p>

          <h3>Contact Us</h3>
          <p>If you have questions about our privacy practices, please contact us at:</p>
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
