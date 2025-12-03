const reverseString = function(str) {
    // split turns string to array of characters, reverse can now work
    // and then join to bring to back to a string
   console.log(str.split("").reverse().join(""));
};

reverseString("hello world");



// Do not edit below this line
module.exports = reverseString;
