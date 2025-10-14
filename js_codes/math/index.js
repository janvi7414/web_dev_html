console.log(Math.PI);
console.log(Math.max(10,1,2,4,0));
console.log(Math.min(10,1,2,4,0));
console.log(Math.round(1.3));
console.log(Math.floor(1.3));
console.log(Math.ceil(1.3));
console.log(Math.abs(-2));
console.log(Math.random());


//date and time using Date()
let curr=new Date();
console.log(curr);

let date=new Date('October 15 2025 07:12');
//sun 0, mon 1, ...
console.log(date);

console.log(date.getDay());
console.log(date.getFullYear());
date.setFullYear(2000);
console.log(date);
