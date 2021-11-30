function Animal(name, color, age, amountOfLeg) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.amountOfLeg = amountOfLeg;
    this.toString = () =>
        console.log("This animal is" + " " + Object.getPrototypeOf(this).constructor.name);
    this.sound = () =>
            console.log('I like my voice.');
    this.move = () =>
            console.log(this.name + " is ...");
}

class Cat extends Animal {
    constructor(name, color, age, amountOfLeg, domesticAnimal) {
        super(name, color, age, amountOfLeg);
        this.domesticAnimal = domesticAnimal;
        this.sound = () =>
            console.log('Meow!');
        this.move = () =>
            console.log(this.name + " is moving slowly");

    }
    getColor() {
        return this.color;
    }
}
class Tiger extends Cat {
    constructor(name, color, age, amountOfLeg, domesticAnimal) {
        super(name, color, age, amountOfLeg, domesticAnimal);
        this.sound = () =>
            console.log('Rrrr-grrr!');
        this.move = () =>
            console.log(this.name + " is running quiсkly");
    }
}
class Wolf extends Animal {
    constructor(name, color, age, amountOfLeg) {
        super(name, color, age, amountOfLeg);
        this.sound = () =>
            console.log('Howl!!!');
        this.move = () =>
            console.log(this.name + " is hunting for prey ");
    }
}
class Dog extends Wolf {
    constructor(name, color, age, domesticAnimal, kindOfDog) {
        super(name, color, age, domesticAnimal);
        this.kindOfDog = kindOfDog;
        this.sound = () =>
            console.log('Woof, woof, woof.');
        this.move = () =>
            console.log(this.name + " is running after postman");
    }
}
class Bird extends Animal {
    constructor(name, color, age,  amountOfLeg, isFriendly, amountOfWings) {
        super(name, color, age, amountOfLeg);
        this.isFriendly = isFriendly;
        this.amountOfWings = amountOfWings
        this.sound = () =>
            console.log('Piu-piu-piu');
        this.move = () =>
            console.log(this.name + " is flying");

    }
}
const Tomas = new Cat('Tomas', 'black-white', 5, 4, true);
const SherKhan = new Tiger('SherKhan', 'orange-black-white', 3, 4, false);
const Akella = new Wolf('Akella', 'grey', 8, false);
const Bart = new Dog('Bart', 'white', 12, true, 'pitbull');
const Bagel = new Bird('Bagel', 'yellow', 1, 2, true, 2);

console.log(Tomas.getColor());
Tomas.move();
Tomas.toString();
SherKhan.toString();
SherKhan.move();
Akella.sound();
console.log(Bart.kindOfDog);
Bart.move();
console.log(Bagel.color, Bagel.isFriendly, Bagel.amountOfWings);
Bagel.sound();



