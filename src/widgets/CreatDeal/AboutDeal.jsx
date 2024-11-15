import { Box, Container, Stack, TextField } from "@mui/material";

import MainBtn from "./../../shared/MainBtn";
import { useState } from "react";
//about deal component

function AboutDeal({
  handleSubmit,
  data,
  type
  
}) {
 

  // const groups = useSelector(getGroups);

  const [change, setChange] = useState(false);

  const [name, setName] = useState(data.name);

  const [clientName, setClientName] = useState(data.customerDto.name);
  const [lastName, setLastname] = useState(data.customerDto.lastname)
  const [surName, setSurname] = useState(data.customerDto.surname)

  const [desc, setDesc] = useState(data.description);

  // const [group, setGroup] = useState(groupId);

  // const [stage, setStage] = useState(data.stageId);

  const [email, setEmail] = useState(data.customerDto.email);

  const [phone, setPhone] = useState(data.customerDto.phone);

  const [organizationName,setOrganizationName] = useState(data.organizationName)



  const handleNameChange = (event) => {
    setChange(true);
    setName(event.target.value);
  };

  const handleDescChange = (event) => {
    setChange(true);
    setDesc(event.target.value);
  };
  // const changeGroupHandler = (group) => {
  //   setChange(true);
  //   setGroup(group);
  // };

  // const handleStageChange = (event) => {
  //   setChange(true);
  //   setStage(event.target.value);
  // };

  const handleClientNameChange = (event) => {
    setChange(true);
    setClientName(event.target.value);
  };

  const handleClientEmailChange = (event) => {
    setChange(true);
    setEmail(event.target.value);
  };
  const handleClientPhoneChange = (event) => {
    setChange(true);
    setPhone(event.target.value);
  };

  const handleClientLastNameChange=(event)=>{
    setChange(true);
    setLastname(event.target.value)
  }
  const handleClientSurnameNameChange=(event)=>{
    setChange(true);
    setSurname(event.target.value)
  }

  const handleOrganizationNameChange=(event)=>{
    setChange(true);
    setOrganizationName(event.target.value)
  }

  const getInputsByType = (type) => {
    return (
      <>
        <TextField
          label={"Имя клиента"}
          variant="outlined"
          value={clientName}
          onChange={handleClientNameChange}
        />

        <TextField
          label={"Фамилия клиента"}
          variant="outlined"
          value={lastName}
          onChange={handleClientLastNameChange}
        />
        <TextField
          label={"Отчество клиента"}
          value={surName}
          variant="outlined"
          onChange={handleClientSurnameNameChange}
        />
        <TextField
          label={"Email"}
          value={email}
          variant="outlined"
          onChange={handleClientEmailChange}
        />
        <TextField
          label={"Номер телефона"}
          variant="outlined"
          value={phone}
          onChange={handleClientPhoneChange}
        />
        {type == "B2B" || type == "B2G" ? (
          <TextField
            label={"Навание организации"}
            variant="outlined"
            value={organizationName}
            onChange={handleOrganizationNameChange}
          />
        ) : null}
      </>
    );
  };

  const handleFormSubmit = () => {
    // setDataHandler({
    //   ...data,
    //   aboutDeal: {
    //     name: name,
    //     description: desc,
    //     group: group,
    //     stage: stage,
    //     clientName: clientName,
    //     email: email,
    //     phone: phone,
    //   },
    // });

    handleSubmit({
      name: name,
      description: desc,
      clientName: clientName,
      email: email,
      phone: phone,
    });
    setChange(false);
  };

  const checkSubmit = () => {
    return (
      change &&
      name.length != 0 &&
    
      clientName.length != 0 &&
      lastName.length !=0 &&
      (email.length != 0 || phone.length != 0)
    );
  };
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

          {/* {groups.length!=0 && showGroup  ? (
            <MainDropdown
              title="Группа"
              list={groups}
              changeHandler={changeGroupHandler}
              defaultIndex={groups.indexOf(
                groups[0]
              )}
            />
          ) : null}

          {group != 0 && showGroup ? (
            <MainDropdown
              list={stages}
              size="small"
              changeHandler={handleStageChange}
              defaultIndex={stages.indexOf(
                stages.filter((item) => item.id == data.stageId)[0]
              )}
            />
          ) : null} */}

          {getInputsByType(type)}

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <MainBtn
              btnClickHandler={handleFormSubmit}
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
