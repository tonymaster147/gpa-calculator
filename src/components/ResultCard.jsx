export default function ResultCard({ cumulative, showMulti, formatGpa }) {
  return (
    <section className="card result">
      <div className="result-main">
        <span className="result-label">
          {showMulti ? 'Cumulative GPA' : 'Your GPA'}
        </span>
        <span className="result-value">{formatGpa(cumulative.gpa)}</span>
      </div>
      <div className="result-meta">
        <div>
          <span className="mini-label">Total credits</span>
          <strong>{cumulative.credits}</strong>
        </div>
        <div>
          <span className="mini-label">Quality points</span>
          <strong>{Math.round(cumulative.qualityPoints * 100) / 100}</strong>
        </div>
      </div>
    </section>
  )
}
