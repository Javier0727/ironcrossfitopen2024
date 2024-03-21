export type PersonData = {
  finalScore?: number;
  name: string;
  "24.1": {
    time: string;
    completed: boolean;
    reps: number;
  };
  "24.2": {
    score: number;
  };
  "24.3": {
    wod1Time: string;
    totalTime: string;
    finished: boolean;
    remainingReps: number;
  };
};

type DataTypes = {
  RX: PersonData[];
  Scaled: PersonData[];
  "Kids 8 a 10 años": PersonData[];
  "Kids 11 a 13 años": PersonData[];
};

export const sourceData: DataTypes = {
  RX: [
    {
      name: "Suny",
      "24.1": {
        time: "9:07",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 570,
      },
      "24.3": {
        wod1Time: "10:15",
        totalTime: "15:00",
        finished: false,
        remainingReps: 63,
      },
    },
    {
      name: "Luis",
      "24.1": {
        time: "10:05",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 732,
      },
      "24.3": {
        wod1Time: "5:00",
        totalTime: "15:00",
        finished: false,
        remainingReps: 4,
      },
    },
    {
      name: "Majo",
      "24.1": {
        time: "8:12",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 661,
      },
      "24.3": {
        wod1Time: "5:08",
        totalTime: "15:00",
        finished: false,
        remainingReps: 14,
      },
    },
    {
      name: "Angeles",
      "24.1": {
        time: "12:57",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 0,
      },
      "24.3": {
        wod1Time: "15:00",
        totalTime: "15:00",
        finished: false,
        remainingReps: 74,
      },
    },
    {
      name: "Marco",
      "24.1": {
        time: "10:12",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 0,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "0",
        finished: false,
        remainingReps: 0,
      },
    },
    {
      name: "Lalo",
      "24.1": {
        time: "9:10",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 720,
      },
      "24.3": {
        wod1Time: "5:02",
        totalTime: "15:00",
        finished: false,
        remainingReps: 2,
      },
    },
    {
      name: "David",
      "24.1": {
        time: "9:03",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 558,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "0",
        finished: false,
        remainingReps: 0,
      },
    },
    {
      name: "Ceci",
      "24.1": {
        time: "9:44",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 0,
      },
      "24.3": {
        wod1Time: "7:15",
        totalTime: "15:00",
        finished: false,
        remainingReps: 63,
      },
    },
    {
      name: "Javi",
      "24.1": {
        time: "14:10",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 0,
      },
      "24.3": {
        wod1Time: "14:39",
        totalTime: "15:00",
        finished: false,
        remainingReps: 70,
      },
    },
    {
      name: "Cristal",
      "24.1": {
        time: "12:20",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 485,
      },
      "24.3": {
        wod1Time: "9:21",
        totalTime: "15:00",
        finished: false,
        remainingReps: 63,
      },
    },
    {
      name: "Brandon",
      "24.1": {
        time: "12:29",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 0,
      },
      "24.3": {
        wod1Time: "11:32",
        totalTime: "15:00",
        finished: false,
        remainingReps: 67,
      },
    },
    {
      name: "Iv",
      "24.1": {
        time: "11:11",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 0,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "0",
        finished: false,
        remainingReps: 0,
      },
    },
    {
      name: "Brenda",
      "24.1": {
        time: "14:07",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 0,
      },
      "24.3": {
        wod1Time: "10:55",
        totalTime: "15:00",
        finished: false,
        remainingReps: 63,
      },
    },
    {
      name: "Suri",
      "24.1": {
        time: "10:25",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 554,
      },
      "24.3": {
        wod1Time: "11:34",
        totalTime: "15:00",
        finished: false,
        remainingReps: 63,
      },
    },
    {
      name: "Jesus",
      "24.1": {
        time: "10:25",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 651,
      },
      "24.3": {
        wod1Time: "14:58",
        totalTime: "15:00",
        finished: false,
        remainingReps: 70,
      },
    },
    {
      name: "Gio",
      "24.1": {
        time: "10:12",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 684,
      },
      "24.3": {
        wod1Time: "7:38",
        totalTime: "15:00",
        finished: false,
        remainingReps: 48,
      },
    },
    {
      name: "Chris",
      "24.1": {
        time: "11:24",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 635,
      },
      "24.3": {
        wod1Time: "8:03",
        totalTime: "15:00",
        finished: false,
        remainingReps: 60,
      },
    },
    {
      name: "Kike",
      "24.1": {
        time: "12:39",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 0,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "0",
        finished: false,
        remainingReps: 0,
      },
    },
    {
      name: "Baez",
      "24.1": {
        time: "12:15",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 446,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "0",
        finished: false,
        remainingReps: 0,
      },
    },
    {
      name: "Enrique",
      "24.1": {
        time: "0",
        completed: false,
        reps: 0,
      },
      "24.2": {
        score: 0,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "0",
        finished: false,
        remainingReps: 0,
      },
    },
    {
      name: "Juca",
      "24.1": {
        time: "0",
        completed: false,
        reps: 0,
      },
      "24.2": {
        score: 0,
      },
      "24.3": {
        wod1Time: "9:55",
        totalTime: "15:00",
        finished: false,
        remainingReps: 56,
      },
    },
  ],
  Scaled: [
    {
      name: "Yazmin",
      "24.1": {
        time: "13:25",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 632,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "15:00",
        finished: false,
        remainingReps: 50,
      },
    },
    {
      name: "Vanessa",
      "24.1": {
        time: "14:40",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 652,
      },
      "24.3": {
        wod1Time: "9:59",
        totalTime: "15:00",
        finished: false,
        remainingReps: 63,
      },
    },
    {
      name: "Nohemi",
      "24.1": {
        time: "12:39",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 648,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "15:00",
        finished: false,
        remainingReps: 9,
      },
    },
    {
      name: "Yaya",
      "24.1": {
        time: "13:48",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 640,
      },
      "24.3": {
        wod1Time: "7:31",
        totalTime: "15:00",
        finished: false,
        remainingReps: 63,
      },
    },
    {
      name: "Emiliano",
      "24.1": {
        time: "13:48",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 664,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "15:00",
        finished: false,
        remainingReps: 51,
      },
    },
    {
      name: "Memo",
      "24.1": {
        time: "14:16",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 827,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "15:00",
        finished: false,
        remainingReps: 18,
      },
    },
    {
      name: "Manuel",
      "24.1": {
        time: "0",
        completed: false,
        reps: 162,
      },
      "24.2": {
        score: 162,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "0",
        finished: false,
        remainingReps: 0,
      },
    },
    {
      name: "Isa",
      "24.1": {
        time: "10:28",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 725,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "15:00",
        finished: false,
        remainingReps: 60,
      },
    },
    {
      name: "Berenice",
      "24.1": {
        time: "14:22",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 596,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "0",
        finished: false,
        remainingReps: 0,
      },
    },
    {
      name: "Yessica",
      "24.1": {
        time: "9:56",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 0,
      },
      "24.3": {
        wod1Time: "6:31",
        totalTime: "15:00",
        finished: false,
        remainingReps: 68,
      },
    },
    {
      name: "Marta",
      "24.1": {
        time: "11:38",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 645,
      },
      "24.3": {
        wod1Time: "4:57",
        totalTime: "15:00",
        finished: false,
        remainingReps: 63,
      },
    },
    {
      name: "Sergio",
      "24.1": {
        time: "12:45",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 716,
      },
      "24.3": {
        wod1Time: "8:22",
        totalTime: "15:00",
        finished: false,
        remainingReps: 40,
      },
    },
    {
      name: "Elizabeth",
      "24.1": {
        time: "13:55",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 660,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "0",
        finished: false,
        remainingReps: 0,
      },
    },
    {
      name: "Daniel",
      "24.1": {
        time: "11:15",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 710,
      },
      "24.3": {
        wod1Time: "8:38",
        totalTime: "15:00",
        finished: false,
        remainingReps: 40,
      },
    },
    {
      name: "Adiel",
      "24.1": {
        time: "11:42",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 0,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "0",
        finished: false,
        remainingReps: 0,
      },
    },
    {
      name: "Claudia",
      "24.1": {
        time: "11:04",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 654,
      },
      "24.3": {
        wod1Time: "7:04",
        totalTime: "15:00",
        finished: false,
        remainingReps: 63,
      },
    },
    {
      name: "Alma",
      "24.1": {
        time: "14:18",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 476,
      },
      "24.3": {
        wod1Time: "13:30",
        totalTime: "15:00",
        finished: false,
        remainingReps: 68,
      },
    },
    {
      name: "Remedios",
      "24.1": {
        time: "0",
        completed: false,
        reps: 0,
      },
      "24.2": {
        score: 0,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "0",
        finished: false,
        remainingReps: 0,
      },
    },
    {
      name: "Conchita",
      "24.1": {
        time: "11:48",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 720,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "15:00",
        finished: false,
        remainingReps: 48,
      },
    },
  ],
  "Kids 8 a 10 años": [
    {
      name: "Esme",
      "24.1": {
        time: "9:22",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 400,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "6:32",
        finished: true,
        remainingReps: 0,
      },
    },
    {
      name: "Lian",
      "24.1": {
        time: "6:33",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 594,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "5:44",
        finished: true,
        remainingReps: 0,
      },
    },
    {
      name: "Allison",
      "24.1": {
        time: "10:15",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 0,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "7:15",
        finished: true,
        remainingReps: 0,
      },
    },
    {
      name: "Nai",
      "24.1": {
        time: "0",
        completed: false,
        reps: 145,
      },
      "24.2": {
        score: 500,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "0",
        finished: false,
        remainingReps: 0,
      },
    },
    {
      name: "Dana",
      "24.1": {
        time: "7:30",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 580,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "5:28",
        finished: true,
        remainingReps: 0,
      },
    },
  ],
  "Kids 11 a 13 años": [
    {
      name: "Wendy",
      "24.1": {
        time: "0",
        completed: false,
        reps: 162,
      },
      "24.2": {
        score: 480,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "9:27",
        finished: true,
        remainingReps: 0,
      },
    },
    {
      name: "Yunno",
      "24.1": {
        time: "0",
        completed: false,
        reps: 144,
      },
      "24.2": {
        score: 390,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "13:27",
        finished: true,
        remainingReps: 0,
      },
    },
    {
      name: "Takko",
      "24.1": {
        time: "0",
        completed: false,
        reps: 144,
      },
      "24.2": {
        score: 144,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "14:33",
        finished: true,
        remainingReps: 0,
      },
    },
    {
      name: "Mia",
      "24.1": {
        time: "11:38",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 664,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "12:15",
        finished: true,
        remainingReps: 0,
      },
    },
    {
      name: "Julian",
      "24.1": {
        time: "9:29",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 490,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "9:18",
        finished: true,
        remainingReps: 0,
      },
    },
    {
      name: "Cassandra",
      "24.1": {
        time: "10:25",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 565,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "10:03",
        finished: true,
        remainingReps: 0,
      },
    },
    {
      name: "Daniela",
      "24.1": {
        time: "10:55",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 564,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "6:58",
        finished: true,
        remainingReps: 0,
      },
    },
    {
      name: "Gustavo",
      "24.1": {
        time: "12:15",
        completed: true,
        reps: 0,
      },
      "24.2": {
        score: 578,
      },
      "24.3": {
        wod1Time: "0",
        totalTime: "14:38",
        finished: true,
        remainingReps: 0,
      },
    },
  ],
};
