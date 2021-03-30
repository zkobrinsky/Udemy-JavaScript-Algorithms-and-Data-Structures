def recursive_range(num)
    return 0 if num == 0
    return num + recursive_range(num-1)
end

p recursive_range(3)