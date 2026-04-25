import styles from './Customers.module.css'

const testimonials = [
  {
    quote: "Anorva didn't just run campaigns — they rebuilt how we think about pipeline. 3x more qualified demos in 90 days.",
    name: 'Sarah Chen',
    role: 'VP Revenue, TechFlow',
    sector: 'SaaS',
  },
  {
    quote: "The GTM strategy they built gave our entire team alignment we hadn't had in 3 years. Night and day difference.",
    name: 'Marcus Webb',
    role: 'CEO, Meridian Health',
    sector: 'Healthcare',
  },
  {
    quote: "Brought them in for sales enablement, ended up overhauling our entire revenue motion. Worth every dollar.",
    name: 'Priya Nair',
    role: 'Head of Sales, LOQO',
    sector: 'Finance',
  },
]

const logos = ['TECHFLOW', 'MERIDIAN', 'LOQO', 'W9N', 'CARTEX', 'BLUESHIFT', 'NORTEK', 'AEVUM']

export default function Customers() {
  return (
    <section className={styles.section} id="customers">
      <div className={styles.topBar}>
        <span className={styles.label}>TRUSTED BY</span>
        <div className={styles.logos}>
          {logos.map(l => (
            <span key={l} className={styles.logoItem}>{l}</span>
          ))}
        </div>
      </div>

      <div className={styles.header}>
        <h2 className={styles.title}>
          What ambitious<br />
          <span className={styles.muted}>teams say about us.</span>
        </h2>
        <a href="#" className={styles.link}>VIEW ALL CASE STUDIES →</a>
      </div>

      <div className={styles.testimonials}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.sector}>{t.sector}</span>
              <div className={styles.stars}>★★★★★</div>
            </div>
            <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.name.split(' ').map(n => n[0]).join('')}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
