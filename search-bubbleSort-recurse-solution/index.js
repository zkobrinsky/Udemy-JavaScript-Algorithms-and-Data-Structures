function bubbleSort(arr) {
    return recurse(arr)

    function recurse(arr) {
    let finished = true;
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                finished = false;
                let a = arr[i]
                let b = arr[i+1]
                arr[i] = b;
                arr[i+1] = a;
            } else if (arr[i] === arr[i+1]) {
                continue;
            }
           }

           if (finished === false) {
               return recurse(arr);
           } else {
               return arr;
           }
    }

}

bubbleSort([5,4,29,72,1,98,1,72])