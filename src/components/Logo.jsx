// Brand logo: colorful circular-arc mark (recreated as SVG) + wordmark.
// The mark is three rounded arcs (amber, teal, red) spaced 120° apart.
export default function Logo({ variant = 'light' }) {
  // circumference of r=40 circle = 2π·40 ≈ 251.33
  const C = 251.33
  const seg = 66.3 // ~95° visible arc
  const gap = C - seg

  return (
    <span className={`logo logo-${variant}`}>
      <svg
        className="logo-mark"
        viewBox="0 0 100 100"
        role="img"
        aria-label="Assignment4U logo"
      >
        <g fill="none" strokeWidth="12" strokeLinecap="round">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#f6a821"
            strokeDasharray={`${seg} ${gap}`}
            transform="rotate(-95 50 50)"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#22a7be"
            strokeDasharray={`${seg} ${gap}`}
            transform="rotate(25 50 50)"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#e23b3b"
            strokeDasharray={`${seg} ${gap}`}
            transform="rotate(145 50 50)"
          />
        </g>
      </svg>
      <span className="logo-word">
        Assignment<span className="logo-accent">4U</span>
      </span>
    </span>
  )
}
