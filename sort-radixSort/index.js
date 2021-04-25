function radixSort(arr) {
  return sort(arr);

  // helpers:
  function getDigit(num, place) {
    string = (num / 10 ** place).toString().split(".")[0];
    return +string[string.length - 1];
  }

  function digitCount(num) {
    return Math.floor(num).toString().replace(/-/, "").length;
  }

  function mostDigits(arr) {
    let digits = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      digits = Math.max(digits, digitCount(arr[i]));
    }
    return digits;
  }

  // the business-end of the function
  function sort(arr) {
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
}

// console.log(radixSort([1234, -56, 7, 72, 98884, -83590, 12, 3, 84]));
