//False values : undefined, null, 0, false, NaN(not a number), string//
/* True values: all other values that are not False */

console.log(false||"janvi");//will return the nonboolean value//

/*short-circuiting
     when there are multiple true false conditions like
        false||true||false||false||true
        in this case o/p will be true at second check it wont
        go ahead to check other items*/
console.log(false||6||8);//stops at 6//
console.log(true&&7&&8&&9);//goes till end//
console.log(false&&7&&9);//stops at first false//

/**/