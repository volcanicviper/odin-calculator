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

const display = document.getElementById('display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
let displayValue = 0;
let firstInput = 0;
let operation = "";

digits.forEach((digit) => {
    digit.addEventListener('click', function() {
      displayValue += parseInt(digit.textContent);
      display.textContent = displayValue;
    })
  });
