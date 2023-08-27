import React from 'react'
import {Grid} from "@mui/material"


import styles from './Label.module.css'
import { Link } from 'react-router-dom'

export default function Label() {
  return (
    <Grid container alignItems={'center'} direction={'column'}>
      <Grid item md={12} xs={12}>
        <Link to="/" className={styles.font_style}>
          <h1>By Tochno Budet</h1>
        </Link>
      </Grid>
    </Grid>
  )
}