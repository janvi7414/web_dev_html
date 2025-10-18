/*1. event: any announcement like click,scroll,touch,etc
       also event is a special object that is called whenever an event occurs
  2.event target: usually an element on which event is performed
  3. event Listener: has the actions to perform when an event occured
   */

//to get all the events occuring after tap or scroll etc
//this works on console using inspect only
//monitorEvents(document);
//to unmonitor
//unmonitorEvents(document);


//to add event on an element
//create a function to call on event
function change_text(){
click_button_copy.textContent="Clicked!";
}

let click_button_copy=document.querySelector('#click_button');
click_button_copy.addEventListener('click',change_text);

//to remove the event for this there must be an event as mentioned
click_button_copy.removeEventListener('click',change_text);

/* Phases of an event
       1. Capturing Phase: rootnode to the target node
       2. At target Phase: at the element on which the event is applied
       3. Bubbling Phase: from the taget node to the parent or root node

       */
// click event is applied in bubbling phase to convert it into capturing phase
//for this we need to pass capture value as true which is the third parameter for addEventListener('event','funciton','true')


/*whenever an event occurs the event itself is passed as a parameter to the fucntion we have called on event occurence now to get
the details passed to the function we can print the details */

//adding click event on para
let para_copy= document.querySelector('#para');
//creating a function for an event
function change_color(event)
{
    console.log(event);
    para_copy.style.color="red";
}
para_copy.addEventListener('click',change_color);
//to see details of an event see console and check event type//

/* to manipulate the default work of any tag e.g. <a> is reponsible for
directing to a link but we can manipulate it by using 'event.preventDefault()'
 */

let anchor_copy= document.querySelector('#anchor');
function change_text2(event)
{
    event.preventDefault();
    anchor_copy.textContent="Default is Prevented";
}
anchor_copy.addEventListener('click',change_text2);

/*While using Event Listener it should be used mindfullt
//when we are having multiple child nodes and we are adding same eventlistener on
    each of them then
way1: using loop creating link for every child node */
//when clicked on para text it should show alert as clicked on para no.

//creating var for all the four paras
let paras= document.querySelectorAll('h2');
//here paras is like an array with 4 values can be access using index
//check
paras;

//creating function
function give_alert(event)
{
    //target could be span(only span alert) or heading (together alerted as span is child of heading)
    alert("clicked on "+ event.target.textContent);
}

for(let i=0;i<paras.length;++i)
{
    paras[i].addEventListener('click',give_alert);
}

/* way2 instead of creting link for each heading we are adding listener to the div containing
all the headings */
let div_copy=document.getElementById('my_div');
 div_copy.addEventListener('click',give_alert);

//for alert only when clicked on span tag content by comparing taget.nodeName to span
function span_alert(event)
{
    if(event.target.nodeName==='SPAN')
    {
        alert("clicked on "+ event.target.textContent);
    }
}
document.addEventListener('click',span_alert);







