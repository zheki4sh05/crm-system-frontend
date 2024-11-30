import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { IconButton } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import WorkIcon from "@mui/icons-material/Work";
import ConfirmModal from "../../shared/ConfirmModal";

import { useEffect, useState } from "react";
import UserDealsModal from "../UserDealsModal";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearchedData,
  controlSearchStage,
  getSearchResult,
  getSearchStatus,
  getSearchType,
  setSearchType,
} from "../../app/slices/searchSlice";
import statusTypes from "../../app/constants/statusTypes";
import { fetching } from "../../app/util/searchType";
function WorkersTableView({ data, handleDelete }) {
  const searchResult = useSelector(getSearchStatus);
  const searchData = useSelector(getSearchResult)
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const [open2, setOpen2] = useState(false);

  const [row, setRow] = useState({});

  const type = useSelector(getSearchType);

  useEffect(() => {
    if (searchResult == statusTypes.succeeded && type == fetching) {
      setOpen2(true);
    }
  }, [searchResult]);

  const clickHandleDelete = (row) => {
    setRow(row);
    setOpen(true);
  };

  const handlerAgree = (id) => {
    handleDelete(id);
    setRow({});
    setOpen(false);
  };

  const handlerDisagree = () => {
    setRow({});
    setOpen(false);
  };

  const handleShowDeals = (row) => {
    setRow(row);

    dispatch(setSearchType(fetching));
    dispatch(controlSearchStage(statusTypes.loading));

    //вызов функции для запроса сделок сотрудника

    // dispatch(fetchResult())
  
    dispatch(controlSearchStage(statusTypes.succeeded));
  };

  const handleClose = () => {
    dispatch(clearSearchedData());
    setOpen2(false);
    setRow({});
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Фимилия</TableCell>
              <TableCell align="right">Имя</TableCell>
              <TableCell align="right">Отчество</TableCell>
              <TableCell align="right">Возраст</TableCell>
              <TableCell align="right">Должность</TableCell>
              <TableCell align="right">Email</TableCell>

              <TableCell align="right">Телефон</TableCell>
              <TableCell align="right">Сделки</TableCell>
              <TableCell align="right">Исключить</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.lastname}
                </TableCell>
                <TableCell align="right">{row.surname}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.position}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>

                <TableCell align="right">
                  <IconButton onClick={() => handleShowDeals(row)}>
                    <WorkIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() =>
                      clickHandleDelete(
                        row.id,
                        row.lastname + " " + row.surname + " " + row.name
                      )
                    }
                  >
                    <DeleteIcon sx={{ color: "#DC143C" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* {searchResult == statusTypes.loading && type == fetching ? (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <CircularProgress /> <Typography>Идет поиск сотрудника...</Typography>
        </Box>
      ) : null} */}

      <ConfirmModal
        show={open}
        title={"Удаление сотрудника"}
        body={"Вы действительно хотите удалить сотрудника"}
        data={row}
        handlerAgree={handlerAgree}
        handlerDisagree={handlerDisagree}
      />
      <UserDealsModal
        open={open2}
        title={"Обзор сделок пользователя"}
        handleClose={handleClose}
        activeWorker={row}
      />
    </>
  );
}

export default WorkersTableView;
