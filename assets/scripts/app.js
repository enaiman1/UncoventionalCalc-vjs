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

function writeToLog(operationIdentifer, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifer,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries)
}
/*function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== 'ADD' &&
        calculationType !== "SUBTRACT" &&
        calculationType !== "MULTIPLY" &&
        calculationType !== "DIVIDE" ||
        !enteredNumber
    ) {
        return;
    }

    // if (
    //     calculationType === 'ADD' ||
    //     calculationType === 'SUBTRACT' ||
    //     calculationType === 'MULTIPLY' ||
    //     calculationType === 'DIVIDE'
    // ) {
        
        const intialResult = currentResult;
        let mathOperator
        if (calculationType === 'ADD') {
            currentResult += enteredNumber;
            mathOperator = '+'
        } else if (calculationType === "SUBTRACT") {
            currentResult -= enteredNumber;
            mathOperator = '-'
        } else if (calculationType === "MULTIPLY") {
            currentResult *= enteredNumber;
            mathOperator = '*'
        } else if (calculationType === "DIVIDE") {
            currentResult /= enteredNumber;
            mathOperator = '/'
        // }
    }

    currentResult += enteredNumber;
    createAndwriteOutput(mathOperator, intialResult, enteredNumber);
    writeToLog(calculationType, intialResult, enteredNumber, currentResult)
}*/

// function add() {
//     calculateResult('ADD')

// }

// function subtract() {
//     calculateResult('SUBTRACT')
// }

// function multiply() {
//     calculateResult('MULTIPLY')
// }

// function divide() {
//     calculateResult('DIVIDE')
// }

function calculate(operation) {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult
    let operator;
    if(operation === 'ADD') {
        currentResult += enteredNumber;
        operator = '+';
    } else if (operation === 'SUBTRACT') {
        currentResult -= enteredNumber;
        operator = '-';
    } else if (operation === 'MULTIPLY') {
        currentResult *= enteredNumber;
        operator = '*';
    }else {
        currentResult /= enteredNumber;
        operator = '/'
    }
    createAndwriteOutput (operator, intialResult, enteredNumber);
    writeToLog(operation, intialResult, enteredNumber, currentResult);
}


addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click',calculate.bind(this, 'DIVIDE'));





