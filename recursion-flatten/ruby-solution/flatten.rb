require 'pry'

def flatten(arr)
    result = []

    arr.each do |e|
        if e.kind_of?(Array)
            result.concat(flatten(e))
        else
            result.push(e)
        end
    end
    result
end

p flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])