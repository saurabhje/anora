import styles from './StatsTicker.module.css'

const stats = [
  { value: '400+', label: 'B2B Clients Scaled' },
  { value: '$2.4B', label: 'Pipeline Generated' },
  { value: '94%', label: 'Retention Rate' },
  { value: '3.2x', label: 'Average ROI' },
  { value: '18mo', label: 'Avg. Partnership' },
  { value: '400+', label: 'B2B Clients Scaled' },
  { value: '$2.4B', label: 'Pipeline Generated' },
  { value: '94%', label: 'Retention Rate' },
  { value: '3.2x', label: 'Average ROI' },
  { value: '18mo', label: 'Avg. Partnership' },
]

export default function StatsTicker() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {stats.map((s, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
            <span className={styles.dot}>·</span>
          </div>
        ))}
      </div>
    </div>
  )
}
