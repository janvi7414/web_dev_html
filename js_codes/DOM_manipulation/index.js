/* Window:
        it is a global object (white at basic)
        that is created by browser and it is at the
        root node when an heirarchy is made for
        tags inside tags. or all other tags are inside this
        object called window.

        window consists of DOM, BOM, JS Cores ...

  Document:
        when an html code is converted into an object
        of js it is called a document

        inspect any webpage and go to console type
        "document" it will return html part of the
        code

  DOM (Document Object Model):
        it is document used to change,update, delete
        ... tags of html
        or
        tags are converted into token by tokenizers
        these tokens are furthur converted into nodes
        these node together makes a tree called DOM

  BOM (Browser Object Model):
        as DOM deals with changes in html part this
        deals with change in browser operated part
        using js include navigation, screensize etc

  To Access the element/elements using console
        1. document.getElementBy*
            a. ID => document.getElementByIdName('')
            b. Class => document.getElementByClassName('')
            c. Tag name => document.getElementByTagName('')

        2. using querySelector (this will return the
            first found only ) or querySelectorAll(this
            will return all the reuslt found)and shortcut
            symbols for the same
            a. ID=> document.querySelectorAll('#id_name')
            b. class=> document.querySelectorAll('.class_name')
            a. tag=> document.querySelectorAll('tag_name')

        3. using $0
            inspect->select the array on the top left->
            select any div from the window ->console and
            type $0->we will get the code for that element


 To set or update the elements get by above ways
    1. inner HTML :
        to get or set the elements inside the element
        provided including tag symbols and id,class,...
    2. outer HTMl:
        to get or set the elements inner to it and also
        including itself
    3. text-content:
        to get text as coded in editor including each
        tab,\n,... it will also show hidden div
    4. inner Text:
        to get text as it will appear on the window including
        \n,.. it won't show hidden div


Also to add child element inside a parent

1. copy existing parent into new var
parent_copy = document.querySelector('#parent_id')
2. create child using 'document.createElement('tag')'
3. add content using child.textContent="text";
        to add child in the end
4. append the child using 'parent.appendChild(child)'
or
4. using parent.insertAdjacentElement(position,child)'
        beforebegin,afterbegin,beforeend,afterend

            */

//code for console using inspect as well
let mydiv=document.querySelector('#parent');
let new_element=document.createElement('p');
new_element.textContent="This is my para using DOM manipulation";
mydiv.appendChild(new_element);

let new_element2= document.createElement('h2');
new_element2.textContent="This is h2 using DOM manipulation";
mydiv.insertAdjacentElement('beforebegin',new_element2);

//to remove child//
//parent.removeChild(child);

let first_para_copy=document.querySelector('#first_para');
mydiv.removeChild(first_para_copy);

//to find parent node using child
//finding child of second_para_copy
let second_para_copy=document.getElementById('second_para');
second_para_copy.parentnode;




