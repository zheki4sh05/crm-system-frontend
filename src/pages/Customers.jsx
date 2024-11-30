import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import DialogEntityProvider from "../processes/contextProvider/api/DialogEntityProvider";
import SearchSection from "../widgets/SearchSection";
import CustomStepper from "../features/CustomStepper";
import MainBtn from "../shared/MainBtn";
import PageInfo from "../features/PageInfo";

function Customers() {
    const customers = useSelector(getCustomers);

    useEffect(() => {
      console.log("Загрузка");
    }, []);
  
    
  
    
  
  
  
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
              <SearchSection type={PathConstants.DEALS} >
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
            
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", justifyContent: "start" }}>
                  <Typography
                    variant="caption"
                    sx={{ display: "block",mb:"6px" }}
                    
                  >
                    Клиенты
                  </Typography>
                </Box>
  
                <Box sx={{ display: "flex", gap: "20px" }}>
                 
                </Box>
              </Box>
             
            </Box>
          </Box>
  
          <Box sx={{ marginTop: "10px", marginBottom: "10x" }}>
            <PageInfo />
          </Box>
  
          <Box sx={{ width: "100%", marginTop: "10px", height: "auto" }}>
            
          </Box>
        </Box>
        {/* <CreateDial reloadHandler={makeRequest} /> */}
      </DialogEntityProvider>
    );
}

export default Customers;