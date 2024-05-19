export default function analyzeArray(array) {
  const averageValue =
    array.reduce((accumulator, currVal) => accumulator + currVal, 0) /
    array.length;
  const minValue = array.reduce((accumulator, currVal) =>
    Math.min(accumulator, currVal)
  );
  const maxValue = array.reduce((accumulator, currVal) =>
    Math.max(accumulator, currVal)
  );

  return {
    average: averageValue,
    min: minValue,
    max: maxValue,
    length: array.length,
  };
}
