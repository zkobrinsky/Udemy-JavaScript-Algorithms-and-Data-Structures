function capitalizeWords(arr) {
    let result = []
    recurse(arr,result)

    
    function recurse(arr, result) {
        if (arr.length === 0) return arr;
        result.push(arr[0].toUpperCase())
        arr.shift()
        return recurse(arr,result)
    }
    return result;

}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))