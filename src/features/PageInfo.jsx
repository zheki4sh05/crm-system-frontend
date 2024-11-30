import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import PathConstants, { getPageNameByPath } from "../shared/pathConstants";
import { useSelector } from "react-redux";
import { getDeals } from "../app/slices/dealSlice";
import { getDocs } from "../app/slices/documentSlice";
import { useState } from "react";
import { getWorkers } from "../app/slices/workersSlice";

function PageInfo() {
    const location = useLocation();


    const getItemInfo=(name)=>{

        switch(name){

            case PathConstants.DEALS:{
                return(

                    <Typography >Всего: {useSelector(getDeals).length}</Typography>
                )
                
                
                
            }
            case PathConstants.DOCS:{

                return(

                    <Typography >Всего: {useSelector(getDocs).length}</Typography>
                )
            
            }
            case PathConstants.WORKERS:{

                return(

                    <Typography >Всего: {useSelector(getWorkers).length}</Typography>
                )
            }
            case PathConstants.CUSTOMER:{

                return(
                        <></>
                    // <Typography >Всего: {useSelector(getWorkers).length}</Typography>
                )
            
            }
        }

        return "0"
    }

    return ( 
        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center"}} >

        <Typography variant="h5" >
            {getPageNameByPath(location.pathname)}
        </Typography>

        <Box sx={{marginLeft:"40px", display:"flex", flexDirection:"row", alignItems:"center"}} >

            {
                getItemInfo(location.pathname)
            }

        </Box>



        </Box>
     );
}

export default PageInfo;