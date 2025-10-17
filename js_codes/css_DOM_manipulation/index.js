/* to get the css content of an element using
    element.style

 set single css property using element.style.backgrouncolor('red')




 */
let element=document.querySelector('#parent_div');
//to get style content of a div
element.style;
//or
element.style.cssText;
//to change the single property
element.style.backgroundColor='yellow';
//to change multiple properties at a time
element.style.cssText="background-color:#5695e4;margin:12rem";

/*setting values for properties also adding properties
of an element using element.setAttribute('prop_name','value')*/
element.setAttribute('class','parent_class');
//to check
element;

/*to set multiple properties in style but it will
update the whole css for that element*/
let child1_copy=document.querySelector('#child1');
child1_copy.setAttribute('style',"background-color:grey;border:solid 0.2rem");
//to check
child1_copy;


/*if style is set it will erase all the attributes earlier
  multiple class names can be added*/
//it will update all present earlier if any
element.setAttribute('class','new_parent_class,new_parent_class2');
//to get the classname //
element.className;

/*for class use element.classList to get the list of
class names of an element using this we can
    `add classname it adds not updates
     remove classname
     toggle classname i.e to add if absent anf vise versa
     check if class name presetn using element.contains
     */
let child2_copy=document.querySelector('#child2');
child2_copy;
child2_copy.classList;
child2_copy.classList.add('new_child2_class');
child2_copy;
child2_copy.classList.remvoe('new_child2_class');
child2_copy.classList.toggle('new_child2_class');
child2_copy.classList.contains('new_class');






