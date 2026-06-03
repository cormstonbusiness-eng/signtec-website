'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { products } from '@/lib/products'
import { Product } from '@/lib/types/product'
import ProductGrid from '@/components/ProductGrid'
import CategoryFilter from '@/components/CategoryFilter'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [cartCount, setCartCount] = useState(0)

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
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItem = cart.find((item: any) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    setCartCount(cart.reduce((sum: number, item: any) => sum + item.quantity, 0))

    alert('Added to cart!')
  }

  return (
    <>
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
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ marginBottom: '20px' }}>Shop Products</h2>
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

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
