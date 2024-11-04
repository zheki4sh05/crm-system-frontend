import { Box, Typography } from "@mui/material";

function DealColumnInfo({items}) {

    const calcInfo=(items)=>{
        return "0";
    }


    return (<Box sx={{display:"flex",flexDirection:"column"}} > 
    <Typography variant="subtitle2" gutterBottom sx={{margin:"0 auto"}}>
        Всего: {items.length} 
 </Typography> 
    <Typography variant="subtitle2" gutterBottom sx={{margin:"0 auto"}}>
             Сумма: {calcInfo(items)} руб.
      </Typography> 

      



      </Box>
      
    );
}

export default DealColumnInfo;