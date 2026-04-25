import styles from './Hero.module.css'

const clients = [
  { num: '01', name: 'TechFlow', sector: 'SaaS' },
  { num: '02', name: 'Meridian', sector: 'Healthcare' },
  { num: '03', name: 'LOQO', sector: 'Finance' },
  { num: '04', name: 'W9N', sector: 'Education' },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.eyebrow}>
          <span className={styles.star}>★</span>
          Revenue Partners for Ambitious B2B Teams
        </div>
        <h1 className={styles.headline}>
          Powerful<br />
          Features Built for<br />
          <span className={styles.muted}>Scalable Growth.</span>
        </h1>
        <p className={styles.sub}>Drive qualified leads with conversion-focused strategy.</p>
        <div className={styles.ctas}>
          <button className={styles.btnPrimary}>START SCALING</button>
          <button className={styles.btnSecondary}>BOOK A DEMO</button>
        </div>
      </div>

      <div className={styles.right}>
        <p className={styles.rightText}>
          Every section is designed with performance in mind — from structured hero blocks and service highlights to proof-driven testimonials, pricing layouts, and strategic call-to-action areas.
        </p>
        <hr className={styles.divider} />
        <div className={styles.clientGrid}>
          {clients.map((c) => (
            <div key={c.num} className={styles.clientCard}>
              <span className={styles.clientNum}>{c.num}</span>
              <div className={styles.clientLogo}>{c.name}</div>
              <span className={styles.clientSector}>{c.sector}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
