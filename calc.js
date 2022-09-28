function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, num1, num2) {
    switch (op) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

let firstVal = "";
let secondVal = "";
let operation = "";
let result = "";

display.textContent = 0;

digits.forEach((digit) => {
    digit.addEventListener('click', function() {
        firstVal += digit.textContent;
        display.textContent = firstVal;
    })
});

operators.forEach((operator) => {
    operator.addEventListener('click', function() {
        secondVal = firstVal;
        operation = operator.textContent;
        display.textContent = firstVal + operation;
        firstVal = "";
    })
});

equalsButton.addEventListener('click', function() {
    result = operate(operation, parseInt(firstVal), parseInt(secondVal));
    display.textContent = secondVal + " " + operation + " " + firstVal + " = " + result;
    firstVal = "";
    secondVal = "";
});

clearButton.addEventListener('click', function() {
    display.textContent = 0;
    firstVal = "";
    secondVal = "";
    operation = "";
    result = "";
});
