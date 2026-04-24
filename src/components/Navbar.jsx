import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const links = ['About', 'Platform', 'Vision', 'Vote']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.monogram}>JW</a>

      <ul className={styles.links}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className={styles.link}>
              {l}
              <span className={styles.underline} />
            </a>
          </li>
        ))}
      </ul>

      <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <span className={open ? styles.barOpen1 : styles.bar} />
        <span className={open ? styles.barHide : styles.bar} />
        <span className={open ? styles.barOpen3 : styles.bar} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileAccent} />
            {links.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
