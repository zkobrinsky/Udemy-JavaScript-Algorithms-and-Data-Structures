const isSubsequence = (str1, str2) => {
  let idx1 = 0;
  let idx2 = 0;

  while (idx2 < str2.length) {
    if (str2[idx2] === str1[idx1]) {
      idx1++;
      idx2++;
    } else {
      idx2++;
    }
  }
  if (idx1 === str1.length) {
    return true;
  }
  return false;
};

console.log(
  isSubsequence("hello", "hello world"), // true
  isSubsequence("sing", "sting"), // true
  isSubsequence("abc", "abracadabra"), // true
  isSubsequence("abc", "acb") // false (order matters)
);

// console.log(isSubsequence("hello", "hello world"));
