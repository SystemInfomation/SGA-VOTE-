import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.goldLine} />
      <div className={styles.inner}>
        <p className={styles.left}>© 2026 James Watson Campaign — votejameswatson.com</p>
        <p className={styles.right}>Paid for by students, powered by change.</p>
      </div>
    </footer>
  )
}
