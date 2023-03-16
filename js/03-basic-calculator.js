// GLOBAL VARIABLES
let result

// IMPORT THE MODULE
import * as calculator from './modules/calculator.js'

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
const num1 = parseFloat(prompt('Enter first number: '))
const num2 = parseFloat(prompt('Enter second number: '))
const operator = prompt('Enter operator ( either +, -, * or / ): ')

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
if (operator === '+') {
    result = calculator.add(num1, num2)
} else if (operator === '-') {
    result = calculator.subtract(num1, num2)
} else if (operator === '*') {
    result = calculator.multiply(num1, num2)
} else if (operator === '/') {
    result = calculator.divide(num1, num2)
} else {
    result = 'That is not a valid operator.'
}

console.log(result)