// Basic calculator to add two numbers
document.getElementById('addButton').addEventListener('click', function () {
    calculate('add');
});

document.getElementById('subtractButton').addEventListener('click', function () {
    calculate('subtract');
});

document.getElementById('multiplyButton').addEventListener('click', function () {
    calculate('multiply');
});

document.getElementById('divideButton').addEventListener('click', function () {
    calculate('divide');
});

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    result = "Cannot divide by zero.";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = "Invalid operation.";
        }
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}

// Show greeting based on current time
const greetButton = document.getElementById('greetButton');
greetButton.addEventListener('click', function () {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    alert(greeting);
});



// Change button color on click
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', () => {
    colorButton.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

