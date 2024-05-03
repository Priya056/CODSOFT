let displayValue = '';
let operator = '';
let result = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').innerText = displayValue;
}

function operation(op) {
  if (displayValue !== '') {
    operator = op;
    result = parseFloat(displayValue);
    clearDisplay();
  }
}

function calculate() {
  if (operator !== '' && displayValue !== '') {
    const currentValue = parseFloat(displayValue);
    switch (operator) {
      case '+':
        result += currentValue;
        break;
      case '-':
        result -= currentValue;
        break;
      case '*':
        result *= currentValue;
        break;
      case '/':
        if (currentValue !== 0) {
          result /= currentValue;
        } else {
          result = 'Error';
        }
        break;
    }
    document.getElementById('display').innerText = result;
    displayValue = '';
    operator = '';
  }
}
