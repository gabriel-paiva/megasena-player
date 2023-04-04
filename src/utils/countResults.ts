// Contar os números repetidos no array
export function countResults(arrayOfNumbers: string[]) {
  const count: Record<string, number> = {};
  arrayOfNumbers.forEach((number) => {
    count[number] = (count[number] || 0) + 1;
  });
  return count;
}
