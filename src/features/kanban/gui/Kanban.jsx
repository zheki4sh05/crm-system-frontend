import { Box, Drawer, Grid2, IconButton, Stack, Typography } from "@mui/material";
import KanbanColumn from "./KanbanColumn";
import { updateDeal, updateDealAction } from "../../../app/slices/dealSlice";
import { useDispatch } from "react-redux";



function Kanban({type,deals, stages}) {

    console.log(deals)
    console.log(stages)
    
    const dispatch = useDispatch()

    const getDealsByStage=(stageId)=>{

        return deals.filter((item,index)=>{
            return item.stageId==stageId
        })

    }

    const moveHandler=(item)=>{
       // dispatch(updateDeal(item))
      
       dispatch(updateDealAction(item))
    }
    

    return ( 
<>

    <Box sx={{display:"flex", flexDirection:"row", height:"100%", overflowX:"scroll", maxWidth:"100%",  borderLeft: "dashed 2px #A9A9A9",}} >


        {
        stages.map((item,index)=>(

            <KanbanColumn moveHandler={moveHandler} open key = {index} title={item.name} type={type} deals={getDealsByStage(item.id)} stages={stages} />

        ))


        }

      
    
       
    </Box>
     

   </>
    
);
}

export default Kanban;