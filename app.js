let userScore= 0;
let compScore = 0;
console.log("Hello");
const choices = document.querySelectorAll('.choice');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("It's a draw!");
}

const playGame = (userChoice) => {
    console.log("User choice is: " + userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice is: " + compChoice);
    if(userChoice === compChoice) {
        drawGame();
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        console.log(`User chose ${userChoice}`);
        playGame(userChoice);
    });
});