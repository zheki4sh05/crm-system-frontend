import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { getPageNameByPath } from "../shared/pathConstants";
import { useSelector } from "react-redux";
import { getDeals } from "../app/slices/dealSlice";

function PageInfo() {

    
    const data = [
        { name: 1, text: 'Всего' },
    
      ];

    const location = useLocation();

    const getItemInfo=(name)=>{

        switch(name){

            case 1:{
                return useSelector(getDeals).length
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

            {data.map((item,index)=>(

                    <Typography key={index} >{item.text}: {getItemInfo(item.name)}</Typography>
            ))}

        </Box>



        </Box>
     );
}

export default PageInfo;