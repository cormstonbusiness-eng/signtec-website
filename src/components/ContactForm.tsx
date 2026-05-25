'use client'
import { useState, useRef } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const firstRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    const first = firstRef.current?.value.trim()
    const email = emailRef.current?.value.trim()

    if (!first) {
      firstRef.current?.focus()
      if (firstRef.current) firstRef.current.style.borderColor = 'var(--red)'
      setTimeout(() => { if (firstRef.current) firstRef.current.style.borderColor = '' }, 2000)
      return
    }
    if (!email) {
      emailRef.current?.focus()
      if (emailRef.current) emailRef.current.style.borderColor = 'var(--red)'
      setTimeout(() => { if (emailRef.current) emailRef.current.style.borderColor = '' }, 2000)
      return
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-success show">
        <div className="check">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" width="32" height="32">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3>Enquiry Sent</h3>
        <p>Thanks — we&apos;ve got your details and we&apos;ll be in touch shortly with your free quote.</p>
      </div>
    )
  }

  return (
    <>
      <h3>Get a Free Quote</h3>
      <p className="form-sub">Fill in a few details and we&apos;ll be in touch.</p>
      <div className="form-row">
        <div className="field">
          <label>First Name</label>
          <input ref={firstRef} type="text" placeholder="Jane" />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input type="text" placeholder="Smith" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label>Email</label>
          <input ref={emailRef} type="email" placeholder="jane@business.co.uk" />
        </div>
        <div className="field">
          <label>Phone Number</label>
          <input type="tel" placeholder="07000 000000" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label>Street Address</label>
          <input type="text" placeholder="123 High Street" />
        </div>
        <div className="field">
          <label>Postal Code</label>
          <input type="text" placeholder="CV1 1AA" />
        </div>
      </div>
      <div className="field form-full">
        <label>Service Information</label>
        <textarea placeholder="Tell us about your project — vehicle, shopfront, windows, fleet..." />
      </div>
      <button className="btn btn-red" onClick={handleSubmit}>
        <span>
          Send My Enquiry
          <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="16" height="16">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </span>
      </button>
      <p className="form-note">We aim to respond to all enquiries within one working day.</p>
    </>
  )
}
