// Brand logo: "Assignments" wordmark followed by a colorful circular badge
// containing "4u" (recreated as SVG to match the Assignments4u brand mark).
export default function Logo({ variant = 'light' }) {
  // ring: r=42, circumference = 2π·42 ≈ 263.9; four ~78° arcs with gaps.
  const seg = 57.2
  const gap = 263.9 - seg

  return (
    <span className={`logo logo-${variant}`}>
      <span className="logo-word">Assignments</span>
      <svg
        className="logo-badge"
        viewBox="0 0 100 100"
        role="img"
        aria-label="Assignments4u logo"
      >
        <g fill="none" strokeWidth="13" strokeLinecap="round">
          <circle cx="50" cy="50" r="42" stroke="#2b8fd6"
            strokeDasharray={`${seg} ${gap}`} transform="rotate(-135 50 50)" />
          <circle cx="50" cy="50" r="42" stroke="#f5a623"
            strokeDasharray={`${seg} ${gap}`} transform="rotate(-45 50 50)" />
          <circle cx="50" cy="50" r="42" stroke="#e0403f"
            strokeDasharray={`${seg} ${gap}`} transform="rotate(45 50 50)" />
          <circle cx="50" cy="50" r="42" stroke="#2fb389"
            strokeDasharray={`${seg} ${gap}`} transform="rotate(135 50 50)" />
        </g>
        <circle cx="50" cy="50" r="30" fill="#fff" />
        <text
          x="50"
          y="52"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="Poppins, sans-serif"
          fontWeight="800"
          fontSize="34"
          fill="#123a5e"
        >
          4u
        </text>
      </svg>
    </span>
  )
}
