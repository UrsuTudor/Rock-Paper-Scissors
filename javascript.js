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
    });
}) //makes buttons get playerSelection and play a round

function playSingleRound(playerSelection, computerSelection) {
    playerSelection = playerSelectionGlobal;
    computerSelection = getComputerChoice();

    console.log('Computer: ' + computerSelection)
    
    const gameData = document.querySelector('#results')
    
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
const playersChoices = document.createElement('div')
const roundResult = document.createElement('div')







function playGame() {
    let playerScore = parseInt(0);
    let computerScore = parseInt(0);
    keepScore = function () {
        let roundResult = playSingleRound() //this ensures the keepScore() function gets a new roundResult value by calling playSingleRound() every time it is ran
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

    //5 keeps scores

    if (playerScore > computerScore) {
        console.log ('Congratulations! You beat the computer!')
    } else if (playerScore < computerScore) {
        console.log ('Don\'t worry! You\'ll do better next time!')
    } else {
        console.log ('Looks like a tie this time!')
    }
}


