import React from 'react'
import {Grid} from "@mui/material"


import styles from './Label.module.css'

export default function Label() {
  return (
    <Grid container alignItems={'center'} direction={'column'}>
      <Grid item md={12} xs={12}>
        <a href="#" className={styles.font_style}>
          <h1>By Tochno Budet</h1>
        </a>
      </Grid>
    </Grid>
  )
}