/*
    02
    const button = document.querySelector('.js-button')
    console.log(button.classList.contains('js-button'));
*/

function toggleButton(className) {

  const button = document.querySelector(className)

  if (!button.classList.contains('toggled')) {
    turnOffPreviousButton();
    button.classList.add('toggled');

  } else {
    button.classList.remove('toggled');
  }
};

//this function use to check is any button else has toggled class then if its has remove toggled
function turnOffPreviousButton() {
  const previousButton = document.querySelector('.toggled');
  if (previousButton) {
    previousButton.classList.remove('toggled')
  }
};



function handleCostKeydown(event) {
  console.log(event.key)

  if (event.key === 'Enter') {
    calculateTotal();
  }
};

function calculateTotal() {
  const costElement = document.querySelector('.js-cost-input');
  //here we get input value by useing .value
  const cost = document.querySelector('.js-cost')
  let costTotal = Number(costElement.value);

  if (costTotal <= 0) {
    cost.classList.add('cost-deny')
    return document.querySelector('.js-cost').innerHTML = `Error: cost can not less than $0`;
  } else if (costTotal >= 40) {
    console.log(costTotal);

  } else if (costTotal < 40) {
    costTotal = costTotal + 10;
    console.log(costTotal);
  }
  cost.classList.remove('cost-deny')
  document.querySelector('.js-cost').innerHTML = `Total : ${costTotal}$`;
};

let calculation = localStorage.getItem('calculation') || '';
document.querySelector('.displayNum').innerText = 'calculator';

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  localStorage.setItem('calculation', calculation);
  document.querySelector('.displayNum').innerText = calculation;
};

function calculate() {
  eval(calculation);
  calculation = eval(calculation);
  console.log(calculation.toString());
  document.querySelector('.displayNum').innerText = calculation.toString();
  localStorage.setItem('calculation', calculation);

};
function clearCalculation() {
  calculation = '';
  console.log(calculation);
  document.querySelector('.displayNum').innerText = 'calculator';
  localStorage.setItem('calculation', calculation);
};
