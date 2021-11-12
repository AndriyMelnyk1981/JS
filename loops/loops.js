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
// }
// console.log(summArr1 + summArr2);

function sumNumsInArrays(array1, array2) {
    let summArr1 = 0;
  for (let i = 0; i < array1.length; i++) {
  summArr1 = summArr1 + array1[i];
  }
  let summArr2 = 0;
  for (let i = 0; i < array2.length; i++) {
  summArr2 = summArr2 + array2[i];
  }
  }
  return summArr1 + summArr2