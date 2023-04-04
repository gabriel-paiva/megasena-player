import { MegasenaResult } from "@/types/MegasenaResult";
import allResults from "./result.json";

const arrayOfResults = (): string[][] => {
  return allResults.map((resultPerGame) => resultPerGame.result);
};

export const getAllResults = (): MegasenaResult[] => {
  return allResults;
};

export const getAllResultsArray = (): string[][] => {
  return arrayOfResults();
};
