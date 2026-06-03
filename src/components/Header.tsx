'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Our Work' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) closeMenu()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    closeMenu()
  }, [pathname])

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <header id="site-header">
      <div className="wrap nav">
        <Link href="/" className="logo">
          <Image
            src="/logo-header.svg"
            alt="Signtec — Digital Print & Graphic Solutions"
            width={180}
            height={58}
            priority
          />
        </Link>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`navlink${pathname === href ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <a className="nav-phone" href="tel:+447970633496">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +44 7970 633496
          </a>
        </nav>

        <button
          className={`burger${menuOpen ? ' open' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
