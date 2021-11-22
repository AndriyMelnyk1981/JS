// // var i;
// // for (i = 10; i--;) {
// //     console.log(i);
// // }

// // var i;
// // for (i = 0; i < 10; i++) {
// //     console.log(i);
// // }

// var i = 1;
// for (i = i * i++;);
// while (i <= 5 ) {
//     console.log(i);
// }

// // var i = 0;
// // do console.log(i++); while (i < 10)

// const arrayNums1 = [7,101,3,1,9,11,100,111];  // 343
// const arrayNums2 = [90,101,3,1,69,11,10,111];
// let summArr1 = 0;
// for (let i = 0; i < arrayNums1.length; i++) {
// summArr1 = summArr1 + arrayNums1[i];
// }
// let summArr2 = 0;
// for (let i = 0; i < arrayNums2.length; i++) {
// summArr2 = summArr2 + arrayNums2[i];
// // }
// console.log(summArr1 + summArr2);

// function sumNumsInArrays(array1, array2) {
//     let summArr1 = 0;
//   for (let i = 0; i < array1.length; i++) {
//   summArr1 = summArr1 + array1[i];
//   }
//   let summArr2 = 0;
//   for (let i = 0; i < array2.length; i++) {
//   summArr2 = summArr2 + array2[i];
//   }
//   }
//   return summArr1 + summArr2

// let count = 0;
// while (count < 10 ){
//   console.log(count);
//   if (count ==4){
//     break;
//   }
//   count++;
// }
// let count = 10;
// do {
//  console.log(count);
// count--;
// }
// while (count > 7);
// let arr = [2, 5, 7, 9, 7];
// for(let i = 0; i<arr.length; i++) {    //step 2
//   console.log(arr[i]*5)
// }
// let arr = [2, 5, 7, 9, 7];
// for(let item of arr){
//   console.log(item*2)
// }
// let obj = {
//   "name": "George",
//   "age": 25,
//   "number": 122309299,
//   }
//   for(let key in obj) {
//     // console.log(key, obj[key]);
//    console.log(`ключ ${key}, значення ${obj[key]}`) 
//   }
// let arr = [2, 5, 7, 9, 7];
// arr.forEach(function(item, i, array) {
//   console.log(`Елемент:${item}
//    Індекс:${i}
//    Масив: ${array}`);
// })

// let people = [
//   {id: 1, name: "Oleg"},
// {id: 2, name: "Misko"},
// {id: 3, name: "Fedja"},
// ]
// let a = people.find(function(item) {
//   if (item.id==2) return item
// })
// console.log(a)

// let people = [
//   {id: 1, name: "Oleg"},
// {id: 2, name: "Misko"},
// {id: 3, name: "Fedja"},
// ]
// let a = people.filter(function(item) {
//   if (item.id<3) return item
// })
// console.log(a)

// let arr = [2, 5, 7, 9, 7];
// let newArr = arr.map(function(item, i) {
//     console.log(item);
    
//   })
let n;
    let arr = [];
    for (n = 1; n <=20; n+=2){
        arr[n]= n
      arr.join()
   
    }
    arr.join();
    console.log(arr.join());

const arr = [
  43, "what", 9, true, "cannot", false, "be", 3, true
];

const newArr = [];
 for (let  i=0;  i < arr.length; i++){
 newArr.push(arr[arr.length-i])}

 return newArr;
 console.log(newArr)
    