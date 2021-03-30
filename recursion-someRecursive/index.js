const isOdd = num => {
    return num % 2 !== 0 ? true : false
}

const isOne = num => {
    return num === 1 ? true : false
}

const greaterThanTen = num => {
    return num > 10 ? true : false
}



function someRecursive(arr, cb) {
    if (arr.length === 0) return false;

    if (cb(arr[arr.length-1])) return true;

    return someRecursive(arr.splice(0, arr.length-1),cb)
}

console.log(someRecursive([2,4,1,3,8], greaterThanTen))