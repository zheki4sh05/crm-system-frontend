import { useContext } from "react";
import DialogContext from "../processes/contextProvider/DialogContext";
import MainBtn from "../shared/MainBtn";

function CustomStepper({ buttonText }) {

    const { openDialogHandler } = useContext(DialogContext);

    return ( <MainBtn
            type={"btn"}
            
            text={buttonText}
            btnClickHandler={() => {
                openDialogHandler();
              }}

    /> );
}

export default CustomStepper;