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









            */