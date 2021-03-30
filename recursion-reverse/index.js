
// zach solution
function reverse(str) {
    let arr = str.split("")
    let result = []

    function recurseHelper(input) {
        if (input.length == 0) {
            return result.join("");
        }
        result.push(input[input.length-1])
        return recurseHelper(input.slice(0,-1))
    }
    return recurseHelper(arr)
}

// colt solution

// function reverse(str) {
//     if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }


console.log(reverse('awesome'))