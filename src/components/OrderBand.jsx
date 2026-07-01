const ORDER_URL = 'https://www.assignments4u.com/sign-up/'

export default function OrderBand() {
  return (
    <section id="order" className="order-band">
      <div className="order-inner">
        <div className="hero-checks center">
          <div className="check-item">
            <span className="check-circle">✓</span>
            Pay 50% Upfront
          </div>
          <div className="check-item">
            <span className="check-circle">✓</span>
            50% After Your First Graded Submission
          </div>
        </div>
        <h2>Need to boost your marks, not just measure them?</h2>
        <p>
          Know your GPA — now raise it. Get expert assignment help and only pay
          <strong> 50% upfront</strong>, with the rest due after your first
          graded submission.
        </p>
        <div className="hero-cta">
          <a className="btn-cta primary" href={ORDER_URL}>
            Order Assignment Help
          </a>
          <a className="btn-cta ghost-dark" href="#calculator">
            Try Free Calculator
          </a>
        </div>
      </div>
    </section>
  )
}
