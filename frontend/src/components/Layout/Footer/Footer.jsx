import React from 'react'

import styles from './Footer.module.css'
import { Grid } from '@mui/material'

export default function Main() {
  return (
    <Grid container columnSpacing={2} className={styles.main}>
      <Grid item>
        <a href="https://vk.com/exxxsy">
          <img src='media/icons/vk.png' className={styles.icon_style}/>
        </a>
      </Grid>
      <Grid item>
        <a href="https://web.telegram.org/k/#@artoyma">
          <img src='media/icons/tg.png' className={styles.icon_style}/>
        </a>
      </Grid>
      <Grid item>      
        <a href="https://vk.com/exxxsy">
          <img src='media/icons/insta.png' className={styles.icon_style}/>
        </a>
      </Grid>
    </Grid>
  )
}