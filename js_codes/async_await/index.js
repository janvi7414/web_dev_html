/*console.log("1");

function sayName(name){
    console.log("Name: "+name)
}
setTimeout(sayName,5000,"Janvi");//async code therefore it is executed after 5 sec after printing 3
console.log("3")*/

//to create an async code just add "async" before the func
/*async function asyncFunction(){
    for (let i = 1; i <= 3; i++) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        console.log("Loop", i);
    }
}

//calling the function
asyncFunction();*/

//async-await is used to manage promises
//every async-await has atleast one promise

//API
//process involved
//  1. prepare url or api endpoint to get data from -> sync
//  2. fetch the data -> depends on network call -> async thus needs await as next possible depends on this
//  3. operation on the data -> sync

//creating a async function
//using websit jsonplaceholder to get example fetch url
/*async function getData(){
    //fetching data from the url and storing it in response var and marking as await
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //storing exact data in var data from the json file
    //also async
    //parsing json-await
    let data = await response.json();
    console.log( data );
}

//calling func
getData();*/

//here fetch can be used for geting data, putting data, deleting, pushing , etc

//to post data

const myHeader = new Headers();
myHeader.append("content-Type", "application/json");

const url="https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({ username: "janvi chichudde"}),
    headers: myHeader,
};

/*

The name myHeader is user-defined—it can be anything.
"content-Type" tells the server what format the request body is in.
"application/json" means the body contains JSON data.
body: is a property inside the fetch options.
It must be a string when sending JSON.
JSON.stringify() converts a JavaScript object into a JSON string.
{ username: "janvi chichudde" } is the data being sent.
*/

//creating the funciton for posting data

async function postData(){
    const response1 = await fetch(url,options);
    let data1 = await response1.json();
    console.log("data1 is: ",data1);
}

postData();



