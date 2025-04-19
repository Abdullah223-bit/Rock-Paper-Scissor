let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>
{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);

    return options[randIdx];
};

const drawGame = () =>
{
    msg.innerText = "Game Drawn. Play again";
    msg.style.backgroundColor = "#081b31";  
};

const showWinner = (userWin, userChoice, compChoice) =>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

        confetti(
            {
                particleCount: 150,
                speed: 70,
                origin: { y: 0.6 },
            }
        );
    
        //  // Optional: Keep confetti going for a while
        // let duration = 2000;
        // let animationEnd = Date.now() + duration;
    
        // (function frame() {
        //     confetti({
        //     particleCount: 5,
        //     angle: 60,
        //     spread: 55,
        //     origin: { x: 0 },
        //     });
        //     confetti({
        //     particleCount: 5,
        //     angle: 120,
        //     spread: 55,
        //     origin: { x: 1 },
        //     });
    
        //     if (Date.now() < animationEnd) {
        //     requestAnimationFrame(frame);
        //     }
        // })();
    }

    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost!${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) =>
{
    //computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissors" ? false : true;
        }
        else
        {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});