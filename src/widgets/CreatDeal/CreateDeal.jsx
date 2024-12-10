import { memo, useContext, useEffect } from "react";
import AboutDeal from "./AboutDeal";
import AddMoreAboutDeal from "./AddMoreAboutDeal";
import CreateEntity from "../../features/CreateEntity";
import DialogContext from "../../processes/contextProvider/DialogContext";
import {initDeal, initMoreAboutDeal } from "../../app/util/initialEntity";
import { useDispatch, useSelector } from "react-redux";
import { getGroups } from "../../app/slices/groupsSlice";
import { getStages } from "../../app/slices/stagesSlice";
import { createDeal } from "../../app/slices/dealSlice";
import { getToken } from "../../app/slices/appUserSlice";

const CreateDial = memo(({ reloadHandler }) => {

  const dispatch = useDispatch()
  const token = useSelector(getToken)
  const groups = useSelector(getGroups)
  const stages = useSelector(getStages)

  const { data, getDialogResult, resetDialogContext, setDataHandler } = useContext(DialogContext);

  const handleSaveUploadedDoc = () => {
    console.log(data)
    dispatch(createDeal(

        {
          data:   {
            customerDto:{
              email:data.aboutDeal.customerDto.email,
              name:data.aboutDeal.customerDto.clientName,
              phone:data.aboutDeal.customerDto.email,
            },
            name:data.aboutDeal.customerDto.name,
            description:data.aboutDeal.customerDto.description,
            groupId:data.moreDeal.group,
            source:data.moreDeal.source,
            stageId:data.moreDeal.stage,
            type:data.moreDeal.type
          },
          token:token
        }

   
    ))


  };

  const handleSubmitAboutDeal = (newData) => {
    setDataHandler({
      ...data,
      aboutDeal: {customerDto:{ ...newData} },
    });
  };

  const handleSubmitAddMoreAboutDeal = (newData) => {
    setDataHandler({
      ...data,
      moreDeal: { ...newData },
    });
  };

  const getDataForAboutDeal = () => {
    if ("aboutDeal" in data) {
      return { ...data.aboutDeal };
    } else {
      return {
        ...initDeal()
      }

        
    }
  };

  const getDataForMoreAboutDeal = () => {
    if ("moreDeal" in data) {
      return { ...data.moreDeal };
    } else {
      return {
       ...initMoreAboutDeal()
      };
    }
  };

  const getDealType=()=>{

  }

  return (
    <CreateEntity
      stepsNames={["О сделке", "Дополнительно"]}
      stepsPages={[
        <AddMoreAboutDeal
          initialData={getDataForMoreAboutDeal()}
          handleSubmit={handleSubmitAddMoreAboutDeal}
          groups={groups}
          stages={stages}
        />,
        <AboutDeal
          handleSubmit={handleSubmitAboutDeal}
          data={getDataForAboutDeal()}
          type ={getDealType()} 
        />
        
      ]}
      name={"Создание сделки"}
      handleSaveContext={handleSaveUploadedDoc}
      getResult={getDialogResult}
      resetDialog={resetDialogContext}
    />
  );
});

export default CreateDial;
