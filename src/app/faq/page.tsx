import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ — Signtec | Sign Writing & Graphics Questions',
  description: 'Frequently asked questions about Signtec sign writing, vehicle graphics, and large format printing services in Coventry.',
}

export default function FAQPage() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-bg" />
        <div className="hero-stripes" />
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Home</Link> / <span>FAQ</span>
          </div>
          <h1>Frequently Asked <span className="red">Questions</span></h1>
        </div>
      </div>

      <div className="sec wrap">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>Frequently Asked Questions</h2>

          <h3>How do I get a quote?</h3>
          <p>Contact us using the contact form, call us on 0800 849 7484, or email us. We'll provide a free, no-obligation quote within 24-48 hours.</p>

          <h3>How long does a typical project take?</h3>
          <p>Timelines vary depending on the project scope. Simple vehicle wraps may take 1-2 weeks, while larger projects may take longer. We'll provide an estimated timeline with your quote.</p>

          <h3>Do you offer design services?</h3>
          <p>Yes! We can work with your existing designs or create custom designs from scratch. Our team can help bring your vision to life.</p>

          <h3>What areas do you serve?</h3>
          <p>We're based in Coventry and serve the West Midlands region, including Birmingham, Warwickshire, and surrounding areas.</p>

          <h3>Can you work with my existing designs?</h3>
          <p>Absolutely! We can work with designs you provide. We recommend working with files in PDF, AI, or PSD format for best results.</p>

          <h3>What material options are available?</h3>
          <p>We use high-quality materials suitable for different applications. Options include vinyl wraps, digital prints, painted signage, and more. We'll recommend the best solution for your project.</p>

          <h3>What's the warranty on your work?</h3>
          <p>We stand behind the quality of our work. Specific warranties will be discussed when you receive your quote.</p>

          <h3>Do you offer installation?</h3>
          <p>Yes, professional installation is included with most of our services. We ensure everything is installed properly and looks perfect.</p>

          <h3>Can you do rush jobs?</h3>
          <p>We may be able to accommodate rush requests depending on our current schedule. Contact us to discuss your timeline.</p>

          <h3>How do I maintain my new signage?</h3>
          <p>Care instructions depend on the materials used. We'll provide detailed maintenance guidelines when your project is complete.</p>

          <h3>What if I'm not happy with the work?</h3>
          <p>We're committed to your satisfaction. If there are any issues with the final result, contact us immediately to discuss solutions.</p>

          <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f4f1ea', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0 }}>Still have questions?</h3>
            <p>Contact us directly:</p>
            <p>
              <strong>Signtec</strong><br />
              Phone: <a href="tel:08008497484">0800 849 7484</a><br />
              Email: <a href="mailto:info@signtec.co.uk">info@signtec.co.uk</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
