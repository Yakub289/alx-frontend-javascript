export default function appendToEachArrayValue(array, appendString) {
  const mergeArray = array;
  for (const value of array) {
    const idx = array.indexOf(value);
    mergeArray[idx] = appendString + value;
  }

  return array;
}
