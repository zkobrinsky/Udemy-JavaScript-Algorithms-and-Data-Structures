require 'pry'

def reverse(str)
    arr = str.split("")
    @result = []

    def helper(input)
        return @result if input.empty?
        @result << input.last
        helper(input.slice(0, input.length-1))
    end
    
    return helper(arr).join("")
end

p reverse('awesome')