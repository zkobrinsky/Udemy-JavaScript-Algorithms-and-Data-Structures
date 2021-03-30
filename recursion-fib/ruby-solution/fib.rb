def fib(num)
    return 1 if num <= 2
    return fib(num-1) + fib(num-2)
    
end

puts fib(10)