'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import CheckoutForm from '@/components/CheckoutForm'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart()
  const [orderCompleted, setOrderCompleted] = useState(false)
  const [orderNumber, setOrderNumber] = useState<string>('')

  const handleOrderSuccess = () => {
    const orderNum = `ORD-${Date.now()}`
    setOrderNumber(orderNum)
    setOrderCompleted(true)
    clearCart()
  }

  if (orderCompleted) {
    return (
      <>
        <div className="page-hero">
          <div className="hero-bg" />
          <div className="hero-stripes" />
          <div className="wrap">
            <div className="crumb">
              <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / <span>Order Confirmed</span>
            </div>
            <h1>Order <span className="red">Confirmed</span></h1>
          </div>
        </div>

        <div className="sec wrap" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="order-success">
            <div className="success-icon">✓</div>
            <h2>Thank You for Your Order!</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--steel)' }}>
              Your order has been successfully placed.
            </p>
            <div className="order-details">
              <div className="order-info-row">
                <span className="label">Order Number:</span>
                <span className="value">{orderNumber}</span>
              </div>
              <div className="order-info-row">
                <span className="label">Order Total:</span>
                <span className="value">£{total.toFixed(2)}</span>
              </div>
            </div>

            <div style={{ marginTop: '40px', padding: '20px', background: 'var(--paper-2)', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '10px' }}>What's Next?</h3>
              <p style={{ marginBottom: '12px' }}>
                You'll receive a confirmation email shortly with your order details and tracking information.
              </p>
              <p>
                If you have any questions about your order, please contact us at{' '}
                <a href="tel:+447970633496" style={{ color: 'var(--red)', fontWeight: 600 }}>+44 7970 633496</a> or{' '}
                <a href="mailto:info@signtec.co.uk" style={{ color: 'var(--red)', fontWeight: 600 }}>
                  info@signtec.co.uk
                </a>
              </p>
            </div>

            <div style={{ marginTop: '40px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link href="/" className="btn btn-dark">
                Back to Home
              </Link>
              <Link href="/shop" className="btn btn-ghost" style={{ boxShadow: 'inset 0 0 0 2px var(--ink)', color: 'var(--ink)' }}>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (cart.length === 0) {
    return (
      <>
        <div className="page-hero">
          <div className="hero-bg" />
          <div className="hero-stripes" />
          <div className="wrap">
            <div className="crumb">
              <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / <span>Checkout</span>
            </div>
            <h1>Your cart is <span className="red">empty</span></h1>
          </div>
        </div>

        <div className="sec wrap" style={{ textAlign: 'center', padding: '60px 0' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: 'var(--ink-soft)' }}>
            You don't have any items in your cart yet.
          </p>
          <Link href="/shop" className="btn btn-red">
            Continue Shopping
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="page-hero">
        <div className="hero-bg" />
        <div className="hero-stripes" />
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / <span>Checkout</span>
          </div>
          <h1>Secure <span className="red">Checkout</span></h1>
        </div>
      </div>

      <div className="sec wrap">
        <div className="checkout-container">
          {/* Order Summary */}
          <RevealOnScroll className="checkout-summary">
            <h2>Order Summary</h2>
            <div className="summary-items">
              {cart.map((item) => (
                <div key={item.id} className="summary-item">
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <div className="item-price">
                    £{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="summary-divider" />

            <div className="summary-total">
              <span>Order Total:</span>
              <span className="total-price">£{total.toFixed(2)}</span>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--ink)', marginTop: '16px' }}>
              All prices include VAT. Shipping costs will be calculated based on your location.
            </p>
          </RevealOnScroll>

          {/* Checkout Form */}
          <RevealOnScroll delay="2" className="checkout-form-container">
            <CheckoutForm total={total} onSuccess={handleOrderSuccess} />
          </RevealOnScroll>
        </div>
      </div>
    </>
  )
}
