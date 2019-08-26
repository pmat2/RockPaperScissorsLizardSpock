let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");

let result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("c");

function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l', 'c'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function convert(choice) {
    switch (choice) {
        case "r":
            return "Rock"
        case "p":
            return "Paper"
        case "s":
            return "Scissors"
        case "l":
            return "Lizard"
        case "c":
            return "Spock"
    }
}

function win(userChoice) {
    let doc = document.getElementById(userChoice).classList;
    userScore++;
    userScore_span.innerHTML = userScore;
    doc.add('green-glow');
    setTimeout(function() { doc.remove('green-glow') }, 600);
}

function lose(userChoice) {
    let doc = document.getElementById(userChoice).classList;
    compScore++;
    compScore_span.innerHTML = compScore;
    doc.add('red-glow');
    setTimeout(function() { doc.remove('red-glow') }, 600);
}

function draw(userChoice) {
    let doc = document.getElementById(userChoice).classList;
    result_div.innerHTML = "It's a draw!"
    doc.add('grey-glow');
    setTimeout(function() { doc.remove('grey-glow') }, 600);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rl":
            result_div.innerHTML = "Rock smashes lizard. You win!"
            win(userChoice);
            break;
        case "rs":
            result_div.innerHTML = "Rock crushes scissors. You win!"
            win(userChoice);
            break;
        case "lc":
            result_div.innerHTML = "Lizard poisons Spock. You win!"
            win(userChoice);
            break;
        case "lp":
            result_div.innerHTML = "Lizard eats paper. You win!"
            win(userChoice);
            break;
        case "cs":
            result_div.innerHTML = "Spock smashes scissors. You win!"
            win(userChoice);
            break;
        case "cr":
            result_div.innerHTML = "Spock vaporizes rock. You win!"
            win(userChoice);
            break;
        case "sp":
            result_div.innerHTML = "Scissors cut paper. You win!"
            win(userChoice);
            break;
        case "sl":
            result_div.innerHTML = "Scissors decapitate lizard. You win!"
            win(userChoice);
            break;
        case "pr":
            result_div.innerHTML = "Paper covers rock. You win!"
            win(userChoice);
            break;
        case "pc":
            result_div.innerHTML = "Paper disproves Spock. You win!"
            win(userChoice);
            break;
        case "rp":
            result_div.innerHTML = "Paper covers rock. You lose!"
            lose(userChoice);
            break;
        case "rc":
            result_div.innerHTML = "Spock vaporizes rock. You lose!"
            lose(userChoice);
            break;
        case "lr":
            result_div.innerHTML = "Rock smashes lizard. You lose!"
            lose(userChoice);
            break;
        case "ls":
            result_div.innerHTML = "Scissors decapitate lizard. You lose!"
            lose(userChoice);
            break;
        case "cl":
            result_div.innerHTML = "Lizard poisons Spock. You lose!"
            lose(userChoice);
            break;
        case "cp":
            result_div.innerHTML = "Paper disproves Spock. You lose!"
            lose(userChoice);
            break;
        case "sc":
            result_div.innerHTML = "Spock smashes scissors. You lose!"
            lose(userChoice);
            break;
        case "sr":
            result_div.innerHTML = "Rock crushes scissors. You lose!"
            lose(userChoice);
            break;
        case "ps":
            result_div.innerHTML = "Scissors cut paper. You lose!"
            lose(userChoice);
            break;
        case "pl":
            result_div.innerHTML = "Lizard eats paper. You lose!"
            lose(userChoice);
            break;
        case "rr":
        case "ll":
        case "cc":
        case "ss":
        case "pp":
            draw(userChoice)
            break;
    }
}

rock_div.addEventListener('click', function() {
    game("r");
})
paper_div.addEventListener('click', function() {
    game("p");
})
scissors_div.addEventListener('click', function() {
    game("s");
})
lizard_div.addEventListener('click', function() {
    game("l");
})
spock_div.addEventListener('click', function() {
    game("c");
})