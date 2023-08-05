import React from 'react';
import Button from '@mui/material/Button';
import { Grid} from '@mui/material';
import Topography from "@mui/material/Typography"
import useStyles from "./Header.style";

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <Grid className= {classes.header}>
        <Grid>

          <Button variant='outlined'>Header</Button>
          <Button variant='contained'>Header</Button>
          <Topography >Header</Topography>
        </Grid>
      </Grid>
    

    </>
  )
}
