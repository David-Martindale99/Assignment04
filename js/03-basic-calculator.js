// IMPORT THE MODULE
import {add, subtract, multiply, divide} from './modules/alculator.js'

// COLLECT FIRST NUMBER FROM USER
let num1 = parseInt(prompt('Please enter your first number'))
// COLLECT SECOND NUMBER FROM USER
let num2 = parseInt(prompt('Please enter your second number'))
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
const operation = function (operation) {
    operation = prompt('Please select an operation (+, -, *, /)')
    let valid = false
    while(!valid) {
        if (operation === '+' || operation === '-' || operation === '*' || operation === '/') {
            valid = true
        } else {
            operation = prompt('Invalid operation, please enter a valid operation')
        }
    }
    return operation
}
// CHECK TO SEE WHAT OPERATION THEY'RE USING
function operationCheck(operation) {
    let operation = operation()
    switch(operation) {
        case '+': 
            return 'add'
        case '-':
            return 'subtract'
        case '*': 
            return 'multiply'
        case '/':
            return 'divide'
    }
}
// CALL THE APPROPRIATE FUNCTION
function calculate(num1, num2) {
    const check = operationCheck(operation)
    if (check === 'add') {
        return add(num1, num2)
    } else if (check === 'subtract') {
        return subtract(num1, num2)
    } else if (check === 'multiply') {
        return multiply(num1, num2)
    } else if (check === 'divide') {
        return divide(num1, num2)
    } else {
        alert('input error')
    }
}
 calculate()

