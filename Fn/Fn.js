// function sayHelloWorld() {
//   return "Hello, World!";
// };
// var str = sayHelloWorld();
// console.log(str);

// const Marvel = {
//   yearCreation: 1939,
//   mainCharacter: 'Spider Man',
//  mainTeam: 'Avengers',
// };

// function extendObject(obj, field, value) {
//   const newObj = Object.assign({}, obj);
//   newObj[field] = value;
  
//   return newObj;
// }

// function extendExistingObject(obj, field, value) {
//   Marvel[field] = value;
//   extendExistingObject('spiderManGirl', 'Mary Jane');
//   return newObj;
// }
// const NewMarvel = extendObject(Marvel, 'mainVillain', 'Venom');
//  console.log('Marvel object: ', Marvel);
//  console.log('NewMarvel object: ', NewMarvel);

// Functions Types
// Arrow function
const square = (number) => {
  return number * number;
}
// shorter way 
const square = (number) => number * number;

// to call an arrow function
square (10);  //result 100

// function declaration
function square (number) {
  return number * number;
}
// to call the function
square (10); //result 100

// function expression

function square (number) {
  return number * number;
}

// to call the function
square (10);  //result 100
 
// Anonymous function

function makeDecision(makeFn) {
  makeFn();
}

// call the function passing an anonymous function
makeDecision(function() {
  console.log("Let's dance");
});

// Immediately invoked function expression

(function () {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();

// firstVariable and secondVariable will be discarded after function is executed

const sum = new Function('a,b',  'return a + b; ');

// call the function with params
sum(1, 2);  //result 3


