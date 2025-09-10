/* let name="Janvi
Chichudde";
invalid if written in next line also */
let name=`janvi
chichudde`// symbol before 1 in keypad//
console.log(name);

//another way to create a string//
let first_name = new String("janvi chichudde");
console.log(first_name);
/*operations on string
        concatination
        substring
        length
        uppercase
        lowercase
        char AT
        indesof
        */
let initial_name = "sarita ";
let last_name = "chichudde ";
let full_name = `${initial_name}${last_name}`;//syntax//
//no "+" or "and" required//
console.log(full_name);

console.log(initial_name.length);//count space//
console.log(initial_name.toUpperCase());