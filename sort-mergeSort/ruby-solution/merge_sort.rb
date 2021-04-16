require 'pry'

def merge_sort(arr)
    # p arr
    if arr.length <= 1
        return arr
    end
    mid = arr.length/2.floor
    left = merge_sort(arr[0..mid-1])
    right = merge_sort(arr[mid..arr.length])

def merge(arr1, arr2)
    results = []

    i = 0
    j = 0

    while i < arr1.length && j < arr2.length
        if (arr2[j] > arr1[i]) 
            results << arr1[i]
            i += 1
        else 
            results << arr2[j]
            j += 1
        end
    end

    while i < arr1.length
        results << arr1[i]
        i+=1
    end
  
    while j < arr2.length
    results << arr2[j]
    j+=1
    end
      
    results

end

    return merge(left, right)


end


p merge_sort([1,2,5,3,2,9,1003])

