const obj = {
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

function collectStrings(obj) {
    result = [];
    recurse(obj)
    function recurse(obj) {
        for (let key in obj) {
            if (typeof obj[key] === "string") {
                result.push(obj[key])
            } else if (typeof obj[key] === "object") {
                recurse(obj[key])
            }
        }
    }
    return result;
}

console.log(collectStrings(obj))