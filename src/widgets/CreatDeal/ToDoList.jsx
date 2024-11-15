
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
import { formatDateFromTimestamp } from "../../app/util/date";
import Deadline from "./DeadLine";
  
  function ToDoList({handleTodos, initialList=[]}) {
  
    const [inputVal, setInputVal] = useState("");
    const [todos, setTodos] = useState(initialList);
    const [isEdited, setIsEdited] = useState(false);
    const [editedId, setEditedId] = useState(null);

    const [deadline,setDeadline] = useState({startDate:new Date().getTime(),finishDate:new Date().getTime()})
  
    const onChange = (e) => {
      setInputVal(e.target.value);
    };
  
    const handleClick = () => {
      if (!isEdited) {
        setTodos([
          ...todos,
          { name: inputVal, is_done: false, id: new Date().getTime(), start: deadline.startDate, finishAt:deadline.finishDate},
        ]);
      } else {
     
        setTodos([...todos, { name: inputVal, is_done: false, id: editedId,start: deadline.startDate, finishAt:deadline.finishDate }]);
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
          todo.is_done = !todo.is_done;
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
      console.log(editVal)
      setDeadline({startDate:editVal.start, finishDate:editVal.finishAt})
      setIsEdited(true);
     
    };

    const deadlineHandler=(data)=>{
      setDeadline({...data})
    }
  
    return (
      <Container sx={{ mt: 5, maxWidth:"100%" }}>
        <Box sx={{display:"flex", flexDirection:"row",gap:"10px",alignItems:"center"}}> 
        <TextField
          variant="outlined"
          onChange={onChange}
          label="Название"
          value={inputVal}
        />
        <Deadline titleFrom="Начать с"  titleTo="Закончить" setDataHandler={deadlineHandler} initialData={deadline}/>
        <Box>
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
        </Box>
       

        </Box>

        
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
                <Box sx={{display:"flex", flexDirection:"row",gap:"10px", m:"0 10px 0 10px"}} >
                    <Box sx={{display:"flex", flexDirection:"column"}}>
                      <Typography variant="caption">Начало</Typography>
                        <Typography>{formatDateFromTimestamp(todo.start)}</Typography>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"column"}}>
                    <Typography variant="caption">Конец</Typography>
                         <Typography>{formatDateFromTimestamp(todo.finishAt)}</Typography>
                    </Box>
                  
                    
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
  