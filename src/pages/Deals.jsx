import { Box, Typography } from "@mui/material";
import SearchSection from "../widgets/SearchSection";
import PageInfo from "../features/PageInfo";
import MainDropdown from "../shared/MainDropdown";
import MainBtn from "../shared/MainBtn";
import Kanban from "../features/kanban/gui/Kanban";
import kanban from "./../features/kanban/api/types";
import DialogEntityProvider from "../processes/contextProvider/api/DialogEntityProvider";
import CreateDial from "../widgets/CreatDeal/CreateDeal";
import CustomStepper from './../features/CustomStepper';

function Deals() {


  function makeRequest(){
    
   }

  const groups = [
    { value: "all", name: "Все" },
    { value: "B2B", name: "B2B" },
    { value: "B2C", name: "B2C" },
  ];

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
          <SearchSection>

          <CustomStepper buttonText={"Создать"} />

          </SearchSection>
        </Box>

        <Box
          sx={{
            flex: 1 / 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <MainDropdown
              title={"Группа"}
              list={groups}
              changeHandler={() => {}}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", justifyContent: "start" }}>
              <Typography
                variant="caption"
                sx={{ display: "block" }}
                gutterBottom={10}
              >
                Управление
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: "20px" }}>
              <MainBtn type={"settings"} text="Группы" />
              <MainBtn type={"settings"} text="Стадии" />
            </Box>

                      </Box>
                      <Box >
                      <Typography
                variant="caption"
                sx={{ display: "block" }}
                gutterBottom={10}
              >
                Метрики воронки
              </Typography>
                    
                        <MainBtn type={"info"} text="Обзор"/>
                      </Box>
        </Box>
      </Box>

      <Box sx={{ marginTop: "10px", marginBottom: "10x" }}>
        <PageInfo />
      </Box>

      <Box sx={{ width: "100%", marginTop: "10px", height: "auto" }}>
        <Kanban type={kanban.deal} />
      </Box>
    </Box>
    <CreateDial reloadHandler={makeRequest} />
    </DialogEntityProvider>
  );
}

export default Deals;
