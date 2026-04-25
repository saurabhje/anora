import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.label}>LET&apos;S TALK</span>
          <h2 className={styles.title}>
            Ready to build<br />
            a pipeline that<br />
            <span className={styles.muted}>actually scales?</span>
          </h2>
          <p className={styles.sub}>
            We work with a limited number of clients at a time to ensure every engagement gets the attention it deserves. Book a call to see if we&apos;re a fit.
          </p>
          <div className={styles.ctas}>
            <button className={styles.btnPrimary}>BOOK A STRATEGY CALL</button>
            <button className={styles.btnSecondary}>VIEW CASE STUDIES</button>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.formCard}>
            <div className={styles.formTitle}>Send us a message</div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Full Name</label>
              <input className={styles.input} type="text" placeholder="Jane Smith" />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Work Email</label>
              <input className={styles.input} type="email" placeholder="jane@company.com" />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Company</label>
              <input className={styles.input} type="text" placeholder="Acme Inc." />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>What are you looking to achieve?</label>
              <textarea className={styles.textarea} rows={4} placeholder="Tell us about your revenue goals..." />
            </div>
            <button className={styles.submit}>SEND MESSAGE →</button>
          </div>
        </div>
      </div>
    </section>
  )
}
