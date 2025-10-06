const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const addition = document.querySelector(".add");
const subtraction = document.querySelector(".diff");
const multiplication = document.querySelector(".mult");
const division = document.querySelector(".div");
const equals = document.querySelector(".final");
const clear = document.querySelector(".clear");
let temp = 0;
let operationTracker;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.innerText += button.value;
    })
})

equals.addEventListener('click', () => {
    const result = eval(display.innerText)
    display.innerText = result
})

clear.addEventListener('click', () => {
    display.innerText = "";
})
