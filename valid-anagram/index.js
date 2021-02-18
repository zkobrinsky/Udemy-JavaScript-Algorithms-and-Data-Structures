// says two inputs, so I'm interpreting that as two arguments.
// I don't think I care about whether or not they're alphanumeric. They can still be anagrams
// without being alphanumeric ("h3ll0" and "ll30h")

// Returns string "YES" or "NO"


// example correct inputs: 
// str1 = "cinema"
// str2 = "iceman"

// example incorrect inputs:
str1 = "handy"
str2 = "dandy"

// str1 = "yo"
// str2 = "yomama"

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return 'NO';
    }
    let obj1 = {};
    let obj2 = {};

    for (let char of str1) {
        obj1[char] = ++obj1[char] || 1;
    }

    for (let char of str2) {
        obj2[char] = ++obj2[char] || 1;
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            debugger;
            return 'NO';
        }
    }

    return 'YES';

}

console.log(isAnagram(str1, str2))