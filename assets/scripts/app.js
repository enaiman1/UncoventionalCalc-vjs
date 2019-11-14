const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value)
}

function createAndwriteOutput(operator, resultBeforeCalc, calcNumber){
    const calDesc = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calDesc)
}

function add() {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndwriteOutput('+', intialResult, enteredNumber );
    
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndwriteOutput('-', intialResult, enteredNumber );
    
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndwriteOutput('*', intialResult, enteredNumber );
    
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const intialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndwriteOutput('/', intialResult, enteredNumber );
    
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);





