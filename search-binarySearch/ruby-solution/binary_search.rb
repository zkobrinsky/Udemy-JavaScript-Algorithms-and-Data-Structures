require 'pry'

def binarySearch(arr, value)
    left = 0
    right = arr.length-1
    middle = (left+right)/2.floor()

    while left < right
        if value < arr[middle]
            right = middle-1
        else
            left = middle+1
        end
        middle = (left+right)/2.floor()
        if arr[middle] == value
            return middle
        end
    end
    -1

end

p binarySearch([1,2,4,7,90,102], 90)