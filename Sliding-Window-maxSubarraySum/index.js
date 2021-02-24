function maxSubarraySum(arr, numSum) {
  let sum = 0;
  let maxSum = 0;
  if (numSum > arr.length) return null;

  //   establish base sum
  for (let i = 0; i < numSum; i++) {
    sum += arr[i];
  }

  for (let i = numSum; i <= arr.length; i++) {
    sum = sum + arr[i] - arr[i - numSum];

    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum;
}

console.log(
  maxSubarraySum([100, 200, 300, 400], 2), // 700
  maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), // 39
  maxSubarraySum([-3, 4, 0, -2, 6, -1], 2), // 5
  maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2), // 5
  maxSubarraySum([2, 3], 3) // null
);

// maxSubarraySum([100, 200, 300, 400], 2);
