import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Platform.module.css'

const cards = [
  {
    num: '01',
    title: 'Student Voice, Amplified',
    desc: 'Monthly open forums where your ideas go directly to administration — because every great idea deserves to be heard.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 6h20M4 12h14M4 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="22" cy="20" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M22 18v2l1.5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Unforgettable Junior Events',
    desc: 'Incredible prom planning, exciting class trips, and epic experiences that will create memories to last a lifetime.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4l2.5 7.5H24l-6.5 4.7 2.5 7.5L14 19l-6 4.7 2.5-7.5L4 11.5h7.5L14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Wellness & Thriving',
    desc: 'Dedicated junior counseling hours and uplifting wellness resources so every student can feel their best all year long.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 22s-8-5.5-8-11a8 8 0 0116 0c0 5.5-8 11-8 11z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 11h6M14 8v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Open & Honest Leadership',
    desc: 'Weekly SGA updates shared publicly so you stay connected, informed, and proud of your student government.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 12h20" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 4v4M19 4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Academic Excellence',
    desc: 'Expanded access to tutoring, study halls, and academic support to help every junior reach their full potential.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M6 4h12l6 6v14H6V4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M18 4v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 14h8M10 18h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'A Thriving Campus Culture',
    desc: 'Celebrating junior class pride, energizing school spirit, and building a vibrant community you love being part of.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 6C10.7 6 8 8.7 8 12c0 4 6 10 6 10s6-6 6-10c0-3.3-2.7-6-6-6z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

export default function Platform() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className={styles.platform} id="platform" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className={styles.label}>THE PLATFORM</p>
          <h2 className={styles.headline}>What I&#39;ll Champion</h2>
        </motion.div>

        <div className={styles.grid}>
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <span className={styles.num}>{card.num}</span>
              <div className={styles.icon}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
