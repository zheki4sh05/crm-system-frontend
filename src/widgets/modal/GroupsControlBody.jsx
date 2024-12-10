import {
  Box,
  List,
  ListItem,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import ToDoList from "../../features/ToDoList";
import { useState } from "react";
import { CheckBox } from "@mui/icons-material";
import MainBtn from "../../shared/MainBtn";
import BasicPopover from "../../shared/MainPopover";
import ModalWindow from "../../features/modal/ModalWindow";
import GroupControlBody from "./GroupControlBody";
import { useDispatch, useSelector } from "react-redux";
import { getCompany } from "../../app/slices/companySlice";
import { getToken } from "../../app/slices/appUserSlice";
import { createGroup, getGroupsStatus } from "../../app/slices/groupsSlice";

function GroupsControlBody({ list }) {
  const [alignment, setAlignment] = useState("B2C");
  const token = useSelector(getToken)
  const company = useSelector(getCompany)
  const dispatch = useDispatch()




  const handleChange = (event) => {
    setAlignment(event.target.value);
  };


  const handleEdit = (item) => {

    console.log(item)

  };



  const handleSave=(item)=>{
    let modify = {...item, type:alignment}
    console.log(modify)
    dispatch(createGroup(
      {
        data:{
          name:modify.name,
          description:modify.description,
          companyId:company.id,
          customerType:alignment,
          isActive:modify.isActive
        },
        token
      }
    ))

  }

  const getTodos = (list) => {
    const filtered = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i].customerType === alignment) {
        filtered.push(list[i]);
      }
    }

    return (
      <List sx={{width:"100%"}}>
        {filtered.map((todo, index) => (
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
    <Box sx={{ width: "400px" }}>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="B2C">B2C</ToggleButton>
        <ToggleButton value="B2B">B2B</ToggleButton>
        <ToggleButton value="B2G">B2G</ToggleButton>
      </ToggleButtonGroup>



      {getTodos(list)}

      <Box sx={{ ml: 1 }}>
                <ModalWindow
                  title={"Создание группы"}
                  btnText={"Создать"}
                 
                >
                  <GroupControlBody handleSave={handleSave}/>
                </ModalWindow>
              </Box>
    </Box>
  );
}

export default GroupsControlBody;
