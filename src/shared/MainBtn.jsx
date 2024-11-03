import { Button, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
function MainBtn({
  type = "btn",
  variant = "contained",
  btnClickHandler,
  text,
  config = { size: "medium", color: "primary" },
}) {
  const handler = () => {
    btnClickHandler();
  };

  if(type=="btn"){
    return (
      <Button
        onClick={handler}
        variant={variant}
        size={config.size}
        color={config.color}
      >
        {text}
      </Button>
    ); 
  }else{
    if (type=="search"){
      return (


        <IconButton   onClick={handler}>

            <SearchIcon/>



        </IconButton>
    
      ); 
    }else if(type=="settings"){
      return (
        <Button
        onClick={handler}
        variant={variant}
        size={config.size}
        color={config.color}
        startIcon={<SettingsIcon />}
      >
        {text}
      </Button>
      ); 
    }
  }

 
}

export default MainBtn;
