import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>ANORVA<sup>™</sup></div>
          <p className={styles.tagline}>Revenue partners for ambitious B2B teams.</p>
        </div>

        <div className={styles.links}>
          <div className={styles.col}>
            <div className={styles.colTitle}>COMPANY</div>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div className={styles.col}>
            <div className={styles.colTitle}>SERVICES</div>
            <a href="#">Demand Generation</a>
            <a href="#">Revenue Ops</a>
            <a href="#">GTM Strategy</a>
            <a href="#">Sales Enablement</a>
          </div>
          <div className={styles.col}>
            <div className={styles.colTitle}>RESOURCES</div>
            <a href="#">Case Studies</a>
            <a href="#">Playbooks</a>
            <a href="#">Templates</a>
            <a href="#">Newsletter</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2025 Anorva Inc. All rights reserved.</span>
        <div className={styles.legal}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
