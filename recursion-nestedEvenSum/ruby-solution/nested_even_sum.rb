require 'pry'

def nested_even_sum(obj)
    @counter = 0;
    
    def recurse(obj)
        obj.each do |key, value|
            if value.class == Hash
                recurse(value)
            elsif value.class == Integer && value % 2 == 0
                @counter += value
            end
        end
        @counter
    end
    
    recurse(obj)
end


obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
}
p nested_even_sum(obj2)