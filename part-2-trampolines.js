function flattenArray1(arr) {
  let flattenedArray = arr.flat();
  if (
    JSON.stringify(flattenedArray.flat()) !== JSON.stringify(flattenedArray)
  ) {
    return flattenArray1(flattenedArray);
  }
  return flattenedArray;
}

function flattenArray2(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flattenArray2(curr));
    } else {
      return acc.concat(curr);
    }
  }, []);
}

const nestedArr = [1, 2, [3, 4, [5, 6]]];

function testPerformance(func) {
  const start = performance.now();
  const flatArray = func(nestedArr);
  const end = performance.now();

  console.log('Flattened array length:', flatArray.length);
  console.log(
    `Time taken to flatten array: ${
      end - start
    } milliseconds using the function: ${func.name}`
  );
}

console.log(flattenArray1);
testPerformance(flattenArray1);

console.log(flattenArray2);
testPerformance(flattenArray2);
