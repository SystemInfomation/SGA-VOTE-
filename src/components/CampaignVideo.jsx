import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './CampaignVideo.module.css'

export default function CampaignVideo() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className={styles.section} id="vision" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.label}>CAMPAIGN VIDEO</p>
          <h2 className={styles.headline}>See the Vision.<br />Hear the Plan.</h2>
          <p className={styles.body}>
            Two minutes. That's all I'm asking. Watch what this campaign is really about
            — and why your vote for James Watson is a vote for all of us.
          </p>
          <div className={styles.playBtn} aria-hidden="true">
            <div className={styles.playTriangle} />
            <div className={styles.playRing} />
            <div className={styles.playRing2} />
          </div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.videoOuter}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/s6Cujab-Lxw"
                title="James Watson Campaign Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
