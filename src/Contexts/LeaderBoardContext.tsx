import React, { createContext, useState } from "react";

export enum BOX_CENTER {
  IRON = "Iron Crossfit",
  CAR = "CAR",
  ALDEA = "La Aldea",
}

export enum WODS24 {
  WOD1 = "24.1",
  WOD2 = "24.2",
  WOD3 = "24.3",
}
export enum WODS25 {
  WOD1 = "25.1",
  WOD2 = "25.2",
  WOD3 = "25.3",
}
export enum CATEGORIES25 {
  RX = "RX",
  SCALED = "Scaled",
  KIDS = "Kids 11 a 13 años",
}
export interface leaderboardI {
  boxCenter: BOX_CENTER | null;
  Wod: WODS24;
  Category: "RX" | "Scaled" | "Kids 11 a 13 años" | "Kids 8 a 10 años";
}
export interface leaderboardI25 {
  boxCenter: BOX_CENTER | null;
  Wod: WODS25;
  Category: CATEGORIES25;
}

export interface LeaderBoardContextProps {
  leaderBoardData: leaderboardI25;
  setLeaderBoard: React.Dispatch<React.SetStateAction<leaderboardI25>>;
  handleChangeWOD: (value: WODS25) => void;
  handleChangeCategory: (value: CATEGORIES25) => void;
  handleChangeBoxCenter: (value: BOX_CENTER) => void;
}

export const initialLeaderBoardData: leaderboardI = {
  boxCenter: null,
  Wod: WODS24.WOD1,
  Category: "RX",
};

export const initialLeaderBoardData25: leaderboardI25 = {
  boxCenter: null,
  Wod: WODS25.WOD1,
  Category: CATEGORIES25.RX,
};

export const LeaderBoardContext = createContext<LeaderBoardContextProps>({
  leaderBoardData: initialLeaderBoardData25,
  setLeaderBoard: () => null,
  handleChangeWOD: () => null,
  handleChangeCategory: () => null,
  handleChangeBoxCenter: () => null,
});

export const LeaderBoardProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [leaderBoardData, setLeaderBoard] = useState<leaderboardI25>(
    initialLeaderBoardData25
  );

  const handleChangeWOD = (value: WODS25) => {
    setLeaderBoard((prev) => ({ ...prev, Wod: value }));
  };

  const handleChangeCategory = (value: CATEGORIES25) => {
    setLeaderBoard((prev) => ({ ...prev, Category: value }));
  };

  const handleChangeBoxCenter = (value: BOX_CENTER) => {
    setLeaderBoard((prev) => ({ ...prev, boxCenter: value }));
  };

  return (
    <LeaderBoardContext.Provider
      value={{
        leaderBoardData,
        setLeaderBoard,
        handleChangeWOD,
        handleChangeCategory,
        handleChangeBoxCenter,
      }}
    >
      {children}
    </LeaderBoardContext.Provider>
  );
};
