'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      // Simple password check (in production, use proper authentication)
      // Default password: "signtec2024" - CHANGE THIS!
      const correctPassword = 'signtec2024'

      if (password === correctPassword) {
        // Set auth token in localStorage
        localStorage.setItem('admin_authenticated', 'true')
        localStorage.setItem('admin_timestamp', Date.now().toString())
        router.push('/admin/products')
      } else {
        setError('Incorrect password. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--paper)' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '28px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Admin Dashboard</h1>
          <p style={{ color: 'var(--steel)' }}>Enter your password to continue</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {error && (
            <div style={{ background: '#fee', color: '#c00', padding: '12px', borderRadius: '6px', fontSize: '0.9rem' }}>
              {error}
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label htmlFor="password" style={{ fontWeight: 500 }}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              style={{
                border: '1px solid var(--line)',
                borderRadius: '6px',
                padding: '10px 12px',
                fontSize: '0.95rem',
                fontFamily: "'Sora', sans-serif",
              }}
              autoFocus
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !password}
            style={{
              background: 'var(--red)',
              color: 'white',
              border: 'none',
              padding: '12px 16px',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading || !password ? 0.6 : 1,
              transition: 'all 0.3s',
            }}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <Link
            href="/"
            style={{
              color: 'var(--red)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          >
            ← Back to Shop
          </Link>
        </div>

        <div
          style={{
            marginTop: '40px',
            padding: '16px',
            background: 'var(--paper-2)',
            borderRadius: '6px',
            fontSize: '0.85rem',
            color: 'var(--steel)',
          }}
        >
          <strong style={{ color: 'var(--ink)' }}>Demo Password:</strong> signtec2024
          <p style={{ marginTop: '8px', marginBottom: 0 }}>
            ⚠️ Change this password immediately in <code style={{ background: 'white', padding: '2px 4px', borderRadius: '3px' }}>src/app/admin/login/page.tsx</code>
          </p>
        </div>
      </div>
    </div>
  )
}
