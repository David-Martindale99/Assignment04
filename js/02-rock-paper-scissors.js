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