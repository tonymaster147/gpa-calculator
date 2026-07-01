const ORDER_URL = 'https://www.assignments4u.com/sign-up/'

const CARDS = [
  {
    icon: '🪪',
    title: 'Grade Conversion',
    text: "Grade points are first calculated from individual course grades. Typically, this technique uses a scale to assign numerical values to the letter grades (A, B, C, D, and F). An 'A' could be worth 4.0 points on a 4.0 scale, a 'B' could be worth 3.0 points, and so on.",
  },
  {
    icon: '⏱️',
    title: 'Credit Hours',
    text: 'To indicate the weight of a course, each one is typically given a specific number of credit hours, also known as units. The number of credit hours reflects the relative relevance or time commitment needed for the course.',
  },
  {
    icon: '🎖️',
    title: 'Grade Points x Credit Hours',
    text: 'The grade points are multiplied by the total number of credit hours for every course. The total points obtained for each course are here.',
  },
  {
    icon: '🏆',
    title: 'Total Points',
    text: 'The cumulative number of points obtained in all courses is totaled.',
  },
  {
    icon: '⏲️',
    title: 'Total Credit Hours',
    text: 'The total number of credit hours earned from all of the courses taken is also calculated.',
  },
  {
    icon: '➗',
    title: 'Division',
    text: 'The total number of credit hours is divided by the total number of points achieved, resulting in the GPA, which is shown here.',
  },
]

export default function WhatIsGpa() {
  return (
    <section className="whatis section-block">
      <div className="wrap">
        <h2 className="block-title">What Is GPA Calculation?</h2>
        <p className="block-intro">
          In universities in the United States and many other nations, academic
          accomplishment is commonly measured using the GPA or grade point
          average. It calculates the mean of all the cumulative final grades
          students have received in their academic careers. The general process
          of calculating GPA is as follows:
        </p>

        <div className="feature-grid">
          {CARDS.map((c) => (
            <div className="feature-card" key={c.title}>
              <span className="feature-icon">{c.icon}</span>
              <div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="center-cta">
          <a className="btn-cta primary" href={ORDER_URL}>
            Hire Experts
          </a>
        </div>
      </div>
    </section>
  )
}
