import { Box, Typography } from "@mui/material";
import SearchSection from "../widgets/SearchSection";
import PageInfo from "../features/PageInfo";
import MainDropdown from "../shared/MainDropdown";
import MainBtn from "../shared/MainBtn";

function Deals() {
  const groups = [
    { value: "all", name: "Все" },
    { value: "B2B", name: "B2B" },
    { value: "B2C", name: "B2C" },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "30px",
         
        }}
      >
        <Box sx={{ flex:1/2 }}>
          <SearchSection />
        </Box>

        <Box sx={{ flex:1/2, display:"flex",justifyContent:"space-between",alignItems:"center" }}>

            <Box>
                
            
          <MainDropdown
            title={"Группа"}
            list={groups}
            changeHandler={() => {}}
          />
          </Box>

          <Box sx={{display:"flex", flexDirection:"column"}} >
            <Box sx={{display:"flex", justifyContent:"center"}} >
            <Typography variant="caption" sx={{ display: 'block' }} gutterBottom={"10px"}>
                Управление
                </Typography>

            </Box>
                  
                <Box sx={{display:"flex",gap:"20px"}}>

                <MainBtn type={"settings"} text="Группы"/>
                <MainBtn type={"settings"} text="Стадии"/>
                </Box>

          </Box>

         



        </Box>
    
      </Box>

      <Box sx={{ marginTop: "10px", marginBottom: "10x" }}>
        <PageInfo />
      </Box>
    </Box>
  );
}

export default Deals;
