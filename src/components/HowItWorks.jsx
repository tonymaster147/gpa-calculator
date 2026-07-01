import { SCALES, EXCLUDED_GRADES, pointsFor } from '../gpa.js'

const poppins = "'Poppins',sans-serif"

// Worked example courses. Grade points are read from the active scale so the
// math stays correct when the grading scale is switched.
const EXAMPLE_COURSES = [
  { course: 'Math', credits: 4, grade: 'A' },
  { course: 'Physics', credits: 2, grade: 'B' },
  { course: 'English', credits: 3, grade: 'A' },
]

const exH3 = {
  fontFamily: poppins,
  fontWeight: 700,
  fontSize: '19px',
  margin: '0 0 16px',
  color: '#10233c',
}

const cell = { padding: '13px 16px' }
const headCell = { padding: '12px 16px' }
const rowGrid = { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.4fr' }

export default function HowItWorks({ scaleKey }) {
  const grades = SCALES[scaleKey].grades

  const example = EXAMPLE_COURSES.map((r) => ({
    ...r,
    points: pointsFor(r.grade, scaleKey),
  }))

  const totalCredits = example.reduce((s, r) => s + r.credits, 0)
  const totalPoints = example.reduce((s, r) => s + r.credits * r.points, 0)
  const exampleGpa = (totalPoints / totalCredits).toFixed(2)

  return (
    <section className="a4u-sec a4u-sec-pad" style={{ background: '#fff', padding: '64px 24px' }}>
      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
        <h2
          className="a4u-h2"
          style={{
            fontFamily: poppins,
            fontWeight: 800,
            fontSize: '30px',
            letterSpacing: '-.02em',
            margin: '0 0 14px',
            color: '#10233c',
          }}
        >
          How this GPA calculator works
        </h2>
        <p style={{ fontSize: '16px', color: '#54677a', margin: '0 0 22px' }}>
          Grade Point Average (GPA) is the average of the grades you earned in each
          course, weighted by how many credit hours each course is worth. Each letter
          grade is translated into a numerical grade point, as shown below.
        </p>

        <div
          style={{
            background: '#10233c',
            borderRadius: '12px',
            padding: '18px 22px',
            textAlign: 'center',
            fontFamily: poppins,
            fontWeight: 600,
            fontSize: '19px',
            color: '#63d1e0',
            letterSpacing: '.01em',
            marginBottom: '32px',
          }}
        >
          GPA = Σ (grade points × credits) ÷ total credits
        </div>

        <h3 style={exH3}>Letter grades and their grade points</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(96px,1fr))',
            gap: '10px',
            marginBottom: '16px',
          }}
        >
          {grades.map((g) => (
            <div
              key={g.value}
              style={{
                border: '1px solid #e5edf3',
                borderRadius: '10px',
                padding: '12px 8px',
                textAlign: 'center',
                background: '#fbfdfe',
              }}
            >
              <div
                style={{
                  fontFamily: poppins,
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#16283f',
                }}
              >
                {g.value}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#4ec1d1',
                  fontWeight: 700,
                  marginTop: '2px',
                }}
              >
                {g.points.toFixed(1)}
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '14px', color: '#7a8a99', margin: '0 0 40px' }}>
          {EXCLUDED_GRADES.map((g) => g.value).join(', ')} (Pass, No-Pass, Withdraw,
          Incomplete) carry no grade points and are ignored in the calculation.
        </p>

        <h3 style={{ ...exH3, margin: '0 0 8px' }}>Worked example</h3>
        <p style={{ fontSize: '15px', color: '#54677a', margin: '0 0 18px' }}>
          Each course's grade points are multiplied by its credits, the results are
          added together, then divided by the total credits.
        </p>
        <div
          className="a4u-extable"
          style={{
            border: '1px solid #e5edf3',
            borderRadius: '14px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              ...rowGrid,
              background: '#f4f8fb',
              fontSize: '12.5px',
              fontWeight: 700,
              color: '#8296a6',
              textTransform: 'uppercase',
              letterSpacing: '.02em',
            }}
          >
            <div style={headCell}>Course</div>
            <div style={headCell}>Credits</div>
            <div style={headCell}>Grade</div>
            <div style={headCell}>Grade points</div>
          </div>
          {example.map((r) => (
            <div
              key={r.course}
              style={{
                ...rowGrid,
                fontSize: '15px',
                color: '#16283f',
                borderTop: '1px solid #eef2f6',
              }}
            >
              <div style={{ ...cell, fontWeight: 600 }}>{r.course}</div>
              <div style={cell}>{r.credits}</div>
              <div style={{ ...cell, fontWeight: 700 }}>{r.grade}</div>
              <div style={{ ...cell, color: '#54677a' }}>
                {r.credits} × {r.points} = {(r.credits * r.points).toFixed(1)}
              </div>
            </div>
          ))}
          <div
            style={{
              ...rowGrid,
              fontSize: '15px',
              background: '#fbfdfe',
              borderTop: '2px solid #e5edf3',
              fontWeight: 700,
              color: '#10233c',
            }}
          >
            <div style={cell}>Total</div>
            <div style={cell}>{totalCredits}</div>
            <div style={cell}>—</div>
            <div style={cell}>{totalPoints.toFixed(1)}</div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginTop: '18px',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              background: '#eef7f9',
              border: '1px solid #d5ecf1',
              borderRadius: '10px',
              padding: '12px 20px',
              fontFamily: poppins,
              fontWeight: 600,
              fontSize: '17px',
              color: '#10233c',
            }}
          >
            {totalPoints.toFixed(1)} ÷ {totalCredits} ={' '}
            <span style={{ color: '#cd1323', fontWeight: 800 }}>{exampleGpa}</span>
          </div>
          <span style={{ fontSize: '14px', color: '#7a8a99' }}>
            Switch the grading scale at the top to see how the grade points change.
          </span>
        </div>
      </div>
    </section>
  )
}
