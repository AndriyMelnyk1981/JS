

// відображення цифр_________________________________________________________________________________________________________________________________________
var n = 25.62
console.log(n.toFixed(2));        //Returns a string representing a number in fixed-point notation.
console.log(n.toExponential(4))  //Returns a string containing a number represented in exponential notation.
console.log(n.toPrecision(3));   //Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

console.log(+20)
console.log(-15)

var i = 10;
console.log(++i);
console.log(i);
console.log(i++);

// Математичні функції____________________________________________________________________________________________________________________________________________
console.log(5+5);   //   x = x + y  ===  x+= y
console.log(9-3);    //   x = x - y  ===  x-= y
console.log(5*4);    //   x = x * y  ===  x*= y
console.log(10/3);   //   x = x / y  ===  x/= y
console.log(10%3);   //   x = x % y  ===  x%= y
console.log(12**2);  //   x = x ** y  ===  x**= y
///////////////////////////////////////////////////////////////////////////
// TO print a result we can use
const a = 20;
const b = 60;
const sum = a + b;
 
console.log(a + b);
 
console.log("sum of a and b is equal to ", a + b);   
// also sum variable can be printed
console.log("sum of a and b is equal to ", sum);
 
// info
console.info("I can print some information");
// error
console.error("I can inform about an error");
//////////////////////////////////////////////////////////////////////////

var n = 300;
n = n + 10;
console.log(n)
n = n * 2;
console.log(n);

var n = 300;
n += 20;
console.log(n);
n *= 2;
console.log(n);
n /= 3;
console.log(n);

console.log(Math.sqrt(25)); // корінь квадратний
console.log(Math.pow(3,5)); // піднесення до степеня
console.log(Math.PI);       //An intrinsic object that provides basic mathematics functionality and constants.
console.log(Math.E);        //The mathematical constant e. This is Euler's number, the base of natural logarithms

// Оператори відношення______________________________________________________________________________________________________________________________________________________
console.log(6>10);
console.log(6<10);
console.log(10>=10);
console.log(8<=10);
console.log(10===10)
console.log(10!==10)
console.log(10=="10") // не використовується
console.log(10==="10")
// Оператор порівняння === - The strict equality operators (=== and !==) use the Strict Equality Comparison Algorithm to compare two operands..............................
console.log("hello" === "hello");   // true
console.log("hello" === "hola");    // false
console.log(3 === 3);               // true
console.log(3 === 4);               // false
console.log(true === true);         // true
console.log(true === false);        // false
console.log(null === null);         // true
console.log("3" === 3);           // false
console.log(true === 1);          // false
console.log(null === undefined);  // false

const object1 = {
    name: "hello"
  }
  
  const object2 = {
    name: "hello"
  }
console.log(object1 === object2);  // false 
console.log(object1 === object1);  // true

// Оператор порівняння 
1 == 1;              // true
"hello" == "hello";  // true
"1" ==  1;            // true
1 == "1";             // true
0 == false;           // true
0 == null;            // false
0 == undefined;       // false
0 == !!null;          // true, look at Logical NOT operator
0 == !!undefined;     // true, look at Logical NOT operator
null == undefined;    // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3;         // true
number1 == number2;   // false

const object1 = {"key": "value"}
const object2 = {"key": "value"};

object1 == object2 // false
object2 == object2 // true

const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true

const d = new Date('December 17, 1995 03:24:00');
const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s);    //true

