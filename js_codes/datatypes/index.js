//datatype defines the size and type of data//
//1. primitive
//2. non primitive


// in primitive
// number(int decimal), string, undefined(when just declared
// but not assigned value to it), boolean, null, big int, symbol

let marks=20;
marks = 8.90;
marks ="janvi";
marks = true;
console.log(marks);

//undefined//
let age;
console.log(age);

//null//
let c=null;
console.log(c);

//to check datatype of a var//
let check=false;
console.log(typeof(check));


//Symbol->   primitive data type
//->   introduced in ES6
//->  used to represent unique values, that can be used as keys for objects
//
//PROS-> Being both unique and immutable, serve effectively as distinctive identifiers within objects and classes
//->  They enable the creation of private properties and methods within classes, enhancing encapsulation and security
//->  Are advantageous for establishing constants that are easily shared across various segments of your codebase
//
//CONS->  limited usability
//->  complex debugging
//
//For example,
//const value1 = Symbol('hi');
//const value2 = Symbol('hi');
//
//console.log(value1 === value2); // false

