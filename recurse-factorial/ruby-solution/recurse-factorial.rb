def factorial(num)
    return 1 if num == 0
    return num * factorial(num-1)
end

print factorial(22)