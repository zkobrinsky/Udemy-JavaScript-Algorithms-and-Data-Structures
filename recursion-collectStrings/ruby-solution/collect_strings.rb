require 'pry'

obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}


def collect_strings(hash)
    @result = []
    def recurse(hash)
        hash.each do |key, value|
            if value.is_a? String
                @result << value
            elsif
                value.is_a? Hash
                recurse(value)
            end
        end
    end
    recurse(hash)
    @result
end

p collect_strings(obj)