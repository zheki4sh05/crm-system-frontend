import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";

function Layout() {
    const authStatus = true
  
    const appStatus = true
  
  
  
     const handleLogOut = () => {};
  
    return (
      <ThemeProvider theme={theme}>
        <Box>
          {
            //(authStatus===statusTypes.succeeded && userDataStatus===statusTypes.succeeded && companyDataStatus===statusTypes.succeeded) ?
            // !(checkAll([authStatus,userDataStatus,companyDataStatus])===statusTypes.succeeded) ?
           (authStatus === statusTypes.succeeded) ? 
              <AuthFormComponent />
             : (appStatus === statusTypes.succeeded) ? 
              <LoadingUserData  />
             : 
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Navbar />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Header/>
  
                  <MainBody>
                    <Outlet />
                  </MainBody>
  
                  <WidgetsToolBar />
                  <AsideBox />
                </Box>
              </Box>
            
          }
        </Box>
      </ThemeProvider>
    );
  }
  

export default Layout;