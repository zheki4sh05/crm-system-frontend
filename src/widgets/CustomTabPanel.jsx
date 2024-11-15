import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

function CustomTabPane(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
              {children}
          </Box>
        )}
      </div>
    );
  }
  
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function CustomTabPanel({content, children}) {
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
  
              {
                  content.tabNames.map((name,index)=>(
                      <Tab key={index} label={name} {...a11yProps(index)} />
                  ))
              }
  

          </Tabs>
        </Box>
  
            {
              children.map((item,index)=>(
                  <CustomTabPane key={index} value={value} index={index}>
                  {item}
                </CustomTabPane>
              ))
            }
  
     
      </Box>
    );
  }