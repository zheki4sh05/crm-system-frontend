import { Box, Drawer, Grid2, IconButton, Stack, Typography } from "@mui/material";
import KanbanColumn from "./KanbanColumn";



function Kanban({type,deals, stages}) {

    const getDealsByStage=(stageId)=>{

        return deals.filter((item,index)=>{
            return item.stageId===stageId
        })

    }
    

    return ( 
<>

    <Box sx={{display:"flex", flexDirection:"row", height:"100%", overflowX:"scroll", maxWidth:"100%",  borderLeft: "dashed 2px #A9A9A9",}} >


        {
        stages.map((item,index)=>(

            <KanbanColumn key = {index} title={item.name} type={type} deals={getDealsByStage(item.id)} />

        ))


        }

      
    
       
    </Box>
     

   </>
    
);
}

export default Kanban;