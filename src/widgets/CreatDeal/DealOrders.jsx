import { Box, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CustomTable from "../CustomTable/CustomTable";
import CustomTableWrapperModal from "../CustomTable/CustomTableWrapperModal";
import MainBtn from "../../shared/MainBtn";
import styled from "@emotion/styled";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import OrderFrom from "./OrderForm";
function DealOrders({data,title,getDealTotalPrice}) {

  const handleOrderAdd=(newOrder)=>{
      console.log(newOrder)
  }

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>

      <CustomTableWrapperModal data={data.orderList} title={title}  sum={getDealTotalPrice}/>
      <MainBtn type={"btn"} text={"Добавить"} btnClickHandler={handleClickOpen}/>
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

            <OrderFrom handleSave={handleOrderAdd}/>

        </DialogContent>
        
      </BootstrapDialog>
    </Box>
  );
}

export default DealOrders;
