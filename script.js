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

addition.addEventListener('click', () => {
    operation()
    operationTracker = '+'
    display.innerText = '';
})

subtraction.addEventListener('click', () => {
    operation()
    operationTracker = '-'
    display.innerText = '';
})

multiplication.addEventListener('click', () => {
    operation()
    operationTracker = '*'
    display.innerText = '';
})

division.addEventListener('click', () => {
    operation()
    operationTracker = '/'
    display.innerText = '';
})

equals.addEventListener('click', () => {
    operation();
    display.innerText = temp;
})

clear.addEventListener('click', () => {
    display.innerText = '';
    temp = 0;
    operation = undefined;
})






















function operation() {
    if (operationTracker == undefined) {
        temp = Number(display.innerText)
    } 
    else if (operationTracker == '+') {
        temp += Number(display.innerText);
    }
    else if (operationTracker == '-') {
        temp -= Number(display.innerText);
    }
    else if (operationTracker == '*') {
        temp *= Number(display.innerText);
    }
    else {
        temp /= Number(display.innerText);
    }
}