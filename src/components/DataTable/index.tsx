import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import useProcessData from "../../hooks/useProcessData";

const DataTable = () => {
  const { processedAllDataWithFinalScore } = useProcessData();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ backgroundColor: "#FBBC41" }}>
          <TableRow>
            <TableCell align="center">
              <Typography>Rank</Typography>
            </TableCell>
            <TableCell>
              <Typography>Nombre</Typography>
            </TableCell>
            <TableCell>
              <Typography>24.1</Typography>
            </TableCell>
            <TableCell>
              <Typography>24.2</Typography>
            </TableCell>
            <TableCell>
              <Typography>24.3</Typography>
            </TableCell>
            <TableCell>
              <Typography>Score</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {processedAllDataWithFinalScore.map((row, i) => {
            return (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:nth-of-type(odd)": { backgroundColor: "#f3f3f3" },
                }}
              >
                <TableCell component="th" scope="row" align="center">
                  <Typography>{i + 1}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{row.name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    {row["24.1"].completed
                      ? row["24.1"].time
                      : row["24.1"].reps}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>{row["24.2"].score}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>-</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{row.finalScore}</Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
