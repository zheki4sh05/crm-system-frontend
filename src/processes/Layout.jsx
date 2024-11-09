
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ruRU } from "@mui/material/locale";
import AuthFormComponent from "../widgets/AuthFormComponent";
import LoadingUserData from "../widgets/LoadingUserData";
import Header from './Header';
import MainBody from "./MainBody";
import { Outlet } from "react-router-dom";
const theme = createTheme(ruRU);
function Layout() {
    const authStatus = true
  
    const appStatus = true
  
  
  
     const handleLogOut = () => {};
  
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{height:"100vh", width:"100vw"}}>
          {
            //(authStatus===statusTypes.succeeded && userDataStatus===statusTypes.succeeded && companyDataStatus===statusTypes.succeeded) ?
            // !(checkAll([authStatus,userDataStatus,companyDataStatus])===statusTypes.succeeded) ?
           (authStatus !== true) ? 
              <AuthFormComponent />
             : (appStatus !== true) ? 
              // <LoadingUserData  />
              <></>
             : 
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  boxSizing:"border-box",
                  height:"100%",
                }}
              >
                <Navbar />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex:1,
                    height:"100%",
                   
                    boxSizing:"border-box",
                   
                   
                  }}
                >
                  <Header/>
  
                  <MainBody>
                    <Outlet />
                  </MainBody>
  
                 
            
                </Box>
              </Box>
            
          }
        </Box>
      </ThemeProvider>
    );
  }
  

export default Layout;