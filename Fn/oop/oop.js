// // let admin ={
// //     rules: 123,
// //     access: true,
// //     isAdmin() {
// // console.log(" I am admin " +this.name+ " My rules " +this.rules)
// //     }
// // }
// // let user = {
// //     name: "John",
// //     age: 22,
// //     __proto__: admin
// // }
// // console.log(user.rules)

// // function User(name, age) {     //function constructor
// // this.name = name;
// // this.age = age;
// // this.__proto__ = admin;

// // this.myInfo = function() {
// //     console.log("Мене звати " +this.name+ ", мені " + this.age+ " роки.")
// // }
// // }
// // let u1 = new User("Jack", 25);
// // let u2 = new User("John", 23);
// // let u3 = new User("Mike", 24);
// // console.log(u2.myInfo());

// // classes

// class User {   
// constructor(name, age, admin=false) {
//     this.name = name;
//     this.age = age;
//     this.admin = admin; 
// }
// myInfo() {
//     console.log("Мене звати " +this.name+ ", мені " + this.age+ " роки.")
// if(this.admin == true)
// {
// console.log("\nТак, я адмін, не завидуйте.")
// }
// else {console.log("\nНі, я не адмін, шукайте когось іншого.")}
// }
// }


// // console.log(u1.myInfo());
// class Moderator extends User {
//     constructor(name, age, admin=false, moder = true) {
//         super(name, age, admin)
//                this.moder = moder;
//     } 
//     static addPost() {
//         console.log("Я дуже сильний, пусти сорочку")
//     }
//     static master = true;   
//     myInfo() {
//             super.myInfo();
//             console.log("Я модератор")
        
// }
// }
// let m1 = new Moderator ("Pavlo", 34, true)
// let u1 = new User("Jack", 25);
// let u2 = new User("John", 23, true);
// let u3 = new User("Mike", 24);
// // console.log(m1.addPost());
// console.log(Moderator.master)


class People {
    
/**
 * Клас людина
 * @param {String} pib в форматі "Прізвище Ім"я По Батькові"
 * @param {String} birthday дата народження в форматі "24.10.1987"
 * @param {String} numbers номер, якщо їх кілька, то в форматі "номер1, номер2"
 * @param {Number} room Кімната
 */
 constructor(pib, birthday, numbers, room) {
let name = pib.toLowerCase().split(" ");
this.name = {};
this.name.p = name[0][0].toUpperCase() + name[0].slice(1)
this.name.i = name[1][0].toUpperCase() + name[1].slice(1)
this.name.b = name[2][0].toUpperCase() + name[2].slice(1)

let date = birthday.split(".");
this.date = {};
this.date.d = +date[0];
this.date.m = +date[1];
this.date.y = +date[2];


this.numbers =numbers.split(", ")

this.room = +room;
}
static month = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
/*Вивести ПІБ
*@return {string} строка формату ПІБ */
getPib() {
    return `${this.name.p} ${this.name.i} ${this.name.b}`
}
/*Вивести день народження
*@return {string} строка формату "13 липня 1994" */
getBirthday() {
    return `${this.date.d} ${People.month[this.date.m-1]} ${this.date.y}`
}
/**
 * Вивести всі номери телефонів або тільки перший
 * @param {boolean} allNumbers if true, show all, else (false) first only
 * @return {string} строка формату: "067987654, 0938523654"
 */
getNumberList(allNumbers) {
    if(this.numbers.length ==0 || this.numbers[0].length ==0)
    return undefined
    if(allNumbers) {
       return this.numbers.join (", ")
    } else {this.numbers[0];}
}
}
let people1 =new People("Петро Іванович Ліскевич", "12.11.1981", "067987654", 25)
let people2 =new People("Ольга Василівна Заболотна", "10.04.1989", "067456214", 27)

console.log(people2.getPib())
console.log(people2.getBirthday())
console.log(people2.getNumberList())