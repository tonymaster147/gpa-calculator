const ORDER_URL = 'https://www.assignments4u.com/sign-up/'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <h1 className="hero-title">
          Calculate Your Grade Point Average With Our Free GPA Calculator
        </h1>

        <p className="hero-sub">
          Use our instant GPA calculator to see exactly where you stand. Plus,
          get the extra support you need to boost your marks with 50% off
          upfront.
        </p>

        <div className="hero-checks">
          <div className="check-item">
            <span className="check-circle">✓</span>
            Pay 50% Upfront
          </div>
          <div className="check-item">
            <span className="check-circle">✓</span>
            50% After Your First Graded Submission
          </div>
        </div>

        <div className="hero-cta">
          <a className="btn-cta primary" href={ORDER_URL}>
            Order Assignment Help
          </a>
          <a className="btn-cta secondary" href="#calculator">
            Try Free Calculator
          </a>
        </div>
      </div>
    </section>
  )
}
