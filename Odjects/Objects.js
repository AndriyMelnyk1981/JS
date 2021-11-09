// Об'єкти_______________________________________________________________________________________________________________________________________________
/* Об'єкти JavaScript - це набори властивостей і методів. 
   Властивості об'єктів — це дані, пов'язанні з об'єктом,
   Методи — функції для опрацювання даних об'єкта. 
   Адресація (посилання) властивостей у сценаріях JavaScript можлива або за назвами, або за номерами.*/

// Dog object /////////////////////////////////////////////////////////
const dog = {
    name: 'Teddy', // property
    age: 3,
    hasHotDog: true,
    speak: () => console.log("Woof!"), // method
}
console.log("The Dog name is ", dog.name);
console.log("The Dog age is ", dog.age);
 
if (dog.hasHotDog) {
   console.log("The Dog has Hot Dog");
}
dog.speak()
///////////////////////////////////////////////////////////////////////  

// create with an object literal
const dog1 = { };
 
// with properties
const dog2 = { 
   friendly: true,
   speak: () => console.log("Woof! Woof!"),
};
 
// with constructor
const dog3 = new Object();

//Розширення об'єкта новими властивостями................................................	
const dog = { 
    friendly: true,
    speak: () => console.log("Woof! Woof!"),
 };
  
  // adding new property name
 dog.name = "Rex";
 // adding new method
 dog["run"] = () => console.log("Run");

//Редагування властивостей об'єкта.......................................................
const dog = { 
    name: 'Teddy',
    friendly: true,
    speak: () => console.log("Woof! Woof!"),
    likeCats: false
 };
  
  // adding a new property name
 dog.name = "Rex";
  
 // removing a property
 delete dog.likeCats;

/* Mетоди для роботи з об'єктами 
    obj.valueOf()  - повертає примітивне значення зазначеного об’єкта
    obj.toString() - повертає рядкове представлення об'єкта
    obj.hasOwnProperty('propName') - повертає логічне значення (true/false), яке вказує, чи містить об’єкт вказану властивість як пряму властивість цього об’єкта, а не успадковується через ланцюжок прототипів*/
//Статичні методи Object
/*  Object.assign(obj)  - копіює значення всіх перерахованих власних властивостей з одного або декількох вихідних об’єктів на цільовий об’єкт;
    Object.create(obj) - створює новий об’єкт із зазначеним об’єктом -прототипом та властивостями;
    Object.entries(obj) - повертає масив, що містить усі пари [ключ, значення] власних перерахованих рядкових властивостей даного об’єкта;
    Object.freeze(obj)  - заморожує об’єкт. Інший код не може видалити або змінити його властивості
    Object.keys(obj) - повертає масив, що містить імена всіх власних властивостей даного об’єкта;
    Object.isFrozen(obj), Object.isExtensible(obj)...та інші*/