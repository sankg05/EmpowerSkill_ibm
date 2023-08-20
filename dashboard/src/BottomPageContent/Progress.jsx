import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Upcoming.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: 'Poppins'
  },
  [`&.${tableCellClasses.head}`]: {
    fontFamily: 'Poppins',
    color: 'white',
    fontSize: 18
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(course, progress) {
  return { course, progress };
}

const rows = [
  createData('Course 1','97%'),
  createData('Course 2','89%'),
  createData('Course 3','67%'),
  createData('Course 4','42%'),
  createData('Course 5','9%')
];

export default function Progress() {
  return (
    <TableContainer component={Paper} style={{ height: 'fit-content' }}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table" className="table">
        <TableHead className="table-head">
          <TableRow>
            <StyledTableCell>Ongoing Courses</StyledTableCell>
            <StyledTableCell align="right">Progress</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.course}>
              <StyledTableCell component="th" scope="row">
                {row.course}
              </StyledTableCell>
              <StyledTableCell align="right">{row.progress}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}