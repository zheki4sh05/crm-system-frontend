
import { useEffect, useState } from "react";
import { Container, ButtonGroup, Button, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";




export default function Counter({handleUpdate, defaultValue,title=""}) {

  const [count, setCount] = useState(defaultValue);


  useEffect(() => {
    handleUpdate(count)
   
  }, [count]);

  return (
    <Container>
        <Typography>{title}</Typography>
      <ButtonGroup>
        <Button
          onClick={() => {setCount((prev) => prev - 1)}}
          disabled={count === 0}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        <TextField size="small" value={count} />
        <Button onClick={() => setCount((prev) => prev + 1)}>
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </Container>
  );
}
