function bubbleSort(arr) {
    let finished = true;
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                finished = false;
                let temp = arr[i]
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
           }
           if (finished === false) {
               return bubbleSort(arr);
           } else {
               return arr;
           }
}

bubbleSort([5,4,29,72,1,98,1,72])