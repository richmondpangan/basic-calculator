function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

function operate(operator, firstNum, secondNum) {
    if (operator === "+") {
        return add(firstNum, secondNum);
    }
    else if (operator === "-") {
        return subtract(firstNum, secondNum);
    }
    else if (operator === "*") {
        return multiply(firstNum, secondNum);
    }
    else if (operator === "/") {
        return divide(firstNum, secondNum);
    }
}

// New functions

let zeroBtn = document.getElementById('number0');
let oneBtn = document.getElementById('number1');
let twoBtn = document.getElementById('number2');
let threeBtn = document.getElementById('number3');
let fourBtn = document.getElementById('number4');
let fiveBtn = document.getElementById('number5');
let sixBtn = document.getElementById('number6');
let sevenBtn = document.getElementById('number7');
let eightBtn = document.getElementById('number8');
let nineBtn = document.getElementById('number9');
let displayResult = document.getElementById('displayResult'); 

function populateTextbox() {
    zeroBtn.addEventListener('click', () => {
        let btnValue = zeroBtn.innerHTML;
        displayResult.value += btnValue;
    });

    oneBtn.addEventListener('click', () => {
        let btnValue = oneBtn.innerHTML;
        displayResult.value += btnValue;
    });

    twoBtn.addEventListener('click', () => {
        let btnValue = twoBtn.innerHTML;
        displayResult.value += btnValue;
    });

    threeBtn.addEventListener('click', () => {
        let btnValue = threeBtn.innerHTML;
        displayResult.value += btnValue;
    });

    fourBtn.addEventListener('click', () => {
        let btnValue = fourBtn.innerHTML;
        displayResult.value += btnValue;
    });

    fiveBtn.addEventListener('click', () => {
        let btnValue = fiveBtn.innerHTML;
        displayResult.value += btnValue;
    });

    sixBtn.addEventListener('click', () => {
        let btnValue = sixBtn.innerHTML;
        displayResult.value += btnValue;
    });

    sevenBtn.addEventListener('click', () => {
        let btnValue = sevenBtn.innerHTML;
        displayResult.value += btnValue;
    });

    eightBtn.addEventListener('click', () => {
        let btnValue = eightBtn.innerHTML;
        displayResult.value += btnValue;
    });

    nineBtn.addEventListener('click', () => {
        let btnValue = nineBtn.innerHTML;
        displayResult.value += btnValue;
    });
}

populateTextbox();