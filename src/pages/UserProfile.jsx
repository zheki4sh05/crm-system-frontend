import { Box, Drawer, Grid2, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CustomTabPanel from "../widgets/CustomTabPanel";
import AboutUser from "../widgets/AboutUser";
import AboutCompany from "../widgets/company/AboutCompany";
function UserProfile() {
    const [state, setState] = useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
   
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box
        sx={{ width: "90vw"}}
        role="presentation"
        
        // onClick={toggleDrawer(anchor, false)}
  
      >
        <Box sx={{ml:2}}>
          <Grid2 container spacing={2}>
            <Grid2 item xs={1}>
              <Stack direction="row">
                <IconButton sx={{mt:1.5, ml:1}}  onClick={toggleDrawer(anchor, false)}>
                  <CloseIcon />
                </IconButton>
              </Stack>
            </Grid2>
            <Grid2 item xs={4}>
            
              <Typography sx={{mt:2}} variant="h6" gutterBottom>
                Профиль пользователя
              </Typography>
            </Grid2>
            <Grid2 item xs={4}></Grid2>
          </Grid2>
          <Grid2 container spacing={1}>
              <Grid2 item xs={8}>
                 
              <CustomTabPanel
                 
                   content={{
                      tabNames: ["Мои личные данные", "Моё место работы"],
                    }}
              >
                  <Box>
                      <AboutUser/>
                  </Box>
                  <Box>
                      <AboutCompany/>

                      
                  </Box>
                
  
              </CustomTabPanel>
              </Grid2>
          </Grid2>
  
        </Box>
      </Box>
    );
  
    return (
      <>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer("right", true)}
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
  
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          sx={{zIndex:10000}}
        >
          {list("right")}
        </Drawer>
      </>
    );
}

export default UserProfile;