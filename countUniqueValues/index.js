// input:
// let array = [1, 1, 1, 1, 1, 1, 2];
let array = [1, 2, 3, 4, 4, 4, 4, 4, 7, 7, 12, 12, 13];
// let array = [];
// let array = [-2, -1, -1, 0, 1];

// return an integer
// iterate through array
// use two counters, ... what to call them? could still be left and right

const countUniqueValues = (array) => {
  let counter = 1;
  let left = 0;
  let right = 1;

  if (array.length === 0) return 0;

  while (right < array.length) {
    if (array[left] === array[right] || left === right) {
      right++;
    } else {
      counter++;
      right++;
      left = right - 1;
    }
  }

  return counter;
};

// console.log(countUniqueValues(array));

// Solution 2:
// using Set:

// const countUniqueValuesWithSet = array => {
//   return [...new Set(array)].length;
// };

// console.log(countUniqueValuesWithSet(array));

// Solution 3
// Cole's solution (destructive):
// const countUniqueValuesDestructive = (arr) => {
//   if (array.length === 0) return 0;

//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// };

// console.log(countUniqueValuesDestructive(array));
