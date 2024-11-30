import { Box, Divider, Typography } from "@mui/material";
import Deal from "../../../entity/Deal";
import DEAL from "./../api/types";
import DealColumnInfo from "./DealColumnInfo";
import kanban from "./../api/types";
import MainDropdown from "../../../shared/MainDropdown";
import { getDealPrice } from "../../../app/util/deal";
import { useState } from "react";

function KanbanColumn({ deals, title, type, moveHandler,stages }) {
  const getInfoByType = (type, items) => {
    console.log(items)
    switch (type) {
      case kanban.deal: {
        return <DealColumnInfo items={items} />;
      }
    }
  };

  const [sortType, setSortType] = useState(1);

  const sortByType = (type, list) => {
    console.log(type);
    switch (type) {
      case 1: {
        return list;
      }
      case 2: {
        return list.sort((a, b) => getDealPrice(a) - getDealPrice(b));
      }
      case 3: {
        return list.sort((a, b) => getDealPrice(b) - getDealPrice(a));
      }
    }
  };

  const changeSortTypeHandler = (value) => {
    setSortType(value);
  };


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        borderRight: "dashed 2px #A9A9A9",

        padding: "0px 10px 10px 10px",
        height: "100%",
      }}
    >
      <Typography variant="subtitle1" gutterBottom sx={{ margin: "0 auto" }}>
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {getInfoByType(type, deals)}
        <Box>
          <MainDropdown
            changeHandler={changeSortTypeHandler}
            size="small"
            list={[
              { id: 1, name: "—" },
              { id: 2, name: "Цена ↓" },
              { id: 3, name: "Цена ↑" },
            ]}
            displayEmpty={false}
          />
        </Box>
      </Box>

      <Divider sx={{ margin: "5px 0 5px 0" }} />

      <Box>
        {sortByType(sortType, deals).map((item, index) => (
          <Deal key={index} type={"kanban"} deal={item} stages={stages} moveHandler={moveHandler}/>
        ))}
      </Box>
    </Box>
  );
}

export default KanbanColumn;
