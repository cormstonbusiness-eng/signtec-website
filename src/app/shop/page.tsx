'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { products } from '@/lib/products'
import { Product, CartItem } from '@/lib/types/product'
import ProductGrid from '@/components/ProductGrid'
import CategoryFilter from '@/components/CategoryFilter'
import CartDrawer from '@/components/CartDrawer'
import RevealOnScroll from '@/components/RevealOnScroll'
import { useCart } from '@/context/CartContext'

function ShoppingCartButton({ onClick }: { onClick: () => void }) {
  const { itemCount } = useCart()

  return (
    <button
      onClick={onClick}
      className="cart-icon-btn"
      aria-label={`Shopping cart with ${itemCount} item${itemCount !== 1 ? 's' : ''}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
    </button>
  )
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { addItem } = useCart()

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    []
  )

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') {
      return products
    }
    return products.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const handleAddToCart = (product: Product) => {
    const cartItem: CartItem = { ...product, quantity: 1 }
    addItem(cartItem)
    alert('Added to cart!')
  }

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="hero-bg" />
        <div className="hero-stripes" />
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Home</Link> / <span>Shop</span>
          </div>
          <h1>Signtec <span className="red">Print Shop</span></h1>
          <p>
            Browse our selection of custom-printed products. Everything we create is printed and produced in-house with premium quality.
          </p>
        </div>
      </div>

      {/* FILTERS & PRODUCTS */}
      <div className="sec wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h2 style={{ margin: 0 }}>Shop Products</h2>
          <ShoppingCartButton onClick={() => setIsCartOpen(true)} />
        </div>
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {filteredProducts.length > 0 ? (
          <ProductGrid
            products={filteredProducts}
            onAddToCart={handleAddToCart}
          />
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--ink-soft)' }}>
              No products found in this category.
            </p>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="cta-band">
        <div className="wrap cta-inner">
          <RevealOnScroll>
            <h2>Custom Products?</h2>
            <p>Need something custom printed in bulk? Contact our team for wholesale pricing and custom options.</p>
            <div className="cta-btns">
              <Link href="/contact" className="btn btn-dark">
                <span>Request Custom Quote</span>
              </Link>
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
