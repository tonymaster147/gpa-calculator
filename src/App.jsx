import { useMemo, useState } from 'react'
import {
  SCALES,
  EXCLUDED_GRADES,
  calcCourses,
  calcCumulative,
  formatGpa,
} from './gpa.js'
import CourseRow from './components/CourseRow.jsx'
import ResultCard from './components/ResultCard.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import OrderBand from './components/OrderBand.jsx'

let nextId = 1
const uid = () => nextId++

const emptyCourse = () => ({ id: uid(), name: '', grade: '', credits: '' })

const newSemester = (n) => ({
  id: uid(),
  name: `Semester ${n}`,
  courses: [emptyCourse(), emptyCourse(), emptyCourse()],
})

export default function App() {
  const [scaleKey, setScaleKey] = useState('plus-minus')
  const [semesters, setSemesters] = useState([newSemester(1)])
  const [usePrior, setUsePrior] = useState(false)
  const [prior, setPrior] = useState({ gpa: '', credits: '' })

  // ---- semester / course mutations ----
  const updateSemester = (id, patch) =>
    setSemesters((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)))

  const addSemester = () =>
    setSemesters((prev) => [...prev, newSemester(prev.length + 1)])

  const removeSemester = (id) =>
    setSemesters((prev) => (prev.length > 1 ? prev.filter((s) => s.id !== id) : prev))

  const addCourse = (semId) =>
    setSemesters((prev) =>
      prev.map((s) =>
        s.id === semId ? { ...s, courses: [...s.courses, emptyCourse()] } : s,
      ),
    )

  const updateCourse = (semId, courseId, patch) =>
    setSemesters((prev) =>
      prev.map((s) =>
        s.id === semId
          ? {
              ...s,
              courses: s.courses.map((c) =>
                c.id === courseId ? { ...c, ...patch } : c,
              ),
            }
          : s,
      ),
    )

  const removeCourse = (semId, courseId) =>
    setSemesters((prev) =>
      prev.map((s) =>
        s.id === semId
          ? {
              ...s,
              courses:
                s.courses.length > 1
                  ? s.courses.filter((c) => c.id !== courseId)
                  : s.courses,
            }
          : s,
      ),
    )

  const reset = () => {
    nextId = 1
    setSemesters([newSemester(1)])
    setUsePrior(false)
    setPrior({ gpa: '', credits: '' })
  }

  // ---- calculations ----
  const semesterResults = useMemo(
    () => semesters.map((s) => calcCourses(s.courses, scaleKey)),
    [semesters, scaleKey],
  )

  const cumulative = useMemo(
    () => calcCumulative(semesterResults, usePrior ? prior : null),
    [semesterResults, usePrior, prior],
  )

  const showMulti = semesters.length > 1 || usePrior

  return (
    <>
      <Navbar />
      <Hero />

      <main className="page">
        <section id="calculator" className="tool-section">
          <div className="section-head">
            <h2>Free GPA Calculator</h2>
            <p>
              Enter your courses, grades and credit hours — your semester and
              cumulative GPA on the US 4.0 scale update instantly.
            </p>
          </div>

          <div className="toolbar">
            <label className="field">
              <span>Grading scale</span>
              <select
                value={scaleKey}
                onChange={(e) => setScaleKey(e.target.value)}
              >
                {Object.entries(SCALES).map(([key, s]) => (
                  <option key={key} value={key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

      {semesters.map((sem, i) => {
        const result = semesterResults[i]
        return (
          <section className="card semester" key={sem.id}>
            <div className="semester-head">
              <input
                className="semester-name"
                value={sem.name}
                onChange={(e) => updateSemester(sem.id, { name: e.target.value })}
                aria-label="Semester name"
              />
              <div className="semester-gpa">
                <span className="mini-label">Semester GPA</span>
                <strong>{formatGpa(result.gpa)}</strong>
              </div>
              {semesters.length > 1 && (
                <button
                  className="btn-icon danger"
                  onClick={() => removeSemester(sem.id)}
                  title="Remove semester"
                  aria-label="Remove semester"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="grid-head">
              <span>Course (optional)</span>
              <span>Grade</span>
              <span>Credits</span>
              <span aria-hidden="true" />
            </div>

            {sem.courses.map((course) => (
              <CourseRow
                key={course.id}
                course={course}
                scaleKey={scaleKey}
                excluded={EXCLUDED_GRADES}
                canRemove={sem.courses.length > 1}
                onChange={(patch) => updateCourse(sem.id, course.id, patch)}
                onRemove={() => removeCourse(sem.id, course.id)}
              />
            ))}

            <div className="semester-foot">
              <button className="btn-text" onClick={() => addCourse(sem.id)}>
                + Add course
              </button>
              <span className="credits-sum">
                {result.credits} credit{result.credits === 1 ? '' : 's'}
              </span>
            </div>
          </section>
        )
      })}

      <div className="actions">
        <button className="btn" onClick={addSemester}>
          + Add semester
        </button>
        <button className="btn ghost" onClick={reset}>
          Reset
        </button>
      </div>

      <section className="card prior">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={usePrior}
            onChange={(e) => setUsePrior(e.target.checked)}
          />
          <span>Include prior / transfer GPA (for cumulative GPA)</span>
        </label>
        {usePrior && (
          <div className="prior-fields">
            <label className="field">
              <span>Prior GPA</span>
              <input
                type="number"
                min="0"
                max="4.3"
                step="0.01"
                placeholder="e.g. 3.40"
                value={prior.gpa}
                onChange={(e) => setPrior((p) => ({ ...p, gpa: e.target.value }))}
              />
            </label>
            <label className="field">
              <span>Prior credits</span>
              <input
                type="number"
                min="0"
                step="1"
                placeholder="e.g. 30"
                value={prior.credits}
                onChange={(e) =>
                  setPrior((p) => ({ ...p, credits: e.target.value }))
                }
              />
            </label>
          </div>
        )}
      </section>

          <ResultCard
            cumulative={cumulative}
            showMulti={showMulti}
            formatGpa={formatGpa}
          />
        </section>

        <div id="how">
          <HowItWorks scaleKey={scaleKey} />
        </div>
      </main>

      <OrderBand />

      <footer className="foot">
        <div className="foot-inner">
          <p>
            GPA = sum of (grade points × credits) ÷ total credits. Pass/No-Pass,
            Withdraw and Incomplete grades are excluded from the calculation.
          </p>
          <p className="foot-copy">
            © {2026} Assignment4U — Free GPA Calculator. For educational use.
          </p>
        </div>
      </footer>
    </>
  )
}
