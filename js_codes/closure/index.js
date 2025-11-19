/* Closure: function with it's data needed
        it is about nested function and the data inside it's scope i.e {}
        for same var with different values


        what if var is access after the func finished i.e. here it is possible

        usually it is considered that after the execution of code
        the var inside this func is freed i.e. erased but it is accessible if the
        func itself returns the reference to that var
*/
function outer(){
    let name = "Janvi";
    function inner(){
        console.log("inner: "+name);
    }
    return inner;// here no copy made rather reference is returned
}

let result = outer();
//here refernce to the inner func is stored in result
result();

