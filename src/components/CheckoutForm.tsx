'use client'

import { useState } from 'react'

interface CheckoutFormProps {
  total: number
  onSuccess: () => void
}

export default function CheckoutForm({ total, onSuccess }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.postcode.trim()) newErrors.postcode = 'Postcode is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // In a real implementation, this would:
      // 1. Create a Stripe payment intent
      // 2. Confirm the payment
      // 3. Create an order in the database
      // For now, we'll simulate a successful payment

      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate successful payment
      console.log('Order submitted:', {
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          postcode: formData.postcode,
        },
        total,
        timestamp: new Date().toISOString(),
      })

      onSuccess()
    } catch (error) {
      setSubmitError('An error occurred while processing your payment. Please try again.')
      console.error('Payment error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Shipping Information</h2>

      {submitError && (
        <div style={{ background: '#fee', color: '#c00', padding: '12px', borderRadius: '6px', marginBottom: '20px' }}>
          {submitError}
        </div>
      )}

      <div className="form-row">
        <div className="field">
          <label htmlFor="firstName">
            First Name <span style={{ color: 'var(--red)' }}>*</span>
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
          />
          {errors.firstName && <div className="field-error">{errors.firstName}</div>}
        </div>

        <div className="field">
          <label htmlFor="lastName">
            Last Name <span style={{ color: 'var(--red)' }}>*</span>
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Smith"
          />
          {errors.lastName && <div className="field-error">{errors.lastName}</div>}
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="email">
            Email <span style={{ color: 'var(--red)' }}>*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
          {errors.email && <div className="field-error">{errors.email}</div>}
        </div>

        <div className="field">
          <label htmlFor="phone">
            Phone <span style={{ color: 'var(--red)' }}>*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+44 7970 633496"
          />
          {errors.phone && <div className="field-error">{errors.phone}</div>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="address">
          Address <span style={{ color: 'var(--red)' }}>*</span>
        </label>
        <input
          id="address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="123 High Street"
        />
        {errors.address && <div className="field-error">{errors.address}</div>}
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="city">
            City <span style={{ color: 'var(--red)' }}>*</span>
          </label>
          <input
            id="city"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Coventry"
          />
          {errors.city && <div className="field-error">{errors.city}</div>}
        </div>

        <div className="field">
          <label htmlFor="postcode">
            Postcode <span style={{ color: 'var(--red)' }}>*</span>
          </label>
          <input
            id="postcode"
            type="text"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
            placeholder="CV1 1AA"
          />
          {errors.postcode && <div className="field-error">{errors.postcode}</div>}
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', background: 'var(--paper-2)', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '12px' }}>Payment</h3>
        <p style={{ marginBottom: '16px', color: 'var(--steel)' }}>
          This is a demo checkout. In production, this would integrate with Stripe for real payments.
        </p>
        <div style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '4px' }}>
          Order Total: £{total.toFixed(2)}
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-red"
        style={{ width: '100%', marginTop: '24px' }}
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : `Pay £${total.toFixed(2)}`}
      </button>

      <p style={{ fontSize: '0.85rem', color: 'var(--steel)', marginTop: '16px', textAlign: 'center' }}>
        Your payment information is secure and encrypted.
      </p>
    </form>
  )
}
