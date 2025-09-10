/*uniary operator where only one operand is required
e.g. ++,-- etc */
let a=5;
 console.log(a++);
 /*post-increament i.e. first use(print)
 value of a then increament it*/
 console.log(a);

 let b=9;
 console.log(++b);
 /*pre-increament i.e. first increament
value of a then use(print)*/

let c=9;
console.log(c%10);

/*binary operators where two operands are used
like basic arithematic operations*/
console.log(c+=9);
/*assignment operators which are used to assign values
to the variables like =,+=, etc*/

/*Comparison operator like ==,!=,>,<,===,!== etc*/
console.log(7<=7);
console.log('7'==7);//== needs only value to be same and not the datatype//
console.log('6'===6);//false === needs data aswell as datatype to be same//

/*Ternary operator used to define true false cond
syntax:   "cond ? true:false"*/
let age=8;
let status = (age>18) ? "i can vote":"i cannot vote";
console.log(status);