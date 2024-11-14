import { Dialog, DialogActions, DialogTitle, IconButton, Typography } from "@mui/material";
import CustomTable from "./CustomTable";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import styled from "@emotion/styled";
import { useState } from "react";
import OrderFrom from "../CreatDeal/OrderForm";
function CustomTableWrapperModal({ data, title = "", sum }) {

  const [state,setState] = useState({list:[], listData:[]})

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const handleOpenUserDialog = (data) => {
    setState(data)
    handleClickOpen();
   
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography>

    Общая сумма сделки: {sum()}

      </Typography>

      <CustomTable
        handleOpenDialog={handleOpenUserDialog}
        rows={data}
        tableTitle="Товары"
        tableHeadCells={[
          {
            id: "id",
            numeric: true,
            disablePadding: true,
            label: "ID",
          },
          {
            id: "name",
            numeric: false,
            disablePadding: false,
            label: "Название",
          },
          {
            id: "count",
            numeric: true,
            disablePadding: false,
            label: "Количество",
          },
          {
            id: "code",
            numeric: false,
            disablePadding: false,
            label: "Код товара",
          },
          {
            id: "price",
            numeric: true,
            disablePadding: false,
            label: "Цена за шт.",
          },
        ]}
      />

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ zIndex: 10000000 }}
      >
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

            <OrderFrom item={state.listData[0]} handleSave={()=>{}}/>

        </DialogContent>
        
      </BootstrapDialog>
    </>
  );
}

export default CustomTableWrapperModal;
