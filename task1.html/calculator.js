let currentInput = '0';
let operator = null;
let previousInput = '0';

function updateScreen() {
    document.getElementById('output').innerText = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0' || currentInput === '-0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateScreen();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateScreen();
}

function clearScreen() {
    currentInput = '0';
    operator = null;
    previousInput = '0';
    updateScreen();
}

function setOperator(op) {
    operator = op;
    previousInput = currentInput;
    currentInput = '0';
    updateScreen();
}

function calculateResult() {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = num2;
            break;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = '0';
    updateScreen();
}

updateScreen();