import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import MainBtn from './../shared/MainBtn';
import MainDropdown from "../shared/MainDropdown";


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
          
            <MainBtn text={"Открыть"} config={{size:"small"}} variant={"text"} btnClickHandler={handler} />
       
            <MainDropdown  list={[{name:"Стадия 1", value:1}]} size="small"/>
        
          </CardActions>
        </>
      )
}

function Deal({type, data, handler, moveHandler}) {

    if(type=="kanban"){
        return   (

        <Box sx={{ minWidth: 230 }}>
            <Card variant="outlined">{getKanbanCard(data, handler,  moveHandler)}</Card>
        </Box>

        )
        
    }  

}

export default Deal;