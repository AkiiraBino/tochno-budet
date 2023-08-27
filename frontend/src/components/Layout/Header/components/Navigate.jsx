import React from 'react'

import styles from './Navigate.module.css'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'


export default function Navigate() {
  return (
    <Grid container justifyContent={'center'} alignItems={'center'} className={styles.main}>
      <Grid item md={2} xs={4}>
        <Link to='/music' className={styles.font_style}>Music</Link>
      </Grid>
      <Grid item md={2} xs={4}>
        <Link to='/photo' className={styles.font_style}>Photo</Link>
      </Grid>
      <Grid item md={2} xs={4}>
        <Link to='/video' className={styles.font_style}>Video</Link>
      </Grid>
    </Grid>
    

  )
}