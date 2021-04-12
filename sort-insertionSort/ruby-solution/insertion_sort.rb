require 'pry'

def insertion_sort(arr)
    for i in 1..arr.length-1 do
        current_val = arr[i]

        j = i - 1
        while i >= 0 && arr[j] > current_val && j > -1 do
                arr[j + 1] = arr[j]
            j -= 1
        end
        arr[j + 1] = current_val
    end
    arr
end

p insertion_sort([7, 92, 34, 12, 80, 1])