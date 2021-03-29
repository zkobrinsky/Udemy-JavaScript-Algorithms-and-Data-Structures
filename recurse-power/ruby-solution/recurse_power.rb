def power(base,exp)
    return 1 if exp === 0
    base * power(base, exp-1)
end

power(2, 10)