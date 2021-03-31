require 'pry'
# <p>Write a function called&nbsp;<code>stringifyNumbers</code>&nbsp;which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!</p>

def stringify_numbers(obj)

        obj.update(obj) do |key, value|
            if value.class == Hash
                stringify_numbers(value)
            elsif value.class == Integer
                value = value.to_s
            end
        end
end


obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

# expected:
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}

p stringify_numbers(obj)