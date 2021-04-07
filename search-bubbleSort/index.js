function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        let finished = true;
        for (let j = 0; j < i -1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                finished = false;
            }
        }
        if(finished) break;
    }
    return arr;
}

bubbleSort([5,4,29,72,1,98,1,72])