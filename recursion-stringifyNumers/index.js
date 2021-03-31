// <p>Write a function called&nbsp;<code>stringifyNumbers</code>&nbsp;which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!</p>


// first attempt
// function stringifyNumbers(obj) {
//     let newObj = Object.assign({}, obj)
//     for (let key in newObj) {
//         if (typeof newObj[key] === "object" && !Array.isArray(newObj[key])) {
//             stringifyNumbers(newObj[key])
//         } else if (typeof newObj[key] === "number") {
//             newObj[key] = String(newObj[key])
//         }
//     return newObj
// }

function stringifyNumbers(obj) {
    let newObj = {}
    for (let key in obj) {
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key])
        } else if (typeof obj[key] === "number") {
            newObj[key] = String(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

// expected:
// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }
            
            
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(obj))