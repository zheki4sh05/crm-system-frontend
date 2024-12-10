import { Box, List, ListItem, Typography } from "@mui/material";
import ModalWindow from "../../features/modal/ModalWindow";
import StageControlBody from "./StageControlBody";
import { useDispatch, useSelector } from "react-redux";
import { createStage } from "../../app/slices/stagesSlice";
import { getToken } from "../../app/slices/appUserSlice";
import { getCompany } from "../../app/slices/companySlice";

function StagesControlBody({ stages,activeGroup }) {
  const token=  useSelector(getToken)
  const company = useSelector(getCompany)
  const dispatch = useDispatch()
  const handleSave = (item) => {
    dispatch(createStage({
      data:{
        name: item.name,
        description:item.description,
        companyId:company.id,
        groupId:activeGroup

      },
      token:token
    }))
    console.log(item);
  };
  
  const handleEdit=(item)=>{

  }

const sortByOrder=(list)=>{
  return list.sort((a, b) => a.order - b.order);
}
  const getTodos = (list) => {
   

    return (

      <>

      {

        list.length>0 ? 
        <List sx={{width:"100%"}}>
        {sortByOrder(list).map((todo, index) => (
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
                <StageControlBody item={todo} handleSave={handleEdit}/>
              </ModalWindow>
           
            </Box>
            </Box>
          </ListItem>
        ))}
      </List>

      :
      <Typography>Список пуст</Typography>


      }
      
      </>

     
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box>
      {getTodos(stages)}
        <ModalWindow title={"Создание стадии"} btnText={"Создать"}>
          <StageControlBody handleSave={handleSave} />
        </ModalWindow>
      </Box>
    </Box>
  );
}

export default StagesControlBody;
