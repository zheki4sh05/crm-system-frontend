import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import MainBtn from './MainBtn';

export default function SearchBox({primaryText}) {
  return (
    <Paper
     
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={primaryText}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      
      <MainBtn type="search" />

    
    </Paper>
  );
}