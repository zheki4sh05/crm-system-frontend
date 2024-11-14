import { memo, useContext, useEffect } from "react";
import AboutDeal from "./AboutDeal";
import AddMoreAboutDeal from "./AddMoreAboutDeal";
import CreateEntity from "../../features/CreateEntity";
import DialogContext from "../../processes/contextProvider/DialogContext";

const CreateDial = memo(({ reloadHandler }) => {
  const { data, getDialogResult, resetDialogContext, setDataHandler } =
    useContext(DialogContext);

  const handleSaveUploadedDoc = () => {
    const formData = new FormData();
  };

  const handleSubmitAboutDeal = (newData) => {
    setDataHandler({
      ...data,
      aboutDeal: { ...newData },
    });
  };

  const handleSubmitAddMoreAboutDeal = (newData) => {};

  const getDataForAboutDeal = () => {
    if ("aboutDeal" in data) {
      return { ...data.aboutDeal };
    } else {
      return {
        name: "",
        description: "",
        group: "",
        stage: {},
        clientName: "",
        email: "",
        phone: "",
      };
    }
  };

  const getDataForMoreAboutDeal = () => {
    if ("moreDeal" in data) {
      return { ...data.moreDeal };
    } else {
      return {
        type: "",
        source: "",
      };
    }
  };

  return (
    <CreateEntity
      stepsNames={["О сделке", "Дополнительно"]}
      stepsPages={[
        <AboutDeal
          handleSubmit={handleSubmitAboutDeal}
          data={getDataForAboutDeal()}
        />,
        <AddMoreAboutDeal
          data={getDataForMoreAboutDeal()}
          handleSubmit={handleSubmitAddMoreAboutDeal}
        />,
      ]}
      name={"Создание сделки"}
      handleSaveContext={handleSaveUploadedDoc}
      getResult={getDialogResult}
      resetDialog={resetDialogContext}
    />
  );
});

export default CreateDial;
