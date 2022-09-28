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
const decButton = document.querySelector("#decimal");

let firstVal = "";
let storedVal = "";
let operation = "";
let result = "";
let decimal = 0;

display.textContent = "_";

digits.forEach((digit) => {
    digit.addEventListener('click', function() {
        if (digit.id != "decimal" || decimal === 0) {
            firstVal += digit.textContent;
            display.textContent = firstVal;
        }
    })
});

operators.forEach((operator) => {
    operator.addEventListener('click', function() {
        if (storedVal) {
            calculateResult();
            storedVal = result;
            operation = operator.textContent;
            display.textContent = result + " " + operation;
        }
        else {
            storedVal = firstVal;
            operation = operator.textContent;
            display.textContent = firstVal + " " + operation;
        }
        firstVal = "";
        decimal = 0;
    })
});

equalsButton.addEventListener('click', function() {
    if (storedVal && firstVal !== "") {
        calculateResult();
        display.textContent = storedVal + " " + operation + " " + firstVal + " = " + result;
    }
});

clearButton.addEventListener('click', function() {
    display.textContent = 0;
    firstVal = "";
    storedVal = "";
    operation = "";
    result = "";
    decimal = 0;
});

decButton.addEventListener('click', function() {
    if (decimal === 0) {
        decimal += 1;
    }
});

function calculateResult() {
    if (operation === "/" && Math.trunc(firstVal) === 0) {
        result = "DIVISION BY ZERO";
        firstVal = "";
        storedVal = "";
        operation = "";
    }
    else {
        result = operate(operation, parseFloat(storedVal), parseFloat(firstVal));
        result = Math.round(result * 1000) / 1000;
    }
}