import { Box, Card, CardActions, CardContent, Drawer, Grid2, IconButton, Stack, Typography } from "@mui/material";
import MainBtn from './../shared/MainBtn';
import MainDropdown from "../shared/MainDropdown";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import CustomTabPanel from "../widgets/CustomTabPanel";


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );



const getKanbanCard=(data, handler,  moveHandler)=>{
    return (
        <>
          <CardContent sx={{paddingBottom:"0px"}}>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Название сделки
            </Typography>
           
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Цена: </Typography>
            <Typography variant="body2" gutterBottom>
              ФИО клиента
              <br />
            
            </Typography>
            <Typography variant="body2" gutterBottom>
             С
        
            </Typography>

            <Typography variant="body2">
             Задач: 
        
            </Typography>
          </CardContent>
          <CardActions>
          
            <MainBtn text={"Открыть"} config={{size:"small"}} variant={"text"} btnClickHandler={handler("right",true)} />
       
            <MainDropdown  list={[{name:"Стадия 1", value:1}]} size="small" changeHandler={moveHandler}/>
        
          </CardActions>
        </>
      )
}

function Deal({type, data, handler, moveHandler}) {


  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


const toggleDrawer = (anchor, open) =>(event)=> {


    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <Box
      sx={{ width: "90vw", zIndex:10000}}
      role="presentation"
      
      // onClick={toggleDrawer(anchor, false)}

    >
      <Box sx={{ml:2}}>
        <Grid2 container spacing={2}>
          <Grid2 item xs={1}>
            <Stack direction="row">
              <IconButton sx={{mt:1.5, ml:1}}  onClick={toggleDrawer(anchor, false)}>
                <CloseIcon />
              </IconButton>
            </Stack>
          </Grid2>
          <Grid2 item xs={4}>
          
            <Typography sx={{mt:2}} variant="h6" gutterBottom>
              Сделка
            </Typography>
          </Grid2>
          <Grid2 item xs={4}></Grid2>
        </Grid2>
        <Grid2 container spacing={1}>
            <Grid2 item xs={8}>
               
            <CustomTabPanel
               
                 content={{
                    tabNames: ["Мои личные данные", "Моё место работы"],
                  }}
            >
                <Box>
                
                </Box>
                <Box>
                   
                    <div>гыгыгы</div>
                </Box>
              

            </CustomTabPanel>
            </Grid2>
        </Grid2>

      </Box>
    </Box>
  );


    if(type=="kanban"){
        return   (
        <>
<Box sx={{ minWidth: 230 }}>
            <Card variant="outlined">{getKanbanCard(data, toggleDrawer,  moveHandler)}</Card>
        </Box>        
        <Drawer
     anchor={"right"}
     open={state["right"]}
     onClose={toggleDrawer("right", false)}
     sx={{zIndex:10000}}
   >
     {list("right")}
   </Drawer> 
        </>
       
        )
        
    }  

}

export default Deal;