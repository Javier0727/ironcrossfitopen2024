import { useContext, useEffect, useState } from "react";
import { LeaderBoardContext } from "../Contexts/LeaderBoardContext";
import { PersonData, sourceData } from "../constants/sourceData";

const useProcessData = () => {
  const { leaderBoardData } = useContext(LeaderBoardContext);
  const [processedData241, setprocessedData241] = useState<PersonData[]>([]);
  const [processedData242, setprocessedData242] = useState<PersonData[]>([]);
  const [processedData243, setprocessedData243] = useState<PersonData[]>([]);
  const [processedDataTheFinal, setprocessedDataTheFinal] = useState<
    PersonData[]
  >([]);

  const convertToSeconds = (time: string) => {
    const [minutes, seconds] = time.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  const processData241 = () => {
    let generalScore241 = 100;
    const data241 = [...sourceData[leaderBoardData.Category]];
    const procesedData241 = data241
      .sort((a, b) => {
        // Convertir el tiempo a segundos para la comparación
        const timeA =
          a["24.1"].time === "0" ? Infinity : convertToSeconds(a["24.1"].time);
        const timeB =
          b["24.1"].time === "0" ? Infinity : convertToSeconds(b["24.1"].time);

        // Ordenar por tiempo
        if (timeA < timeB) return -1;
        if (timeA > timeB) return 1;

        // Si el tiempo es igual, ordenar por puntaje de mayor a menor
        if (a["24.1"].reps > b["24.1"].reps) return -1;
        if (a["24.1"].reps < b["24.1"].reps) return 1;

        // Si el puntaje y el tiempo son iguales, poner los que tienen 0 en reps y "0" en time al final
        if (
          a["24.1"].reps === 0 &&
          a["24.1"].time === "0" &&
          (b["24.1"].reps !== 0 || b["24.1"].time !== "0")
        )
          return 1;
        if (
          b["24.1"].reps === 0 &&
          b["24.1"].time === "0" &&
          (a["24.1"].reps !== 0 || a["24.1"].time !== "0")
        )
          return -1;

        return 0;
      })
      .map((pd) => {
        if (
          pd["24.1"].completed === false &&
          pd["24.1"].time === "0" &&
          pd["24.1"].reps === 0
        ) {
          return { ...pd, finalScore: 0 };
        } else {
          const returnData = { ...pd, finalScore: generalScore241 };
          generalScore241 -= 2;
          return returnData;
        }
      });
    setprocessedData241(procesedData241);
  };

  const processData242 = () => {
    let generalScore242 = 100;
    const data242 = [...sourceData[leaderBoardData.Category]];
    const procesedData = data242
      .sort((a, b) => {
        const a242 = a["24.2"];
        const b242 = b["24.2"];
        // Ordenar por puntaje de mayor a menor
        if (a242.score > b242.score) return -1;
        if (a242.score < b242.score) return 1;
        return 0;
      })
      .map((pd) => {
        if (pd["24.2"].score === 0) {
          return { ...pd, finalScore: 0 };
        } else {
          const returnData = { ...pd, finalScore: generalScore242 };
          generalScore242 -= 2;
          return returnData;
        }
      });
    setprocessedData242(procesedData);
  };

  const processData243 = () => {
    let generalScore243 = 100;
    const data243 = [...sourceData[leaderBoardData.Category]];
    const procesedData = data243
      .sort((a, b) => {
        const aData = a["24.3"];
        const bData = b["24.3"];
        const aTotalTime = convertToSeconds(aData.totalTime);
        const bTotalTime = convertToSeconds(bData.totalTime);
        const aWod1Time = convertToSeconds(aData.wod1Time);
        const bWod1Time = convertToSeconds(bData.wod1Time);

        // Si "finished" es true para ambos, ordena por "totalTime"
        if (aData.finished && bData.finished) {
          if (aTotalTime < bTotalTime) return -1;
          if (aTotalTime > bTotalTime) return 1;
        } else {
          const aTotalTimeWithReps = aTotalTime + aData.remainingReps * 2;
          const bTotalTimeWithReps = bTotalTime + bData.remainingReps * 2;
          if (aTotalTimeWithReps === bTotalTimeWithReps) {
            if (aWod1Time < bWod1Time) return -1;
            if (aWod1Time > bWod1Time) return 1;
          } else {
            if (aTotalTimeWithReps < bTotalTimeWithReps) return -1;
            if (aTotalTimeWithReps > bTotalTimeWithReps) return 1;
          }
        }

        if (
          aData.wod1Time === "0" &&
          aData.totalTime === "0" &&
          aData.remainingReps === 0
        )
          return 1;
        if (
          bData.wod1Time === "0" &&
          bData.totalTime === "0" &&
          bData.remainingReps === 0
        )
          return -1;

        return 0;
      })
      .map((pd) => {
        if (pd["24.3"].totalTime === "0" && pd["24.3"].wod1Time === "0") {
          return { ...pd, finalScore: 0 };
        } else {
          const returnData = { ...pd, finalScore: generalScore243 };
          generalScore243 -= 2;
          return returnData;
        }
      });
    setprocessedData243(procesedData);
  };

  const processDataTheFinal = () => {
    let generalScoreTheFinal = 100;
    const dataTheFinal = [...sourceData[leaderBoardData.Category]];
    const procesedData = dataTheFinal
      .sort((a, b) => {
        const aData = a["The Final"];
        const bData = b["The Final"];
        if (aData === undefined || bData === undefined) {
          return 0;
        } else {
          // Convertir el tiempo a segundos para la comparación
          const timeA =
            aData.time === "0" ? Infinity : convertToSeconds(aData.time);
          const timeB =
            bData.time === "0" ? Infinity : convertToSeconds(bData.time);

          // Ordenar por tiempo
          if (timeA < timeB) return -1;
          if (timeA > timeB) return 1;

          // Si el tiempo es igual, ordenar por puntaje de mayor a menor
          if (aData.reps > bData.reps) return -1;
          if (aData.reps < bData.reps) return 1;
        }
        return 0;
      })
      .map((pd) => {
        if (!!pd["The Final"]) {
          if (pd["The Final"]?.time === "0" && pd["The Final"]?.reps === 0) {
            return { ...pd, finalScore: 0 };
          }
          const returnData = { ...pd, finalScore: generalScoreTheFinal };
          generalScoreTheFinal -= 2;
          return returnData;
        } else {
          return { ...pd, finalScore: 0 };
        }
      });
    setprocessedDataTheFinal(procesedData);
  };

  useEffect(() => {
    processData241();
    processData242();
    processData243();
    processDataTheFinal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leaderBoardData.Category]);

  const combinedData: PersonData[] = [
    ...processedData241,
    ...processedData242,
    ...processedData243,
    ...processedDataTheFinal,
  ];

  let result: PersonData[] = [];

  combinedData.forEach((value) => {
    if (value.name) {
      // Busca si el objeto ya existe en el resultado
      const existingObject = result.find((r) => r.name === value.name);

      if (existingObject) {
        // Si el objeto ya existe, suma el finalScore
        existingObject.finalScore =
          (existingObject.finalScore || 0) + (value.finalScore || 0);
      } else {
        // Si el objeto no existe, copia el objeto y agrega finalScore si no existe
        const newObject = { ...value, finalScore: value.finalScore || 0 };
        result.push(newObject);
      }
    }
  });

  result = result.sort((a, b) => {
    if ((a.finalScore ?? 0) < (b.finalScore ?? 0)) return 1;
    if ((a.finalScore ?? 0) > (b.finalScore ?? 0)) return -1;
    return 0;
  });

  return {
    processedData241,
    processedData242,
    processedData243,
    processedDataTheFinal,
    processedAllDataWithFinalScore: result,
  };
};
export default useProcessData;
