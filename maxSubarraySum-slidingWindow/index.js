// O(n) solution (sliding window)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// naive solution
// function maxSubarraySum(arr, n) {
//   if (n > arr.length) {
//     return null;
//   }
//   let maxSum = -Infinity;

//   for (let i = 0; i < arr.length - n + 1; i++) {
//     let sum = 0;
//     for (let j = 0; j < n; j++) {
//       sum += arr[i + j];
//     }

//     if (sum > maxSum) {
//       maxSum = sum;
//     }

//     console.log(sum);
//   }
//   return maxSum;
// }

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
