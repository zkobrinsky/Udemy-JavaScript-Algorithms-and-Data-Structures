require 'pry'

# helpers:

def get_digit(num, place)
    # binding.pry
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
        # binding.pry
        for i in 0..arr.length-1
            digit = get_digit(arr[i],k)
            if digit.negative?
                neg_digit_buckets[digit * -1 + 9].push(arr[i])
            else
                digit_buckets[digit].push(arr[i])
            end
        end
        # arr = [].concat(neg_digit_buckets, digit_buckets)
    end
    arr
end


    # function radixSort(arr) {
    #     let numDigits = mostDigits(arr);
    #     for (let k = 0; k < numDigits; k++) {
    #       let digitBuckets = Array.from({ length: 10 }, () => []);
    #       let negDigitBuckets = Array.from({ length: 10 }, () => []);
    #       for (let i = 0; i < arr.length; i++) {
    #         let digit = getDigit(arr[i], k);
    #         if (Math.sign(arr[i]) === -1) {
    #           negDigitBuckets[digit * -1 + 9].push(arr[i]);
    #         } else {
    #           digitBuckets[digit].push(arr[i]);
    #         }
    #       }
    #       arr = [].concat(...negDigitBuckets, ...digitBuckets);
    #     }
    #     return arr;
    #   }

p radix_sort([23,345,5467,12,2345,9852])

# p get_digit(15432,5)
# p digit_count(1234)
# p most_digits([12354,2,9])
