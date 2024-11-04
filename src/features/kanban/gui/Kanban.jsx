import { Box } from "@mui/material";
import KanbanColumn from "./KanbanColumn";


function Kanban({titles, type}) {


    return ( 


    <Box sx={{display:"flex", flexDirection:"row", height:"100%", overflowX:"scroll", maxWidth:"100%",  borderLeft: "dashed 2px #A9A9A9",}} >

        <KanbanColumn title={"Название стадии"} type={type} />
        <KanbanColumn title={"Название сделки"} type={type} />
        <KanbanColumn title={"Название сделки"} type={type} />
       
    </Box> 
    
);
}

export default Kanban;