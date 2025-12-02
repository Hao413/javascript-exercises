const repeatString = function(str, num) {
    let string = "";
    for (let i = 0; i < num; i++) {
        string += str;
    }
    return string
};

console.log(repeatString('hey', 3)) // returns 'heyheyhey'

// Do not edit below this line
module.exports = repeatString;
