require 'pry'

def capitalize_first(arr)
    @result = []
    
    def recurse(arr)
        return arr if arr.empty?
        @result << arr[0].capitalize
        recurse(arr.drop(1))
    end
    
    recurse(arr)
    @result

end

p capitalize_first(['car','taco','banana'])