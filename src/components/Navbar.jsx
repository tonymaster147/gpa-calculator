import Logo from './Logo.jsx'

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="topbar-brand" href="#top" aria-label="Assignments4u home">
          <Logo variant="light" />
        </a>
        <div className="topbar-contact">
          <a href="mailto:info@assignments4u.com">
            <svg viewBox="0 0 24 24" className="ci" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
              />
            </svg>
            info@assignments4u.com
          </a>
          <a href="tel:+15597420021">
            <svg viewBox="0 0 24 24" className="ci" aria-hidden="true">
              <path
                fill="currentColor"
                d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1L6.6 10.8Z"
              />
            </svg>
            +1-559-742-0021
          </a>
        </div>
      </div>
    </header>
  )
}
