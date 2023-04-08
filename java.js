let body = document.querySelector("#my_body");
let btnR = document.querySelector("#btnR");
let btnY = document.querySelector("#btnY");
let btnB = document.querySelector("#btnB");
let btnG = document.querySelector("#btnG");
let btnReset = document.querySelector("#btnReset");


btnR.addEventListener('click', function (){
    body.style.background = "#e94560";
})


btnY.addEventListener('click', function (){
    body.style.background = "#ffd66b";
})


btnB.addEventListener('click', function (){
    body.style.background = "#0278ae";
})


btnG.addEventListener('click', function (){
    body.style.background = "#61b15a";
})


btnReset.addEventListener('click', function (){
    body.style.background = "#fff";
})