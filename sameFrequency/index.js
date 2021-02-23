function sameFrequency(num1, num2) {
  let frequencies1 = {};
  let frequencies2 = {};
  num1 = num1.toString().split("");
  num2 = num2.toString().split("");

  for (let i = 0; i < num1.length; i++) {
    let num = num1[i];
    frequencies1[num] = ++frequencies1[num] || 1;
  }

  for (let i = 0; i < num2.length; i++) {
    let num = num2[i];
    frequencies2[num] = ++frequencies2[num] || 1;
  }

  for (let num in frequencies1) {
    if (frequencies1[num] !== frequencies2[num]) {
      return false;
    }
  }
  return true;
}

// test inputs:
console.log(
  sameFrequency(182, 281), //true
  sameFrequency(34, 14), //false
  sameFrequency(3589578, 5879385), //true
  sameFrequency(22, 222) //false
);

// sameFrequency(182, 281);
