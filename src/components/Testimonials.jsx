import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Testimonials.module.css'

const quotes = [
  {
    text: "James is the only candidate who actually asked what WE wanted. That alone sets him apart.",
    author: 'Marcus T.',
    role: 'Junior',
  },
  {
    text: "If anyone can take SGA to the next level, it's James. He's been talking about this for years.",
    author: 'Destiny R.',
    role: 'Junior',
  },
  {
    text: "Vote James if you want someone who'll actually do the work, not just post about it.",
    author: 'Kevin L.',
    role: 'Junior',
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className={styles.label}>THE WORD IS OUT</p>
        </motion.div>

        <div className={styles.cards}>
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className={styles.topBorder} />
              <span className={styles.quote} aria-hidden="true">&#8220;</span>
              <p className={styles.text}>{q.text}</p>
              <div className={styles.footer}>
                <div className={styles.stars} aria-label="5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className={styles.author}>— {q.author}, {q.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
