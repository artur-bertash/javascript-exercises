const removeFromArray = function (arr, ...otherArgs) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (otherArgs.includes(arr[i])) {
            arr.splice(i, 1)

        }
    }
    return arr
};

console.log(removeFromArray([1, 2, 2, 3], 2))
// Do not edit below this line
module.exports = removeFromArray;
