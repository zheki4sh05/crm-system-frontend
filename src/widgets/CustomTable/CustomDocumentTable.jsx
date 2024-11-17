import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { formatDateFromTimestamp } from './../../app/util/date';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { getDocsTypes } from '../../app/slices/documentSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';


function CustomDocumentTable({list, handleDownload,handleEdit, handleDelete}) {

 
  
  const docTypes = useSelector(getDocsTypes)

  
  const getNameByTypeNumber=(number)=>{
    return docTypes.filter((item)=>item.id==number)[0].value
  }
  
 const clickHandleEdit=(id)=>{
  handleEdit(id)
 }

 const clickHandleDownload=(id)=>{
  handleDownload(id)
 }

 const clickHandleDelete=(id)=>{
  handleDelete(id)
 }

    return (  

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell align="right">Описание</TableCell>
              <TableCell align="right">Тип</TableCell>
              <TableCell align="right">Размер</TableCell>
              <TableCell align="right">Загружено</TableCell>
              <TableCell align="right">Формат</TableCell>
      
              <TableCell align="right">Скачать</TableCell>
              <TableCell align="right">Редактировать</TableCell>
              <TableCell align="right">Удалить</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{getNameByTypeNumber(row.type)}</TableCell>
                <TableCell align="right">{row.size}</TableCell>
                <TableCell align="right">{formatDateFromTimestamp(row.date)}</TableCell>
                <TableCell align="right">{row.format}</TableCell>

                <TableCell align="right"><IconButton onClick={()=>clickHandleDownload(row.id)} ><DownloadIcon sx={{ color: "#3CB371" }}/></IconButton></TableCell>
                <TableCell align="right"><IconButton onClick={()=>clickHandleEdit(row.id)} ><EditIcon/></IconButton></TableCell>
                <TableCell align="right"><IconButton onClick={()=>clickHandleDelete(row.id)} ><DeleteIcon sx={{ color: "#DC143C" }} /></IconButton></TableCell>
           
              </TableRow>
            ))}
          </TableBody>
        </Table>

     


      </TableContainer>

    );
}

export default CustomDocumentTable;