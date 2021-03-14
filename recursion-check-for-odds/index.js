function checkForOdds(input) {
    let array = input;
    let state = false;
    
    if (array.length === 0) {
        return state;
    }
    if (array[0] % 2 !== 0) {
        state = true;
    } else {
        array.shift();
        checkForOdds(array)
    }
    

}

console.log(checkForOdds([246, 7802, 7801]))