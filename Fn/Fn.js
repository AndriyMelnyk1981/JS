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

// // Functions Types
// // Arrow function
// const square = (number) => {
//   return number * number;
// }
// // shorter way 
// const square = (number) => number * number;

// // to call an arrow function
// square (10);  //result 100

// // function declaration
// function square (number) {
//   return number * number;
// }
// // to call the function
// square (10); //result 100

// // function expression

// function square (number) {
//   return number * number;
// }

// // to call the function
// square (10);  //result 100
 
// // Anonymous function

// function makeDecision(makeFn) {
//   makeFn();
// }

// // call the function passing an anonymous function
// makeDecision(function() {
//   console.log("Let's dance");
// });

// // Immediately invoked function expression

// (function () {
//   // some initiation code
//   let firstVariable;
//   let secondVariable;
// })();

// // firstVariable and secondVariable will be discarded after function is executed

// const sum = new Function('a,b',  'return a + b; ');

// // call the function with params
// sum(1, 2);  //result 3


// function func(name) {
//   console.log("Hello " + name)
// }
// func("Ihor");

// function func() { 
//   let sum = 0;
//   for (let i = 0; i <= 100; i++) {
//   sum = sum + i;
// }
// }
// console.log(func()) 
// function func(num1, num2, num3) {
// 	console.log(num1 + num2 + num3);
// }

// func(1, 2, 6);

// function func(num) {
// 	console.log(num * num);
// }

// let param = 6;
// func(param);

// function func(num1, num2, num3) {
// 	console.log(num1 + num2 + num3);
// }
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// func(param1, param2, param3)

// let result = 0;

// for (let i = 1; i <= 99; i+=2) {
// 	result = result + i;
// }

// console.log(result);
// let arr = [1, 2, 3, 4, 5,23, 56];
// for (let i = 0; i <= arr.length; i++) {
// 	console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
		
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] % 2 !== 0) {
// 		console.log(arr[i]);
// 	}
// }

// let result = 1;
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	result += arr[i]*arr[i];
// }

// console.log(result);
//  let result = 0
// let arr =[2, 5, -9, 15, 1, -4];
//  for (let i = 0; i < arr.length; i++) {
//   if (arr[i]>0 ) { result += arr[i];
    	
//   }
// } 
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++){
//   result +=arr[i];
// }
// console.log(result/arr.length);


// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// console.log(1 in obj);
// console.log('f' in obj);

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// delete obj.e;
// console.log('e' in obj);

// const arr = ['a', 'b', 'c'];
// arr[1] = '!';
// console.log(arr);

// const arr = ['a', 'b', 'c'];
// arr = [1, 2, 3];
// console.log(arr);


// const arr = ['a', 'b', 'c'];
// arr = ['a', 'b', 'c'];
// console.log(arr);
// let test = 12; 

// if (test != 10) {
// 	console.log('not ten');
// } else {
// 	console.log('ten(((');
// }

const arr = [1];
arr[0] = 2;
arr[1] = 3;
console.log(arr)