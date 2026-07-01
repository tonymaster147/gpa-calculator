import logoUrl from '../assets/logo.webp'

const link = {
  color: '#ffffff',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '9px',
}

export default function Navbar() {
  return (
    <header
      style={{
        background: '#4193f7',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 2px 14px rgba(4,40,90,.16)',
      }}
    >
      <div
        className="a4u-header-inner"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          flexWrap: 'wrap',
        }}
      >
        <a
          href="https://www.assignments4u.com/"
          style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto' }}
        >
          <img
            className="a4u-logo"
            src={logoUrl}
            alt="Assignments4U"
            style={{ height: '40px', width: 'auto', display: 'block' }}
          />
        </a>
        <div
          className="a4u-contact"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            fontSize: '15px',
            fontWeight: 500,
          }}
        >
          <a className="a4u-navlink" href="mailto:info@assignments4u.com" style={link}>
            <span style={{ opacity: 0.95 }}>✉</span> info@assignments4u.com
          </a>
          <a className="a4u-navlink" href="tel:+15597420021" style={link}>
            <span style={{ opacity: 0.95 }}>✆</span> +1-559-742-0021
          </a>
        </div>
      </div>
    </header>
  )
}
