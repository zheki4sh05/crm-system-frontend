import { Box } from "@mui/material";
import SearchBox from "../shared/SearchBox";
import PathConstants from "../shared/pathConstants";

function SearchSection({title="Найти сделки...",type,children}) {
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

    

      <SearchBox primaryText={title} type={type}/>


    </Box> 
    

);
}

export default SearchSection;