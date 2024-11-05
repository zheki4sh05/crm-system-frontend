import {
  Box,
  Container,
  Divider,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import MainDropdown from "./../../shared/MainDropdown";
import { useContext, useEffect, useState } from "react";
import MainBtn from './../../shared/MainBtn';
import DialogContext from './../../processes/contextProvider/DialogContext';

function AboutDeal() {

  const { data, setDataHandler } = useContext(DialogContext);

  const [change, setChange] = useState(false)

  const [name, setName] = useState("");

  const [desc, setDesc] = useState("");

  const [group, setGroup] = useState("");

  const [stage, setStage] = useState({});

  const [clientName, setClientName] = useState("");
  
  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const handleNameChange = (event) => {
    setChange(true)
    setName(event.target.value);
  };

  const handleDescChange = (event) => {
    setChange(true)
    setDesc(event.target.value);
  };
  const changeGroupHandler = (group) => {
    setChange(true)
    setGroup(group);
  };

  const handleStageChange=(event)=>{
    setChange(true)
      setStage(event.target.value)
  }

  const handleClientNameChange=(event)=>{
    setChange(true)
    setClientName(event.target.value)
  }

  const handleClientEmailChange=(event)=>{
    setChange(true)
    setEmail(event.target.value)
  }
  const handleClientPhoneChange=(event)=>{
    setChange(true)
    setPhone(event.target.value)
  }

  const getInputsByType = (group) => {
    let label1;
    let label2;

    switch (group) {
      case "B2C": {
        label1 = "ФИО клиента";
        label2 = "Email клиента";
        break;
      }
      case "B2G": {
        label1 = "Название организации";
        label2 = "Email организации";
        break;
      }
      case "B2B": {
        label1 = "Название организации";
        label2 = "Email организации";
        break;
      }
    }

    return (
      <>
        <TextField label={label1} variant="outlined" onChange={handleClientNameChange}/>
        <TextField label={label2} variant="outlined" onChange={handleClientEmailChange}/>
        <TextField label={"Номер телефона"} variant="outlined" onChange={handleClientPhoneChange}/>
      </>
    );
  };

  const handleSubmit = () => {
 console.log(name)

    setDataHandler({
      ...data,
      aboutDeal: {
       name:name,
      description: desc,
      group:group,
      stage:stage,
      clientName:clientName,
      email:email,
      phone:phone,
      },
    });
    setChange(false);
  };

  


  const checkSubmit=()=>{
    return change && name.length!=0 && group.length!=0 && stage!=null && clientName.length!=0 && (email.length!=0 || phone.length!=0)
  }

  return (
    <Box sx={{ mt: 5 }}>
      <Container maxWidth="sm">
        <Stack direction="column" spacing={2}>
          <TextField
            label={"Название сделки"}
            variant="outlined"
            onChange={handleNameChange}
            value={name}
          />
          <TextField
            label={"Описание сделки"}
            variant="outlined"
            multiline
            maxRows={4}
            onChange={handleDescChange}
            value={desc}
          />


          <MainDropdown
            title="Группа"
            list={[{ name: "B2B", value: "B2B" },{ name: "B2C", value: "B2C" },{ name: "B2G", value: "B2G" }]}
            changeHandler={changeGroupHandler}
          />

          <MainDropdown title="Стадия" list={[{ name: "", value: "" }]} changeHandler={handleStageChange}/>
          {getInputsByType(group)}

          <Box sx={{
            display:"flex",
            justifyContent:"flex-end"
          }} >

            <MainBtn
            
            btnClickHandler={handleSubmit}
            text={"Сохранить"}
            disable={!checkSubmit()}
            
            />

          </Box>
        </Stack>

      </Container>
    </Box>
  );
}

export default AboutDeal;
