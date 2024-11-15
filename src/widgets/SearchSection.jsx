import { Box } from "@mui/material";
import SearchBox from "../shared/SearchBox";

function SearchSection({children}) {
    return ( 
    
    <Box sx={{
        display: "flex",
        flexDeirection: "row",
        bgcolor: "#F0F8FF",
        p: 1.5,
        borderRadius: "3px",
        alignItems: "center",
        gap:"20px",
      
      }} >

        {children}

    

      <SearchBox primaryText={"Найти сделки..."} />


    </Box> 
    

);
}

export default SearchSection;