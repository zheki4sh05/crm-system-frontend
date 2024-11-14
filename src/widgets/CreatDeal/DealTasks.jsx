import { Box } from "@mui/material";
import ToDoList from "./ToDoList";

function DealTasks({data}) {

    const handleUpdateTodos=(list)=>{
        console.log(list)
    }

  return (
    <Box>
      <ToDoList initialList={data.tasks}  handleTodos={()=>{}}/>
    </Box>
  );
}

export default DealTasks;
