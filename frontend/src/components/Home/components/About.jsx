import { AspectRatio } from '@mui/joy'
import { Grid } from '@mui/material'
import React from 'react'

import styles from './About.module.css'

export default function About() {
  return (
    <Grid container paddingLeft={10}>
        <Grid item md={4} xs={12}>    
            <img src='/media/photo/about2.jpg' className={styles.about_img}/>
        </Grid>
        <Grid className={styles.font_style} item md={8} xs={10}>
            <h1>
            Познакомьтесь с "Точно Будет" – фото- и видеографом Артемом Попутько из Владивостока. В его объективе реальность превращается в незабвенное искусство. Он умело улавливает уникальные моменты и создает произведения, переносящие нас в атмосферу этого живописного города.
            </h1>
        </Grid>
    </Grid>
  )
}
