// explicitly built from Colt directions
// function naiveSearchString(str, target) {
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === target[0]) {
//             for (let j = 0; j < target.length; j++) {
//                 if(str[i+j] !== target[j]) {
//                     break;
//                 } else {
//                     if (j === target.length-1) {
//                         counter++;
//                     }
//                 }
//             }
//         }
//     }
//     return counter;
// }

// zach solution
function naiveSearchString(str, target) {
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        let substr = str.slice(i, i+target.length);
        if (substr === target) {
            counter++
        }
    }
    return counter;
}


naiveSearchString("ziouefomgwoger", "omg")