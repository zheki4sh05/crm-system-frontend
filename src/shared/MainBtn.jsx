import { Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";

import SaveIcon from '@mui/icons-material/Save';
function MainBtn({
  type = "btn",
  variant = "contained",
  btnClickHandler,
  text,
  config = { size: "medium", color: "primary" },
  disable = false,
}) {
  const handler = () => {
    btnClickHandler();
  };

  if (type == "btn") {
    return (
      <Button
        onClick={handler}
        variant={variant}
        size={config.size}
        color={config.color}
        disabled={disable}
      >
        {text}
      </Button>
    );
  } else {
    if (type == "search") {
      return (
        <IconButton onClick={handler}>
          <SearchIcon />
        </IconButton>
      );
    } else if (type == "settings") {
      return (
        <Button
          onClick={handler}
          variant={variant}
          size={config.size}
          color={config.color}
          startIcon={<SettingsIcon />}
          disabled={disable}
        >
          {text}
        </Button>
      );
    } else if (type == "info") {
      return (
        <Button
          onClick={handler}
          variant={variant}
          size={config.size}
          color={config.color}
          startIcon={<InfoIcon />}
        >
          {text}
        </Button>
      );
    } else if (type =="save"){
      return (<IconButton>
        <SaveIcon />
      </IconButton>)
    }
  }
}

export default MainBtn;
