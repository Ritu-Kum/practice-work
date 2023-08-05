import React from 'react'
import useStyles from "./Footer.style"
import { Grid } from '@mui/material'
import Topography from "@mui/material/Typography"

export default function Footer() {
  const classes = useStyles()
  return (
    <>
    <Grid className={classes.footer}>
      <h1>Footer component</h1>
      <Topography>
        Ritu
      </Topography> 
      <Topography>
        Ritik
      </Topography>
      <Topography>
        Richa
      </Topography> 
      <Topography>
        Rishabh
      </Topography> 
      <Topography>
        Saurabh
      </Topography> 
    </Grid>
    </>
  )
}
