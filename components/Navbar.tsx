'use client'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [pagesOpen, setPagesOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>ANORVA<sup>™</sup></div>
      <div className={styles.links}>
        <a href="#" className={styles.active}>HOME</a>
        <div
          className={styles.dropdown}
          onMouseEnter={() => setPagesOpen(true)}
          onMouseLeave={() => setPagesOpen(false)}
          onClick={() => setPagesOpen((open) => !open)}
        >
          <span>PAGES</span>
          {pagesOpen && (
            <div className={styles.dropdownMenu}>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Pricing</a>
              <a href="#">Case Studies</a>
            </div>
          )}
        </div>
        <a href="#customers">CUSTOMERS</a>
        <a href="#blog">BLOG</a>
        <a href="#contact">CONTACT</a>
      </div>
      <button className={styles.cta}>GET IN TOUCH</button>
    </nav>
  )
}
