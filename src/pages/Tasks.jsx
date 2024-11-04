import { Box, Typography } from "@mui/material";
import DialogEntityProvider from "../processes/contextProvider/api/DialogEntityProvider";
import SearchSection from "../widgets/SearchSection";
import CustomStepper from "../features/CustomStepper";
import MainBtn from "../shared/MainBtn";
import PageInfo from "../features/PageInfo";
import CreateTask from "../widgets/CreateTask/CreateTask";
import MyTaskTable from "../widgets/CreateTask/MyTaskTable";

function Tasks() {
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
             
    
             
                          <Box >
                          <Typography
                    variant="caption"
                    sx={{ display: "block" }}
                    gutterBottom={10}
                  >
                    Метрики задач
                  </Typography>
                        
                            <MainBtn type={"info"} text="Обзор"/>
                          </Box>
            </Box>
          </Box>
    
          <Box sx={{ marginTop: "10px", marginBottom: "10x" }}>
            <PageInfo />
          </Box>
    
          <Box sx={{ width: "100%", marginTop: "10px", height: "auto" }}>
           
    
       
          <MyTaskTable/>
   
              
          </Box>
        </Box>
        <CreateTask reloadHandler={makeRequest} />
        </DialogEntityProvider>


     );
}

export default Tasks;