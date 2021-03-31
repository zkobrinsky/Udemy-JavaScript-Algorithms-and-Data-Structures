def capitalize_words(arr)
    @result = []
    
    def recurse(arr)
        return arr if arr.empty?
        @result << arr[0].upcase
        recurse(arr.drop(1))
    end
    
    recurse(arr)
    @result

end

p capitalize_words(['i', 'am', 'learning', 'recursion'])