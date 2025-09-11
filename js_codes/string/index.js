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

let g="NAME";
console.log(g.toLowerCase());

console.log(g.substring(2));//at index 2//
console.log(g.substring(0,3));//from 0 to 2//

let sentence="This is an example sentence to split into words";
let word=sentence.split(' ');//split on the basis of space//
console.log(word);

/*double inverted commans in a string is treated as sepration
thus to add double inverted commans in the sentence we use
backslack before and after the completion thus a sentence
cannot be splited on the basis of backslash when backslash is
used inside the value of a string*/
let sentence2="This is sentence \"two\" ";
console.log(sentence2.split(' '));

/*to join words we use join(' ')*/
console.log(word.join(','));
