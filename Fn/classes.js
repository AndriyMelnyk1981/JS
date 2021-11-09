// ///////////////////////////////
// Classes
// 
class Rectangle {
    constructor(height, width) {
        // class fields
        this.height = height;
        this.width = width;
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}
const square = new Rectangle(10, 10);

console.log(calcArea); //100