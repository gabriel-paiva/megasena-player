import { possibleNumbers } from "./possibleNumbers";

// Encontrar numeros que não apareceram na contagem:
export function findNotIncluded(sortedRepetitions: [string, number][]) {
  const allSortedNumbers = sortedRepetitions.map((item) => item[0]);
  const notIncluded = possibleNumbers.filter(
    (number) => !allSortedNumbers.includes(number)
  );
  return notIncluded;
}
