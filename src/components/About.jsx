import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './About.module.css'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const slideLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const badges = [
  { stat: '100%', label: 'Committed', style: { top: '8%', right: '-5%' }, delay: '0s' },
  { stat: 'Junior', label: 'Class Rep', style: { bottom: '30%', right: '-8%' }, delay: '0.4s' },
  { stat: 'Voice', label: 'For Change', style: { bottom: '5%', left: '10%' }, delay: '0.8s' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.left}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className={styles.goldBar} />
          <div className={styles.leftContent}>
            <motion.p className={styles.label} variants={slideLeft}>ABOUT THE CANDIDATE</motion.p>
            <motion.h2 className={styles.headline} variants={slideLeft}>
              More Than A Vote —<br />A Movement
            </motion.h2>
            <motion.p className={styles.body} variants={slideLeft}>
              I'm James Watson, a junior who genuinely cares about making our class experience
              unforgettable. I've seen what happens when student voices go unheard — and I'm done
              watching from the sidelines.
            </motion.p>
            <motion.p className={styles.body} variants={slideLeft}>
              SGA Junior Council isn't just a title to me. It's a platform. A microphone.
              A chance to turn our collective frustration into real, lasting change.
            </motion.p>
            <motion.p className={styles.body} variants={slideLeft}>
              I'm not promising you the moon. I'm promising you I'll show up, speak up,
              and fight for every single one of us.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className={styles.portraitWrapper}>
            <div className={styles.portrait}>
              <div className={styles.portraitPlaceholder}>
                <span className={styles.initials}>JW</span>
              </div>
            </div>
            {badges.map((b, i) => (
              <div
                key={i}
                className={styles.badge}
                style={{ ...b.style, animationDelay: b.delay }}
              >
                <span className={styles.badgeStat}>{b.stat}</span>
                <span className={styles.badgeLabel}>{b.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
