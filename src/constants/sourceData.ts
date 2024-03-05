type PersonData = {
  name: string;
  time: string;
  completed: boolean;
  score: number;
};

type Data = {
  24.1: {
    RX: PersonData[];
    Scaled: PersonData[];
    "Kids 11 a 13 años": PersonData[];
    "Kids 8 a 10 años": PersonData[];
  };
  24.2: {
    RX: PersonData[];
    Scaled: PersonData[];
    "Kids 11 a 13 años": PersonData[];
    "Kids 8 a 10 años": PersonData[];
  };
  24.3: {
    RX: PersonData[];
    Scaled: PersonData[];
    "Kids 11 a 13 años": PersonData[];
    "Kids 8 a 10 años": PersonData[];
  };
};

export const sourceData: Data = {
  "24.1": {
    RX: [
      { name: "Suny", time: "9:06", completed: true, score: 0 },
      { name: "Luis", time: "10:05", completed: true, score: 0 },
      { name: "Majo", time: "8:12", completed: true, score: 0 },
      { name: "Angeles", time: "12:57", completed: true, score: 0 },
      { name: "Marco", time: "10:12", completed: true, score: 0 },
      { name: "Lalo", time: "9:10", completed: true, score: 0 },
      { name: "David", time: "9:03", completed: true, score: 0 },
      { name: "Ceci", time: "9:44", completed: true, score: 0 },
      { name: "Javi", time: "14:10", completed: true, score: 0 },
      { name: "Cristal", time: "12:20", completed: true, score: 0 },
      { name: "Brandon", time: "12:29", completed: true, score: 0 },
      { name: "Iv", time: "11:11", completed: true, score: 0 },
      { name: "Brenda", time: "14:07", completed: true, score: 0 },
      { name: "Suri", time: "10:25", completed: true, score: 0 },
      { name: "Jesus", time: "10:25", completed: true, score: 0 },
      { name: "Gio", time: "10:12", completed: true, score: 0 },
      { name: "Chris", time: "11:24", completed: true, score: 0 },
      { name: "Kike", time: "12:39", completed: true, score: 0 },
      { name: "Enrique", time: "0", completed: false, score: 0 },
      { name: "Juca", time: "0", completed: false, score: 0 },
    ],
    Scaled: [
      { name: "Yazmin", time: "13:25", completed: true, score: 0 },
      { name: "Vanessa", time: "14:40", completed: true, score: 0 },
      { name: "Nohemi", time: "12:39", completed: true, score: 0 },
      { name: "Yaya", time: "13:48", completed: true, score: 0 },
      { name: "Emiliano", time: "13:48", completed: true, score: 0 },
      { name: "Memo", time: "14:16", completed: true, score: 0 },
      { name: "Manuel", time: "0", completed: false, score: 162 },
      { name: "Isa", time: "10:28", completed: true, score: 0 },
      { name: "Berenice", time: "14:22", completed: true, score: 0 },
      { name: "Yessica", time: "9:56", completed: true, score: 0 },
      { name: "Marta", time: "11:38", completed: true, score: 0 },
      { name: "Sergio", time: "0", completed: false, score: 0 },
      { name: "Elizabeth", time: "13:55", completed: true, score: 0 },
      { name: "Daniel", time: "11:15", completed: true, score: 0 },
      { name: "Adiel", time: "11:42", completed: true, score: 0 },
      { name: "Claudia", time: "11:04", completed: true, score: 0 },
      { name: "Alma", time: "14:18", completed: true, score: 0 },
      { name: "Remedios", time: "0", completed: false, score: 0 },
    ],
    "Kids 11 a 13 años": [
      { name: "Wendy", time: "0", completed: false, score: 162 },
      { name: "Yunno", time: "0", completed: false, score: 144 },
      { name: "Takko", time: "0", completed: false, score: 144 },
      { name: "Mia", time: "11:38", completed: true, score: 0 },
      { name: "Julian", time: "9:29", completed: true, score: 0 },
      { name: "Cassandra", time: "10:25", completed: true, score: 0 },
      { name: "Daniela", time: "10:55", completed: true, score: 0 },
    ],
    "Kids 8 a 10 años": [
      { name: "Esme", time: "9:22", completed: true, score: 0 },
      { name: "Lian", time: "6:33", completed: true, score: 0 },
      { name: "Allison", time: "10:15", completed: true, score: 0 },
      { name: "Nai", time: "0", completed: false, score: 145 },
      { name: "Dana", time: "7:30", completed: true, score: 0 },
    ],
  },
  "24.2": {
    RX: [],
    Scaled: [],
    "Kids 11 a 13 años": [],
    "Kids 8 a 10 años": [],
  },
  "24.3": {
    RX: [],
    Scaled: [],
    "Kids 11 a 13 años": [],
    "Kids 8 a 10 años": [],
  },
};
