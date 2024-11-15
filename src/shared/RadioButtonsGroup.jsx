import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function RadioButtonsGroup({title, items, handleChange, initialValue}) {
 
    return ( 


        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={initialValue}
        name="radio-buttons-group"
        onChange={(event)=>handleChange(event.target.value)}
      >
        {
            items.map((item,index)=>(
                <FormControlLabel key={index} value={item.id} control={<Radio/>} label={item.name} />
            ))

        }

    
      </RadioGroup>
    </FormControl>

     );
}

export default RadioButtonsGroup;