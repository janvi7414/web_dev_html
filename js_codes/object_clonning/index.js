//object clonning is to crate an obj with same key-value pairs
//syntax of obj
/* let name={
    key1: value1,
};
*/
let obj1={
    age:10,
    wt:20
};


//way 1 spread operator i.e. '...'
let obj2 = {...obj1};

//change in vlaue is for obj1 key only//
//obj1.age=21;

console.log(obj2);

//way 2 Object.assign({},src);
let obj3= Object.assign({},obj1);
console.log(obj3);


//way 3 using iterator
let obj4={};//declared destinated obj

for(let key in obj1)
{
    let new_key=key;
    let new_value=obj1[key];
    //inserting key by key in destination obj
    obj4[new_key]=new_value;
}

console.log(obj4);


//Garbage collector refer mdm//