
//variable declaration has three ways(variable is a named location)
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
var b=11;
console.log(b);

//in let it is block scoped it cannot be redefined
// but it can be manipulated i.e. value can be updated either
// of same datatype or differnt datatype//
// it thus prevents debugging issues//

{
    let c=20;
    console.log(c);
}
//console.log(c);
//will give error//
//
//let d=21;
//let d=22;
//will give error//

let e=23;
e="janvi";
console.log(e);
// is valid thus dynamically typed lang//


//const can not be manipulated or redeclared or redefined//
const f=0;
console.log(f);

f=9;
const f=8;
//invalid//

// rules of var namming
// var can be named started with number,_,$
// no space allowed
//should use camel caseing "ageOfStudent"
//meaningful
// no use of reserved keywords

