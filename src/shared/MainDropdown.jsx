import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MainDropdown({title, list, changeHandler, size="small",displayEmpty, defaultValue=0}) {
  const [value, setValue] = React.useState(list[defaultValue].id);



  const handleChange = (event) => {
    setValue(event.target.value);
    changeHandler(event.target.value)
  };

  return (
 <>
        <InputLabel id="demo-simple-select-label"  >{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={title}
          onChange={handleChange}
          size={size}
          defaultValue=""
          displayEmpty={displayEmpty}
        >
            {
                list.map((item,index)=>(
                    <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                ))
            }
         
        
        </Select>
        </>
  );
}