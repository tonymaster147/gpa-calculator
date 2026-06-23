import { SCALES, EXCLUDED_GRADES, pointsFor } from '../gpa.js'

// Worked example courses. Grade points are read from the active scale so the
// math stays correct when the grading scale is switched.
const EXAMPLE_COURSES = [
  { course: 'Math', credits: 4, grade: 'A' },
  { course: 'Physics', credits: 2, grade: 'B' },
  { course: 'English', credits: 3, grade: 'A' },
]

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
    <section className="card how">
      <h2>How this GPA calculator works</h2>

      <p>
        Grade Point Average (GPA) is the average of the grades you earned in each
        course, weighted by how many credit hours each course is worth. Each
        letter grade is translated into a numerical <strong>grade point</strong>,
        as shown below.
      </p>

      <div className="formula">
        GPA = Σ (grade points × credits) ÷ total credits
      </div>

      <h3>Letter grades and their grade points</h3>
      <div className="points-grid">
        {grades.map((g) => (
          <div className="point-chip" key={g.value}>
            <span className="chip-grade">{g.value}</span>
            <span className="chip-points">{g.points.toFixed(1)}</span>
          </div>
        ))}
      </div>
      <p className="note">
        {EXCLUDED_GRADES.map((g) => g.value).join(', ')} (Pass, No-Pass,
        Withdraw, Incomplete) carry no grade points and are ignored in the
        calculation.
      </p>

      <h3>Worked example</h3>
      <p>
        Each course's grade points are multiplied by its credits, the results are
        added together, then divided by the total credits.
      </p>
      <div className="table-wrap">
        <table className="example">
          <thead>
            <tr>
              <th>Course</th>
              <th>Credits</th>
              <th>Grade</th>
              <th>Grade points</th>
            </tr>
          </thead>
          <tbody>
            {example.map((r) => (
              <tr key={r.course}>
                <td>{r.course}</td>
                <td>{r.credits}</td>
                <td>{r.grade}</td>
                <td>
                  {r.credits} × {r.points} = {(r.credits * r.points).toFixed(1)}
                </td>
              </tr>
            ))}
            <tr className="total-row">
              <td>Total</td>
              <td>{totalCredits}</td>
              <td>—</td>
              <td>{totalPoints.toFixed(1)}</td>
            </tr>
            <tr className="gpa-row">
              <td>GPA</td>
              <td colSpan="3">
                {totalPoints.toFixed(1)} ÷ {totalCredits} = <strong>{exampleGpa}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="note">
        Switch the grading scale at the top to see how the grade points change.
      </p>
    </section>
  )
}
