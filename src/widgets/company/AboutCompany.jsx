import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { controlCompanyStatus, createCompany, generateKey, getCompany, getCompanyStatus, updateCompany } from "../../app/slices/companySlice";
import { getToken } from "../../app/slices/appUserSlice";
import statusTypes from "../../app/constants/statusTypes";







function AboutCompany() {

  const dispatch = useDispatch()

  const company = useSelector(getCompany)
  const companyStatus = useSelector(getCompanyStatus)

  const token = useSelector(getToken)

  const exist = Object.keys(company).length>0

  const [edit,setEdit] = useState(false)
  const [name,setName] = useState(company.name) 
  const [desc,setDescription] = useState(company.description) 

  const handleCreate=()=>{
    dispatch(createCompany({name,description:desc}))
  }

  const handleUpdate=()=>{
    dispatch(updateCompany(
      {
        token:token,
        data:{id:company.id, name:name,description:desc}
      }
      
      ))
  }

  useEffect(()=>{

    if(companyStatus==statusTypes.succeeded){
      dispatch(controlCompanyStatus(statusTypes.idle))
      setEdit(false)
    }

  },[companyStatus])

  const handleGenerate=()=>{
      dispatch(generateKey({
        data:{
          companyId:company.id
        },
        token
      }))
  }

  return (
    <Stack direction={"column"}>
 <Box sx={{display:"flex",flexDirection:"row",gap:"20px"}} >

<TextField value={name} id="outlined-basic" label="Название" variant="outlined" onChange={(event)=>{setEdit(true);  setName(event.target.value)}} />
<TextField value={desc} id="outlined-basic2" label="Описание" variant="outlined" onChange={(event)=>{setEdit(true); setDescription(event.target.value)}} />

{
  exist ? 
  <Button variant="contained" onClick={handleUpdate} disabled={!edit} >Обновить</Button>

  :
  <Button variant="contained" onClick={handleCreate} disabled={name.trim().length==0} >Создать</Button>

}


</Box>

<Stack direction={"row"} sx={{gap:"20px",marginTop:"10px"}}>
  <Typography sx={{

maxWidth: '300px', // фиксированная ширина
wordBreak: 'break-word'



  }} >

    {company.apiKey}

  </Typography>
      <Button onClick={handleGenerate} >Сгенерировать</Button>
      
</Stack>

    </Stack>
   
  );
}

export default AboutCompany;