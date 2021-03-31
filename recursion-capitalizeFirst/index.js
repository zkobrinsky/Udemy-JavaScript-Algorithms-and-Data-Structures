function capitalizeFirst(arr) {
    let result = []
    recurse(arr,result)

    function capitalize(str) {
        if (typeof str !== 'string') return ''
        return str.charAt(0).toUpperCase() + str.slice(1) 
    }
    
    function recurse(arr, result) {
        if (arr.length === 0) return arr;
        result.push(capitalize(arr[0]))
        arr.shift()
        return recurse(arr,result)
    }
    return result;

}

console.log(capitalizeFirst(['car','taco','banana']))