/* Promises: an object used to represent the state (pending, fulfilled or rejected) or completion result of
    an async code

 when async code is taking time to execute promise is returned i.e. an object is returned which represents the state
 or promises to return the result after some time
 thus promise helps async code to run like sync code i.e. it provided immediate returning as sync code
 3 stages in async execution:
    1. fulfilled(execution successfully completed)
    2. rejected(execution is rejected)
    3. pending(neither fulfilled i.e resolved or rejcted)

 after pending it eventually turns into either of the fulfilled or rejcted then the associated "then" is executed



    */

/*  let firstPromise = new Promise((resolve,reject)=>{
    //async funcitons are created
    console.log("my name");
    //go live and
    //open console and run "firstPromise" to see current state


    //to convert it from "pending" into "fulfilled"
    //uncomment below
    //resolve("resolved successfully..!")//


    //to convert it from "fulfilled" into "rejected"
    //uncomment below
    reject(new Error("rejected successfully..!"))

});*/


//use of then and catch blocks

let secondPromise= new Promise((resolve,reject)=>{
    let signal = true;
    if(signal)
    {
        resolve("resolved successfully..!");
    }
    else{
        reject(new Error("rejected..!"));
    }
});

//secondPromise.then((message)=>{
//    console.log("resolved message is =>"+ message);
//}).catch((error)=>{
//    console.log("rejected message is =>"+ error);
//})


//nested .then are possible where value returned fromt he parent .then is parameter for the next then

//secondPromise.then((message)=>{
//    console.log("first then " +message);
//    return (10);
//}).then((message)=>{
//    console.log("second then "+message);
//    return (20);
//}).then((message)=>{
//    console.log("third then "+message);
//}).finally(()=>{
//    console.log("this will surerly run ");
//})


//when multiple promisses are created promise.all i.e. a new promise is created and this has state of fulfilled
//when all the promises are fulfilled else not here array of promises is passed

function sayMyName(){
    console.log("janvi");
}

let thirdPromise= new Promise((resolve,reject)=>{
    setTimeout(sayMyName,2000);//after 2 sec
    resolve("third");
})

let forthPromise= new Promise((resolve,reject)=>{
    setTimeout(sayMyName,4000);
    resolve("forth");
})

let fifthPromise= new Promise((resolve,reject)=>{
    setTimeout(sayMyName,5000);
    resolve("fifth");
})

Promise.all([thirdPromise, forthPromise, fifthPromise])
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
    console.error(error);
})


