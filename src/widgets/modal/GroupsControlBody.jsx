import { Box } from "@mui/material";
import ToDoList from "../../features/ToDoList";

function GroupsControlBody({list}) {

    return ( 
    <Box sx={{width:"400px"}} >
      

        <ToDoList initialList={list} handleTodos={()=>{}} showDesc={true}/>


    </Box> );
}

export default GroupsControlBody;