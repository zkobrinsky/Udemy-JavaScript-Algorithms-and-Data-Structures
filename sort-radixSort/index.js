function getDigit(num, place) {
  // zach solution:
  string = (num / 10 ** place).toString().split(".")[0];
  return +string[string.length - 1];

  // colt solution:
  //   return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  // zach solution
  return Math.floor(num).toString().replace(/-/, "").length;

  // colt solution
  // return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let digits = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    digits = Math.max(digits, digitCount(arr[i]));
  }
  return digits;
}

function radixSort(arr) {
  let numDigits = mostDigits(arr);
  for (let k = 0; k < numDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    let negDigitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      if (Math.sign(arr[i]) === -1) {
        negDigitBuckets[digit * -1 + 9].push(arr[i]);
      } else {
        digitBuckets[digit].push(arr[i]);
      }
    }
    arr = [].concat(...negDigitBuckets, ...digitBuckets);
  }
  return arr;
}

console.log(radixSort([1234, -56, 7, 72, 98884, -83590, 12, 3, 84]));
