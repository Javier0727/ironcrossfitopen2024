import { useContext, useEffect, useState } from "react";
import { LeaderBoardContext } from "../Contexts/LeaderBoardContext";
import { PersonData, sourceData } from "../constants/sourceData";

const useProcessData = () => {
  const { leaderBoardData } = useContext(LeaderBoardContext);
  const [processedData241, setprocessedData241] = useState<PersonData[]>([]);
  const [processedData242, setprocessedData242] = useState<PersonData[]>([]);

  const processData241 = () => {
    let generalScore241 = 100;
    const data241 = [...sourceData[leaderBoardData.Category]];
    const procesedData241 = data241
      .sort((a, b) => {
        // Convertir el tiempo a segundos para la comparación
        const timeA =
          a["24.1"].time === "0"
            ? Infinity
            : a["24.1"].time
                .split(":")
                .reduce((acc, time) => 60 * acc + Number(time), 0);
        const timeB =
          b["24.1"].time === "0"
            ? Infinity
            : b["24.1"].time
                .split(":")
                .reduce((acc, time) => 60 * acc + Number(time), 0);

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

  useEffect(() => {
    processData241();
    processData242();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leaderBoardData.Category]);

  useEffect(() => {
    processData241();
    processData242();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leaderBoardData.Category]);

  const combinedData: PersonData[] = [...processedData241, ...processedData242];

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
    processedAllDataWithFinalScore: result,
  };
};
export default useProcessData;
