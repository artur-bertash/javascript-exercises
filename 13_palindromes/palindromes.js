const palindromes = function (string) {
    let left = 0
    let right = string.length - 1
    string = string.toLowerCase()
    const isAlphaNumeric = (char) => /[a-z0-9]/.test(char);
    while (left < right) {

        while (!isAlphaNumeric(string[left])) {
            left++
        }
        while (!isAlphaNumeric(string[right])) {
            right--
        }
        if (string[left] !== string[right]) {
            return false
        }
        left++
        right--
    }
    return true
};
console.log(palindromes("A car, a man, a maraca.'"))
// Do not edit below this line
module.exports = palindromes;
