import React from 'react'

import styles from './Navigate.module.css'
import { Grid } from '@mui/material'


export default function Navigate() {
  return (
    <Grid container justifyContent={'center'} alignItems={'center'} className={styles.main}>
      <Grid item md={2} xs={4}>
        <a href='#' className={styles.font_style}>Music</a>
      </Grid>
      <Grid item md={2} xs={4}>
        <a href='#' className={styles.font_style}>Photo</a>
      </Grid>
      <Grid item md={2} xs={4}>
        <a href='#' className={styles.font_style}>Video</a>
      </Grid>
    </Grid>
    

  )
}