import React, { useEffect, useState } from 'react'

import Label from './components/Label.jsx'
import Navigate from './components/Navigate.jsx'
import styles from './Header.module.css'

export default function Header() {
  const [headerHidden, setHeaderHidden] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      setHeaderHidden(true);
    } else {
      setHeaderHidden(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
      <div className={styles.main}>
        <Label></Label>
        <Navigate></Navigate>
      </div>
  )
}