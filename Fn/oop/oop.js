// let admin ={
//     rules: 123,
//     access: true,
//     isAdmin() {
// console.log(" I am admin " +this.name+ " My rules " +this.rules)
//     }
// }
// let user = {
//     name: "John",
//     age: 22,
//     __proto__: admin
// }
// console.log(user.rules)

// function User(name, age) {     //function constructor
// this.name = name;
// this.age = age;
// this.__proto__ = admin;

// this.myInfo = function() {
//     console.log("Мене звати " +this.name+ ", мені " + this.age+ " роки.")
// }
// }
// let u1 = new User("Jack", 25);
// let u2 = new User("John", 23);
// let u3 = new User("Mike", 24);
// console.log(u2.myInfo());

// classes

class User {   
constructor(name, age, admin=false) {
    this.name = name;
    this.age = age;
    this.admin = admin; 
}
myInfo() {
    console.log("Мене звати " +this.name+ ", мені " + this.age+ " роки.")
if(this.admin == true)
{
console.log("\nТак, я адмін, не завидуйте.")
}
else {console.log("\nНі, я не адмін, шукайте когось іншого.")}
}
}
let u1 = new User("Jack", 25);
let u2 = new User("John", 23, true);
let u3 = new User("Mike", 24);
// console.log(u1.myInfo());
class Moderator extends User {
    addPost() {
        console.log("Я дуже сильний, пусти сорочку")}
        myInfo() {
            console.log("Мене звати " +this.name+ ", мені " + this.age+ " роки.")
        if(this.admin == true)
        {
        console.log("\n Я модератор.")
        }
}
}

let m1 = new Moderator ("Pavlo", 34, true)
console.log(m1.myInfo());