import { Box } from "@mui/material";

import UploadDocumentPlaceholder from "./UploadDocumentPlaceholder";
import { initDocument } from './../../app/util/initialEntity';
import { memo, useContext } from "react";
import DialogContext from "../../processes/contextProvider/DialogContext";
import CreateEntity from './../../features/CreateEntity';
import AboutDocument from './AboutDocument';

const UploadDocument = memo(({ reloadHandler }) => {
  
    const { data, getDialogResult, resetDialogContext, setDataHandler } =
      useContext(DialogContext);
  
    const handleSaveUploadedDoc = () => {
      const formData = new FormData();

      reloadHandler()
    };
  
    const handleSubmitAboutDoc = (newData) => {
      setDataHandler({
        ...data,
        document: { about:{...newData} },
      });
    };

    const handleSubmitUpload = (newData) => {
        setDataHandler({
          ...data,
          document: { file:{...newData} },
        });
      };
  
  
    const getDataForDocument = () => {
      if ("document" in data) {
        return { ...data.document };
      } else {
        return {
          ...initDocument()
        }
  
          
      }
    };
  


    return (
      <CreateEntity
        stepsNames={["Данные по документу", "Загрузить документ"]}
        stepsPages={[
          <AboutDocument
            initialData={getDataForDocument()}
            handleSubmit={handleSubmitAboutDoc}
 
          />,
          <UploadDocumentPlaceholder
            handleSubmit={handleSubmitUpload}
            
    
          />
          
        ]}
        name={"Создание сделки"}
        handleSaveContext={handleSaveUploadedDoc}
        getResult={getDialogResult}
        resetDialog={resetDialogContext}
      />
    );
  });

  export default UploadDocument;