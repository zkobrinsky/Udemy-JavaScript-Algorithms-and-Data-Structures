// comments

const twoSum = (sorted) => {
    let left = 0;
    let right = sorted.length -1;
    
    while (left < right) {
        let sum = sorted[left] + sorted[right]
        if (sum === 0) {
            return ([sorted[left], sorted[right]])
        }
        sum > 0 ? right-- : left++;
    }


}

// straightforward
// let sorted = [-2,-1,0,1,2,3]
// more complex
let sorted = [-4,-3,1,4,5]

console.log(twoSum(sorted))