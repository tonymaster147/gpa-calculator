const STEPS = [
  'Enter Course Name (optional)',
  'Enter the Score. Use a table to the right to calculate the score',
  'Enter the Number of Credits',
  'Calculate weight by Credits / Total Credits',
  'For each class, calculate score × weight%; sum of all results will provide your GPA',
]

export default function ExcelSteps() {
  return (
    <section className="excel section-block">
      <div className="wrap">
        <h2 className="block-title">
          How Can You Calculate Your Grade Point Average With Excel?
        </h2>
        <p className="block-intro">
          Excel is a fantastic tool if you're interested in finding your grade
          point average (GPA). In five easy steps, you can easily calculate your
          GPA. Compute your weighted average of grades using a straightforward
          formula (called GPA).
        </p>

        <div className="steps-row">
          {STEPS.map((s, i) => (
            <div className="step-card" key={i}>
              <span className="step-num">{i + 1}</span>
              <p>{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
