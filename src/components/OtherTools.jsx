const TOOLS = [
  { label: 'Spell Checker', url: 'https://www.assignments4u.com/' },
  { label: 'Grammar Checker', url: 'https://www.assignments4u.com/' },
  { label: 'Factoring Calculator', url: 'https://www.assignments4u.com/' },
  { label: 'Plagiarism Checker', url: 'https://www.assignments4u.com/' },
]

export default function OtherTools() {
  return (
    <section className="othertools section-block">
      <div className="wrap">
        <h2 className="block-title">Other Free Tools We Provide</h2>
        <div className="tools-grid">
          {TOOLS.map((t) => (
            <a className="tool-link" key={t.label} href={t.url}>
              <span className="check-badge">✓</span>
              {t.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
