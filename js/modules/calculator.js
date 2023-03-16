// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calc(x, y, method){
    switch (method) {
        case '+':
            return x + y
        case '-':
            return x - y
        case '*':
            return x * y
        case '/':
            return x / y
        default:
            return 0
    }
}

// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
const add = (num1, num2) => calc(num1, num2, '+')
// SUBTRACT FUNCTION
const subtract = (num1, num2) => calc(num1, num2, '-')
// MULTIPLY FUNCTION
const multiply = (num1, num2) => calc(num1, num2, '*')
// DIVIDE FUNCTION
const divide = (num1, num2) => calc(num1, num2, '/')

// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add, subtract, multiply, divide}

