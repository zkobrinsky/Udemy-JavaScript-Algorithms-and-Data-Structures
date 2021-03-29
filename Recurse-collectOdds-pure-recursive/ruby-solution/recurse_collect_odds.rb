require 'pry'

def collect_odd_values(arr)
    newArr = []

    if arr.length == 0
        return newArr
    end

    if arr[0] % 2 != 0
        newArr << arr[0]
    end

    newArr = newArr.concat(collect_odd_values(arr.drop(1)))
    newArr
end

print collect_odd_values([1,2,3,4,5])
