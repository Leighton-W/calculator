console.log("Hello World!")

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}


const input1 = 2;
const input2 = 3;
const operator = "+";

console.log(input1)
console.log(input2)
console.log(operator)


function operation(input1, input2, operator){
    if (operator == "+"){
        return input1 + input2;
    }else if (operator == "-"){
        return input1 - input2;
    }else if (operator == "*"){
        return input1 * input2;
    }else if (operator == "/"){
        return input1 / input2;
    }
}

console.log(operation(input1,input2,operator));

let currentInput = "";
let firstInput = null;
let selectedOperator = null;

const keyArray = ['1', '2', '3',  '+',  
                  '4',  '5',  '6',  '-',  
                  '7',  '8',  '9',  '*',  
                  '0',  '.',  '=',  '/',];

const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const opers = ["+", "-", "*", "/"];


const keyPad = document.querySelector(".buttons");
const display = document.querySelector(".display");

function createButton(label, size) {
    const button = document.createElement("button");
    button.classList.add("key-pad");
    button.style.width = `${size}px`;
    button.style.height = `${size}px`;
    button.textContent = label;
    return button;
}

function handleButtonClick(value) {
    if (nums.includes(value)) {
        currentInput += value;
        display.textContent = currentInput;
    } else if (opers.includes(value)) {
        firstInput = currentInput;
        currentInput = "";
        selectedOperator = value;
    }
}

function keyPadSettings(a) {
    let keyPadDimension = 480 / a;
    for (let i = 0; i < a * a; i++) {
        const label = keyArray[i];
        const button = createButton(label, keyPadDimension);
        keyPad.appendChild(button);
        button.addEventListener("click", () => handleButtonClick(label));
    }
}

keyPadSettings(4);