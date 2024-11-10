import { Box, Switch, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MainBtn from "../../shared/MainBtn";

function StageControlBody({item={
    id: 0,
    name: "",
    description: "",
    companyId: 0,
   groupId:0
  }, handleSave}) {

    const [name,setName] = useState(item.name)
    const [desc,setDesc] = useState(item.description)
 
    const [isEdit,setEdit] = useState(true)

    const check=(item)=>{
       
        if(item.name==name && item.description==desc && item.isActive==isSwitched){
            return true
        }else{
            return false
        }
    }

    useEffect(()=>{

    

        setEdit(check(item))

    },[name,desc,isSwitched])

    const handleNameChange=(event)=>{
        setName(event.target.value)
    }
    const handleDescChange=(event)=>{
        setDesc(event.target.value)
    }

const handleClick=()=>{
    

 handleSave({
        ...item, name, desc
    })
}

    const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    return ( <Box sx={{width:"200px"}} >

<TextField id="name" label="Название" variant="outlined" value={name} onChange={handleNameChange} sx={{mb:3}}/>
<TextField id="desc" label="Описание" variant="outlined" value={desc} onChange={handleDescChange}/>
<Typography>Сделать активной</Typography>


<MainBtn type={"settings"} text={"Сохранить"} btnClickHandler={handleClick} disable={isEdit}/>

    </Box> );
}

export default StageControlBody;