/* Write two functions that convert temperatures from Fahrenheit to Celsius, 
and vice versa:

Because we are human, we want the result temperature to be rounded to one decimal place: 
i.e., `convertToCelsius(100)` should return `37.8` and not `37.77777777777778`.
*/

const convertToCelsius = function(fToC) {
  let temperature = (fToC - 32) * 5/9;
  return Math.round(temperature * 10) / 10;
};

const convertToFahrenheit = function(cToF) {
  let temperature = (cToF*9/5) + 32;
  return Math.round(temperature * 10) / 10;
};

console.log(convertToCelsius(32)); // fahrenheit to celsius, should return 0
console.log(convertToCelsius(188));
console.log(convertToFahrenheit(0)); // celsius to fahrenheit, should return 32
console.log(convertToFahrenheit(188));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
