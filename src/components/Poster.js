import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.backgroundSecondary,
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    elevation : 16,
  }));

  const addDefaultSrc = (ev) => {
      ev.target.src = '/posters/placeholder_for_missing_posters.png'
    }

function Poster({name, image}) {
  return (
    <Box sx = {{color:'#BCBEC0'}}>
     <Item >
        <img
        style={{
        maxWidth: "100%",
        maxHeight: "100%",
      }}
      onError={addDefaultSrc}
      src={`/posters/${image}`}
      alt = {''}
    />
  </Item>
    <Box>{name}</Box>
    </Box>
   

  );
}

export default React.memo(Poster)