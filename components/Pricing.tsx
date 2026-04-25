import styles from './Pricing.module.css'

const plans = [
  {
    name: 'STARTER',
    price: '$4,500',
    period: '/month',
    desc: 'For early-stage B2B teams building their first repeatable pipeline.',
    features: ['Demand generation strategy', 'Monthly campaign execution', 'CRM audit & setup', 'Bi-weekly check-ins', 'Monthly reporting'],
    cta: 'GET STARTED',
    featured: false,
  },
  {
    name: 'GROWTH',
    price: '$9,000',
    period: '/month',
    desc: 'For scaling teams ready to invest in full-funnel revenue operations.',
    features: ['Everything in Starter', 'Full RevOps build-out', 'GTM strategy & execution', 'Sales enablement package', 'Dedicated strategist', 'Weekly syncs'],
    cta: 'START SCALING',
    featured: true,
  },
  {
    name: 'ENTERPRISE',
    price: 'Custom',
    period: '',
    desc: 'For established B2B companies with complex go-to-market needs.',
    features: ['Everything in Growth', 'Multi-market expansion', 'Executive advisory', 'Custom reporting suite', 'SLA guarantees', 'Dedicated team'],
    cta: 'BOOK A CALL',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.header}>
        <span className={styles.label}>PRICING</span>
        <h2 className={styles.title}>
          Transparent pricing.<br />
          <span className={styles.muted}>Measurable outcomes.</span>
        </h2>
      </div>

      <div className={styles.grid}>
        {plans.map((p) => (
          <div key={p.name} className={`${styles.card} ${p.featured ? styles.featured : ''}`}>
            {p.featured && <div className={styles.badge}>MOST POPULAR</div>}
            <div className={styles.planName}>{p.name}</div>
            <div className={styles.priceRow}>
              <span className={styles.price}>{p.price}</span>
              <span className={styles.period}>{p.period}</span>
            </div>
            <p className={styles.desc}>{p.desc}</p>
            <hr className={styles.divider} />
            <ul className={styles.features}>
              {p.features.map(f => (
                <li key={f} className={styles.feature}>
                  <span className={styles.check}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className={`${styles.cta} ${p.featured ? styles.ctaFeatured : ''}`}>{p.cta}</button>
          </div>
        ))}
      </div>
    </section>
  )
}
