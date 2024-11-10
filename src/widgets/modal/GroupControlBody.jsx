import { Box, Switch, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MainBtn from "../../shared/MainBtn";

function GroupControlBody({item={
    id: 0,
    name: "",
    description: "",
    companyId: 0,
    type: "",
    isActive:false
  }, handleSave}) {

    const [name,setName] = useState(item.name)
    const [desc,setDesc] = useState(item.description)
    const [isSwitched, setSwitched] = useState(item.isActive)
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

    const handleSwitchChanged=(event)=>{
        setSwitched(event.target.checked)
    }
const handleClick=()=>{
    

 handleSave({
        ...item, name, desc, isActive:isSwitched
    })
}

    const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    return ( <Box sx={{width:"200px"}} >

<TextField id="name" label="Название" variant="outlined" value={name} onChange={handleNameChange} sx={{mb:3}}/>
<TextField id="desc" label="Описание" variant="outlined" value={desc} onChange={handleDescChange}/>
<Typography>Сделать активной</Typography>
<Switch {...label} onChange={handleSwitchChanged} checked={isSwitched}/>

<MainBtn type={"settings"} text={"Сохранить"} btnClickHandler={handleClick} disable={isEdit}/>

    </Box> );
}

export default GroupControlBody;