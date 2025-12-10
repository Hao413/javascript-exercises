// Method 2 the JavaScript file
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");


// Method 3 the JavaScript file
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// });


// Method 1 - Using with named function
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// METHODS 2 & 3
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
  console.log(e);
});


