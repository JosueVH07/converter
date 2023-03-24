let inputAmount = document.getElementById("amount");
let inputCommissionOnePercentage = document.getElementById("commission-1-percentage");
let inputCommissionOneNumber = document.getElementById("commission-1-number");
let inputCommissionTwoPercentage = document.getElementById("commission-2-percentage");
let inputCommissionTwoNumber = document.getElementById("commission-2-number");
let remainingAmount = document.getElementById("remaining-amount");

inputCommissionOnePercentage.addEventListener("change",changeinputCommissionOnePercentage);
inputCommissionOneNumber.addEventListener("change",changeinputCommissionOneNumber);
inputCommissionTwoPercentage.addEventListener("change",changeinputCommissionTwoPercentage);
inputCommissionTwoNumber.addEventListener("change",changeinputCommissionTwoNumber);






function changeinputCommissionOnePercentage() {
  let percentageOne = (inputCommissionOnePercentage.value);
  let amount = parseFloat(inputAmount.value);
  let result = (percentageOne * amount) / 100;
  console.log("result", result);
  inputCommissionOneNumber.value = result;
  isEqual()
}

function changeinputCommissionOneNumber() {
  let numberOne = parseFloat(inputCommissionOneNumber.value);
  let amount = parseFloat(inputAmount.value);
  let result = (numberOne * 100) / amount;
  console.log("result", result);
  inputCommissionOnePercentage.value = result;
  isEqual()
}

function changeinputCommissionTwoPercentage() {
  let percentageTwo = parseFloat(inputCommissionTwoPercentage.value);
  let amount = parseFloat(inputAmount.value);
  let result = (percentageTwo * amount) / 100;
  console.log("result", result);
  inputCommissionTwoNumber.value = result;
  isEqual()
}
function changeinputCommissionTwoNumber() {
  let numberTwo = parseFloat(inputCommissionTwoNumber.value);
  let amount = parseFloat(inputAmount.value);
  let result = (numberTwo * 100) / amount;
  console.log("result", result);
  inputCommissionTwoPercentage.value = result;
  isEqual()
}

function isEqual() {
  let amount = parseFloat(inputAmount.value);
  let com1 = parseFloat(inputCommissionOneNumber.value);
  let com2 = parseFloat(inputCommissionTwoNumber.value);
  let sum = com1 + com2;
  console.log('sum', sum);
  let remaining = amount - sum;
  console.log('remaining', remaining);
  remainingAmount.innerHTML = remaining;
  (remaining + sum) == amount ? console.log("YEs") : console.log("No")
}
