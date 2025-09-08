
//variable declaration has three ways
//1. using "var"
//2. using "let"
//3. using "const"-->
//
//<!--in var it can be used inside a func i.e func scoped
// or globally i.e. globally scoped but not block scoped i.e.
//it is accessed inside the {} it is created//
//    var can be reassign(value can be changed) or
//    redefined/redeclared(datatype can be changed) thought it
//    generated debugging issues thus not used nowadays
//
//

var age=25;
console.log(age);


//used inside a func only//
function name(){
    var a="janvi";
    console.log(a);
}
name();
//console.log(a);
//this console.log will give error as it is outside the func//


//redefining var//
var b=10;
console.log(b);
var b=20;
console.log(b);
