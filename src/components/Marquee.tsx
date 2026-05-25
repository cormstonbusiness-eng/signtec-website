const ITEMS = [
  'Vehicle Wraps',
  'Shop Signs',
  'Window Graphics',
  'Fleet Branding',
  'Window Tinting',
  'Vinyl Lettering',
  '720dpi Printing',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="marquee-item">{item}</div>
        ))}
      </div>
    </div>
  )
}
