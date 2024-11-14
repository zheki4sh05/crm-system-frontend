import {
  Box,
  Card,
  CardActions,
  CardContent,
  Drawer,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import MainBtn from "./../shared/MainBtn";
import MainDropdown from "../shared/MainDropdown";
import { useCallback, useMemo, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CustomTabPanel from "../widgets/CustomTabPanel";
import { formatDateFromTimestamp } from "../app/util/date";
import { getDealPrice } from "../app/util/deal";
import AboutDeal from "../widgets/CreatDeal/AboutDeal";
import CustomTableWrapperModal from "./../widgets/CustomTable/CustomTableWrapperModal";
import DealOrders from "./../widgets/CreatDeal/DealOrders";
import ToDoList from "../widgets/CreatDeal/ToDoList";
import DealTasks from "../widgets/CreatDeal/DealTasks";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const handleUpdateAboutDeal = (newData) => {};

const handleOrderAdd = (newOrder) => {};

function Deal({ type, deal, moveHandler, stages }) {
  const useApi = () => {
    return getDealPrice(deal);
  };

  const getDealTotalPrice = useMemo(() => {
    return useApi;
  }, []);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "90vw", zIndex: 10000 }}
      role="presentation"

      // onClick={toggleDrawer(anchor, false)}
    >
      <Box sx={{ ml: 2 }}>
        <Grid2 container spacing={2}>
          <Grid2 xs={1}>
            <Stack direction="row">
              <IconButton
                sx={{ mt: 1.5, ml: 1 }}
                onClick={toggleDrawer(anchor, false)}
              >
                <CloseIcon />
              </IconButton>
            </Stack>
          </Grid2>
          <Grid2 xs={4}>
            <Typography sx={{ mt: 2 }} variant="h6" gutterBottom>
              Сделка
            </Typography>
          </Grid2>
          <Grid2 xs={4}></Grid2>
        </Grid2>
        <Grid2 container spacing={1}>
          <Grid2 xs={8}>
            <CustomTabPanel
              content={{
                tabNames: [
                  "Данные по сделке",
                  "Товары",
                  "Задачи",
                  "Дополнительно",
                ],
              }}
            >
              <Box>
                <AboutDeal
                  data={deal}
                  handleSubmit={handleUpdateAboutDeal}
                  groupId={stages[0].groupId}
                  stages={stages}
                  showGroup={false}
                />
              </Box>
              <Box>
                <DealOrders
                  data={deal}
                  title="Редактирование товара"
                  getDealTotalPrice={getDealTotalPrice}
                />
               
              </Box>
              <Box>
                <DealTasks data={deal}/>

                
              </Box>
            </CustomTabPanel>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );

  const getKanbanCard = (deal, handler, moveHandler, stages) => {
    const chnageHandler = (newStageId) => {
      moveHandler({ ...deal, stageId: newStageId });
    };

    return (
      <>
        <CardContent sx={{ paddingBottom: "0px" }}>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {deal.name}
          </Typography>

          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            Цена: {getDealTotalPrice()}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {deal.customerDto.lastname} {deal.customerDto.name}
            <br />
          </Typography>
          <Typography variant="body2" gutterBottom>
            С {formatDateFromTimestamp(new Date(deal.started).toDateString())}
          </Typography>

          <Typography variant="body2">Задач: {deal.tasks.length}</Typography>
        </CardContent>
        <CardActions>
          <MainBtn
            text={"Открыть"}
            config={{ size: "small" }}
            variant={"text"}
            btnClickHandler={handler("right", true)}
          />

          <MainDropdown
            list={stages}
            size="small"
            changeHandler={chnageHandler}
            defaultIndex={stages.indexOf(
              stages.filter((item) => item.id == deal.stageId)[0]
            )}
          />
        </CardActions>
      </>
    );
  };

  if (type == "kanban") {
    return (
      <>
        <Box sx={{ minWidth: 230 }}>
          <Card variant="outlined" sx={{ mb: "10px" }}>
            {getKanbanCard(deal, toggleDrawer, moveHandler, stages)}
          </Card>
        </Box>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          sx={{ zIndex: 10000 }}
        >
          {list("right")}
        </Drawer>
      </>
    );
  }
}

export default Deal;
