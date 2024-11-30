import {
  AppBar,
  Box,
  Button,
  Dialog,
  IconButton,
  Slide,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { forwardRef, useContext, useState } from "react";
import CreateEntity from "./../../features/CreateEntity";
import DialogContext from "../../processes/contextProvider/DialogContext";
import CloseIcon from "@mui/icons-material/Close";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function InviteUser({ reloadHandler }) {
  const [state, setState] = useState("");

  const { openDialog, closeDialogHandler } = useContext(DialogContext);

  const handleSaveUser = () => {
    console.log(state);
  };

  const handleSearch=()=>{
    
  }

  const handleClose = () => {
    closeDialogHandler();
  };

  const showUser = (user) => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="body1" gutterBottom>
            {user.firstname} {user.lastname}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Button size={"small"} variant="text" onClick={handleSaveUser}>
            Добавить
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Dialog
      fullScreen
      open={openDialog}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Box>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Приглашение нового сотрудника
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            padding: "40px",
          }}
        >
          <TextField
            id="outlined-basic"
            size="small"
            label="Email пользователя"
            variant="outlined"
            value={state}
            onChange={(event) => setState(event.target.value)}
          />
          <Button variant="contained" size="small" onClick={handleSearch}>
            Найти
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}

export default InviteUser;
