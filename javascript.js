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
