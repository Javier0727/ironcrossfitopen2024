"use client";

import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import {
  BOX_CENTER,
  CATEGORIES25,
  LeaderBoardContext,
} from "../../Contexts/LeaderBoardContext";
import { BOX, CATEGORIES25LIST } from "../../constants";
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
  const { handleChangeCategory, handleChangeBoxCenter, leaderBoardData } =
    useContext(LeaderBoardContext);

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
          <Box
            p={1}
            bgcolor="#1A1A1A"
            borderRadius={2}
            width="fit-content"
            border={`1px solid #FBBC41`}
          >
            <Typography color="#FBBC41">2025 Open Iron Season</Typography>
          </Box>
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
          {leaderBoardData.boxCenter !== null &&
            leaderBoardData.boxCenter !== BOX_CENTER.FORCE && (
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
            )}
        </Stack>
      </Box>
      <Box padding={3}>
        {leaderBoardData.boxCenter !== BOX_CENTER.FORCE ? (
          leaderBoardData.boxCenter !== null &&
          leaderBoardData.Category !== null ? (
            <DataTable />
          ) : (
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="h4">
                Selecciona un Centro de Entrenamiento y una Categoría
              </Typography>
            </Stack>
          )
        ) : (
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h4">Proximamente</Typography>
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default LeaderBoard;
