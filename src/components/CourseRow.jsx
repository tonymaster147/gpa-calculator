import { SCALES } from '../gpa.js'

const field = {
  padding: '11px 13px',
  border: '1.5px solid #e1e8ef',
  borderRadius: '9px',
  fontSize: '15px',
  color: '#16283f',
  width: '100%',
}

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
    <div
      className="a4u-crow"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 168px 92px 34px',
        gap: '12px',
        alignItems: 'center',
        marginBottom: '9px',
      }}
    >
      <input
        type="text"
        placeholder="Course name"
        value={course.name}
        onChange={(e) => onChange({ name: e.target.value })}
        aria-label="Course name"
        style={field}
      />

      <select
        value={course.grade}
        onChange={(e) => onChange({ grade: e.target.value })}
        aria-label="Grade"
        style={{
          padding: '11px 12px',
          border: '1.5px solid #e1e8ef',
          borderRadius: '9px',
          fontSize: '15px',
          color: '#16283f',
          background: '#fff',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        <option value="">Grade</option>
        {scale.grades.map((g) => (
          <option key={g.value} value={g.value}>
            {g.value} ({g.points.toFixed(1)})
          </option>
        ))}
        {excluded.map((g) => (
          <option key={g.value} value={g.value}>
            {g.label}
          </option>
        ))}
      </select>

      <input
        type="text"
        inputMode="decimal"
        placeholder="0"
        value={course.credits}
        onChange={(e) => onChange({ credits: e.target.value })}
        aria-label="Credits"
        style={{
          padding: '11px 12px',
          border: '1.5px solid #e1e8ef',
          borderRadius: '9px',
          fontSize: '15px',
          color: '#16283f',
          textAlign: 'center',
          width: '100%',
        }}
      />

      <button
        className="a4u-remove"
        onClick={onRemove}
        disabled={!canRemove}
        title="Remove course"
        aria-label="Remove course"
        style={{
          border: 'none',
          background: 'transparent',
          color: '#b7c2cd',
          fontSize: '16px',
          cursor: canRemove ? 'pointer' : 'not-allowed',
          width: '34px',
          height: '38px',
          borderRadius: '8px',
        }}
      >
        ✕
      </button>
    </div>
  )
}
