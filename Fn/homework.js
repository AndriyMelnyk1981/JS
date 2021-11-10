
  function sayHelloWorld() {
    return "Hello, World!"
  }
sayHelloWorld()

// function extendObject(obj, field, value) {
//   const newObj = Object.assign({}, obj);
//   newObj[field] = value;
//   return newObj;
// }
var obj = { name: '' };

function printObj(str, obj = { key }) {
    obj.name = str;
    return obj.name;
}
console.log(printObj('Name', obj));