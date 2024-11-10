import { Box, List, ListItem, Typography } from "@mui/material";
import ModalWindow from "../../features/modal/ModalWindow";
import StageControlBody from "./StageControlBody";

function StagesControlBody({ stages }) {
  const handleSave = (item) => {
    console.log(modify);
  };


  const getTodos = (list) => {
   

    return (
      <List sx={{width:"100%"}}>
        {list.map((todo, index) => (
          <ListItem key={index} divider={true} sx={{width:"100%"}}>
            <Box sx={{display:"flex", flexDirection:"row", width:"100%"}}>

           
            <Typography
              style={{ color: todo.isDone ? "green" : "" }}
              key={todo.id}
            >
              {todo.name}
            </Typography>
            <Box sx={{ ml: "15px", mr: "10px",display:"flex" }}>
              <ModalWindow
                title={"Управление " + todo.name}
                btnText={"Открыть"}
              
              >
                <GroupControlBody item={todo} handleSave={handleEdit}/>
              </ModalWindow>
           
            </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box>
      {getTodos(stages)}
        <ModalWindow title={"Создание группы"} btnText={"Создать"}>
          <StageControlBody handleSave={handleSave} />
        </ModalWindow>
      </Box>
    </Box>
  );
}

export default StagesControlBody;
