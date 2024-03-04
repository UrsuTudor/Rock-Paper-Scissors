function getComputerChoice() {
    const numberChoice1 = 'rock'
    const numberChoice2 = 'paper'
    const numberChoice3 = 'scissors'
    const Choice = Math.floor((Math.random() * 3) + 1)
    if (Choice === 1) {
        return numberChoice1
    } else if (Choice === 2) {
        return numberChoice2
    } else {
        return numberChoice3
    }
}

function playSingleRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    console.log(computerSelection)
    let playerChoice = prompt('Choose your weapon!');
    playerSelection = playerChoice.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'Tie!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats Rock!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beat Paper!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors!'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beat Paper!'
    } else {
        return 'Please draw an approved weapon! We only fight with rock, paper or scissors!'
    }
}

function playGame() {
    let playerScore = parseInt(0);
    let computerScore = parseInt(0);
    keepScore = function () {
        let roundResult = playSingleRound()
        console.log(roundResult)
        if (roundResult.slice(0,8) === 'You win!') {
            playerScore = ++playerScore
            console.log ('Player score:' + playerScore + ';' + ' ' + 'Computer score:' + computerScore)
        } else if (roundResult.slice(0,8) === 'You lose') {
            computerScore = ++computerScore
            console.log('Player score:' + playerScore + ';' + ' ' + 'Computer score:' + computerScore)
        } else {
            console.log ('Player score:' + playerScore + ';' + ' ' + 'Computer score:' + computerScore)
        }
        }

    keepScore()
    keepScore()
    keepScore()
    keepScore()
    keepScore()

    if (playerScore > computerScore) {
        console.log ('Congratulations! You beat the computer!')
    } else if (playerScore < computerScore) {
        console.log ('Don\'t worry! You\'ll do better next time!')
    } else {
        console.log ('Looks like a tie this time!')
    }
}
playGame()