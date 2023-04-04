import { getAllResults } from "./getAllResults";

const quantityOfResults = getAllResults().length;

export function getQuantityOfResults() {
  return quantityOfResults;
}
