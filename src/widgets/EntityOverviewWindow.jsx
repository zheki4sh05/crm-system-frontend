import { Box } from "@mui/material";

import { memo, useContext, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DialogContext from "../processes/contextProvider/DialogContext";
import DealOverview from "../features/overview/DealOverview";
import DocOverview from "../features/overview/DocOverview";
const EntityOverviewWindow = memo(({ title, accordionBodyType }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { data } = useContext(DialogContext);



  function getContent(type, data) {
    switch (type) {
    
      case "deal": {
        return <DealOverview deal={data} />;
      }
      case "docs": {
        return <DocOverview doc={data} />;
      }
      case "tasks":{
          return <TaskOverview task={data} />
      }
     
    }
  }
  function getAccordionTitle(type, data) {
    switch (type) {
      case "project": {
        return (
          <>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {data.name}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {data.description}
            </Typography>
          </>
        );
      }
      case "document": {
        return (
          <>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {data.name}.{data.format}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {data.access}
            </Typography>
          </>
        );
      }
      case "staff": {
        return (
          <>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {data.firstname} {data.lastname}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {data.email}
            </Typography>
          </>
        );
      }
      case "assignment":{
        return(
          <>
          
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {data.name} {data.stageName}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {data.statusName}
            </Typography>


          </>
        )
      }
      case "myTasks" :{
        return(
          <>
          
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {data.name} {data.stageName}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {data.statusName}
            </Typography>


          </>
        )
      }
    }
  }

  return (
    <Box sx={{ mt: 2, maxWidth: "90%", pl: 2 }}>
      <Typography>
        Выбранные {title}: {data.listData.length}
      </Typography>

      <div>
        {data.listData.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === "panel".concat(index)}
            onChange={handleChange("panel".concat(index))}
            sx={{ backgroundColor: "#ABD7FF" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
              key={index}
            >
              {getAccordionTitle(accordionBodyType, item)}
            </AccordionSummary>
            <AccordionDetails>
              {getContent(accordionBodyType, item)}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Box>
  );
});

export default EntityOverviewWindow;