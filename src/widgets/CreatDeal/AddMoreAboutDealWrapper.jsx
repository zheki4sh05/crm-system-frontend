import { Box } from "@mui/material";
import AddMoreAboutDeal from "./AddMoreAboutDeal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getGroups } from "../../app/slices/groupsSlice";
import { getStages } from "../../app/slices/stagesSlice";

function AddMoreAboutDealWrapper({ data }) {
  const [groups, setGroups] = useState(useSelector(getGroups));

  const [stages, setStages] = useState(useSelector(getStages));

  const handleAboutSubmit = (data) => {

        console.log(data)

  };


  return (
    <Box>
      <AddMoreAboutDeal
        handleSubmit={handleAboutSubmit}
        stages={stages}
        groups={groups}
        initialData={{
          type: "B2C",
          source: {id:1,name:"Интернет-магазин" },
          group: stages.filter(item=>item.id==data.stageId)[0].groupId,
          stage: data.stageId,
        }}
      />
    </Box>
  );
}

export default AddMoreAboutDealWrapper;
