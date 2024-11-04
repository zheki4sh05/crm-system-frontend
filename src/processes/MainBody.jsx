import { Box } from "@mui/material";

function MainBody({ children }) {
  return (
    <Box sx={{ 

    height:"100%",
    bgcolor: "#ABD7FF", 
    m: 2, 
    borderRadius: "5px",
    boxShadow:1,
    padding:2,
    boxSizing:"border-box"
    }}>
      {children}
    </Box>
  );
}

export default MainBody;