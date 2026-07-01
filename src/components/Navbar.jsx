import Logo from './Logo.jsx'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Logo variant="light" />
        <nav className="nav-links">
          <a href="#calculator">Calculator</a>
          <a href="#how">How it works</a>
          <a className="nav-cta" href="#order">
            Order Assignment Help
          </a>
        </nav>
      </div>
    </header>
  )
}
