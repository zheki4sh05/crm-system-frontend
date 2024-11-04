import { Box, Divider, Typography } from "@mui/material";
import Deal from "../../../entity/Deal";
import DEAL from './../api/types';
import DealColumnInfo from "./DealColumnInfo";
import kanban from "./../api/types";
import MainDropdown from "../../../shared/MainDropdown";

function KanbanColumn({ items, title, type }) {


    const getInfoByType=(type, items)=>{
        switch(type){
            case kanban.deal:{
                return (

                    <DealColumnInfo items={[{},{}]} />

                )
            }
        }
    }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        borderRight: "dashed 2px #A9A9A9",
      
        padding: "0px 10px 10px 10px",
        height: "100%",
      }}
    >
      <Typography variant="subtitle1" gutterBottom sx={{ margin: "0 auto" }}>
        {title}
      </Typography>

      <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}} >
        {getInfoByType(type, items)}
        <Box>
            <MainDropdown size="small" list={[{value:1, name:""}, {value:2, name:"Цена ↓"}]} displayEmpty={false}/>
        </Box>
        
      </Box>
    
       



      
   

      <Divider sx={{ margin: "5px 0 5px 0" }} />

      <Deal type={"kanban"} />
    </Box>
  );
}

export default KanbanColumn;
