import { Box } from "@mui/material";
import StatusContent from "../shared/StatusContent";
import { useDispatch, useSelector } from "react-redux";
import statusTypes from "../app/constants/statusTypes";
import { checkAll } from "../app/util/checkStatuses";
import { getUserStatus } from "../app/slices/appUserSlice";
import { fetchStats, getStatsStatus } from "../app/slices/statsSlice";
import { getCompanyStatus } from "../app/slices/companySlice,js";
function LoadingUserData() {

  const {userStatus} = useSelector(getUserStatus);
  const {companyStatus} = useSelector(getCompanyStatus);
  const {statsStatus} =useSelector(getStatsStatus)

  const dispatch = useDispatch();

  const statusesList = [userStatus,companyStatus,statsStatus]

  useEffect(() => {
    
    if (userStatus === statusTypes.idle) {
      dispatch(fetchUserData());
    }

    if (companyStatus === statusTypes.idle) {
      dispatch(fetchCompany());
    }

    if (companyStatus === statusTypes.succeeded && statsStatus===statusTypes.idle) {
        dispatch(fetchStats());
      }

   
  }, [...statusesList, dispatch]);



    return (     <Box>
        <StatusContent
          result={checkAll(statusesList)}
    
          errorDomain="any"
          errorCode={"any"}
          successText="Операция выполнена успешно!"
          failedText="Что-то пошло не так..."
          loadingType={"linear"}
          successType={"none"}
          errorType={"primary"}
        />
      </Box> );
}

export default LoadingUserData;