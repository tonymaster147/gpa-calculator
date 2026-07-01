import { useMemo, useState } from 'react'
import {
  SCALES,
  EXCLUDED_GRADES,
  calcCourses,
  calcCumulative,
  formatGpa,
} from './gpa.js'
import CourseRow from './components/CourseRow.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import WhatIsGpa from './components/WhatIsGpa.jsx'
import ExcelSteps from './components/ExcelSteps.jsx'
import OtherTools from './components/OtherTools.jsx'

let nextId = 1
const uid = () => nextId++

const emptyCourse = () => ({ id: uid(), name: '', grade: '', credits: '' })

const newSemester = (n) => ({
  id: uid(),
  name: `Semester ${n}`,
  courses: [emptyCourse(), emptyCourse(), emptyCourse()],
})

const poppins = "'Poppins',sans-serif"

const colHead = {
  display: 'grid',
  gridTemplateColumns: '1fr 168px 92px 34px',
  gap: '12px',
  padding: '0 2px 8px',
  fontSize: '12.5px',
  fontWeight: 700,
  color: '#8296a6',
  letterSpacing: '.02em',
  textTransform: 'uppercase',
}

const flatBtn = {
  background: '#fff',
  border: '1.5px solid #dbe3ea',
  color: '#16283f',
  fontWeight: 700,
  fontSize: '14px',
  padding: '11px 18px',
  borderRadius: '10px',
  cursor: 'pointer',
}

const priorLabel = {
  display: 'block',
  fontSize: '12.5px',
  fontWeight: 700,
  color: '#8296a6',
  textTransform: 'uppercase',
  letterSpacing: '.02em',
  marginBottom: '6px',
}

const priorInput = {
  width: '100%',
  padding: '11px 13px',
  border: '1.5px solid #e1e8ef',
  borderRadius: '9px',
  fontSize: '15px',
  color: '#16283f',
}

const resultStat = { fontFamily: poppins, fontWeight: 700, fontSize: '22px', color: '#fff' }
const resultStatLabel = { fontSize: '12.5px', color: '#93a9c4', fontWeight: 600 }

