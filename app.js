let userScore= 0;
let compScore = 0;
const userScoreDisplay = document.querySelector('#user-score');
const compScoreDisplay = document.querySelector('#comp-score');
userScoreDisplay.innerText = userScore;
compScoreDisplay.innerText = compScore;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = (userChoice) => {
    console.log(`It's a draw! You both chose ${userChoice}`);
    msg.innerText = `Draw! You both chose ${userChoice}`;
    msg.style.backgroundColor = '#081b31';
};

const showWinner = (userWin, userChoice, compChoice) => {
    console.log(userWin ? "You win!" : "You lose?");
    userWin ? userScore++ : compScore++;
    userScoreDisplay.innerText = userScore;
    compScoreDisplay.innerText = compScore;
    msg.innerText = userWin ? `You Win! ${userChoice} beats ${compChoice}` : `You lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = userWin ? 'green' : 'red';
    // window.getComputedStyle(msg).backgroundColor = userWin ? 'green' : 'red';
};

const playGame = (userChoice) => {
    console.log("User choice is: " + userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice is: " + compChoice);
    if(userChoice === compChoice) {
        drawGame(userChoice);
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true;
        }
        else if(userChoice === 'paper'){
            userWin = compChoice === 'scissor' ? false : true;
        }
        else{
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        console.log(`User chose ${userChoice}`);
        playGame(userChoice);
    });
});