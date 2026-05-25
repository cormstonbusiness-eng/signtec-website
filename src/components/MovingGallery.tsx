'use client'
import Image from 'next/image'

const ITEMS = [
  { image: '/portfolio/1.jpeg', label: 'Project 1', sub: 'Shop Signs', title: 'Project 1' },
  { image: '/portfolio/2.jpeg', label: 'Project 2', sub: 'Fascia Signage', title: 'Project 2' },
  { image: '/portfolio/3.jpeg', label: 'Project 3', sub: 'Vehicle Graphics', title: 'Project 3' },
  { image: '/portfolio/4.jpeg', label: 'Project 4', sub: 'Large Format', title: 'Project 4' },
  { image: '/portfolio/5.jpeg', label: 'Project 5', sub: 'Event Graphics', title: 'Project 5' },
  { image: '/portfolio/6.jpeg', label: 'Project 6', sub: 'Corporate Signage', title: 'Project 6' },
  { image: '/portfolio/7.jpeg', label: 'Project 7', sub: 'Fleet Branding', title: 'Project 7' },
  { image: '/portfolio/8.jpeg', label: 'Project 8', sub: 'Window Tinting', title: 'Project 8' },
]

export default function MovingGallery() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="moving-gallery">
      <div className="mg-track">
        {doubled.map((item, i) => (
          <div key={i} className="mg-item">
            <div className="mg-image">
              <Image
                src={item.image}
                alt={item.label}
                fill
                priority={i < 8}
                style={{ objectFit: 'cover' }}
              />
              <div className="ph-label">{item.label}</div>
            </div>
            <div className="mg-cap">
              <span>{item.sub}</span>
              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
