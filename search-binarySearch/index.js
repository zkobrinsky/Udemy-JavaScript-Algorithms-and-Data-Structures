// colt solution
// function binarySearch(arr, value) {
//     let left = 0;
//     let right = arr.length-1
//     let middle = Math.floor((left+right)/2)

    
//     while (arr[middle] !== value) {
        
//         if (value < arr[middle]) {
//             right = middle-1;
//         } else {
//             left = middle+1;
//         }
//         middle = Math.floor((left+right)/2)
        
//         if (arr[middle] === value) {
//             return middle;
//         }
//     }
//     return -1;
// }

// zach solution
function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length-1
    let middle = Math.floor((left+right)/2)

    
    while (left < right) {
        
        if (value < arr[middle]) {
            right = middle-1;
        } else {
            left = middle+1;
        }
        middle = Math.floor((left+right)/2)
        
        if (arr[middle] === value) {
            return middle;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,20],8))