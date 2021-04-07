require 'pry'

def selection_sort(arr, index = 0)

    if index > arr.length-1
        return arr
    end

    min = 1/0.0
    swap_index = 0

    for i in index..arr.length-1
        if arr[i] < min
            min = arr[i]
            swap_index = i
        end
    end

    arr[swap_index] = arr[index]
    arr[index] = min
    index += 1
    
    selection_sort(arr, index)

end

p selection_sort([5,4,2,98,107,3,3,90])