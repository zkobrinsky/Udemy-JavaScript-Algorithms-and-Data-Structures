require 'pry'

# helpers:
def get_digit(num, place)
    string = (num / 10 ** place).to_s.split(".")[0]
    string[string.length - 1].to_i
end

  
def digit_count(num)
    num.floor.to_s.gsub("-","").length
end
  
def most_digits(arr)
    digits = arr[0].to_s.length
    for i in 1..arr.length-1
        digits = [digits, digit_count(arr[i])].max
    end
    digits
end

def radix_sort(arr)
    num_digits = most_digits(arr)

    for k in 0..num_digits
        digit_buckets = Array.new(10){ [] }
        neg_digit_buckets = Array.new(10){ [] }
        for i in 0..arr.length-1
            digit = get_digit(arr[i],k)
            if arr[i].negative?
                neg_digit_buckets[digit * -1 + 9] << (arr[i])
            else
                digit_buckets[digit] << (arr[i])
            end
        end
        arr = neg_digit_buckets.flatten.concat(digit_buckets.flatten)
    end
    arr
end

p radix_sort([23,345,5467,-12,23345,-9852])

# p get_digit(15432,5)
# p digit_count(1234)
# p most_digits([12354,2,9])
