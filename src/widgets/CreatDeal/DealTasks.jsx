import { Box } from "@mui/material";
import ToDoList from "./ToDoList";
import { useState } from "react";
import MainBtn from "../../shared/MainBtn";

function DealTasks({data}) {

  const [state,setState] = useState(false)

    const handleUpdateTodos=(list)=>{
      setState(true)
      console.log(list)
    }

    const handleSaveTodos=()=>{

    }

  return (
    <Box sx={{width:"100%"}}>
      <ToDoList initialList={data.tasks}  handleTodos={handleUpdateTodos}/>
        <hr/>
        <MainBtn  text={"Сохранить"} type={"btn"} variant={"contained"} btnClickHandler={handleSaveTodos} disable={!state} />
    </Box>
  );
}

export default DealTasks;
