// WARM UP!

// 1
//  WRITE A CONSTRUCTOR FUNCTION
// Write a basic Dog() constructor function with the following properties set to 'true'; barks and wagstail.
// Write your code below:

function BasicDog (barks, wagstail){
  this.barks = true;
  this.wagstail = true;
};



// Create an instance of Dog.
// Define your variable, fido.
// Write your code below:
let fido = new BasicDog();

// Print fido barks. It should print true.
// It should prin, true.
// Write your code below:
console.log(fido.barks);


// 2
// CLASS DECLARATION
// Declare a DogClass class.
// It should have the following properties set to 'true'; barks and wagstail.
// Write your code below:

class Dog {
  constructor(barks = true, wagstail = true) {
  this.barks = barks;
  this.wagstail = wagstail;
}
}


// Create an instance of DogClass()
// Define your variable, spike
// Write your code below:

let spike = new Dog();

// Print spike wagstrail.
// It should print, true.
// Write your code below:

console.log(spike.wagstail);

// 3
// EXTENDS
// DECLARE A SUBJECT CLASS
// It should have the property of 'requiresBooks' set to 'true'.
// Write your code below:
class Subject {
  constructor(requireBooks=true){
    this.requireBooks = requireBooks;
  }
}


// DECLARE A SUB-CLASS MATH
// Extend from Subject
// It should inherit requiresBooks
// It should have an additional property of 'requiresCalculator ' set to 'true'.
// Write your code below:

// class Math extends Subject {
//   constructor(requireBooks, requiresCalculator = true){
//     super(requireBooks);
//     this.requiresCalculator = requiresCalculator;
//   }
// }

class Math extends Subject {
  constructor(requireBooks, requiresCalculator){
    super(requireBooks);
    this.requiresCalculator = true
  }
}


// Declare a 'math' variable, creating an instance of Math
// Write your code below:
let math = new Math();

//Print math
// It should print: "Math {requiresBooks: true, requiresCalculator: true}"
// Write your code below:
console.log(math);


//4
// SUB-CLASS
// DECLARE A SUBCLASS OF GEOMETRY
// Extend from Math
// It should have an additional property of 'requiresRuler' set to true.
// Write your code below:

class Geometry extends Math {
  constructor(requiresBooks, requiresCalculator, requiresRuler){
    super(requiresBooks, requiresCalculator)
    this.requiresRuler = true;
  }
}

// Declare a 'geometry' variable, creating an instance of Geometry
// Write your code below:
let geometry = new Geometry();

// Print geometry
// It should print: "Geometry {requiresBooks: true, requiresCalculator: true, requiresRuler: true}"
// Write your code below:
console.log(geometry);


//5
// SUB-CLASS
// DECLARE A SUBCLASS OF TRIGONOMETRY
// Extend from Geometry
// The constructor should have a parameter of 'specialCalculator'
// Set the value of specialCalculator equals to specialCalculator so you can pass this value when you create an instance of Trigonometry.
// Write your code below:
class Trignometry extends Geometry {
  constructor(requiresBooks, requiresCalculator, requiresRuler, specialCalculator){
    super(requiresBooks, requiresCalculator, requiresRuler)
    this.specialCalculator = specialCalculator;
  }
}

// Declare a 'trigonometry' variable, creating an instance of Trigonometry, passing in an argument of 'Ti-83'.
// Write your code below:
let trignometry = new Trignometry('Ti-83');

// Print trigonometry
// It should pring: "Trigonometry {requiresBooks: true, requiresCalculator: true, requiresRuler: true, specialCalculator: "Ti-83"}"
// Write your code below:
console.log(trignometry);


//6
// SUB-CLASS
// DECLARE A SUBCLASS OF CALCULUS
// Extend from Trigonometry
// The constructor should have a parameter of 'requiresRuler' and 'specialCalculator'
// In should inherit 'requiresRuler' and 'specialCalculator'
// Calculus does not require a ruler, so set that property to 'false'. It does require a special calculator, the 'Ti-89'
// Write your code below:
class Calculus extends Trigonometry {
  constructor(requiresBooks, requiresCalculator, requiresRuler, specialCalculator){
    super(requiresBooks, requiresCalculator, requiresRuler, specialCalculator);
  }
}

// Declare a variable of 'calculus', creating an instance of Calculus, passing in a boolean of 'false'
// Write your code below:
let calculus = new Calculus(false, 'Ti-89');

// Print calculus
// It should print: "Calculus {requiresBooks: true, requiresCalculator: true, requiresRuler: false, specialCalculator: "Ti-89"}"
// Write your code below:
console.log(calculus);
