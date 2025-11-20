//no operation performed before whole dom content is looded
/* "DOMContentLoaded" is a JavaScript event that fires
when the HTML document is completely loaded and
parsed, before images, CSS files, or external
resources finish loading.*/
/* - using querySelector classes and ids are fetched to perform operations on
   -
*/


document.addEventListener("DOMContentLoaded", function(){

    const searchButton = document.querySelector("#searchButton");
    const usernameInput = document.querySelector("#usernameInput");
    const statDiv = document.querySelector("#statDiv");
    const easyDiv = document.querySelector("#easyDiv");
    const mediumDiv = document.querySelector("#mediumDiv");
    const hardDiv = document.querySelector("#hardDiv");
    const easySpan = document.querySelector("#easySpan");
    const mediumSpan = document.querySelector("#mediumSpan");
    const hardSpan = document.querySelector("#hardSpan");
    const tilesDiv = document.querySelector("#tilesDiv");


    /*
^ means the match must start at the beginning of the string.
$ means the match must end at the end of the string.
[] defines a set of allowed characters.
A-Z inside [] means any uppercase letter.
a-z inside [] means any lowercase letter.
0-9 inside [] means any digit.
_ inside [] allows the underscore character.
{3,16} means the previous pattern must repeat between 3 and 16 times.
    */

    function validateUsername(username){
        //for empty string
        if(username===""){
            alert("username cannot be empty..!");
            return false;
        }
        //regular expression for the valid username
        const regex = /^[A-Za-z0-9_]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching){
            alert("Invalid username..!");
        }
        return isMatching;
    }

        //func to fetched details of username using API thus async
        async function fetchUserDetails(username){

            /* backticks `` are used as this allows variable inclusion whereas
                "" or '' doesnt */
            try{
                //to disable the search button
                searchButton.textContent = "searching..";
                searchButton.disabled = true;

                const targetUrl = `https://leetcode.com/graphql/`;
                const myHeaders = new Headers();
                myHeaders.append("content-type", "application/json");

                const graphql = JSON.stringify({
                    query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                    variables:{"username": `${username}`}
                })

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: graphql,
            redirect: "follow"
        };

        const response = await fetch(targetUrl, requestOptions);
                if(!response.ok){
                    throw new Error("Unable to fetch the user details");

                }
                const data = await response.json();
                console.log("Logging data: ",data);
            }
            catch(error){
                tilesDiv.innerHTML = `<p>No data Found</p>`;
            }
            finally{
                //restoring serach button
                searchButton.textContent = "search";
                searchButton.disabled = false;

            }


        }


    //after clicking search button
    searchButton.addEventListener('click',function(){
        const username = usernameInput.value;
        console.log("entered username is: ",username);
        if(validateUsername(username)){
            //if valid then checking if available and fetching data
            fetchUserDetails(username);
        }
    })

});


/*
to get the desired url
    1. inspect the leetcode profile - > networks -> reload the page
    2. check in reponse section
    3. serach for "graphql" -> visite each graphql step by step to get the response as totalQuestionCount, easy count etc
    4. go to headers seciton and copy the request url
    5. const graphql value is copied from payload
    A query is a request for information, often sent in a URL or to a database.

*/