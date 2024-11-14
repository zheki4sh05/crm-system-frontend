
import {
    TextField,
    Button,
    Typography,
    Checkbox,
    List,
    ListItem,
    Container,

  } from "@mui/material";
  import { useEffect, useState } from "react";
  
  function ToDoList({handleTodos, initialList=[]}) {
  
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
          { val: inputVal, is_done: false, id:0 },
        ]);
      } else {
     
        setTodos([...todos, { val: inputVal, is_done: false, id: editedId }]);
      }
      setInputVal("");
      setIsEdited(false);
    
     
    };
  
    useEffect(() => {
      handleTodos(todos)
    }, [todos]);
  
    const onDelete = (id) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    };
  
    const handleDone = (id) => {
      const updated = todos.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.is_done;
        }
        return todo;
      });
      setTodos(updated);
    };
  
    const handleEdit = (id) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      const editVal = todos.find((todo) => todo.id === id);
      setEditedId(editVal.id);
      setInputVal(editVal.val);
      setTodos(newTodos);
      setIsEdited(true);
    };
  
    return (
      <Container maxWidth={"sm"} sx={{ mt: 5 }}>
        <TextField
          variant="outlined"
          onChange={onChange}
          label="Название"
          value={inputVal}
        />
        <Button
          size="large"
          variant={isEdited ? "outlined" : "contained"}
          color="primary"
          onClick={handleClick}
          disabled={inputVal ? false : true}
          sx={{ ml: 2 }}
        >
          {isEdited ? "Изменить" : "Добавить"}
        </Button>
        <List>
          {todos.map((todo, index) => {
            return (
              <ListItem key={index} divider={true}>
                <Checkbox
                  onClick={() => handleDone(todo.id)}
                  checked={todo.is_done}
                />

                <Typography
                  style={{ color: todo.is_done ? "green" : "" }}
                  key={todo.id}
                >
                  {todo.name}
                </Typography>
                <Box sx={{display:"flex", flexDirection:"column"}} >
                    <Typography>{todo.start}</Typography>
                    <Typography>{todo.finishAt}</Typography>
                </Box>
                <Button
                  onClick={() => handleEdit(todo.id)}
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  Изменить
                </Button>
                <Button
                  onClick={() => onDelete(todo.id)}
                  color="secondary"
                  variant="contained"
                  sx={{ ml: 1 }}
                >
                  Удалить
                </Button>
              </ListItem>
            );
          })}
        </List>
     
      </Container>
    );
  }
  
  export default ToDoList;
  