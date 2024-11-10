import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MainBtn from "./MainBtn";
import { Box, IconButton, TextField } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export default function BasicPopover({ text,edit=false, saveClickHandler }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value,setValue] = React.useState(text)

  const handleChange=(event)=>{
    setValue(event.target.value)
  }
  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;

  return (
    <div>


      <IconButton aria-describedby={id} onClick={handleClick} >
        <MoreVertIcon />
      </IconButton>
      <Popover
       id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}

        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >

        {edit ? 
        
        <Box sx={{ display: "flex", flexDirection: "row",p:1 }}>
          
        <TextField
          sx={{ p: 2 }}
          id="outlined-basic"
          label="Описание"
          variant="outlined"
          value={value}
          onChange={handleChange}
        />
        <MainBtn type={"save"} btnClickHandler={saveClickHandler} />
      </Box>
      :
      <Typography>
        {text}
      </Typography>
    
    
    }
        
      </Popover>
    </div>
  );
}
