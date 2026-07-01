const poppins = "'Poppins',sans-serif"

const STEPS = [
  'Enter Course Name (optional)',
  'Enter the Score. Use a table to the right to calculate the score',
  'Enter the Number of Credits',
  'Calculate weight by Credits / Total Credits',
  'For each class, calculate score × weight%; sum of all results will provide your GPA',
]

export default function ExcelSteps() {
  return (
    <section className="a4u-sec a4u-sec-pad" style={{ background: '#fff', padding: '56px 24px 64px' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <h2
          className="a4u-h2"
          style={{
            fontFamily: poppins,
            fontWeight: 800,
            fontSize: '34px',
            letterSpacing: '-.02em',
            margin: '0 0 16px',
            color: '#2c2c51',
            textAlign: 'center',
          }}
        >
          How Can You Calculate Your Grade Point Average With Excel?
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: '#54677a',
            maxWidth: '900px',
            margin: '0 auto 40px',
            textAlign: 'center',
          }}
        >
          Excel is a fantastic tool if you're interested in finding your grade point
          average (GPA). In five easy steps, you can easily calculate your GPA.
          Compute your weighted average of grades using a straightforward formula
          (called GPA).
        </p>

        <div
          className="a4u-grid-5"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5,1fr)',
            gap: '18px',
          }}
        >
          {STEPS.map((text, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                border: '1px solid #eef1f6',
                borderRadius: '14px',
                padding: '26px 18px',
                textAlign: 'center',
                boxShadow: '0 8px 22px rgba(20,40,63,.06)',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '13px',
                  padding: '2.5px',
                  margin: '0 auto 18px',
                  background: 'linear-gradient(135deg,#17b8cb 0%,#1e3a8a 100%)',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: '#fff',
                    borderRadius: '11px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: '#012d87',
                      color: '#fff',
                      fontFamily: poppins,
                      fontWeight: 800,
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {i + 1}
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontSize: '15px',
                  color: '#3f4a57',
                  fontWeight: 500,
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
