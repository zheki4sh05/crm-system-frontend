import { Box } from "@mui/material";
import AddFiles from "./AddFile";

function UploadDocumentPlaceholder({handleSubmit}) {
    return ( 

        <Box>
        <AddFiles
            required={true}
            handleUpload={handleSubmit}

        />
    </Box> 

     );
}

export default UploadDocumentPlaceholder;