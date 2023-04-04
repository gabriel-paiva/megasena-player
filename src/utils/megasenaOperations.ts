import { getAllResults } from "./getAllResults";
import { countResults } from "./countResults";
import { getQuantityOfResults } from "./getQuantityOfResults";

function getNumbersFrequency(rangeOfResults: number) {
  // Escolher o range do array de contagem
  function chooseRange(arrayOfNumbers: string[]) {
    const totalOfNumbers = getQuantityOfResults() * 6;
    const numbersInRange = rangeOfResults * 6;
    const initialPosition = totalOfNumbers - numbersInRange;

    return arrayOfNumbers.slice(initialPosition, totalOfNumbers);
  }

  // Ordenar o array
  function sort(
    countedRepetitions: Record<string, number>
  ): [string, number][] {
    const entries = Object.entries(countedRepetitions);

    const sortedRepetitions = entries.sort((a, b) => b[1] - a[1]);

    return sortedRepetitions;
  }

  const arrayOfNumbers: string[] = getAllResults().reduce((acc, cur) =>
    acc.concat(cur)
  );

  const sortedRepetitions = sort(countResults(chooseRange(arrayOfNumbers)));
  return sortedRepetitions;
}
