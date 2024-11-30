import { Box } from "@mui/material";

import DialogEntityProvider from "../processes/contextProvider/api/DialogEntityProvider";
import SearchSection from "../widgets/SearchSection";
import CustomStepper from "../features/CustomStepper";
import UploadDocument from "../widgets/UploadDocument/UploadDocument";
import { useSelector } from "react-redux";

import DocumentsTable from "../widgets/DocumentsTable";
import PageInfo from "./../features/PageInfo";
import { getDocs } from "../app/slices/documentSlice";

function Docs() {
  const docs = useSelector(getDocs);

  const makeRequest = (data) => {};

  return (
    <DialogEntityProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          maxWidth: "1400px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            gap: "30px",
          }}
        >
          <Box sx={{ flex: 1 / 2 }}>
            <SearchSection title={"Найти документ"}>
              <CustomStepper buttonText={"Загрузить"} />
            </SearchSection>
          </Box>
        </Box>

        <Box sx={{ marginTop: "10px", marginBottom: "10x" }}>
          <PageInfo />
        </Box>

        <Box sx={{ width: "100%", marginTop: "10px", height: "auto" }}>
          <DocumentsTable data={docs} />
        </Box>
      </Box>

      <UploadDocument reloadHandler={makeRequest} />
    </DialogEntityProvider>
  );
}

export default Docs;
