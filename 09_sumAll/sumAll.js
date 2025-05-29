const sumAll = function (start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return "ERROR";
    }

    const min = Math.min(start, end);
    const max = Math.max(start, end);


    const count = max - min + 1;
    return (count * (min + max)) / 2;
};

console.log(sumAll(2, 4));

console.log(sumAll(2, 4))
// Do not edit below this line
module.exports = sumAll;
