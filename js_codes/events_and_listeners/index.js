/*1. event: any announcement like click,scroll,touch,etc
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




