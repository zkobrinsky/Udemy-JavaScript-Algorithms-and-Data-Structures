require 'pry'

nums = [2,4,6,8]

def is_odd(num)
    num % 2 != 0 ? true : false
end

# takes an array and any callback that returns true or false on an integer
def some_recursive(arr, cb)
    return false if arr.empty?
  
    some_method = self.method(cb)  

    if some_method.call(arr[0]) == true
        return true
    end

    some_recursive(arr[0...-1], cb)
end

p some_recursive(nums, :is_odd)