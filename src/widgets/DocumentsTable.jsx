import { Box } from "@mui/material";
import CustomDocumentTable from "./CustomTable/CustomDocumentTable";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import DocumentForm from "./UploadDocument/DocumentForm";
import { useState } from "react";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
function DocumentsTable({data}) {


    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        "& .MuiDialogContent-root": {
          padding: theme.spacing(2),
        },
        "& .MuiDialogActions-root": {
          padding: theme.spacing(1),
        },
      }));
    
      const [open, setOpen] = useState(false);
    
      const handleClose = () => {
        setOpen(false);
      };
    
const [id,setId] = useState(0)



 const handleDownload=(id)=>{
    
 }

 const handleDelete=(id)=>{

 }

 const handleEdit=(id)=>{
    setId(id)
    setOpen(true);
 }

 const handleSave=(data)=>{
        console.log(data)
 }




return ( <Box>

        <CustomDocumentTable list={data} handleDownload={handleDownload} handleDelete={handleDelete} handleEdit={handleEdit}/>

  
        <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ zIndex: 10000000 }}
      >
        <DialogTitle sx={{ m: 0, p: 1 }} id="customized-dialog-title">
            Редактирвоние
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

            <DocumentForm item={data.filter(item=>item.id==id)[0]} handleSave={handleSave} />

        </DialogContent>
        
      </BootstrapDialog>
    </Box> );
}

export default DocumentsTable;