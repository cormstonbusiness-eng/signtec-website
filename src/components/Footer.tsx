'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 2500)
    }
  }

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">
              <Image
                src="/logo-footer.svg"
                alt="Signtec — Digital Print & Graphic Solutions"
                width={180}
                height={58}
              />
            </div>
            <p className="foot-about">
              Your experts in high quality printing services. Professional-grade large format printing
              and custom graphics across Coventry and the West Midlands.
            </p>
          </div>

          <div className="foot-col">
            <h5>Explore</h5>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/work">Our Work</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="foot-col">
            <h5>Support</h5>
            <Link href="/contact">Get a Quote</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/faq">FAQs</Link>
          </div>

          <div className="foot-col foot-contact">
            <h5>Get In Touch</h5>
            <p><strong>0800 849 7484</strong></p>
            <p><a href="mailto:info@signtec.co.uk">info@signtec.co.uk</a></p>
            <p style={{ marginBottom: '18px' }}>
              Unit 28, Walmley Road, Sutton Coldfield, Birmingham, B76 1QN
            </p>
            <h5 style={{ marginBottom: '10px' }}>Newsletter</h5>
            <p style={{ marginBottom: '6px' }}>Stay up to date and get 10% off your next print.</p>
            <div className="news-form">
              <input
                type="email"
                placeholder="your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
              />
              <button onClick={handleSubscribe}>{subscribed ? 'Done ✓' : 'Subscribe'}</button>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <div>© {new Date().getFullYear()} Signtec — Digital Print &amp; Graphic Solutions. All rights reserved.</div>
          <div className="socials">
            <a href="https://facebook.com/signtec" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://instagram.com/signtec" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="https://wa.me/08008497484" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.9.9-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5s-.6-1.4-.8-2-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5 5 0 0 0 2.3.6 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
