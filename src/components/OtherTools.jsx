const poppins = "'Poppins',sans-serif"

const TOOLS = [
  { name: 'Spell Checker', href: 'https://www.assignments4u.com/spell-checker/' },
  { name: 'Grammar Checker', href: 'https://www.assignments4u.com/grammar-checker/' },
  { name: 'Factoring Calculator', href: 'https://www.assignments4u.com/factoring-calculator/' },
  { name: 'Plagiarism Checker', href: 'https://www.assignments4u.com/plagiarism-checker/' },
]

export default function OtherTools() {
  return (
    <section className="a4u-sec a4u-sec-pad" style={{ background: '#fff', padding: '56px 24px 72px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2
          className="a4u-h2"
          style={{
            fontFamily: poppins,
            fontWeight: 800,
            fontSize: '34px',
            letterSpacing: '-.02em',
            margin: '0 0 44px',
            color: '#2c2c51',
            textAlign: 'center',
          }}
        >
          Other Free Tools We Provide
        </h2>
        <div
          className="a4u-grid-2"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: '28px 40px',
            maxWidth: '760px',
            margin: '0 auto',
          }}
        >
          {TOOLS.map((t) => (
            <a
              key={t.name}
              href={t.href}
              target="_blank"
              rel="noopener"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  flex: '0 0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '15px',
                  fontWeight: 800,
                  color: '#fff',
                  background: '#012d87',
                }}
              >
                ✓
              </span>
              <span style={{ fontWeight: 700, fontSize: '18px', color: '#2c2c51' }}>
                {t.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
