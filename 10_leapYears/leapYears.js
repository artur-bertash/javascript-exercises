const leapYears = function (year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0
        }
        return true
    }
    return false
};

console.log(leapYears(1996))
// Do not edit below this line
module.exports = leapYears;
