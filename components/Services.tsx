import styles from './Services.module.css'

const services = [
  {
    num: '01',
    title: 'Demand Generation',
    desc: 'We build full-funnel demand programs that drive consistent pipeline. From content strategy to paid channels — every touchpoint is conversion-engineered.',
    tags: ['ABM', 'Paid Media', 'Content'],
  },
  {
    num: '02',
    title: 'Revenue Operations',
    desc: 'Align your sales, marketing, and CS teams around a single source of truth. We audit, restructure, and optimize your entire revenue infrastructure.',
    tags: ['CRM Setup', 'Reporting', 'Automation'],
  },
  {
    num: '03',
    title: 'GTM Strategy',
    desc: 'Whether you\'re entering a new market or relaunching a product, we build the go-to-market playbook that gives your team clarity and your pipeline momentum.',
    tags: ['ICP Definition', 'Positioning', 'Launch'],
  },
  {
    num: '04',
    title: 'Sales Enablement',
    desc: 'We equip your sales team with the messaging, materials, and process they need to close faster. Battle cards, pitch decks, email sequences — built to convert.',
    tags: ['Playbooks', 'Training', 'Sequences'],
  },
]

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.label}>WHAT WE DO</span>
          <h2 className={styles.title}>
            Built for B2B teams<br />
            <span className={styles.muted}>that mean business.</span>
          </h2>
        </div>
        <div className={styles.headerRight}>
          <p>We don&apos;t do generic. Every engagement is scoped to your specific stage, market, and goals — then executed with precision.</p>
          <a href="#" className={styles.link}>VIEW ALL SERVICES →</a>
        </div>
      </div>

      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.num} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.num}>{s.num}</span>
              <div className={styles.tags}>
                {s.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            <a href="#" className={styles.cardLink}>LEARN MORE →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
