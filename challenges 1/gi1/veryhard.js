const num1 = parseFloat(prompt('Enter the first number'));
const operator = prompt('Enter an operator (+, -, *, /)');
const num2 = parseFloat(prompt('Enter the second number'));
let result;

switch (operator) {
  case '+':
    result = add(num1, num2);
    break;
  case '-':
    result = subtract(num1, num2);
    break;
  case '*':
    result = multiply(num1, num2);
    break;
  case '/':
    result = divide(num1, num2);
    break;
  default:
    console.log('Invalid operator');
    break;
}

console.log(`${num1} ${operator} ${num2} = ${result}`);
