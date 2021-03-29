require 'pry'

def collect_odd_values(arr)
    @result = []
    def helper(helper_input)
        return if !helper_input[0]

        if helper_input[0]% 2 != 0
            @result << helper_input[0]
        end

        helper(helper_input.drop(1))
    end

    helper(arr)
    @result
end

print collect_odd_values([1,2,4,6,7,8,9,11,13])