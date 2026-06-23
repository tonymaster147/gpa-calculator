import { SCALES } from '../gpa.js'

export default function CourseRow({
  course,
  scaleKey,
  excluded,
  canRemove,
  onChange,
  onRemove,
}) {
  const scale = SCALES[scaleKey]

  return (
    <div className="course-row">
      <input
        className="course-name"
        type="text"
        placeholder="Course name"
        value={course.name}
        onChange={(e) => onChange({ name: e.target.value })}
        aria-label="Course name"
      />

      <select
        className="course-grade"
        value={course.grade}
        onChange={(e) => onChange({ grade: e.target.value })}
        aria-label="Grade"
      >
        <option value="">— Grade —</option>
        <optgroup label="Counts toward GPA">
          {scale.grades.map((g) => (
            <option key={g.value} value={g.value}>
              {g.value} ({g.points.toFixed(1)})
            </option>
          ))}
        </optgroup>
        <optgroup label="Excluded from GPA">
          {excluded.map((g) => (
            <option key={g.value} value={g.value}>
              {g.label}
            </option>
          ))}
        </optgroup>
      </select>

      <input
        className="course-credits"
        type="number"
        min="0"
        step="0.5"
        placeholder="0"
        value={course.credits}
        onChange={(e) => onChange({ credits: e.target.value })}
        aria-label="Credits"
      />

      <button
        className="btn-icon"
        onClick={onRemove}
        disabled={!canRemove}
        title="Remove course"
        aria-label="Remove course"
      >
        ✕
      </button>
    </div>
  )
}
