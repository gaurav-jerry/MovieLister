import React from 'react'
import Grid from "@mui/material/Grid";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';



export default function Header({title}) {
  // const classes = useStyles();


  return (
    <Grid
     container
     sx={{
      height: '8vh',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '20px',
      position: 'sticky',
      top: '0px',
      background: '#1A2027',
      color:'#BCBEC0'
    }}

     rowSpacing={1} >
    <Grid sx = {{display: 'flex'}}item xs={2} rowSpacing = {1}>
    <ArrowBackIcon />
    </Grid>
    <Grid item xs={8}>
      {title}
    </Grid>
    <Grid  sx = {{display: 'flex', justifyContent: 'flex-end'}} item xs={2}>
      <SearchIcon />
    </Grid>
    </Grid>
  )
}
