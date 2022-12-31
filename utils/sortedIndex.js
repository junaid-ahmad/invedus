import { fullNameGenerator } from "./fullNameGenerator";

// prop 'array' is an array of objects.
// and each element in 'array' is expected to have keys 'first' and 'last'
// prop 'value' is object with keys'first' and 'last'
// return index where new value should be inserted in an already sorted array.
export const sortedIndex = (array, value) => {
  let min = 0;
  let max = array.length;

  let valueFullName = fullNameGenerator(value).toLowerCase();

  //Binary search
  while (min < max) {
    let mid = Math.floor((min + max) / 2);
    let midElementFullName = fullNameGenerator(array[mid]).toLowerCase();

    if (midElementFullName === valueFullName) {
      return mid;
    }
    if (midElementFullName < valueFullName) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }
  return min;
};
