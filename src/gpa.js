// US GPA grade scales and calculation helpers.
// All scales map a letter grade -> grade point on a 4.0 system.
// "excluded" grades (Pass/No-Pass/Withdraw/Incomplete) carry no points and
// are left out of the GPA math entirely.

// Standard +/- scale used by most US colleges (matches calculator.net).
export const SCALES = {
  'plus-minus': {
    label: 'Letter with +/- (4.0 scale)',
    grades: [
      { value: 'A+', points: 4.3 },
      { value: 'A', points: 4.0 },
      { value: 'A-', points: 3.7 },
      { value: 'B+', points: 3.3 },
      { value: 'B', points: 3.0 },
      { value: 'B-', points: 2.7 },
      { value: 'C+', points: 2.3 },
      { value: 'C', points: 2.0 },
      { value: 'C-', points: 1.7 },
      { value: 'D+', points: 1.3 },
      { value: 'D', points: 1.0 },
      { value: 'D-', points: 0.7 },
      { value: 'F', points: 0.0 },
    ],
  },
  // Whole-letter scale (no +/-), caps A at 4.0.
  letter: {
    label: 'Letter only (4.0 scale)',
    grades: [
      { value: 'A', points: 4.0 },
      { value: 'B', points: 3.0 },
      { value: 'C', points: 2.0 },
      { value: 'D', points: 1.0 },
      { value: 'F', points: 0.0 },
    ],
  },
}

// Grades that do not count toward GPA (no credit-weighted points).
export const EXCLUDED_GRADES = [
  { value: 'P', label: 'P — Pass' },
  { value: 'NP', label: 'NP — No Pass' },
  { value: 'W', label: 'W — Withdraw' },
  { value: 'I', label: 'I — Incomplete' },
]

const EXCLUDED_SET = new Set(EXCLUDED_GRADES.map((g) => g.value))

export function isExcluded(grade) {
  return EXCLUDED_SET.has(grade)
}

// Look up the grade-point value for a grade within a given scale.
// Returns null when the grade is empty, excluded, or not found.
export function pointsFor(grade, scaleKey) {
  if (!grade || isExcluded(grade)) return null
  const scale = SCALES[scaleKey]
  if (!scale) return null
  const found = scale.grades.find((g) => g.value === grade)
  return found ? found.points : null
}

// Calculate GPA for a list of courses: { grade, credits }.
// Only courses with a real grade and credits > 0 are counted.
export function calcCourses(courses, scaleKey) {
  let qualityPoints = 0
  let credits = 0
  let counted = 0

  for (const c of courses) {
    const points = pointsFor(c.grade, scaleKey)
    const cr = parseFloat(c.credits)
    if (points === null || !Number.isFinite(cr) || cr <= 0) continue
    qualityPoints += points * cr
    credits += cr
    counted += 1
  }

  return {
    gpa: credits > 0 ? qualityPoints / credits : 0,
    credits,
    qualityPoints,
    counted,
  }
}

// Combine many semesters plus an optional prior record into a cumulative GPA.
// prior = { gpa, credits } (e.g. transfer / previous coursework).
export function calcCumulative(semesterResults, prior) {
  let qualityPoints = 0
  let credits = 0

  for (const r of semesterResults) {
    qualityPoints += r.qualityPoints
    credits += r.credits
  }

  const priorGpa = parseFloat(prior?.gpa)
  const priorCredits = parseFloat(prior?.credits)
  if (Number.isFinite(priorGpa) && Number.isFinite(priorCredits) && priorCredits > 0) {
    qualityPoints += priorGpa * priorCredits
    credits += priorCredits
  }

  return {
    gpa: credits > 0 ? qualityPoints / credits : 0,
    credits,
    qualityPoints,
  }
}

export function formatGpa(n) {
  return (Math.round(n * 100) / 100).toFixed(2)
}
