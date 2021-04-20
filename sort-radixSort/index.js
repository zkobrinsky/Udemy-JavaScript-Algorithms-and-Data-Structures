// get the value of the decimal position(place)
function getDigit(num, place) {
  string = (num / 10 ** place).toString().split(".")[0];
  return +string[string.length - 1];
}

console.log(getDigit(12345, 8));
