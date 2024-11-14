import { NumberInput } from "@mui/base/Unstable_NumberInput/NumberInput";
import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Counter from "../../shared/Counter";
import MainBtn from "../../shared/MainBtn";

function OrderFrom({
  item = {
    id: 0,
    name: "",
    count: 0,
    code: "",
    dealId: 0,
    price: 0.0,
  },
  handleSave,
}) {
  const [name, setName] = useState(item.name);
  const [count, setCount] = useState(item.count);
  const [code, setCode] = useState(item.code);
  const [price, setPrice] = useState(item.price);

  const [isEdit, setEdit] = useState(true);

  const check = (item) => {
    if (
      item.name == name &&
      item.count == count && 
      item.price == price &&
      item.code == code
    ) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    setEdit(check(item));
  }, [name, count, code, price]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCountChange = (value) => {
    setCount(value);
  };
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleClick = () => {
    handleSave({
      ...item,
      name,
      count,
      price,
      code
    });
  };

  function restrict(test) {
    if (test.length === 1) {
      if (test[0] !== "-" && isNaN(test[0]) && test[0] !== ".") return false;
    } else if (test.length === 2) {
      if (isNaN(test) && test !== "-.") return false;
    } else {
      if (isNaN(test)) return false;
    }
    return true;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column",gap:"20px" }}>
      <TextField
        label={"Название товара"}
        variant="outlined"
        value={name}
        onChange={handleNameChange}
      />
      <Counter
      
      handleUpdate={handleCountChange}
      defaultValue={item.count}
      title={"Кол-во товаров (шт.)"}
      />

      <TextField
        label={"Цена за шт."}
         variant="outlined"
        value={price}
        onChange={(event) => {
          if (restrict(event.target.value)) {
            handlePriceChange(event);
          }
        }}
      />
      <TextField
        label={"Код товара"}
        variant="outlined"
        value={code}
        onChange={handleCodeChange}
      />

      <MainBtn type={"btn"} text={"Сохранить"} btnClickHandler={handleClick} disable={isEdit}/>
    </Box>
  );
}

export default OrderFrom;
