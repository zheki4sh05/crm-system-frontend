import {
  TextField,
  Typography,
  Checkbox,
  List,
  ListItem,
  Container,
  Box,
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";
import MainBtn from "../shared/MainBtn";
import BasicPopover from "../shared/MainPopover";

function ToDotodos({
  handleTodos,
  list=[],
  checkbox = false,
  showDesc = false,
  maxCount = 0,
  tooltipTitle=""
}) {
 
  
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdited, setIsEdited] = useState(false);
  const [editedId, setEditedId] = useState(null);



  const handleClick = () => {
    // if (!isEdited) {
    //   setTodos([
    //     ...todos,
    //     { name: inputVal, isDone: false, id: new Date().getTime() },
    //   ]);
    // } else {
    //   setTodos([...todos, { name: inputVal, isDone: false, id: editedId }]);
    // }
    // setInputVal("");
    // setIsEdited(false);
  };

  // useEffect(() => {
  //   handleTodos(todos);
  // }, [todos]);

  const onDelete = (id) => {
    // const newTodos = todos.filter((todo) => todo.id !== id);
    // setTodos(newTodos);
  };

  const handleDone = (id) => {
    // const updated = todos.map((todo) => {
    //   if (todo.id === id) {
    //     todo.isActive = !todo.isActive;
    //   }
    //   return todo;
    // });
    // setTodos(updated);
  };

  const handleEdit = (id) => {
    // const newTodos = todos.filter((todo) => todo.id !== id);
    // const editVal = todos.find((todo) => todo.id === id);
    // setEditedId(editVal.id);
    // setInputVal(editVal.name);
    // setTodos(newTodos);
    // setIsEdited(true);
  };

  const handleEditDesc = (id, newValue) => {
    todos.forEach((item) => {
      if (item.id == id) item.description = newValue;
    });
  };

  const todoHeader = () => {
    
    const content = (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          variant="outlined"
         // onChange={onChange}
          label="Название"
          value={inputVal}
          size="small"
          sx={{ mr: "10px" }}
        />

        <MainBtn
          text={isEdited ? "Изменить" : "Добавить"}
          variant={isEdited ? "outlined" : "contained"}
          btnClickHandler={handleClick}
          disabled={inputVal ? false : true}
          config={{
            size: "small",
            color: "primary",
          }}
        />
      </Box>
    );

    if (maxCount == 0) {
      return  content ;
    } else if (maxCount > 0 && todos.length < maxCount) {
      return  content ;
    }else if(todos.length==maxCount){
      return null
    }
  };

  return (
    <Container maxWidth={"sm"} sx={{ mt: 5 }}>
      {todoHeader()}

      <List>
        {todos.map((todo, index) => (
       
         
            <ListItem key={index} divider={true}>
              {checkbox ? (

              <Tooltip title={tooltipTitle}>
                <Checkbox
                  onClick={() => handleDone(todo.id)}
                  checked={todo.isDone}
                />
                </Tooltip>
              ) : null}

              <Typography
                style={{ color: todo.isDone ? "green" : "" }}
                key={todo.id}
              >
                {todo.name}
              </Typography>
              <Box sx={{ ml: "15px", mr: "10px" }}>
                <MainBtn
                  text={"Изменить"}
                  variant={"contained"}
                  btnClickHandler={() => handleEdit(todo.id)}
                  config={{
                    size: "small",
                    color: "primary",
                  }}
                />
              </Box>
              <MainBtn
                text={"Удалить"}
                variant={"contained"}
                btnClickHandler={() => onDelete(todo.id)}
                config={{
                  size: "small",
                  color: "secondary",
                }}
              />

              {showDesc ? (
                <BasicPopover
                  text={todo.description}
                  edit={true}
                  saveClickHandler={handleEditDesc}
                />
              ) : null}
            </ListItem>
          )
        )}
      </List>
    </Container>
  );
}

export default ToDotodos;
