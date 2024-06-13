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

function flattenArray3(arr) {
  let result = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray3(item));
    } else {
      result.push(item);
    }
  });

  return result;
}

const nestedArr = [1, [2, [3, 4], 5], 6];
