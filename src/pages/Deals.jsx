import { Box, Typography } from "@mui/material";
import SearchSection from "../widgets/SearchSection";
import PageInfo from "../features/PageInfo";
import MainDropdown from "../shared/MainDropdown";
import MainBtn from "../shared/MainBtn";
import Kanban from "../features/kanban/gui/Kanban";
import kanban from "./../features/kanban/api/types";
import DialogEntityProvider from "../processes/contextProvider/api/DialogEntityProvider";
import CreateDial from "../widgets/CreatDeal/CreateDeal";
import CustomStepper from "./../features/CustomStepper";
import { memo, useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeal, getDeals, getDealsStatus } from "../app/slices/dealSlice";
import statusTypes from "../app/constants/statusTypes";
import {
  fetchGroups,
  getGroups,
  getGroupsStatus,
} from "../app/slices/groupsSlice";
import {
  fetchStages,
  getStages,
  getStagesStatus,
} from "../app/slices/stagesSlice";

import ModalWindow from "../features/modal/ModalWindow";
import GroupsControlBody from "../widgets/modal/GroupsControlBody";
import { getCompany } from "../app/slices/companySlice";

import StagesControlBody from "../widgets/modal/StagesControlBody";

const Deals = memo(function Deals() {
  const groups = useSelector(getGroups);

  useEffect(() => {
    console.log("Загрузка");
  }, []);

  const initGroup = (items) => {
    if (items.length > 0) {
      return items[0].id;
    } else {
      return  0 ;
    }
  };

  const getStagesByGroup = ()=>{
    return useSelector(getStages).filter((item) => {
      return item.groupId == activeGroup;
    });
  }


  const [activeGroup, setActiveGroup] = useState(initGroup(groups));

  const [deals,setDeals] = useState(useSelector(getDeals))


  const handleChangeGroup = (id) => {
    setActiveGroup(groups.filter((item) => item.id === id)[0].id);
  };
  
  const dispatch = useDispatch();

  let company = useSelector(getCompany);

  let groupsStatus = useSelector(getGroupsStatus);
  let stagesStatus = useSelector(getStagesStatus);
  let dealsStatus = useSelector(getDealsStatus);

  function makeRequest() {}

  //do not delete
  // useEffect(()=>{

  //   if(groupsStatus===statusTypes.idle){

  //     dispatch(fetchGroups({companyId:company.id}))

  //   }
  //   if(stagesStatus===statusTypes.idle){
  //     dispatch(fetchStages({companyId:company.id}))
  //   }

  //   dispatch(fetchDeal())

  // }, [])



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
            <SearchSection>
              <CustomStepper buttonText={"Создать"} />
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
              <MainDropdown
                title={"Группа"}
                list={groups}
                changeHandler={handleChangeGroup}
              />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", justifyContent: "start" }}>
                <Typography
                  variant="caption"
                  sx={{ display: "block",mb:"6px" }}
                  
                >
                  Управление
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: "20px" }}>
                <ModalWindow
                  title="Управление группами"
                  btnText={"Группы"}
                  handleSaveAction={() => {}}
                >
                  <GroupsControlBody list={groups} />
                </ModalWindow>

                <ModalWindow
                  title="Управление стадиями"
                  btnText={"Стадии"}
                  handleSaveAction={() => {}}
                >
                  <StagesControlBody stages={getStagesByGroup()} />
                </ModalWindow>
              </Box>
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{ display: "block",mb:"6px" }}
               
              >
                Метрики воронки
              </Typography>

              <MainBtn type={"info"} text="Обзор" />
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginTop: "10px", marginBottom: "10x" }}>
          <PageInfo />
        </Box>

        <Box sx={{ width: "100%", marginTop: "10px", height: "auto" }}>
          <Kanban type={kanban.deal} stages={getStagesByGroup()} deals={deals} />
        </Box>
      </Box>
      <CreateDial reloadHandler={makeRequest} />
    </DialogEntityProvider>
  );
});

export default Deals;
