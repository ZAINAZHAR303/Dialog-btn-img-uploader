let close_btn = document.querySelector("#close_btn");
let submit_btn = document.querySelector("#submit_btn");
let popup_btn = document.querySelector("#popup_btn");
let container = document.querySelector(".container");
let overlay = document.querySelector(".overlay");
let file_input = document.querySelector("#file_input");
let img = document.querySelector("#img")

function open_popup_fun(){
    container.style.display= "block";
}
function close_popup_fun(){
    container.style.display= "none";
}

popup_btn.addEventListener("click",open_popup_fun);
submit_btn.addEventListener("click",close_popup_fun);
close_btn.addEventListener("click",close_popup_fun);
overlay.addEventListener("click",close_popup_fun);

file_input.onchange= () => {
    img.src = URL.createObjectURL(file_input.files[0]);

};