import React from 'react'
import { Grid} from '@mui/material';
import Topography from "@mui/material/Typography"
import useStyles from "./Home.style";

export default function Home() {
  const classes = useStyles()
  return (
    <>
    <Grid className={classes.home}>

    <h1>Home Component</h1>
    <Grid>
      <p> hiiii My Name is Ritu. </p>
    </Grid>
    <Topography>This is home Component</Topography>
    <Grid>
      <p> hiiii My Name is Ritu. </p>
    </Grid>
    <Topography>This is home Component</Topography>
    <Grid>
      <p> hiiii My Name is Ritu. </p>
    </Grid>
    <Topography>This is home Component</Topography>
    <Grid>
      <p> hiiii My Name is Ritu. </p>
    </Grid>
    <Topography>This is home Component</Topography>
    
    </Grid>
    
    </>
  )
}
