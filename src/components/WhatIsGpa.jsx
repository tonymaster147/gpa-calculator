const ORDER_URL = 'https://www.assignments4u.com/sign-up/'
const poppins = "'Poppins',sans-serif"

const CARDS = [
  {
    icon: '🪪',
    title: 'Grade Conversion',
    text: "Grade points are first calculated from individual course grades. Typically, this technique uses a scale to assign numerical values to the letter grades (A, B, C, D, and F). An 'A' could be worth 4.0 points on a 4.0 scale, a 'B' could be worth 3.0 points, and so on.",
  },
  {
    icon: '⏱️',
    title: 'Credit Hours',
    text: 'To indicate the weight of a course, each one is typically given a specific number of credit hours, also known as units. The number of credit hours reflects the relative relevance or time commitment needed for the course.',
  },
  {
    icon: '🎖️',
    title: 'Grade Points x Credit Hours',
    text: 'The grade points are multiplied by the total number of credit hours for every course. The total points obtained for each course are here.',
  },
  {
    icon: '🏆',
    title: 'Total Points',
    text: 'The cumulative number of points obtained in all courses is totaled.',
  },
  {
    icon: '⏲️',
    title: 'Total Credit Hours',
    text: 'The total number of credit hours earned from all of the courses taken is also calculated.',
  },
  {
    icon: '➗',
    title: 'Division',
    text: 'The total number of credit hours is divided by the total number of points achieved, resulting in the GPA, which is shown here.',
  },
]

export default function WhatIsGpa() {
  return (
    <section className="a4u-sec a4u-sec-pad" style={{ background: '#fff', padding: '64px 24px' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
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
          What Is GPA Calculation?
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: '#54677a',
            maxWidth: '840px',
            margin: '0 auto 40px',
            textAlign: 'center',
          }}
        >
          In universities in the United States and many other nations, academic
          accomplishment is commonly measured using the GPA or grade point average.
          It calculates the mean of all the cumulative final grades students have
          received in their academic careers. The general process of calculating GPA
          is as follows:
        </p>

        <div
          className="a4u-grid-2"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: '24px',
          }}
        >
          {CARDS.map((c) => (
            <div
              key={c.title}
              style={{
                background: '#fff',
                border: '1px solid #eef1f6',
                borderRadius: '12px',
                padding: '28px 30px',
                boxShadow: '0 10px 30px rgba(20,40,63,.06)',
                display: 'flex',
                gap: '22px',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  color: '#012d87',
                  fontSize: '30px',
                  flex: '0 0 auto',
                  marginTop: '6px',
                  width: '34px',
                  textAlign: 'center',
                }}
              >
                {c.icon}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: poppins,
                    fontWeight: 700,
                    fontSize: '19px',
                    margin: '0 0 10px',
                    color: '#2c2c51',
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: '15.5px',
                    color: '#3f4a57',
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  {c.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            className="a4u-btn-primary"
            href={ORDER_URL}
            style={{
              display: 'inline-block',
              background: '#ff8d1c',
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '16px',
              padding: '14px 40px',
              borderRadius: '6px',
              boxShadow: '0 10px 24px rgba(255,141,27,.28)',
            }}
          >
            Hire Experts
          </a>
        </div>
      </div>
    </section>
  )
}
