// Get the history and result display elements
let historyValue = document.getElementById('history-value');
let resultValue = document.getElementById('result-value');

// Store current history and result in variables
let history = "";
let result = "";

// Function to clear the screen
function clearScreen() {
    history = "";
    result = "";
    historyValue.innerText = history;
    resultValue.innerText = result;
}

// Function to delete the last input
function deleteNumber() {
    result = result.slice(0, -1);
    resultValue.innerText = result;
}

// Function to add numbers and operators to the screen
function addToHistory(input) {
    if (['+', '-', '*', '/'].includes(input)) {
        if (result !== "") {
            history += result + " " + input + " ";
            historyValue.innerText = history;
            result = "";
            resultValue.innerText = result;
        }
    } else {
        result += input;
        resultValue.innerText = result;
    }
}

// Function to perform the calculation
function calculate() {
    if (result !== "") {
        history += result;
        let finalResult = eval(history);
        historyValue.innerText = history;
        resultValue.innerText = finalResult;
        history = "";
        result = finalResult.toString(); // Make the result ready for next calculation
    }
}
