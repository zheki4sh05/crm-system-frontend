import { Box, LinearProgress } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import statusTypes from "../app/constants/statusTypes";

import { controlStatus, getToken } from "../app/slices/appUserSlice";

import {
  fetchCompany,
  getCompany,
  getCompanyStatus,
} from "../app/slices/companySlice";
import { useEffect } from "react";
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
import { fetchDeal, getDeals, getDealsStatus } from "../app/slices/dealSlice";
function LoadingUserData() {
  const companyStatus = useSelector(getCompanyStatus);
  const groupsStatus = useSelector(getGroupsStatus);
  const stageStatus = useSelector(getStagesStatus);
  const dealStatus = useSelector(getDealsStatus);

  const company = useSelector(getCompany);
  const groups = useSelector(getGroups);
  const stages = useSelector(getStages);
  const deals = useSelector(getDeals);
  const token = useSelector(getToken);

  const dispatch = useDispatch();

  // const statusesList = [userStatus,companyStatus,statsStatus]
  const statusesList = [companyStatus];

  const check = () => {
    if (
      companyStatus == statusTypes.succeeded &&
      groupsStatus == statusTypes.succeeded &&
      stageStatus == statusTypes.succeeded &&
      dealStatus == statusTypes.succeeded
    ) {
      dispatch(controlStatus(statusTypes.succeeded));
    }
  };

  useEffect(() => {
    // if (userStatus === statusTypes.idle) {
    //   dispatch(fetchUserData());
    // }

    if (companyStatus === statusTypes.idle) {
      dispatch(fetchCompany({ token }));
    }

    // if (companyStatus === statusTypes.succeeded && statsStatus===statusTypes.idle) {
    //     dispatch(fetchStats());
    //   }
  }, []);

  useEffect(() => {
    if (companyStatus == statusTypes.succeeded) {
      if (groupsStatus === statusTypes.idle && groups.length == 0) {
        dispatch(
          fetchGroups({
            token: token,
            data: {
              companyId: company.id,
            },
          })
        );
      }
    }

    if (companyStatus == statusTypes.succeeded) {
      if (stageStatus === statusTypes.idle && stages.length == 0) {
        dispatch(
          fetchStages({
            token: token,
            data: {
              companyId: company.id,
            },
          })
        );
      }
      if (dealStatus === statusTypes.idle && deals.length == 0) {
        dispatch(
          fetchDeal({
            token: token,
          })
        );
      }
    }

    check();
  }, [companyStatus, groupsStatus, stageStatus, dealStatus]);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <LinearProgress />
    </Box>
  );
}

export default LoadingUserData;
