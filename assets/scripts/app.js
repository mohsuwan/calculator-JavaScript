const defultValue = 0;
let logEntries = [];
let currentResult = defultValue;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function creatAndWriteOutput(oprater, resultBeforeCalc, clacNumber) {
  const calcDescription = `${resultBeforeCalc} ${oprater} ${clacNumber}`;

  outputResult(currentResult, calcDescription);
}
function writeTolog(
  oprathionIdintifier,
  prevReuslt,
  oprationNumber,
  newResult
) {
  const logEntry = {
    opration: oprathionIdintifier,
    prevReuslt: prevReuslt,
    Number: oprationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calcolateResult(calcoutionType) {
  const enteredNumber = getUserNumberInput();

  if (
    calcoutionType !== "ADD" &&
    calcoutionType !== "SUBTRACT" &&
    calcoutionType !== "MULTIPLY" &&
    calcoutionType !== "DIVIDE" || 
    enteredNumber === 0 
  ) {
    return;
  }
  // if (
  //   calcoutionType !== "ADD" ||
  //   calcoutionType !== "SUBTRACT" ||
  //   calcoutionType !== "MULTIPLY" ||
  //   calcoutionType !== "DIVIDE"
  // ) {
    const initialResult = currentResult;
    let mathOprator;

    if (calcoutionType === "ADD") {
      currentResult += enteredNumber;
      mathOprator = "+";
    } else if (calcoutionType === "SUBTRACT") {
      currentResult -= enteredNumber;
      mathOprator = "-";
    } else if (calcoutionType === "MULTIPLY") {
      currentResult *= enteredNumber;
      mathOprator = "*";
    } else if (calcoutionType === "DIVIDE") {
      currentResult /= enteredNumber;
      mathOprator = "/";
    }

    creatAndWriteOutput(mathOprator, initialResult, enteredNumber);
    writeTolog(calcoutionType, initialResult, enteredNumber, currentResult);
  // }
}


function add() {
  calcolateResult("ADD");
}
function subtract() {
  calcolateResult("SUBTRACT");
}
function multiply() {
  calcolateResult("MULTIPLY");
}
function divide() {
  calcolateResult("DIVIDE");
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
