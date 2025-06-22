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


let currentInput = "";
let savedInput = null;
let selectedOperator = null;

const keyArray = ['1', '2', '3',  '+',  
                  '4',  '5',  '6',  '-',  
                  '7',  '8',  '9',  '*',  
                  '0',  '.',  '=',  '/',];

const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const opers = ["+", "-", "*", "/"];


const keyPad = document.querySelector(".buttons");
const display = document.querySelector(".display");

function operation(a, b, selectedOperator){
    if (selectedOperator == "+"){
        return a + b;
    }else if (selectedOperator == "-"){
        return a - b;
    }else if (selectedOperator == "*"){
        return a * b;
    }else if (selectedOperator == "/"){
        return b !== 0 ? a / b : "Error";
    }
}

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
        savedInput = currentInput;
        currentInput = "";
        selectedOperator = value;
    } else if (savedInput !== null && selectedOperator && currentInput !== ""){
        const result = operation(parseFloat(savedInput), parseFloat(currentInput), selectedOperator);
        display.textContent = result;
        currentInput = result.toString();
        savedInput = null;
        selectedOperator = "";
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