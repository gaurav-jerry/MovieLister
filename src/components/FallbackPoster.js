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

function FallbackPoster({name, image}) {
  return (
    <Box>
     <Item >
        <img
        style={{
        maxWidth: "100%",
        maxHeight: "100%",
      }}
      src={'/posters/placeholder_for_missing_posters.png'}
      alt = {'fallback'}
    />
  </Item>
    <Box>{name}</Box>
    </Box>
   

  );
}

export default FallbackPoster;