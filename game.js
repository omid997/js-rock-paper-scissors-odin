var gameTies = 0 , playerWins = 0 , computerWins = 0;

var buttons = document.querySelectorAll("a.button");
var playerResultBox = document.getElementById("playerWins");
var computerResultBox = document.getElementById("computerWins");
var gameTiesBox = document.getElementById("gameTies");
var result = document.getElementById("result");

buttons.forEach(function(element) {
    element.addEventListener("click" , function(){
        var computerChoice = computerChoiceRandom();
        var playerChoice = element.id;
        result.innerHTML = play(playerChoice,computerChoice);
        if (checkScores())
            reset();
    })
});

function computerChoiceRandom() {
    var options = ["rock" , "paper" , "scissors"]; 
    var randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function play(player , computer) {
    if ( player === computer) {
        gameTiesBox.innerHTML = ++gameTies;
        return "Same choice, Tie!";
    } else if (player === "rock" && computer === "paper") {
        computerResultBox.innerHTML = ++computerWins;
        return "You: Rock, Computer: Paper. You lose!";
    } else if (player === "rock" && computer === "scissors") {
        playerResultBox.innerHTML = ++playerWins;
        return "You: Rock, Computer: Scissors. You Win!";
    } else if (player === "paper" && computer === "scissors") {
        computerResultBox.innerHTML = ++computerWins;
        return "You: Pape , Computer: Scissors. You Lose!";
    } else if (player === "paper" && computer === "rock") {
        playerResultBox.innerHTML = ++playerWins;
        return "You: Pape , Computer: Rock. You Win!";
    } else if (player === "scissors" && computer === "rock") {
        computerResultBox.innerHTML = ++computerWins;
        return "You: Scisors , Computer: Rock. You Lose!";
    } else if (player === "scissors" && computer === "paper") {
        playerResultBox.innerHTML = ++playerWins;
        return "You: Scisors , Computer: Paper. You Win!";
    }
}

function checkScores() {
    if(playerWins >= 5) {
        alert("You won , got score 5");
        return true;
    } else if (computerWins >= 5 ) {
        alert("Computer won");
        return true;
    }
    return false;
}

function reset() {
    result.innerHTML = "Play again! Choose one of Rock, Paper or Scissiors.";
    computerResultBox.innerHTML = 0;
    playerResultBox.innerHTML = 0;
    gameTiesBox.innerHTML = 0;
    computerWins = 0;
    playerWins = 0;
    gameTies = 0;
}