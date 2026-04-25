import styles from './Blog.module.css'

const posts = [
  {
    num: '01',
    category: 'GTM STRATEGY',
    title: 'Why Most B2B Funnels Break at the Middle — And How to Fix It',
    excerpt: 'The top of your funnel looks healthy. Deals are closing. But somewhere in the middle, qualified leads are going cold. Here\'s the framework we use to diagnose and fix it.',
    date: 'Nov 12, 2024',
    readTime: '6 min read',
  },
  {
    num: '02',
    category: 'REVENUE OPS',
    title: 'The RevOps Stack for a 50-Person B2B Team in 2025',
    excerpt: 'After auditing 200+ CRMs, we\'ve distilled what actually matters. This is the exact stack we recommend — and what most teams are overcomplicating.',
    date: 'Oct 28, 2024',
    readTime: '8 min read',
  },
  {
    num: '03',
    category: 'DEMAND GEN',
    title: 'ABM Without a Big Budget: What Actually Moves the Needle',
    excerpt: 'Account-based marketing doesn\'t require a $500k tool budget. Here\'s how scrappy B2B teams can run effective ABM programs with what they already have.',
    date: 'Oct 14, 2024',
    readTime: '5 min read',
  },
]

export default function Blog() {
  return (
    <section className={styles.section} id="blog">
      <div className={styles.header}>
        <div>
          <span className={styles.label}>INSIGHTS</span>
          <h2 className={styles.title}>
            From the Anorva<br />
            <span className={styles.muted}>playbook.</span>
          </h2>
        </div>
        <a href="#" className={styles.link}>VIEW ALL ARTICLES →</a>
      </div>

      <div className={styles.posts}>
        {posts.map((p) => (
          <article key={p.num} className={styles.post}>
            <div className={styles.postTop}>
              <span className={styles.num}>{p.num}</span>
              <span className={styles.category}>{p.category}</span>
            </div>
            <h3 className={styles.postTitle}>{p.title}</h3>
            <p className={styles.excerpt}>{p.excerpt}</p>
            <div className={styles.postMeta}>
              <span>{p.date}</span>
              <span>·</span>
              <span>{p.readTime}</span>
            </div>
            <a href="#" className={styles.readMore}>READ ARTICLE →</a>
          </article>
        ))}
      </div>
    </section>
  )
}
