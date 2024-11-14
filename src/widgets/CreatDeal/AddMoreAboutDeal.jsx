import { Box, Container, Stack } from "@mui/material";
import { useContext, useState } from "react";
import DialogContext from "../../processes/contextProvider/DialogContext";
import MainBtn from "../../shared/MainBtn";
import MainDropdown from "../../shared/MainDropdown";

function AddMoreAboutDeal({handleSubmit}) {
    const { data, setDataHandler } = useContext(DialogContext);

    const [change, setChange] = useState(false)

    const [type, setType] = useState("")
    const [source,setSource] = useState("")


    const changeTypeHandler=(value)=>{
        setChange(true)
        setType(value)

    }

    
    const changeSourceHandler=(value)=>{
        setChange(true)
        setSource(value)
    }

    
  const checkSubmit=()=>{

    return change && type.length!=0 && source.length!=0 
  }

  const handleFormSubmit=()=>{

    handleSubmit({
      type:type,
      source: source,
  })

    // setDataHandler({
    //     ...data,
    //     moreDeal: {
    //         type:type,
    //         source: source,
    //     },
    //   });
      setChange(false);
  }

    return ( 
    
        <Box sx={{ mt: 5 }}>
        <Container maxWidth="sm">
          <Stack direction="column" spacing={2}>
           
  
            <MainDropdown
              title="Тип сделки"
              list={[{ name: "Не выбран", value: "Не выбран" },{ name: "B2C", value: "B2C" },{ name: "B2G", value: "B2G" }]}
              changeHandler={changeTypeHandler}
            />

            
            <MainDropdown
              title="Источник"
              list={[{ name: "Не выбран", value: 1 },{ name: "B2C", value: "B2C" },{ name: "B2G", value: "B2G" }]}
              changeHandler={changeSourceHandler}
            />
  
          
            <Box sx={{
              display:"flex",
              justifyContent:"flex-end"
            }} >
  
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

export default AddMoreAboutDeal;