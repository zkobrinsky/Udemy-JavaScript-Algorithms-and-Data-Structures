require 'pry'

nums = [2,4,1,3,8,23]

def is_odd(num)
    num % 2 != 0 ? true : false
end

def is_one(num)
    num == 1 ? true : false
end

def greater_than_ten(num)
    num > 10 ? true : false
end

# takes an array and any callback that returns true or false on an integer
def some_recursive(arr, cb)
    return false if arr.empty?

    some_method = method(cb)  

    if some_method.call(arr[-1]) == true
        return true
    end

    some_recursive(arr[0...-1], cb)
end

p some_recursive(nums, :greater_than_ten)