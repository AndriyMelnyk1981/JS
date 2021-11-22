// var array = [1,3,5,7,9,8];
// console.log(array[3]);
// let months = ['January','February','March','Aprlil','May',];
// console.log(months[3]);

// months[5] = 'June'; // додавання(зміна) елемента масиву за індексом
// console.log(months);
// console.log(months.length);
// months[20] = 'something';  // додаємо елемент з індексом 20
// console.log(months);
// console.log(typeof months);   // масиви є об"єктами
// //  var myArray = new Array(34,12,45,654,); // аргументи є елементами масиву, виняток, коли ми даєм 1 аргумент, він буде довжиною масиву
//  var myArray = new Array(56);
//  console.log(myArray.length)
//  var arr = [1,2,3,4,5,6,7,8];
//  var arr2 = [4,5,6,1,2,3,'text'];
//  console.log(arr.concat(arr2));   // конкатинація масивів
//  let arr3 = arr.concat(arr2);
//  console.log(arr.indexOf('text'));
//  arr.join();  //об"єднує в 1 рядок всі значення масиву  1,2,3,4,5,6,7,8
//  arr.join(""); // об"Єднанн, кожне значення окрема стрінга 12345678
//  arr.join("-"); // об"Єднанн, кожне значення через дефіс  1-2-3-4-5-6-7-8
//  console.log(arr.join());


//  // Черга та стек
//  arr.push(6);  //додає останній елемент масиву
//  arr.shift(); //забирає перший елемент масиву, з зсувом індексів
//  arr.pop();  //забирає останній елемент масиву
//  arr.unshift(34); //додає на початок масиву значення аргументу(з індексом 0)
// /////////////////////////
//  arr.splice(1,1); //видаляє з масиву значення, починаючи з індексу 1б другей параметр кількість видалюваних елементів,
// // якщо другий параметр не вказаний, видалиться все, починаючи з індексу 1, включно.
// arr.includes(4) //проводить пошук на наявність елементів в масиві, видає буліан тру(є)б фолс(нема) 
// arr.reverse(); // повертає масив з елементами, в зворотньому порядку
// "Petro, Mykola, Ivan".split(", "); //створює масив з елементів рядка, і розділяє їх на коремі елементи
// "Ivan".split(""); // створює масив з окремих букв  [ 'I', 'v', 'a', 'n' ]
// console.log("Ivan".split(""));
 
// var array = ['Some string', 'Another String', 'Third String', 'JavaScript', 'Misko'];
// // var filtered = array.filter(function(e){
// //     return e.indexOf('o') ===-1;
// // });
// // console.log(filtered);  // фільтрування елементів, що містять букву "о"

// // console.log(array.every(function(e){return e.lenght > 1})); 

// // function fibonachi (count) {
// //     let fib = [];
// //     for (let i = 0; i < count; i++){
// //         if (i == 0) fib[i] = 1;
// //         else if (i==1); fib[i] = 2;
// //         else fib[i] = fib[i-2] + fib[i-1]
// //     }
// // return fib;
// // }
// // let f = fibonachi(15);
// // console.log(f);

let arr = [];

arr[3] = 'a';
arr[8] = 'b';
console.log(arr.length)

