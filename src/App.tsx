import React from "react";
import { LeaderBoardProvider } from "./Contexts/LeaderBoardContext";
import { Box } from "@mui/material";
import Header from "./components/Header";
import LeaderBoard from "./components/LeaderBoard";

function App() {
  return (
    <LeaderBoardProvider>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <LeaderBoard />
      </Box>
    </LeaderBoardProvider>
  );
}

export default App;
