/*Bitwise operator: AND(&), OR(|) NOT(~), <<(left shift),
 >>(right shift), XOR(^)*/
//these are for each bit of binary equivalent//
console.log(2&5);
console.log(2|5);
/*2: 0010
5: 0101
2 and 5: 0000 i.e 0
2 or 5: 0111 i.e. 7
*/

console.log(~0);
/* to represent -ve in binary it has MSB(leftmost bit) as 1
and MSB as 0 for +ve numbers
here 0 : 000...0000
 when not operation performed it alters each 0 thus makes 111...1111
 here MSB is 1 therefore -ve
 now to represent -ve number we use 2's complement
 2's complement of binary equivalent after not i.e. 111..1111
 i.e. 000...0001 which is 1 in decimal
 at the end -ve 1 is the answer*/

/*when left shift i.e. << binary equvalent of that number
is shifted to the left by n bit i.e. it multiplies the decimal
number by 2 to the power n*/

/*when right shift i.e. >> binary equivalent of that number is
shifted to right side by n digit of binary thus gives
decimal divide by 2 to the power n */

console.log(10>>1);//this is shifting of 10 binary i.e. 000..1010 by one bit//
//we get 00...101 i.e. decimal 5//
console.log(100>>2);//100 divide by 2 to the power 2 i.e. 4//

console.log(10<<2);//10*(2^2)=10*4=40
