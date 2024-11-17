import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import MainBtn from "./MainBtn";
import { useState } from "react";
import {
  Backdrop,
  Box,
  CircularProgress,
  Drawer,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CustomTabPanel from "../widgets/CustomTabPanel";
import { useDispatch, useSelector } from "react-redux";

import statusTypes from "../app/constants/statusTypes";
import CloseIcon from "@mui/icons-material/Close";
import { controlSearchStage, getSearchResult, getSearchStatus, setSearcResult } from "../app/slices/searchSlice";


export default function SearchBox({ primaryText, type}) {
  const [searchData, setSearchData] = useState("");

  const searchState = useSelector(getSearchStatus);

  const dispatch = useDispatch();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleSearchChange = (event) => {
    setSearchData(event.target.value.trim());
  };

  function handleSearch() {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(setSearcResult([1]));
        resolve();
      }, 4000);
    });
  }

  

  const searchClickHandler = () => {
    if (searchData.length != 0 && searchData != "") {

      dispatch(controlSearchStage(statusTypes.loading));
      handleSearch().then(() => {
        dispatch(controlSearchStage(statusTypes.succeeded));
      });
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const handleState = (open) => {
    setState({ ...state, right: open });
  };

  React.useEffect(() => {
    if (searchState === statusTypes.succeeded) {
      handleState(true);
    }
  }, [searchState]);

  const list = (anchor) => (
    <Box
      sx={{ width: "90vw", zIndex: 10000 }}
      role="presentation"

      // onClick={toggleDrawer(anchor, false)}
    >
      <Box sx={{ ml: 2 }}>
        <Grid2 container spacing={2}>
          <Grid2 item xs={1}>
            <Stack direction="row">
              <IconButton
                sx={{ mt: 1.5, ml: 1 }}
                onClick={toggleDrawer(anchor, false)}
              >
                <CloseIcon />
              </IconButton>
            </Stack>
          </Grid2>
          <Grid2 item xs={4}>
            <Typography sx={{ mt: 2 }} variant="h6" gutterBottom>
              Результат поиска
            </Typography>
          </Grid2>
          <Grid2 item xs={4}></Grid2>
        </Grid2>
        <Grid2 container spacing={1}>
          <Grid2 item xs={8}>
          <Box>
                <div>гыгыгы</div>
              </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );

  const getContentBySearchType = (searchState) => {
    if (searchState === statusTypes.loading) {
      console.log(searchState);
      return (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      );
    } else if (
      searchState === statusTypes.idle ||
      searchState === statusTypes.succeeded
    ) {
      return (
        <>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={primaryText}
            value={searchData}
            onChange={handleSearchChange}
            inputProps={{ "aria-label": "search google maps" }}
          />

          <MainBtn type="search" btnClickHandler={searchClickHandler} />
        </>
      );
    } else if (searchState === statusTypes.failed) {
      <>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={"Найти"}
          value={searchData}
          onChange={handleSearchChange}
          inputProps={{ "aria-label": "search google maps" }}
        />

        <MainBtn type="search" btnClickHandler={searchClickHandler} />
      </>;
    }
  };

  return (
    <Paper
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      {getContentBySearchType(searchState)}

      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        sx={{ zIndex: 10000 }}
      >
        {list("right")}
      </Drawer>
    </Paper>
  );
}
