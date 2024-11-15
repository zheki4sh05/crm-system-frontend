import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
  } from "@mui/material";
  import {  LocalizationProvider } from "@mui/x-date-pickers";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import { useState } from "react";
import CustomCreateAlert from "../../shared/CustomCreateAlert";
import statusTypes from './../../app/constants/statusTypes';
  function Deadline({ titleFrom = "", titleTo = "", initialData, setDataHandler,  }) {

    const [isEditedStart, setEditedStart] = useState(false);
    const [isEditedFinish, setEditedFinish] = useState(false);
    const [startDate, setStartDate] = useState(initialData.startDate);
    const [finishDate, setFinishDate] = useState(initialData.finishDate);
  
    const handleStartDate = (event) => {
      setEditedStart(true);
  
      setStartDate(event.target.value);
    };
    const handleFinishDate = (event) => {
      setEditedFinish(true);

      setFinishDate(event.target.value);
    };
  
    const setHandler = () => {
      setEditedFinish(false);
      setEditedStart(false);
      setDataHandler({startDate, finishDate });
    
    };
  
    const check = () => {
      // Преобразуем значения в объекты Date
      const date1 = new Date(startDate);
      const date2 = new Date(finishDate);
  
      // Сравниваем даты
      if (date1.getTime() > date2.getTime() || date1.getTime() < new Date().getTime()) {
  
          return <Box sx={{mt:2}}> <CustomCreateAlert
          
          messageText = {"Неверно задана дата"}
          duration={2000}
          userSeverity={statusTypes.error}
          /></Box>
  
      } else if (
        date1.getTime() < date2.getTime() ||
        date1.getTime() == date2.getTime()
      ) {
  
        return <Button
        disabled={!(isEditedStart && isEditedFinish)}
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={setHandler}
      >
        Сохранить
      </Button>
  
      }
    };
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
       
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap:"10px",
            
            }}
          >
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                {titleFrom}
              </Typography>
              <TextField
                type="datetime-local"
                onChange={handleStartDate}
                value={startDate}
                size="small"
                sx={{maxWidth:"190px"}}
              />
            </Box>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                {titleTo}
              </Typography>
              <TextField
                type="datetime-local"
                onChange={handleFinishDate}
                value={finishDate}
                size="small"
                sx={{maxWidth:"190px"}}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {isEditedStart || isEditedFinish ? check() : null}
  
            
          </Box>
        
      </LocalizationProvider>
    );
  }
  
  export default Deadline;