export default function App() {
  const [scaleKey, setScaleKey] = useState('plus-minus')
  const [semesters, setSemesters] = useState([newSemester(1)])
  const [usePrior, setUsePrior] = useState(false)
  const [prior, setPrior] = useState({ gpa: '', credits: '' })

  // ---- semester / course mutations ----
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

  return (
    <div
      style={{
        fontFamily: "'Mulish',system-ui,sans-serif",
        color: '#16283f',
        background: '#ffffff',
        WebkitFontSmoothing: 'antialiased',
        lineHeight: 1.6,
      }}
    >
      <Navbar />
      <Hero />

      {/* ============ CALCULATOR ============ */}
      <section
        id="gpa-calc"
        className="a4u-sec a4u-sec-pad"
        style={{ background: '#f4f8fb', padding: '64px 24px' }}
      >
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2
              className="a4u-h2"
              style={{
                fontFamily: poppins,
                fontWeight: 800,
                fontSize: '34px',
                letterSpacing: '-.02em',
                margin: '0 0 12px',
                color: '#10233c',
              }}
            >
              GPA Calculator
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#54677a',
                maxWidth: '640px',
                margin: '0 auto',
              }}
            >
              Calculate your college or high school GPA on the US 4.0 scale. Enter
              your courses, grades and credit hours — your semester and cumulative
              GPA update instantly.
            </p>
          </div>

          <div
            className="a4u-card"
            style={{
              background: '#fff',
              border: '1px solid #e5edf3',
              borderRadius: '18px',
              boxShadow: '0 18px 50px rgba(20,40,63,.08)',
              padding: '26px',
            }}
          >
            {/* grading scale */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                paddingBottom: '20px',
                borderBottom: '1px solid #eef2f6',
                marginBottom: '20px',
              }}
            >
              <label style={{ fontWeight: 700, fontSize: '14px', color: '#16283f' }}>
                Grading scale
              </label>
              <select
                value={scaleKey}
                onChange={(e) => setScaleKey(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: '220px',
                  maxWidth: '320px',
                  padding: '11px 14px',
                  border: '1.5px solid #dbe3ea',
                  borderRadius: '10px',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#16283f',
                  background: '#fff',
                  cursor: 'pointer',
                }}
              >
                {Object.entries(SCALES).map(([key, s]) => (
                  <option key={key} value={key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {/* semesters */}
            {semesters.map((sem, i) => {
              const result = semesterResults[i]
              const canRemove = semesters.length > 1
              return (
                <div
                  key={sem.id}
                  className="a4u-sem"
                  style={{
                    border: '1px solid #e8eef3',
                    borderRadius: '14px',
                    padding: '18px',
                    marginBottom: '16px',
                    background: '#fbfdfe',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '14px',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: poppins,
                        fontWeight: 700,
                        fontSize: '17px',
                        margin: 0,
                        color: '#10233c',
                      }}
                    >
                      {sem.name}
                    </h3>
                    {canRemove && (
                      <button
                        className="a4u-remove"
                        onClick={() => removeSemester(sem.id)}
                        style={{
                          border: 'none',
                          background: 'transparent',
                          color: '#8ea0b0',
                          fontSize: '13px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          padding: '5px 10px',
                          borderRadius: '7px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                        }}
                      >
                        ✕ Remove semester
                      </button>
                    )}
                  </div>

                  {/* column headers */}
                  <div className="a4u-colhead" style={colHead}>
                    <div>Course (optional)</div>
                    <div>Grade</div>
                    <div>Credits</div>
                    <div />
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

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '14px',
                      flexWrap: 'wrap',
                      gap: '12px',
                    }}
                  >
                    <button
                      className="a4u-addlink"
                      onClick={() => addCourse(sem.id)}
                      style={{
                        border: 'none',
                        background: 'transparent',
                        color: '#3a86a8',
                        fontWeight: 700,
                        fontSize: '14px',
                        cursor: 'pointer',
                        padding: '4px 0',
                      }}
                    >
                      + Add course
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span
                        style={{ fontSize: '13px', color: '#8296a6', fontWeight: 600 }}
                      >
                        {result.credits} credits
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '8px',
                          background: '#eef7f9',
                          border: '1px solid #d5ecf1',
                          borderRadius: '10px',
                          padding: '7px 14px',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '12.5px',
                            fontWeight: 700,
                            color: '#3a86a8',
                            textTransform: 'uppercase',
                            letterSpacing: '.02em',
                          }}
                        >
                          Semester GPA
                        </span>
                        <span
                          style={{
                            fontFamily: poppins,
                            fontWeight: 800,
                            fontSize: '20px',
                            color: '#10233c',
                          }}
                        >
                          {formatGpa(result.gpa)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            <div
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '20px',
              }}
            >
              <button className="a4u-flatbtn" onClick={addSemester} style={flatBtn}>
                + Add semester
              </button>
              <button
                className="a4u-flatbtn"
                onClick={reset}
                style={{ ...flatBtn, color: '#8296a6' }}
              >
                Reset
              </button>
            </div>

            {/* prior GPA */}
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '14.5px',
                fontWeight: 600,
                color: '#16283f',
                cursor: 'pointer',
                padding: '14px 16px',
                background: '#f7fafc',
                border: '1px solid #eaeff4',
                borderRadius: '12px',
              }}
            >
              <input
                type="checkbox"
                checked={usePrior}
                onChange={(e) => setUsePrior(e.target.checked)}
                style={{
                  width: '18px',
                  height: '18px',
                  accentColor: '#4ec1d1',
                  cursor: 'pointer',
                }}
              />
              Include prior / transfer GPA (for cumulative GPA)
            </label>

            {usePrior && (
              <div
                className="a4u-prior a4u-grid-2"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '14px',
                  marginTop: '14px',
                }}
              >
                <div>
                  <label style={priorLabel}>Prior GPA</label>
                  <input
                    type="text"
                    inputMode="decimal"
                    placeholder="e.g. 3.40"
                    value={prior.gpa}
                    onChange={(e) => setPrior((p) => ({ ...p, gpa: e.target.value }))}
                    style={priorInput}
                  />
                </div>
                <div>
                  <label style={priorLabel}>Prior credits</label>
                  <input
                    type="text"
                    inputMode="decimal"
                    placeholder="e.g. 30"
                    value={prior.credits}
                    onChange={(e) =>
                      setPrior((p) => ({ ...p, credits: e.target.value }))
                    }
                    style={priorInput}
                  />
                </div>
              </div>
            )}

            {/* RESULT */}
            <div
              className="a4u-result"
              style={{
                marginTop: '22px',
                background: 'linear-gradient(135deg,#10233c 0%,#173963 100%)',
                borderRadius: '16px',
                padding: '26px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '24px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#8fb6d6',
                    textTransform: 'uppercase',
                    letterSpacing: '.06em',
                    marginBottom: '4px',
                  }}
                >
                  Your GPA
                </div>
                <div style={{ display: 'flex', gap: '28px', marginTop: '14px' }}>
                  <div>
                    <div style={resultStat}>{cumulative.credits}</div>
                    <div style={resultStatLabel}>Total credits</div>
                  </div>
                  <div>
                    <div style={resultStat}>
                      {Math.round(cumulative.qualityPoints * 100) / 100}
                    </div>
                    <div style={resultStatLabel}>Quality points</div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  textAlign: 'center',
                  background: 'rgba(78,193,209,.14)',
                  border: '1px solid rgba(78,193,209,.4)',
                  borderRadius: '16px',
                  padding: '16px 30px',
                  minWidth: '150px',
                }}
              >
                <div
                  className="a4u-result-gpa"
                  style={{
                    fontFamily: poppins,
                    fontWeight: 800,
                    fontSize: '52px',
                    lineHeight: 1,
                    color: '#63d1e0',
                  }}
                >
                  {formatGpa(cumulative.gpa)}
                </div>
                <div
                  style={{
                    fontSize: '12.5px',
                    color: '#9fd6df',
                    fontWeight: 700,
                    letterSpacing: '.04em',
                    marginTop: '6px',
                  }}
                >
                  CUMULATIVE GPA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks scaleKey={scaleKey} />
      <WhatIsGpa />
      <ExcelSteps />
      <OtherTools />

      {/* FOOTER */}
      <footer style={{ background: '#2a2b72', color: '#c7c9e2', padding: '22px 24px' }}>
        <div
          style={{
            maxWidth: '1160px',
            margin: '0 auto',
            textAlign: 'center',
            fontSize: '14px',
          }}
        >
          Assignments4u.com Copyright © 2013-2026 All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
