import React, { useEffect, useState } from 'react'

import Label from './components/Label.jsx'
import Navigate from './components/Navigate.jsx'
import styles from './Header.module.css'

export default function Header() {


  return (
      <div className={styles.main}>
        <Label></Label>
        <Navigate></Navigate>
      </div>
  )
}