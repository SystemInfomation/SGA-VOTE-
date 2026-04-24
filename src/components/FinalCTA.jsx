import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ParticleCanvas from './ParticleCanvas'
import styles from './FinalCTA.module.css'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
}

const rise = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export default function FinalCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className={styles.section} id="vote" ref={ref}>
      <ParticleCanvas />
      <motion.div
        className={styles.content}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.p className={styles.overline} variants={rise}>THE DECISION IS YOURS</motion.p>
        <div className={styles.headline}>
          <motion.span className={styles.vote} variants={rise}>VOTE</motion.span>
          <motion.span className={styles.james} variants={rise}>JAMES</motion.span>
          <motion.span className={styles.watson} variants={rise}>WATSON</motion.span>
        </div>
        <motion.p className={styles.sub} variants={rise}>
          For SGA Junior Council — Because your class deserves the absolute best.
        </motion.p>
        <motion.a href="https://forsyth.instructure.com/courses/149132/grades" target="_blank" rel="noopener noreferrer" className={styles.cta} variants={rise}>
          MAKE YOUR VOTE COUNT →
        </motion.a>
        <motion.p className={styles.url} variants={rise}>votejameswatson.com</motion.p>
      </motion.div>
    </section>
  )
}
