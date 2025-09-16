//filter//
let arr9 = [10,4,1,2,5,36,77];
let even_arr = arr9.filter((number)=>{
    if(number%2===0){
        return true;
    }else{
        return false;
    }
})
console.log(even_arr);