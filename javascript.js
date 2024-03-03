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

console.log(getComputerChoice())

