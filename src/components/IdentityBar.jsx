import styles from './IdentityBar.module.css'

const text = 'JAMES WATSON  •  SGA JUNIOR COUNCIL  •  CLASS OF 2027  •  LEADERSHIP  •  COMMUNITY  •  EXCELLENCE  •  '

export default function IdentityBar() {
  const repeated = text.repeat(4)
  return (
    <div className={styles.bar}>
      <div className={styles.track}>
        <span className={styles.text}>{repeated}</span>
        <span className={styles.text} aria-hidden="true">{repeated}</span>
      </div>
    </div>
  )
}
