import {
  Box,
  Container,
  Stack,
} from "@mui/material";
import { useState } from "react";
import MainBtn from "../../shared/MainBtn";
import RadioButtonsGroup from "../../shared/RadioButtonsGroup";
import { useSelector } from "react-redux";
import { getDealTypes } from "../../app/slices/typeDeal";
import { getSources } from "../../app/slices/sourceSlice";

function AddMoreAboutDeal({
  handleSubmit,
  stages,
  groups,
  initialData = {
    type: "B2C",
    source: 1,
    group: 0,
    stage: 0,
  }
}) {
  const sources = useSelector(getSources)

  const dealTypes = useSelector(getDealTypes)

  const [change, setChange] = useState(false);

  const [type, setType] = useState(initialData.type);
  const [source, setSource] = useState(initialData.source);
  const [group, setGroup] = useState(initialData.group);
  const [stage, setStage] = useState(initialData.stage);

  const changeTypeHandler = (value) => {
    setChange(true);
    setType(value);

    if(group==0){
        setGroup(getGroupsByDealType(value)[0].id)
    }

    
  };

  const changeSourceHandler = (value) => {
    setChange(true);
   
    setSource(value);
  };

  const changeStageHandler = (value) => {
    setChange(true);
    setStage(value);
  };
  const handleChangeGroup = (value) => {
    setChange(true);
    setGroup(value);

    if(stage==0){
      if(value==0){
        setStage(0)
      }else{
        setStage(getStagesByGroup(value)[0].id)
      }
     
    }

  };

  const checkSubmit = () => {
    return change && type.length != 0 && source.length != 0;
  };

  const handleFormSubmit = () => {
    handleSubmit({
      type: type,
      source: source,
      group: group,
      stage: stage,
    });

    // setDataHandler({
    //     ...data,
    //     moreDeal: {
    //         type:type,
    //         source: source,
    //     },
    //   });
    setChange(false);
  };

  const getStagesByGroup = (value) => {
    console.log(value)
    if(value==0){
      return []
    }
    return stages.filter((item) => item.groupId == value);
  };

  const getGroupsByDealType = (type) => {
   
    return groups.filter((item) => item.customerType == type);
  };

  
  return (
    <Box sx={{ mt: 5 }}>
      <Container maxWidth="sm">
        <Stack direction="column" spacing={2}>
          <RadioButtonsGroup
            title={"Источник"}
            items={sources}
            handleChange={changeSourceHandler}
            initialValue={source}
          />

          <RadioButtonsGroup
            title={"Тип сделки"}
            items={dealTypes}
            handleChange={changeTypeHandler}
            initialValue={type}
          />

          {groups.length != 0 && stages.lenght!=0 ? (
            <>
              <RadioButtonsGroup
                title={"Группа"}
                items={getGroupsByDealType(type)}
                handleChange={handleChangeGroup}
                initialValue={group}
              />

              {group != 0 ?
             
              <RadioButtonsGroup
                title={"Стадия"}
                items={getStagesByGroup(group)}
                handleChange={changeStageHandler}
                initialValue={stage}
              />
              :
              null
              
              }
              
            </>
          ) : null}

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

export default AddMoreAboutDeal;
