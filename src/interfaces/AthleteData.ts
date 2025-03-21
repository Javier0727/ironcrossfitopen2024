export enum Category {
  RX = "RX",
  Scaled = "Scaled",
  Kids = "Kids",
}

export enum Center {
  CAR = "CAR",
  IRON = "IRON",
  ALDEA = "ALDEA",
}

export type AthleteData = {
  name: string;
  category: Category;
  center: Center;
  finalScore?: number;
  "25.1": { reps: number };
  "25.2": { time: string; reps: number; checkpoints: [string, string] };
  "25.3": {
    time: string;
    reps: number;
    checkpoints: [string, string, string, string, string];
  };
};
