import {
  TextField,
  Button,
  Typography,
  Checkbox,
  List,
  ListItem,
  Container,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import MainBtn from "../shared/MainBtn";
import BasicPopover from "../shared/MainPopover";

function ToDoList({ handleTodos, initialList = [], checkbox = false, showDesc=false }) {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState(initialList);
  const [isEdited, setIsEdited] = useState(false);
  const [editedId, setEditedId] = useState(null);

  const onChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleClick = () => {
    if (!isEdited) {
      setTodos([
        ...todos,
        { name: inputVal, isDone: false, id: new Date().getTime() },
      ]);
    } else {
      setTodos([...todos, { name: inputVal, isDone: false, id: editedId }]);
    }
    setInputVal("");
    setIsEdited(false);
  
  };

  useEffect(() => {
    handleTodos(todos);
  }, [todos]);

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleDone = (id) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(updated);
  };

  const handleEdit = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    const editVal = todos.find((todo) => todo.id === id);
    setEditedId(editVal.id);
    setInputVal(editVal.name);
    setTodos(newTodos);
    setIsEdited(true);
  };

  const handleEditDesc=(id,newValue)=>{
    todos.forEach(item=>{
        if(item.id==id)
            item.description = newValue
    })
  }


  return (
    <Container maxWidth={"sm"} sx={{ mt: 5 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          variant="outlined"
          onChange={onChange}
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

      <List>
        {todos.map((todo, index) => {
          return (
            <ListItem key={index} divider={true}>
              {checkbox ? (
                <Checkbox
                  onClick={() => handleDone(todo.id)}
                  checked={todo.isDone}
                />
              ) : null}

              <Typography
                style={{ color: todo.isDone ? "green" : "" }}
                key={todo.id}
              >
                {todo.name}
              </Typography>
              <Box sx={{ml:"15px", mr:"10px"}} >
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

                {
                    showDesc ? 

                    <BasicPopover text={todo.descripiton} edit={true} saveClickHandler={handleEditDesc} />
                :
                null
                }
                  
             
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

export default ToDoList;
