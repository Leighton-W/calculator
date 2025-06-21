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


const keyPad = document.querySelector(".buttons");

function keyPadSettings(a){
    let keyPadDimension = 480 / a;
    for (let i = 0; i < a * a; i++){
        const button = document.createElement("button");
        button.style.width = `${keyPadDimension}px`;
        button.style.height =  `${keyPadDimension}px`;
        keyPad.appendChild(button);
        button.addEventListener('click', () => {
            button.style.background = "black";
        })
    }
}

keyPadSettings(4);