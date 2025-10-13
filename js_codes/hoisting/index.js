/*hoisting:
    1. variable hoisting: for var keyword variables
        (func can be called before it's declaration
        as it is hoisted before the calling due to hoisting
        feature but here only declaration is hoisted thus
        gives undefined value)
    2. function hoisting: for function created only using
        standard syntax as below. this feature hoists
        the func decalration as well as operation before the
        calling even if func is called before it's declaration

        hoisting is not for let and const keywords and also
        not for class*/

//var hoisting will show undefined//
console.log(name);
var name="janvi";

//function hoisting//
call_name("Janu");
function call_name(my_name)
{
    console.log(my_name);
}
