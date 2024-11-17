import { NumberInput } from "@mui/base/Unstable_NumberInput/NumberInput";
import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Counter from "../../shared/Counter";
import MainBtn from "../../shared/MainBtn";
import { initDocument } from "../../app/util/initialEntity";
import { useSelector } from "react-redux";
import { getDocsTypes } from "../../app/slices/documentSlice";
import RadioButtonsGroup from "../../shared/RadioButtonsGroup";
import { formatDateFromTimestamp } from "../../app/util/date";

function DocumentForm({
  item = {
    ...initDocument(),
  },
  handleSave,
}) {
  const [name, setName] = useState(item.name);
  const [description, setDesc] = useState(item.description);
  const [type, setType] = useState(item.type);

  const [isEdit, setEdit] = useState(true);

  const docTypes = useSelector(getDocsTypes);

  

  const check = (item) => {
    if (
      item.name == name &&
      item.description == description &&
      item.type == type
    ) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    setEdit(check(item));
  }, [name, description, type]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };
  const handleTypeChange = (value) => {
    setType(value);
  };

  const handleClick = () => {
    handleSave({
      ...item,
      name,
      description,
      type,
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <TextField
        label={"Название документа"}
        variant="outlined"
        value={name}
        onChange={handleNameChange}
      />

      <TextField
        label={"Описание документа"}
        variant="outlined"
        value={description}
        onChange={handleDescChange}
      />

      <RadioButtonsGroup
        title={"Тип документа"}
        items={docTypes}
        handleChange={handleTypeChange}
        initialValue={type}
      />

      <Box sx={{ display: "flex", flexDirection: "row", gap:5 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body2" gutterBottom>
            Размер
          </Typography>
          <Typography variant="body1" gutterBottom>
            {item.size}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body2" gutterBottom>
            Загружено
          </Typography>
          <Typography variant="body1" gutterBottom>
            { formatDateFromTimestamp(item.date)}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body2" gutterBottom>
            Формат
          </Typography>
          <Typography variant="body1" gutterBottom>
            {item.format}
          </Typography>
        </Box>
      </Box>

      <MainBtn
        type={"btn"}
        text={"Сохранить"}
        btnClickHandler={handleClick}
        disable={isEdit}
      />
    </Box>
  );
}

export default DocumentForm;
