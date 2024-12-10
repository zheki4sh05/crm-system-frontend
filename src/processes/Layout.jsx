
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ruRU } from "@mui/material/locale";
import AuthFormComponent from "../widgets/AuthFormComponent";
import LoadingUserData from "../widgets/LoadingUserData";
import Header from './Header';
import MainBody from "./MainBody";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { controlStatus, getUserStatus } from "../app/slices/appUserSlice";
import { useEffect, useState } from "react";
import statusTypes from "../app/constants/statusTypes";
import { controlCompanyStatus } from "../app/slices/companySlice";
import { constrolGroupsStatus } from "../app/slices/groupsSlice";
import { controlStageStatus } from "../app/slices/stagesSlice";
import { manageDealStatus } from "../app/slices/dealSlice";

const theme = createTheme();
function Layout() {

  const dispatch = useDispatch();

    const [state, setState]=useState(false)

  
    const userStatus = useSelector(getUserStatus)

    useEffect(()=>{
        if(userStatus==statusTypes.succeeded){
          setState(true)
          dispatch(controlStatus(statusTypes.idle))
          dispatch(controlCompanyStatus(statusTypes.idle));
          dispatch(constrolGroupsStatus(statusTypes.idle));
          dispatch(controlStageStatus(statusTypes.idle));
          dispatch(manageDealStatus(statusTypes.idle));
          
        }
    },[userStatus])
  
     const handleLogOut = () => {};
  
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{height:"100vh", width:"100vw"}}>


          {

                !state ? 
                <LoadingUserData  />
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

          {/* {
            //(authStatus===statusTypes.succeeded && userDataStatus===statusTypes.succeeded && companyDataStatus===statusTypes.succeeded) ?
            // !(checkAll([authStatus,userDataStatus,companyDataStatus])===statusTypes.succeeded) ?
           !(authStatus !== true) ? 
              // <AuthFormComponent />
               <></>
             : !(appStatus !== true) ? 
              // <LoadingUserData  />
              <></>
             :  */}
             
            
          {/* } */}
        </Box>
      </ThemeProvider>
    );
  }
  

export default Layout;