// відображення чисел__________________________________________________________________________________________________________________________________________
console.log(100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
console.log(-1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
console.log(10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
console.log(-100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);

console.log(typeof Infinity);

console.log(Infinity*8);
console.log(Infinity*50);
console.log(Infinity*Infinity);
console.log(.00000000000000000000000000000000000000000000000000000000000000000000000000000000001);
console.log(-5/0);
console.log(0/0); //NaN - Not a number
console.log(Infinity/Infinity);
console.log(Math.sqrt(-10));

console.log(NaN===NaN);
console.log(0.2 + 0.1);
console.log(10000000000000008 + 10000000000000009);

// Строки____________________________________________________________________________________________________________________________________________________
console.log("some'long'string");
console.log('some"long"string');

console.log("hello here".length);
console.log("Another \
very very long \
string");

console.log("Another \nvery long \nstring");

console.log("Another \n\tvery long \n\t\tstring");

console.log("Another \"very long\" string");  // екранування

console.log("Another \\very long\\ string");

var string = "Hello";
console.log(string + " world")// сумує рядки

var string2 = "Sometimes the same is different";
console.log(string2.length);
console.log(string2.charAt(0));                 //Повертає значення зазначеного індексу
console.log(string2.charAt(30));
console.log(string2.charAt(string2.length - 1)); 
console.log(string2.substring(10));             
console.log(string2.substring(10,21));          
console.log(string2.slice(-10));                
console.log(string2.substr(14,4));          
console.log(string2.indexOf("i"));              
console.log(string2.indexOf("me"));        
console.log(string2.lastIndexOf("me")); 
console.log(string2.replace("is","is not"));
console.log(string2);
string2 = string2.replace("is", "is not") 
console.log(string2);
console.log(string2.split(" "));        
console.log(string2.toUpperCase());     //перетворює всі букви рядка в заголовні     
console.log(string2.toLowerCase());     //перетворює всі букви в малі
console.log(string2[4]);

// Boolean Логічний тип_____________________________________________________________________________________________________________________________________________
console.log(true);
console.log(false);

console.log(5===5);  // Порівнює значення (Comparing operands of the same type, Comparing operands of different types, Comparing objects.
console.log(5===6);  //

console.log(Boolean(5));

//Falsy values____________________________________________________________________________________________________________________________________________
console.log(Boolean(undefined)); 
console.log(Boolean(null));
console.log(Boolean(0));            // Завжди будуть  false
console.log(Boolean(NaN));
console.log(Boolean(""));        

var a = "Text";

if (a) {
    console.log("Its true");
}

console.log(true && false); // 
console.log(true && true); //  Порівнює і повертає коли значення true 

console.log(true || false); // 
console.log(false|| false);  //Повертає значення true
console.log(false|| true);  //

console.log(!true);    // Повертає протилежне
console.log(!false);   // Повертає протилежне

var c = 0
    isTrue = false
isTrue && (c = 5);
        
console.log(c);

var someString = "Non-emty string";
var newString = someString || "Default String";
console.log(newString);

console.log(null == undefined);        // Returns true
console.log(null === undefined);       // Returns false

// Перевірки типів даних____________________________________________________________________________________________________________________________
const num = 1;
const str = "Some text";
 
typeof(num)             // Returns "number"
typeof(str)             // Returns "string"	    
 
"Jack".constructor
console.log("Jack".constructor);                     // Returns function String()  {[native code]}
(num).constructor  
console.log((num).constructor);                      // Returns function Number()  {[native code]}
false.constructor 
console.log(false.constructor);                      // Returns function Boolean() {[native code]}
[1,2,3,4].constructor          
console.log([1,2,3,4].constructor);                  // Returns function Array()   {[native code]}
{ uname:"Jack"; age:34 }.constructor
console.log({ name:"Jack",age:34 }.constructor);     // Returns function Object()  {[native code]}
new Date().constructor 
console.log(new Date().constructor);                 // Returns function Date()    {[native code]}
function () {}.constructor                       
console.log(function () {}.constructor);             // Returns function Function(){[native code]}

//Перетворення типів____________________________________________________________________________________________________________________________________________
console.log(5 + "8");
console.log(typeof(5 +"8")); 
console.log("5" * "4");
console.log(typeof("5" * "4"));
console.log("5" * "hi");
console.log(typeof("5" * "hi"));

console.log("5" == 5);                 // Returns true             
console.log("0" == false);             // Returns true              
console.log(0 == false);               // Returns true
console.log("5" == true);              // Returns false
console.log("" == false);              // Returns true
console.log(null == false);            // Returns false
console.log(null == true);             // Returns false
console.log(undefined == false);       // Returns false
console.log(undefined == true);        // Returns false
console.log(undefined == null);        // Returns true

console.log(Number("123"));         //An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.
console.log(typeof(Number("123")));  
console.log(String(3322));          //Allows manipulation and formatting of text strings and determination and location of substrings within strings.
console.log(typeof(String(3322)));
console.log(Boolean(1));
console.log(typeof(Boolean(1)));

console.log(!!5);                   // ! - Оператор логічного заперечення, переводить в логічний тип
console.log(!!0);
console.log(345 + "");
console.log(typeof(345 + ""));      // + - Унарний оператор, переводить в строку
console.log(+"456");
console.log(typeof+"456");          //                       переводить в число

var number = 22;
console.log(typeof number.toString());//Returns a string representation of an object.
number = 45;
console.log(number.toString(3));
number = 5;
console.log(number.toString(2));
 
console.log(typeof false);
console.log(typeof false.toString()); //Returns a string representation of an object.
console.log(parseInt("45"));                  //Converts a string to an integer.
console.log(parseInt("45 fdbdznnz", 10));
console.log(parseFloat("12.45 em"));           //Converts a string to a floating-point number.

console.log(typeof Infinity);
console.log(typeof Nan);
console.log(typeof String(Infinity));
console.log(typeof String(NaN));
console.log(String(Infinity), typeof String(Infinity));
console.log(String(NaN), typeof String(Infinity));
 
console.log(parseInt("45"));                  //Converts a string to an integer.
console.log(parseInt("45 fdbdznnz", 10));
console.log(parseFloat("12.45 em"));           //Converts a string to a floating-point number.

console.log(typeof Infinity);
console.log(typeof Nan);
console.log(typeof String(Infinity));
console.log(typeof String(NaN));
console.log(String(Infinity), typeof String(Infinity));
console.log(String(NaN), typeof String(Infinity));
 
console.log(+"");    // Пустий рядок при перетворенні в число стає 0

console.log(!!"");   //_______________________
console.log(!!NaN);
console.log(!!0);     // Будуть при перетворенні давати завжди false
console.log(!!null);
console.log(!!undefined);//_____________________

console.log(!!"HI");
console.log(+"4          "); // Пробіли ігноруються
console.log(+"          4"); //
console.log(+"    g    4");  //
console.log(+"4  c");        // Символи до або після числа вибивають помилку

console.log(parseInt("4 px"));  //Converts a string to an integer

console.log(+true);             // При претворенні буллінних значень вертає 1 або 0
console.log(+false);            //
