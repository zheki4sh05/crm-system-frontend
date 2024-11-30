import styled from "@emotion/styled";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import {
  getSearchResult,
  getSearchStatus,
  getSearchType,
} from "../app/slices/searchSlice";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import WorkerDeals from "./Workers/WorkerDeals";
import statusTypes from "../app/constants/statusTypes";
import { fetching } from "../app/util/searchType";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: "400px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function UserDealsModal({ open, title, handleClose, activeWorker }) {
  const list = useSelector(getSearchResult) || [];

  const status = useSelector(getSearchStatus);
  const type = useSelector(getSearchType);

  console.log(list);

  return (
    <BootstrapDialog aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle sx={{ m: 0, p: 1 }} id="customized-dialog-title">
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,

          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        {status == statusTypes.loading && type == fetching ? (
          <>
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          </>
        ) : list.length > 0 ? (
          <WorkerDeals list={list} activeWorker={activeWorker} />
        ) : (
          <Typography>Сделок нет</Typography>
        )}
      </DialogContent>
    </BootstrapDialog>
  );
}

export default UserDealsModal;
