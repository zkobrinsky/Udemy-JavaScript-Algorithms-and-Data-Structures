// more readable sort option... still needs some further regex

function isAnagram(str1, str2) {
    str1 = str1.replace(/ /g, '').split("").sort().join();
    str2 = str2.replace(/ /g, '').split("").sort().join();

    str1 === str2 ? "YES" : "NO"
}

isAnagram("iceman yo", "cinem")

// still O(n) I believe... but O(n*4) or so...