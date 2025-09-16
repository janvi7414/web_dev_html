 //non primitive datatypes is called reference type//
/*    object
      array
      function */
 /*data assigned to non-primitive datatypes are stored
 in heap memory and address to that heap memory is
 stored in stack memory
 also data assigned to primitvie datatypes is stored
 in stack memory
 e.g. arr=[a,b]  here arr which is a var or add to
 location( of data a and b stored in heap memory) is stored
 in stack memory*/

 /*object non-primitive datatypes is used to store
 data in key:value formate and use , in btw pairs*/

 let obj1={
     name:"Janvi",
     "last name":"Chichudde",//use "key" when has space
     rank:10,
     greet: function(){
         console.log("hellow");
     }
 }
 //to access function of an obj//
 obj1.greet();
 console.log(typeof(obj1));

 /* shallow copy when obj2=obj1 here we are creating
 new var obj2 which is pointing to the same object
  stored in heap memory and not creating another object*/

 //ARRAY//
 let arr = new Array("Janvi",3,3.4);
 console.log(arr);
 console.log(typeof(arr));

 /*operations on array
    push(add from end),pop,shift(pop from start),
    unshift(push from statrt),slice(takes out part from
    one index to one index before last index),splic
    (arr content can be insert,add,remove),
    map,filer
    ,reduce,sort,indexof,find*/

 let arr3 = [1,2,3,"Janvi",true,5];
arr3.splice(2,3,"Spliced");
 console.log(arr3);
 /* to remove values from index 2 i.e. 3 values
  and insert Spliced in there place */
 arr3.splice(0,0,"Seema");
 console.log(arr3);
 //at 0 index remove no index and add Seema//


 let arr4 = [10,20,30];
 let arr5 = arr4.map((number)=>{
     return number*number;
 })

 console.log(arr5);

 let arr6 = arr4.map((number,index)=>{
     console.log(index);
 })

