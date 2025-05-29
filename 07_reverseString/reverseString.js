const reverseString = function (str) {
    let start = 0
    let end = str.length - 1
    let arr = str.split("")
    while (start < end) {
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp

        start++
        end--
    }
    return arr.join("")

};

// Do not edit below this line
module.exports = reverseString;
