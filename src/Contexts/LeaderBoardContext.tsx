import React, { createContext, useState } from "react";

export interface leaderboardI {
  Wod: "24.1" | "24.2" | "24.3";
  Category: "RX" | "Scaled" | "Kids 11 a 13 años" | "Kids 8 a 10 años";
}

export interface LeaderBoardContextProps {
  leaderBoardData: leaderboardI;
  setLeaderBoard: React.Dispatch<React.SetStateAction<leaderboardI>>;
  handleChangeWOD: (value: "24.1" | "24.2" | "24.3") => void;
  handleChangeCategory: (
    value: "RX" | "Scaled" | "Kids 11 a 13 años" | "Kids 8 a 10 años"
  ) => void;
}

export const initialLeaderBoardData: leaderboardI = {
  Wod: "24.1",
  Category: "RX",
};

export const LeaderBoardContext = createContext<LeaderBoardContextProps>({
  leaderBoardData: initialLeaderBoardData,
  setLeaderBoard: () => null,
  handleChangeWOD: () => null,
  handleChangeCategory: () => null,
});

export const LeaderBoardProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [leaderBoardData, setLeaderBoard] = useState<leaderboardI>(
    initialLeaderBoardData
  );

  const handleChangeWOD = (value: "24.1" | "24.2" | "24.3") => {
    setLeaderBoard((prev) => ({ ...prev, Wod: value }));
  };

  const handleChangeCategory = (
    value: "RX" | "Scaled" | "Kids 11 a 13 años" | "Kids 8 a 10 años"
  ) => {
    setLeaderBoard((prev) => ({ ...prev, Category: value }));
  };

  return (
    <LeaderBoardContext.Provider
      value={{
        leaderBoardData,
        setLeaderBoard,
        handleChangeWOD,
        handleChangeCategory,
      }}
    >
      {children}
    </LeaderBoardContext.Provider>
  );
};
