import { Box } from "@mui/material";
import Button from "../shared/MainBtn";
import MainBtn from "../shared/MainBtn";
import SearchBox from "../shared/SearchBox";

function SearchSection() {
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

      <MainBtn text={"Создать"}/>

      <SearchBox primaryText={"Найти сделки..."} />


    </Box> 
    

);
}

export default SearchSection;