import { useMemo } from "react";
import { AthleteData, Category, Center } from "../interfaces/AthleteData";

type RankedAthlete = AthleteData & {
  rank: number;
  finalScore: number;
  eventRanks: Record<"25.1" | "25.2" | "25.3", { rank: number; score: number }>;
};

const compareByReps = (a: AthleteData, b: AthleteData, event: "25.1") => {
  return b[event].reps - a[event].reps;
};

const compareByTimeOrReps = (
  a: AthleteData,
  b: AthleteData,
  event: "25.2" | "25.3"
) => {
  const eventLimit = event === "25.2" ? 12 * 60 : 20 * 60; // 12 min para 25.2, 20 min para 25.3

  const convertToSeconds = (time: string) => {
    if (!time || time === "0:00") return eventLimit; // Si no tiene tiempo, asumimos que llegó al límite
    const [minutes, seconds] = time.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  const aTime = convertToSeconds(a[event].time);
  const bTime = convertToSeconds(b[event].time);

  const aFinished = aTime < eventLimit;
  const bFinished = bTime < eventLimit;

  // Priorizar a los atletas que sí terminaron
  if (aFinished && bFinished) {
    return aTime - bTime; // Ordenar por menor tiempo
  }
  if (aFinished) return -1; // Si A terminó y B no, A es mejor
  if (bFinished) return 1; // Si B terminó y A no, B es mejor

  // Si ninguno terminó, ordenar por repeticiones
  if (a[event].reps !== b[event].reps) return b[event].reps - a[event].reps;

  // Si hay empate en repeticiones, usar checkpoints
  for (let i = 0; i < a[event].checkpoints.length; i++) {
    const aCheckpoint = convertToSeconds(a[event].checkpoints[i]);
    const bCheckpoint = convertToSeconds(b[event].checkpoints[i]);
    if (aCheckpoint !== bCheckpoint) return aCheckpoint - bCheckpoint;
  }

  return 0; // Total empate
};

// Validar si un atleta no completó un evento según el WOD específico
const didNotCompleteEvent = (
  athlete: AthleteData,
  event: "25.1" | "25.2" | "25.3"
) => {
  if (event === "25.1") {
    return athlete[event].reps === 0;
  }
  return (
    athlete[event].reps === 0 &&
    (!athlete[event].time || athlete[event].time === "0:00") &&
    athlete[event].checkpoints.every((c) => c === "0:00")
  );
};

export const useProcessEventData = (athletes: AthleteData[]) => {
  return useMemo(() => {
    let rankings: RankedAthlete[] = athletes.map((athlete) => ({
      ...athlete,
      rank: 0,
      finalScore: 0,
      eventRanks: {
        "25.1": { rank: 0, score: 0 },
        "25.2": { rank: 0, score: 0 },
        "25.3": { rank: 0, score: 0 },
      },
    }));

    const events: ("25.1" | "25.2" | "25.3")[] = ["25.1", "25.2", "25.3"];

    // Dividir y procesar rankings por categoría y centro
    const rankedByCategoryAndCenter: Record<
      Category,
      Record<Center, RankedAthlete[]>
    > = {
      [Category.RX]: {
        [Center.CAR]: [],
        [Center.IRON]: [],
        [Center.ALDEA]: [],
      },
      [Category.Scaled]: {
        [Center.CAR]: [],
        [Center.IRON]: [],
        [Center.ALDEA]: [],
      },
      [Category.Kids]: {
        [Center.CAR]: [],
        [Center.IRON]: [],
        [Center.ALDEA]: [],
      },
    };

    Object.keys(rankedByCategoryAndCenter).forEach((catKey) => {
      const category = catKey as Category;
      Object.keys(rankedByCategoryAndCenter[category]).forEach((centerKey) => {
        const center = centerKey as Center;
        const filteredAthletes = rankings.filter(
          (a) => a.category === category && a.center === center
        );

        // Calcular ranking por cada evento dentro de la categoría y centro
        events.forEach((event) => {
          const sortedAthletes = [...filteredAthletes].sort((a, b) =>
            event === "25.1"
              ? compareByReps(a, b, event)
              : compareByTimeOrReps(a, b, event)
          );

          let points = 100;
          let previousScore: number | string | null = null;
          let rankCounter = 0; // Se inicia en 0 para un ranking correcto

          sortedAthletes.forEach((athlete, index) => {
            const found = rankings.find((a) => a.name === athlete.name);
            if (!found) return;

            // Si el atleta no completó el evento, asignar 0 puntos y último lugar
            if (didNotCompleteEvent(athlete, event)) {
              found.eventRanks[event] = {
                rank: sortedAthletes.length,
                score: 0,
              };
              return;
            }

            const currentScore =
              event === "25.1"
                ? athlete[event].reps
                : athlete[event].time ?? athlete[event].reps;

            rankCounter = index + 1;

            found.eventRanks[event] = { rank: rankCounter, score: points };
            found.finalScore += points;
            previousScore = currentScore;
            // Reducir puntos solo si hay más atletas en la lista
            if (points > 2) points -= 2;
          });
        });

        // Asignar rank final dentro de la categoría y centro
        const finalSorted = filteredAthletes
          .sort((a, b) => b.finalScore - a.finalScore)
          .map((athlete, index) => ({ ...athlete, rank: index + 1 }));

        rankedByCategoryAndCenter[category][center] = finalSorted;
      });
    });

    return { rankedByCategoryAndCenter };
  }, [athletes]);
};
