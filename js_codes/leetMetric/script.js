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

                const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
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

                //as the direct request from local machine is rejected by leetcode
                //we are using a proxy url using demo server whose url is concatinated with the target url
                // from local machine it goes to this demo server which sends only target url ahead
                // serach "cors anywhere demo server"  3rd webiste and copy "https://cors-anywhere.herokuapp.com/"
                //run it on chrome and click the button

        const response = await fetch(proxyUrl+targetUrl, requestOptions);
                if(!response.ok){
                    throw new Error("Unable to fetch the user details");

                }
                const parsedData = await response.json();
                console.log("Logging data: ",parsedData);

                displayUserData(parsedData);

            }
            catch(error){
                tilesDiv.innerHTML = `<p>${error.meassage}</p>`
            }
            finally{
                //restoring serach button
                searchButton.textContent = "search";
                searchButton.disabled = false;

            }


        }

    //to populate the data
    // to simplify the data copy it from console and paste it online searching jsformatter
    function updateProgress(solved, total, spanId, innerDiv){
        const progressPercent = (solved/total)*100;
        innerDiv.style.setProperty("--progress-degree", `${progressPercent}%`);
        spanId.textContent = `${solved}/${total}`;
    }




    function displayUserData(parsedData){
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;

        const totalSolvedQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const totalSolvedEasyQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const totalSolvedMediumQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const totalSolvedHardQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(totalSolvedEasyQues,totalEasyQues,easySpan,easyDiv);
        updateProgress(totalSolvedMediumQues,totalMediumQues,mediumSpan,mediumDiv);
        updateProgress(totalSolvedHardQues,totalHardQues,hardSpan,hardDiv);

        //displaying data in tiles
        //creating an array
        const tilesArr = [
            {label: "Total Solved Ques: ", value: parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count},
            {label: "Total Solved Easy Ques: ", value: parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count},
            {label: "Total Solved Medium Ques: ", value: parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count},
            {label: "Total Solved Hard Ques: ", value: parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count}
        ];

        console.log("Tiles data is: ",tilesArr);
        tilesDiv.innerHTML = tilesArr.map(
            data=>  `
            <div class="tile">
                <h3>${data.label}</h3>
                <p>${data.value}</p>
            </div>
        `
        )
            .join("");//join array into a single HTML string



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

activate demo server always before running

.map() is one of the most important and commonly used JavaScript array methods.
It lets you transform each item in an array and returns a new array with the transformed results.

*/