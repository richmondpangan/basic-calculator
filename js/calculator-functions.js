// Buttons
let buttons = document.querySelectorAll('.buttons');
let equalBtn = document.getElementById('equal-btn');
let clearBtn = document.getElementById('clear-btn');

// Textbox Display
let displayResult = document.getElementById('displayResult'); 

buttons.forEach(function (btn) {
    btn.addEventListener('click', () => {
        displayResult.value += btn.innerHTML;   // Populates the textbox when button is clicked
        equalBtn.addEventListener('click', () => {
            let answer = math.evaluate(displayResult.value); // Math.js function that computes the user input
            displayResult.value = answer;   // Displays the answer to the textbox when equals button is clicked
        });
    });
});

// Clears the textbox when AC button is clicked
clearBtn.addEventListener('click', () => {
    displayResult.value = "";
});