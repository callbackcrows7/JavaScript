function add (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}

function multi (a, b) {
    return a * b;
}

function divide (a, b) {
    if (b === 0) {
        throw new Error("Cannot divided by zero.");
    }
    return a / b;
}


function isValidOperator (op) {
    return ['+', '-', '*', '/'].includes(op);
}

function isValidNumber (num) {
    return !isNaN(num) && isFinite(num);
}


// Main Calculator Function
function Calculator() {
    alert("Welcome to simple calculator");

    let choice;
    do {
        const operator = prompt("Please enter an operator(+, -, *, /): ");
        if(!isValidOperator(operator)) {
            alert("Invalid Operator!");
            continue;
        }

        let numOne, numTwo, result;
        while (true) {
            const input = prompt("Please enter two numbers separated by space: ");
            const parts = input.trim().split(/\s+/);

            if(parts.length !== 2) {
                alert("Please enter exactly two numbers.");
                continue;
            }

            numOne = parseFloat(parts[0]);
            numTwo = parseFloat(parts[1]);

            if (!isValidNumber(numOne) || !isValidNumber(numTwo)) {
                alert("Invalid input! Please enter numeric values.");
                continue;
            }

            try {
                switch (operator) {
                    case '+':
                        result = add(numOne, numTwo);
                        break;

                    case '-':
                        result = sub(numOne, numTwo);
                        break;

                    case '*':
                        result = multi(numOne, numTwo);
                        break;

                    case '/':
                        result = divide(numOne, numTwo); // If error occurs here, catch will handle it.
                        break;
                }
                break; // If no error occurs, exit the loop.
            } catch (error) {
                alert("Error: " + error.message);
                // Loop will continue here, asking the user to input numbers agin.
            }
        }
        
        // Show output
        alert('(' + numOne + ' ' + operator + ' ' + numTwo + ') =' + result);

        choice = prompt("Press 'q' to quit. or any other key to continue: ");
    } while (choice !== 'q');
    alert("Thank you for using simple calculator.");
}


// Run Calculator Function
Calculator();