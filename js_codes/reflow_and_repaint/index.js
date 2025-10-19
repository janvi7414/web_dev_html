/* to measure effeciency of a code we take time t1 in the begining and time t2 at the end of the code then
t2-t1 gives the time required for execution
using performance.now()


no. of reflow and repaint required defines the effeciency of the code which is directly proportional
1. reflow: process of calculating position/dimensions of an element this is computational task
2. repaint: process of displaying content/element pixel on the dashboard




*/
//adding 100 paras
//way1
//here every time para is appended on body it will need 1 reflow and 1 repaint thus
//100*2=200(100reflow and 100repaint)
//check console for time consumption


let t1=performance.now();
for(let i=0;i<100;++i)
{
    let para=document.createElement('p');
    para.textContent="Paragraph "+ (i+1);
    document.body.appendChild(para);
}
let t2=performance.now();
console.log("way1 performance time required: "+ (t2-t1));


//way2
/*here all the child created are appended in a single div parent node then this
 this requires no reflow or repaint then this div is appended in the body of the document
 which requires 1 reflow and 1 repaint thus total 2 (1+1)*/
let t3=performance.now();
let div_copy=document.createElement('div');

for(let i=0;i<100;++i)
{
    let para_copy=document.createElement('p');
    para_copy.textContent="This is Paragraph "+(i+1);
    div_copy.appendChild(para_copy);
}

document.body.appendChild(div_copy);
let t4=performance.now();
console.log("way2 performance time required: "+(t4-t3));

//document fragment: it is a light weight document object
//this is almost similar in effeciency with way2
//fragement is created using document.createDocumentFragement()

let t5=performance.now();
let fragement=document.createDocumentFragment();

for(let i=0;i<100;++i)
{
    let para=document.createElement('p');
    para.textContent="Para "+(i+1);
    fragement.appendChild(para);
}

document.body.appendChild(fragement);
let t6=performance.now();
console.log("performance time required: "+(t6-t5));



