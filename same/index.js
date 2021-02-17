// zach first solution

function same(source, target) {
    let unsquared = {};
    let squared = {};
    if (source && target && source.length === target.length) {

        for (let number of source) {
            unsquared[number] = ++unsquared[number] || 1;
        }

        for (let number of target) {
            squared[Math.sqrt(number)] = ++squared[Math.sqrt(number)] || 1;
        }

        for (let number in squared) {
            if (unsquared[number] !== squared[number]) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;

}

// possible input:
// correct:
// [1,2,3], [1,4,9]

// incorrect:
// [1,2,3], [1,5,6]
// [1,1,4], [1,16]
// [a,b,c], [1,2,3]


same([1, 2, 3], [1, 16])
