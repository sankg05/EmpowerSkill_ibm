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

function createData(task) {
  return { task };
}

const rows = [
  createData('FOSIP homework'),
  createData('Study neural networks'),
  createData('Practice DSA'),
  createData('Study AI'),
  createData('Complete website')
];

export default function Upcoming() {
  return (
    <TableContainer component={Paper} style={{ height: 'fit-content' }}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead className="table-head">
          <TableRow>
            <StyledTableCell>Upcoming Tasks</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.task}>
              <StyledTableCell component="th" scope="row">
                {row.task}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}