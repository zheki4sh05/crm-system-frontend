
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState,useEffect } from 'react';

function RadioButtonsGroup({title, items, handleChange, initialValue}) {

  const [state,setState]=  useState(initialValue)

  const clickHandler=(event)=>{
    setState(event.target.value)
  }

  useEffect(()=>{
    console.log(state)
    handleChange(state)
  },[state])
 
    return ( 


        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={state}
        name="radio-buttons-group"
       // onChange={(event)=>handleChange(event.target.value)}
       onChange={clickHandler}
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