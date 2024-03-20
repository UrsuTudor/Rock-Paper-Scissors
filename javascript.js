function getComputerChoice() {
    const numberChoice1 = 'Rock'
    const numberChoice2 = 'Paper'
    const numberChoice3 = 'Scissors'
    const Choice = Math.floor((Math.random() * 3) + 1)
    if (Choice === 1) {
        return numberChoice1
    } else if (Choice === 2) {
        return numberChoice2
    } else {
        return numberChoice3
    }
}

const buttons = document.querySelectorAll('button');

let playerSelectionGlobal; //made it a global value so I could easily access it with playSingleRound(); trying to add event listeners inside the function to encase every 
                           //bit of code inside didn't work

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelectionGlobal = button.textContent
        playSingleRound()
        keepScore()
    });
}) //makes buttons get playerSelection and play a round

const gameData = document.querySelector('#results')
const playersChoices = document.createElement('div')
const roundResult = document.createElement('div')

function playSingleRound(playerSelection, computerSelection) {
    playerSelection = playerSelectionGlobal;
    computerSelection = getComputerChoice();

    console.log('Computer: ' + computerSelection)
    
    playersChoices.textContent = 'Player: ' + playerSelection + ' ' + 'Computer: ' + computerSelection

    if (playerSelection === computerSelection) {
        roundResult.textContent = 'Tie!'
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        roundResult.textContent = 'You win! Rock beats Scissors!'
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        roundResult.textContent = 'You lose! Paper beats Rock!'
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        roundResult.textContent ='You lose! Scissors beat Paper!'
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        roundResult.textContent ='You win! Paper beats Rock!'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        roundResult.textContent ='You lose! Rock beats Scissors!'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        roundResult.textContent ='You win! Scissors beat Paper!'
    } 
    gameData.appendChild(playersChoices)
    gameData.appendChild(roundResult)
}

let playerScore = parseInt(0);
let computerScore = parseInt(0);
const score = document.createElement('div')

keepScore = function () {
    if (roundResult.textContent.slice(0,8) === 'You win!') {
        playerScore = ++playerScore
        score.textContent = 'Player score:' + playerScore + ';' + ' ' + 'Computer score:' + computerScore
    } else if (roundResult.textContent.slice(0,8) === 'You lose') {
        computerScore = ++computerScore
        score.textContent = 'Player score:' + playerScore + ';' + ' ' + 'Computer score:' + computerScore
    } else {
        score.textContent = 'Player score:' + playerScore + ';' + ' ' + 'Computer score:' + computerScore
    }
    gameData.appendChild(score)
}

function playGame() {
    //5 keeps scores
    if (playerScore > computerScore) {
        console.log ('Congratulations! You beat the computer!')
    } else if (playerScore < computerScore) {
        console.log ('Don\'t worry! You\'ll do better next time!')
    } else {
        console.log ('Looks like a tie this time!')
    }
}


