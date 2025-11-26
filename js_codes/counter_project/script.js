document.addEventListener("DOMContentLoaded", function(){
    let count = 0;

    const text = document.querySelector(".text");
    const btn = document.querySelector(".btn");

    btn.addEventListener("click", function(){
       count++;


        console.log(count);
        text.textContent = `you've clicked button ${count} times`;
    });
});