def product_of_array(arr)
    return 1 if arr.empty?
    return arr[0] * product_of_array(arr.drop(1))
end

print product_of_array([1,2,3,4])