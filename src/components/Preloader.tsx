'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setDone(true)
      document.body.classList.add('loaded')
    }, 1600)
    const safety = setTimeout(() => {
      setDone(true)
      document.body.classList.add('loaded')
    }, 4000)
    return () => { clearTimeout(t); clearTimeout(safety) }
  }, [])

  return (
    <div id="loader" className={done ? 'done' : ''}>
      <div className="loader-content">
        <Image
          src="/logo.svg"
          alt="Signtec"
          width={540}
          height={180}
          priority
        />
      </div>
      <div className="loader-bar" />
    </div>
  )
}
