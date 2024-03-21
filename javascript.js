const gameData = document.querySelector('#results'); //main container

const playBtn = document.querySelector('#play');

const playerOptionBtns = document.querySelectorAll('.playerOption');
playerOptionBtns.forEach(button => button.disabled = true);

const playersChoices = document.createElement('div');
const roundResult = document.createElement('div');
const gameEndMsg = document.createElement('div');

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

let playerSelectionGlobal; //made it a global value so I could easily access it with playSingleRound();

function playSingleRound(playerSelection, computerSelection) {
    playerSelection = playerSelectionGlobal;
    computerSelection = getComputerChoice();

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

    playersChoices.textContent = 'Player: ' + playerSelection + ';' + 'Computer: ' + computerSelection;

    gameData.appendChild(playersChoices);
    gameData.appendChild(roundResult);
}

const score = document.createElement('div')
let playerScore = parseInt(0);
let computerScore = parseInt(0);

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

function displayGameResult() {
    if (playerScore == 5 ) {
        playerScore = 0;
        computerScore = 0; 
        playerOptionBtns.forEach(button => button.disabled = true);
        playBtn.disabled = false;
        playBtn.textContent = 'Play Again';
        gameEndMsg.textContent = 'You win!';
        gameData.appendChild(gameEndMsg)
    } else if (computerScore == 5){
        playerScore = 0;
        computerScore = 0; 
        playerOptionBtns.forEach(button => button.disabled = true);
        playBtn.disabled = false;
        playBtn.textContent = 'Play Again';
        gameEndMsg.textContent = 'You lose!';
        gameData.appendChild(gameEndMsg)
    }
}
playBtn.addEventListener('click', () => {
    playerOptionBtns.forEach(button => button.disabled = false);

    playBtn.disabled = true;

    if (gameEndMsg.textContent == 'You win!' || gameEndMsg.textContent == 'You lose!') {
        gameEndMsg.textContent = '';
    }
}) 

playerOptionBtns.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelectionGlobal = button.textContent;
        playSingleRound();
        keepScore();
        displayGameResult();
    });
}) //makes playerOptionBtns get playerSelection, play a round, display the Score and give an end game message once the score reaches 5 