"use client";

import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import {
  BOX_CENTER,
  CATEGORIES25,
  LeaderBoardContext,
  WODS25,
} from "../../Contexts/LeaderBoardContext";
import { BOX, CATEGORIES25LIST, WODS } from "../../constants";
import Banner from "../../images/IronCrossfitBanner25.png";
import DataTable from "../DataTable";

const styledTextFieldSx = {
  "& .MuiInputBase-root": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "#FBBC41",
  },
  "& fieldset": {
    borderColor: "white",
  },
};

const LeaderBoard = () => {
  const {
    handleChangeCategory,
    handleChangeWOD,
    handleChangeBoxCenter,
    leaderBoardData,
  } = useContext(LeaderBoardContext);

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center -32rem",
          backgroundRepeat: "no-repeat",
        }}
        padding={3}
      >
        <Stack spacing={1} mt={10}>
          <Typography color="#FBBC41">2025 Open Iron Season</Typography>
          <Typography
            variant="h1"
            color="white"
            sx={{
              wordWrap: "break-word",
            }}
          >
            Leader Board
          </Typography>
        </Stack>
        <Stack spacing={2} mt={1}>
          <TextField
            select
            label="Selecciona el Centro de Entrenamiento"
            defaultValue={BOX[0].id}
            value={leaderBoardData.boxCenter}
            onChange={(e) =>
              handleChangeBoxCenter(e.target.value as BOX_CENTER)
            }
            sx={styledTextFieldSx}
          >
            {BOX.map((boxCenter) => (
              <MenuItem key={boxCenter.id} value={boxCenter.name} color="white">
                {boxCenter.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Selecciona el WOD"
            defaultValue={WODS[0].id}
            value={leaderBoardData.Wod}
            onChange={(e) => handleChangeWOD(e.target.value as WODS25)}
            sx={styledTextFieldSx}
          >
            {WODS.map((wod) => (
              <MenuItem key={wod.id} value={wod.name} color="white">
                {wod.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Selecciona la categoría"
            defaultValue={CATEGORIES25LIST[0].id}
            value={leaderBoardData.Category}
            onChange={(e) =>
              handleChangeCategory(e.target.value as CATEGORIES25)
            }
            sx={styledTextFieldSx}
          >
            {CATEGORIES25LIST.map((category) => (
              <MenuItem key={category.id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </Box>
      <Box padding={3}>
        <DataTable />
      </Box>
    </Box>
  );
};

export default LeaderBoard;
