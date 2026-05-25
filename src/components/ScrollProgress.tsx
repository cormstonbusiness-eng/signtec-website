'use client'
import { useEffect } from 'react'

export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('progress')
    const header = document.getElementById('site-header')
    if (!bar) return

    let lastY = 0
    const onScroll = () => {
      const y = window.scrollY
      const h = document.documentElement.scrollHeight - window.innerHeight
      bar.style.width = h > 0 ? `${(y / h) * 100}%` : '0%'
      if (header) {
        header.classList.toggle('scrolled', y > 20)
        if (y > lastY && y > 300) {
          header.classList.add('hide')
        } else {
          header.classList.remove('hide')
        }
      }
      lastY = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div id="progress" />
}
