const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
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
    try {
        const result = eval(display.innerText)
    display.innerText = result
    } catch (error) {
        display.innerText = "Error"
    }
    
})


clear.addEventListener('click', () => {
    display.innerText = "";
})
