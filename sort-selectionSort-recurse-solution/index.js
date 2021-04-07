function selectionSort(arr, index = 0) {

    if (index > arr.length-1) return arr;

    let min = Infinity;
    let swapIndex;

    for (let i = index; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            swapIndex = i;
        }
    }

        arr[swapIndex] = arr[index];
        arr[index] = min;
        index++;
        return selectionSort(arr, index)

}

selectionSort([5,4,2,98,107,3,3,90])
