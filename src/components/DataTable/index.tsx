import {
  Paper,
  Stack,
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
  const { processedAllDataWithFinalScore, processedData241, processedData242 } =
    useProcessData();

  const getOrdinalSuffix = (i: number) => {
    const j = i % 10;
    const k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ backgroundColor: "#FBBC41" }}>
          <TableRow>
            <TableCell align="center">
              <Typography fontWeight={600}>Rank</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight={600}>Nombre</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight={600}>24.1</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight={600}>24.2</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight={600}>24.3</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight={600}>Final</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight={600}>Score</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {processedAllDataWithFinalScore.map((row, i) => {
            const data24_1 = processedData241.find(
              (pd) => pd.name === row.name
            );
            const place24_1 = processedData241.findIndex(
              (pd) => pd.name === row.name
            );
            const data24_2 = processedData242.find(
              (pd) => pd.name === row.name
            );
            const place24_2 = processedData242.findIndex(
              (pd) => pd.name === row.name
            );
            return (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:nth-of-type(odd)": { backgroundColor: "#f3f3f3" },
                }}
              >
                <TableCell component="th" scope="row" align="center">
                  <Typography
                    variant={i < 3 ? "h5" : "body1"}
                    fontWeight={i < 3 ? 600 : 500}
                  >
                    {i + 1}
                  </Typography>
                  <Typography>({row.finalScore} pts)</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight={500}>{row.name}</Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography fontWeight={500} variant="h6">
                      {getOrdinalSuffix(place24_1 + 1)}
                    </Typography>
                    <Typography fontWeight={500} variant="body2">
                      ({data24_1?.finalScore} pts)
                    </Typography>
                  </Stack>
                  <Typography fontWeight={500}>
                    {row["24.1"].completed
                      ? row["24.1"].time
                      : `${row["24.1"].reps} reps`}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography fontWeight={500} variant="h6">
                      {getOrdinalSuffix(place24_2 + 1)}
                    </Typography>
                    <Typography fontWeight={500} variant="body2">
                      ({data24_2?.finalScore} pts)
                    </Typography>
                  </Stack>
                  <Typography fontWeight={500}>{row["24.2"].score}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>-</Typography>
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
