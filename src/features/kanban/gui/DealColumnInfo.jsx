import { Box, Typography } from "@mui/material";
import { getDealPrice } from './../../../app/util/deal';

function DealColumnInfo({items}) {

    const calcInfo=(items)=>{

        if(items.length>1){
            console.log(items)
            return items.reduce((acc, curr) => getDealPrice(acc) + getDealPrice(curr), 0);
        }else if(items.length==1){
            return getDealPrice(items[0])
        }else{
            return 0
        }

       


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