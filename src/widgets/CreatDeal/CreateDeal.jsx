


import { memo, useContext, useEffect } from "react";
import AboutDeal from "./AboutDeal";
import AddMoreAboutDeal from "./AddMoreAboutDeal";
import CreateEntity from "../../features/CreateEntity";
import DialogContext from "../../processes/contextProvider/DialogContext";


const CreateDial = memo(({reloadHandler})=> {

    const {data, getDialogResult,resetDialogContext} = useContext(DialogContext);


  
  
 
    const handleSaveUploadedDoc=()=>{
   
      const formData = new FormData()

      
      
      }
  


  
    return (
      <CreateEntity
      stepsNames={["О сделке", "Дополнительно"]}
      stepsPages={[<AboutDeal/>, <AddMoreAboutDeal/>]}
      name={"Создание сделки"}
      handleSaveContext={handleSaveUploadedDoc}
      getResult={getDialogResult}
      resetDialog={resetDialogContext}
      />
    );
})

export default CreateDial;