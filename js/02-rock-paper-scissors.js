/*
//Create initializing sequence
function init() {
    displayTitle()
    let playAgain  = 'y'

    do {
        playGame()
        playAgain = prompt('Do you want to play again (y/n)', 'y')
    } while (playAgain === 'y')
    alert('Thank you for playing RPG')
}

//Title sequence
function displayTitle() {
    alert('Welcome to rock, paper, scissors!')
}

//Create and run game sequence
function playGame() {
    let userChoice
    let compChoice 
    let randomNum =  Math.floor(Math.random() * 3)
    
    
    //Generate the computers choice
    if (randomNum === 0) {
        compChoice = 'rock'
    } else if (randomNum === 1) {
        compChoice = 'paper'
    } else {
        compChoice = 'scissors'
    }

    //Collect user choice
    do {
        validInput = false
        userChoice = prompt('Please enter rock, paper, or scissors')
        userChoice = userChoice.toLowerCase()
        if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
            alert('Invalid input, try again.')
        } else {
            validInput = true
        }
    } while (validInput === false)

    //Compare userchoice and compChoice to find outcome
    if (userChoice === compChoice) {
        alert("It's a tie!");
    } else if (userChoice === "rock") {
        if (compChoice === "paper") {
        alert("Computer wins!");
        } else {
        alert("You win!");
        }
    } else if (userChoice === "paper") {
        if (compChoice === "scissors") {
        alert("Computer wins!");
        } else {
        alert("You win!");
        }
    } else if (userChoice === "scissors") {
        if (compChoice === "rock") {
        alert("Computer wins!");
        } else {
        alert("You win!");
        }
    }
    return
}

init()
*/

// AGAIN JUST BECAUSE

// GLOBAL VARIABALES
let userChoice
let compChoice
let playAgain
let randomNum
let score

// CREATE GAME
function playGame() {
    while (true) {
        userChoice = prompt('Choose between rock, paper, scissors.').toLowerCase();
        if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
            alert('Invalid choice, please enter (rock, paper, or scissors)')
        } else {
            break
        }
    } 
    // COLLECT COMP CHOICE
    randomNum = Math.random()
    if (randomNum <= 0.33) {
        compChoice = 'rock'
    } else if (randomNum <= 0.66) {
        compChoice = 'paper'
    } else {
        compChoice = 'scissors'
    }

    // DETERMIN WINNER
    if (userChoice === 'rock' && compChoice === 'paper') {
        score = `Computer won. Computer chose ${compChoice}. You chose ${userChoice}`
    } else if (userChoice === 'rock' && compChoice === 'scissors') {
        score = `You won! Computer chose ${compChoice}. You chose ${userChoice}`
    } else if (userChoice === 'paper' && compChoice === 'rock') {
        score = `You won! Computer chose ${compChoice}. You chose ${userChoice}`
    } else if (userChoice === 'paper' && compChoice === 'scissors') {
        score = `Computer won. Computer chose ${compChoice}. You chose ${userChoice}`
    } else if (userChoice === 'scissors' && compChoice === 'rock') {
        score = `Computer won. Computer chose ${compChoice}. You chose ${userChoice}`
    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        score = `You won! Computer chose ${compChoice}. You chose ${userChoice}`
    } else {
        score = `It's a tie! Both you and the computer chose ${userChoice}.`
    }
    return score;
}

function main() {
    alert('Welcome to the Rock, Paper, Scissors Game.')
    playAgain = 'y';
    while (playAgain === 'y') {
        alert(playGame())
        playAgain = prompt('Do you want to play again?', 'y');

    }
    alert("Thank you for playig RPS!")
}
main();