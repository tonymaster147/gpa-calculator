const ORDER_URL = 'https://www.assignments4u.com/sign-up/'

export default function Hero() {
  return (
    <section
      className="a4u-hero"
      style={{
        background:
          'linear-gradient(102deg,#012d87 0%,#023a86 26%,#04627f 58%,#019a75 100%)',
        padding: '80px 24px 74px',
      }}
    >
      <div
        style={{
          maxWidth: '920px',
          margin: '0 auto',
          textAlign: 'center',
          color: '#ffffff',
        }}
      >
        <h1
          className="a4u-hero-title"
          style={{
            fontFamily: "'Poppins',sans-serif",
            fontWeight: 800,
            fontSize: '52px',
            lineHeight: 1.1,
            letterSpacing: '-.02em',
            margin: '0 0 22px',
            color: '#ffffff',
          }}
        >
          Calculate Your Grade Point Average With Our Free GPA Calculator
        </h1>
        <p
          className="a4u-hero-sub"
          style={{
            fontSize: '19px',
            color: '#e6eefb',
            maxWidth: '700px',
            margin: '0 auto 34px',
            lineHeight: 1.55,
          }}
        >
          Use our instant GPA calculator to see exactly where you stand. Plus, get
          the extra support you need to boost your marks.
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <a
            className="a4u-btn-primary"
            href={ORDER_URL}
            style={{
              background: '#ff8d1c',
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '16px',
              padding: '15px 30px',
              borderRadius: '8px',
              boxShadow: '0 10px 26px rgba(255,141,27,.34)',
            }}
          >
            Order Assignment Help
          </a>
          <a
            className="a4u-btn-ghost2"
            href="#gpa-calc"
            style={{
              background: 'rgba(255,255,255,.13)',
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '16px',
              padding: '15px 30px',
              borderRadius: '8px',
              border: '1.5px solid rgba(255,255,255,.55)',
              cursor: 'pointer',
            }}
          >
            Try Free Calculator
          </a>
        </div>
      </div>
    </section>
  )
}
