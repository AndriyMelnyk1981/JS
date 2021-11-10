let  x = 15;
let text = x > 10 ? "x is more than 10" : x < 10  ? "x is less 10" : "ten";
console.log(text);

if (x > 10) {
   text = "ікс більше 10";
} else if (x < 10) {
  text = "ікс менше 10";
} else {
  text = "ікс рівний 10";
}
console.log(text);

let sumNumbers = function(a, b) {
    return a + b;
  };
  console.log(sumNumbers(2,5));