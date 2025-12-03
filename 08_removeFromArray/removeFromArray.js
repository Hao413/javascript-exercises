// ... operator so that ...+args can deal with all arguments
const removeFromArray = function(array, ...args) {
    // val is automatically created as a parameter for
    // the arrow function inside filter
    return(array.filter(val => !args.includes(val))) 
    // for each val in array, it returns true only if value
    // is not in args
};

// to view the returned result with node in terminal
// console.log(array.filter(val => !args.includes(val))) 

removeFromArray([1, 2, 3, 4], 3); 
// should remove 3 and return [1,2,4]

// Do not edit below this line
module.exports = removeFromArray;
