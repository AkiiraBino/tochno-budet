import { Grid } from '@mui/material'
import { AspectRatio } from '@mui/joy'
import React from 'react'

export default function VideoIntro() {
  return (
    <Grid container direction={'row'} paddingBottom={3} paddingTop={3}>
      <Grid item md={12} xs={12}>
        <AspectRatio>
          <video autoPlay muted loop src='/media/video/intro.mov'>
          </video>
        </AspectRatio>
      </Grid>
    </Grid>
  )
}
