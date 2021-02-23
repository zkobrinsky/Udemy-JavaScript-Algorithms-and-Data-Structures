// frequency pattern
// function areThereDuplicates() {
//   let obj = {};
//   for (let i = 0; i < arguments.length; i++) {
//     let arg = arguments[i];
//     obj[arg] = ++obj[arg] || 1;
//   }

//   for (let val in obj) {
//     if (obj[val] > 1) {
//       return true;
//     }
//   }
//   return false;
// }

// multiple pointers pattern
function areThereDuplicates(...args) {
  args.sort();
  let left = 0;
  let right = 1;

  while (right < args.length) {
    if (args[left] === args[right]) {
      return true;
    }
    left++;
    right++;
  }
  return false;
}

console.log(
  areThereDuplicates(1, 2, 3), // false
  areThereDuplicates(1, 2, 2), // true
  areThereDuplicates("a", "b", "c", "a") // true
);
