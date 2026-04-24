import { motion } from 'framer-motion'
import ParticleCanvas from './ParticleCanvas'
import styles from './Hero.module.css'

const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.4 } },
}

const slideUp = {
  hidden: { y: 80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
}

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <ParticleCanvas />
      <div className={styles.watermark} aria-hidden="true">JW</div>

      <motion.div
        className={styles.content}
        variants={staggerParent}
        initial="hidden"
        animate="visible"
      >
        <motion.p className={styles.overline} variants={fadeIn}>
          SGA JUNIOR COUNCIL CAMPAIGN 2026
        </motion.p>

        <div className={styles.headline}>
          <motion.h1 className={styles.line1} variants={slideUp}>JAMES</motion.h1>
          <motion.h1 className={styles.line2} variants={slideUp}>WATSON</motion.h1>
          <motion.h1 className={styles.line3} variants={slideUp}>FOR JUNIOR</motion.h1>
        </div>

        <motion.div
          className={styles.divider}
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
        />

        <motion.p className={styles.tagline} variants={fadeIn}>
          A New Voice. A Bold Vision. A Better Junior Year.
        </motion.p>

        <motion.div className={styles.buttons} variants={fadeIn}>
          <a href="#vote" className={styles.btnPrimary}>CAST YOUR VOTE</a>
          <a href="#vision" className={styles.btnSecondary}>
            WATCH MY STORY <span className={styles.arrow}>→</span>
          </a>
        </motion.div>
      </motion.div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.chevron}>&#8964;</span>
      </div>
    </section>
  )
}
