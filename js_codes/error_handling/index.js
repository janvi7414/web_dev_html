
/* error is something that inturrupts the natural
flow of execution of program*/
//visit gov API error code list

//try and catch
try{
    //contains whole code including line creating err
    console.log("try block starts");
    //reference err
    console.log(x);
}

        catch(err){
            console.log("catch block starts");
        }


//customized error handling
try{
    console.log(x);
}
        catch(err){
            throw new Error("declare the var first");
            //here a new obj of Error is created
        }

//comment above to run this
let error_code=100;
if(error_code==100)
{
    throw new Error("Invalid Json");
}