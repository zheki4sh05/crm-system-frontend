import { Box, Typography } from "@mui/material";
import DialogEntityProvider from "../processes/contextProvider/api/DialogEntityProvider";
import SearchSection from "../widgets/SearchSection";
import CustomStepper from "../features/CustomStepper";
import { useSelector } from "react-redux";
import PageInfo from "./../features/PageInfo";
import InviteUser from "../widgets/Workers/InviteUser";
import WorkersTableView from "../widgets/Workers/WorkersTableView";
import { getWorkers } from "../app/slices/workersSlice";
import { getDeals } from "../app/slices/dealSlice";
import ModalWindow from './../features/modal/ModalWindow';
import MainDropdown from "../shared/MainDropdown";
import { useState } from "react";

function Workers() {
    const workers = useSelector(getWorkers);

  const deals = useSelector(getDeals)


  const makeRequest = (data) => {


  };

  const handleDelete=(id)=>{

  }

  const [sortType, setSortType] = useState(1);

  const sortByType = (type, list) => {
    console.log(type);
    switch (type) {
      case 1: {
        return list;
      }
      case 2: {
        return list.s;
      }
      case 3: {
        return list;
      }
    }
  };

  const changeSortTypeHandler = (value) => {
    setSortType(value);
  };


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
            <SearchSection title={"Найти сотрудника..."}>
              <CustomStepper buttonText={"Добавить"} />
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
            <Box>
              <Typography>Сортировка по кол-ву сделок</Typography>
            <MainDropdown
            changeHandler={changeSortTypeHandler}
            size="small"
            list={[
              { id: 1, name: "—" },
              { id: 2, name: "↓" },
              { id: 3, name: "↑" },
            ]}
            displayEmpty={false}
          />
            </Box>

          
           
          </Box>
        </Box>

        <Box sx={{ marginTop: "10px", marginBottom: "10x" }}>
          <PageInfo />
         
        </Box>

        <Box sx={{ width: "100%", marginTop: "10px", height: "auto" }}>
          <WorkersTableView data={sortByType(sortType, workers)} handleDelete={handleDelete} />
        </Box>
      </Box>

      <InviteUser reloadHandler={makeRequest} />
    </DialogEntityProvider>
  );
}

export default Workers;