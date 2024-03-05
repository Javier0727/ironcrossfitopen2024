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
import React, { useContext } from "react";
import { LeaderBoardContext } from "../../Contexts/LeaderBoardContext";
import { sourceData } from "../../constants/sourceData";

const DataTable = () => {
  const { leaderBoardData } = useContext(LeaderBoardContext);
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
              <Typography>Tiempo o Reps</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sourceData[leaderBoardData.Wod][leaderBoardData.Category]
            .sort((a, b) => {
              // Convertir el tiempo a segundos para la comparación
              const timeA =
                a.time === "0"
                  ? Infinity
                  : a.time
                      .split(":")
                      .reduce((acc, time) => 60 * acc + Number(time), 0);
              const timeB =
                b.time === "0"
                  ? Infinity
                  : b.time
                      .split(":")
                      .reduce((acc, time) => 60 * acc + Number(time), 0);

              // Ordenar por tiempo
              if (timeA < timeB) return -1;
              if (timeA > timeB) return 1;

              // Si el tiempo es igual, ordenar por puntaje de mayor a menor
              if (a.score > b.score) return -1;
              if (a.score < b.score) return 1;

              // Si el puntaje y el tiempo son iguales, poner los que tienen 0 en score y "0" en time al final
              if (
                a.score === 0 &&
                a.time === "0" &&
                (b.score !== 0 || b.time !== "0")
              )
                return 1;
              if (
                b.score === 0 &&
                b.time === "0" &&
                (a.score !== 0 || a.time !== "0")
              )
                return -1;

              return 0;
            })
            .map((row, i) => {
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
                      {row.completed ? row.time : row.score}
                    </Typography>
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
