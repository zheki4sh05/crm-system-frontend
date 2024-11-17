import { Box, Container, Stack, TextField } from "@mui/material";
import { useState } from "react";
import MainBtn from "../../shared/MainBtn";
import RadioButtonsGroup from "../../shared/RadioButtonsGroup";
import { useSelector } from "react-redux";
import { getDocsTypes } from "../../app/slices/documentSlice";

function AboutDocument({ initialData, handleSubmit }) {
  const [change, setChange] = useState(false);

  const [name, setName] = useState(initialData.name);

  const [desc, setDescription] = useState(initialData.description);

  const [type, setType] = useState(initialData.type);

  const handleNameChange = (event) => {
    setChange(true);
    setName(event.target.value);
  };

  const handleDescChange = (event) => {
    setChange(true);
    setDescription(event.target.value);
  };

  const handleTypeChange = (event) => {
    setChange(true);
    setType(event.target.value);
  };

  const handleFormSubmit = () => {
    handleSubmit({
      name: name,
      description: desc,
      type: type,
    });
    setChange(false);
  };

  const checkSubmit = () => {
    return (
      change &&
      name.length != 0 &&
      name != initialData.name &&
      type.length != 0 &&
      type != initialData.type &&
      desc.length != 0 &&
      desc != initialData.description
    );
  };

  const docTypes=useSelector(getDocsTypes)

  return (
    <Box sx={{ mt: 5 }}>
      <Container maxWidth="sm">
        <Stack direction="column" spacing={2}>
          <TextField
            label={"Название документа"}
            variant="outlined"
            onChange={handleNameChange}
            value={name}
          />
          <TextField
            label={"Описание описание"}
            variant="outlined"
            multiline
            maxRows={4}
            onChange={handleDescChange}
            value={desc}
          />
           <RadioButtonsGroup
            title={"Тип документа"}
            items={docTypes}
            handleChange={handleTypeChange}
            initialValue={type !=0 ? type : docTypes[0].id}
          />
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

export default AboutDocument;
