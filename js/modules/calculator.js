// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(operation, num1, num2) {
    switch(operation) {
        case 'add' || '+':
            return num1 + num2
        case 'subtract' || '-':
            return num1 - num2
        case 'multiply' || '*':
            return num1 * num2
        case 'divide' || '/': 
            return num1 / num2
        default: 
            throw new Error('Invalid operation') 
    }
}
// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
export function add(num1, num2) {
    return calculate('add', num1, num2)
}
// SUBTRACT FUNCTION
export function subtract( num1, num2) {
    return calculate('subtract', num1, num2)
}
// MULTIPLY FUNCTION
export function multiply(num1, num2) {
    return calculate('multiply', num1, num2)
}
// DIVIDE FUNCTION
export function divide(num1, num2) {
    return calculate('divide', num1, num2)
}
// EXPORT THE FOUR PUBLIC FUNCTIONS



