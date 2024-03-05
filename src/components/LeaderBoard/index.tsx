"use client";

import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import Banner from "../../images/IronCrossfitBannerWM.jpg";
import DataTable from "../DataTable";
import { LeaderBoardContext } from "../../Contexts/LeaderBoardContext";
import { CATEGORIES, WODS } from "../../constants";

const LeaderBoard = () => {
  const { handleChangeCategory, handleChangeWOD, leaderBoardData } =
    useContext(LeaderBoardContext);

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        padding={3}
      >
        <Stack spacing={1} mt={10}>
          <Typography color="#FBBC41">2024 Open Iron Season</Typography>
          <Typography
            variant="h1"
            color="white"
            sx={{
              wordWrap: "break-word",
            }}
          >
            LeaderBoard
          </Typography>
        </Stack>
        <Stack spacing={2} mt={1}>
          <TextField
            select
            label="Selecciona el WOD"
            defaultValue={WODS[0].id}
            value={leaderBoardData.Wod}
            onChange={(e) =>
              handleChangeWOD(e.target.value as "24.1" | "24.2" | "24.3")
            }
            sx={{
              "& .MuiInputBase-root": {
                color: "white",
              },
              "& .MuiInputLabel-root": {
                color: "#FBBC41",
              },
              "& fieldset": {
                borderColor: "white",
              },
            }}
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
            defaultValue={CATEGORIES[0].id}
            value={leaderBoardData.Category}
            onChange={(e) =>
              handleChangeCategory(
                e.target.value as
                  | "RX"
                  | "Scaled"
                  | "Kids 11 a 13 años"
                  | "Kids 8 a 10 años"
              )
            }
            sx={{
              "& .MuiInputBase-root": {
                color: "white",
              },
              "& .MuiInputLabel-root": {
                color: "#FBBC41",
              },
              "& fieldset": {
                borderColor: "white",
              },
            }}
          >
            {CATEGORIES.map((category) => (
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
