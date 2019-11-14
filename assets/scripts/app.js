const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value)
}
// Generate and writes calculation log
function createAndwriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calDesc = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calDesc)//from vendor.js file
}

function writeToLog(operationIdentifer, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifer,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries)
}

function add() {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult += enteredNumber;
    createAndwriteOutput('+', intialResult, enteredNumber);
    writeToLog('ADD', intialResult, enteredNumber, currentResult)
    
}

function subtract() {

    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult -= enteredNumber;
    createAndwriteOutput('+', intialResult, enteredNumber);
    writeToLog('SUBTRACT', intialResult, enteredNumber, currentResult)
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult *= enteredNumber;
    createAndwriteOutput('*', intialResult, enteredNumber);
    writeToLog('MULTYPLY', intialResult, enteredNumber, currentResult)
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult /= enteredNumber;
    createAndwriteOutput('/', intialResult, enteredNumber);
    writeToLog('DIVIDE', intialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);





