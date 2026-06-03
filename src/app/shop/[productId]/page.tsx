'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'
import { CartItem } from '@/lib/types/product'
import RevealOnScroll from '@/components/RevealOnScroll'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ProductCard'

interface ProductDetailsPageProps {
  params: {
    productId: string
  }
}

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { productId } = params
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)
  const { addItem } = useCart()

  const product = products.find((p) => p.id === productId)

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return products
      .filter((p) => p.category === product.category && p.id !== productId)
      .slice(0, 3)
  }, [product, productId])

  if (!product) {
    return (
      <>
        <div className="page-hero">
          <div className="hero-bg" />
          <div className="hero-stripes" />
          <div className="wrap">
            <div className="crumb">
              <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / <span>Product Not Found</span>
            </div>
            <h1>Product <span className="red">Not Found</span></h1>
          </div>
        </div>

        <div className="sec wrap" style={{ textAlign: 'center', padding: '60px 0' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: 'var(--ink-soft)' }}>
            The product you're looking for doesn't exist.
          </p>
          <Link href="/shop" className="btn btn-red">
            Back to Shop
          </Link>
        </div>
      </>
    )
  }

  const handleAddToCart = () => {
    const cartItem: CartItem = { ...product, quantity }
    addItem(cartItem)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <>
      <div className="page-hero">
        <div className="hero-bg" />
        <div className="hero-stripes" />
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / <span>{product.name}</span>
          </div>
          <h1>{product.name}</h1>
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="sec wrap">
        <div className="product-details-container">
          {/* Product Image */}
          <RevealOnScroll className="product-detail-image">
            <div className="image-wrapper">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </RevealOnScroll>

          {/* Product Info */}
          <RevealOnScroll delay="2" className="product-detail-info">
            <div className="product-meta">
              <span className="product-sku">SKU: {product.sku}</span>
              <span className="product-category">{product.category}</span>
            </div>

            <h2 style={{ marginBottom: '12px' }}>{product.name}</h2>

            <div className="product-stock">
              {product.stock > 0 ? (
                <span style={{ color: 'var(--red)', fontWeight: 600 }}>
                  ✓ In Stock ({product.stock} available)
                </span>
              ) : (
                <span style={{ color: 'var(--steel)' }}>Out of Stock</span>
              )}
            </div>

            <div className="product-detail-price">
              £{product.price.toFixed(2)}
            </div>

            <p className="product-detail-description">{product.description}</p>

            {/* Quantity Selector */}
            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <div className="quantity-controls">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1 || product.stock === 0}
                >
                  −
                </button>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  disabled={product.stock === 0}
                />
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock || product.stock === 0}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              className="btn btn-red"
              style={{ width: '100%', marginTop: '20px' }}
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {addedToCart ? '✓ Added to Cart!' : `Add to Cart (£${(product.price * quantity).toFixed(2)})`}
            </button>

            {/* Additional Info */}
            <div className="product-additional-info">
              <div className="info-section">
                <h4>Delivery</h4>
                <p>UK delivery: 3-5 business days</p>
              </div>
              <div className="info-section">
                <h4>Returns</h4>
                <p>30-day money-back guarantee on all products</p>
              </div>
              <div className="info-section">
                <h4>Support</h4>
                <p>Contact us at +44 7970 633496 or info@signtec.co.uk</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <div className="sec wrap">
          <h2 style={{ marginBottom: '32px' }}>Related Products</h2>
          <div className="related-products-grid">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                onAddToCart={(p) => {
                  const item: CartItem = { ...p, quantity: 1 }
                  addItem(item)
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="cta-band">
        <div className="wrap cta-inner">
          <RevealOnScroll>
            <h2>Need Custom Printing?</h2>
            <p>Looking for bulk orders or custom products? Our team can help with wholesale pricing and bespoke solutions.</p>
            <div className="cta-btns">
              <Link href="/contact" className="btn btn-dark">
                <span>Request Custom Quote</span>
              </Link>
              <Link href="/shop" className="btn btn-ghost" style={{ boxShadow: 'inset 0 0 0 2px var(--ink)', color: 'var(--ink)' }}>
                <span>Back to Shop</span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </>
  )
}
