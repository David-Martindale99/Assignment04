//STEP 1
function halfNumber(num) {
    return num / 2
}

//STEP 2
function squareNumber(num) {
    return num * num
}

//STEP 3
function percentOf(num1, num2) {
    if (num1 === num2) {
        return `${num1} is 100% of ${num2}`
    } else {
        return num1 / num2 * 100
    }
}

//STEP 4
function findModulus(num1, num2) {
    let mod = num2 % num1
    return `${mod} is the modulus of ${num1} and ${num2}`
}

