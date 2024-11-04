import { Box, Container, Divider, Stack, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import MainDropdown from "./../../shared/MainDropdown";
import { useState } from "react";

function AboutDeal() {

    const [name, setName] = useState("")

    const [type,setType]= useState("B2C")

    const [desc, setDesc] = useState("")

    const [group, setGroup] = useState("")



    const handleNameChange=(event)=>{
        setName(event.target.value)
    }

    const handleDescChange=(event)=>{
        setDesc(event.target.value)
    }


    const handleChangeGroup=(event, newAlignment)=>{
            setType(newAlignment)
    }

    const changeGroupHandler=(group)=>{
            setGroup(group)
    }

    const getInputsByType=(type)=>{
        switch(type){
            case "B2C":{
                return (
                <>
                    <TextField label={"ФИО клиента"} variant="outlined" />
                    <TextField label={"Email клиента"} variant="outlined" />
                </>
                )
            }
            case "B2B":{
                return(
                    <>
                    <TextField label={"Название организации"} variant="outlined" />
                    <TextField label={"Email организации"} variant="outlined" />
                </>
                )
              
            }
            case "B2G":{
                return (
                    <>
                    <TextField label={"Название организации"} variant="outlined" />
                    <TextField label={"Email организации"} variant="outlined" />
                </>
                )
               
            }
        }
    }

  const handleSubmit = () => {
    setDataHandler({
      ...data,
      aboutAssign: {
        projectId: project,
        specialization,
      },
    });
    setChange(false);
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Container maxWidth="sm">
        <Stack direction="column" spacing={2}>
          <TextField label={"Название сделки"} variant="outlined" onChange={handleNameChange} value={name} />
          <TextField
            label={"Описание сделки"}
           variant="outlined"
            multiline
            maxRows={4}
            onChange={handleDescChange}
            value={desc}
          />

          
      <ToggleButtonGroup
        color="primary"
        value={type}
        exclusive
        onChange={handleChangeGroup}
        aria-label="Platform"
        sx={{mb:2}}
      >
        <ToggleButton value="B2C" >B2C</ToggleButton>
        <ToggleButton value="B2B">B2B</ToggleButton>
        <ToggleButton value="B2G">B2G</ToggleButton>
      </ToggleButtonGroup>

            <MainDropdown 

            title="Группа"
            list={[{name:"", value:""}]}
            changeHandler={changeGroupHandler}

            />

          <MainDropdown 

            title="Стадия"
            list={[{name:"", value:""}]}

          />
          {
            getInputsByType(type)
          }
        </Stack>
      </Container>
    </Box>
  );
}

export default AboutDeal;
