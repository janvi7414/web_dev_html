

function call_name(name){
    console.log("your name is: ", name);
}

call_name("Janvi");

function call_name2(first, second){
    console.log(first,second);
}
call_name2("Janvi","chichudde");

function sum(a,b,c){
    let sum=a+b+c;
    return sum;
}
console.log(sum(2,3,4));

//other syntax to store func inside a var//
let output = function(a,b){
    return a/b;
}
console.log(output(1,3));

//arrow function//
let xpowery = (x,y) =>{
    return x**y;
}
console.log(xpowery(2,4));