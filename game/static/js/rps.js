var playerScore = 0;
var computerScore = 0;
var seconds = document.getElementById("countdown");
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scores_div = document.querySelector(".scores")
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissor_div = document.getElementById("s")


// Show an element
function show(elem) {
	elem.style.display = 'inline-block';
}

// Hide an element
function hide(elem) {
	elem.style.display = 'none';
}

// Next 3 functions are in place for players winning, losing and tied
function win(choiceP, choiceC) {
	playerScore++
	playerScore_span.innerHTML = playerScore;
	result_div.innerHTML = `${choiceP} beats ${choiceC}, Player Wins!`
	show(rock_div); show(paper_div); show(scissor_div);

}

function lose(choiceP, choiceC) {
	computerScore++
	computerScore_span.innerHTML = computerScore
	result_div.innerHTML = `${choiceC} beats ${choiceP}, you lose!`
	show(rock_div); show(paper_div); show(scissor_div);
}

function draw(choiceP) {
	result_div.innerHTML = `Both chose ${choiceP}, Tie game!`
	show(rock_div); show(paper_div); show(scissor_div);
}

// Computers decision - randomised
function computerChoice() {
	let options = ['rock', 'paper', 'scissors']
	let choice = options[Math.floor(Math.random() * options.length)];
	return choice
}


// Function to handle all possible outcomes and decide if the player wins, loses or ties/
function play(playerChoice) {
	const compChoice = computerChoice()
	switch (playerChoice + ' ' + compChoice) {
		case 'rock scissors':
		case 'paper rock':
		case 'scissors paper':
			win(playerChoice, compChoice);
			break;
		case "rock paper":
		case "paper scissors":
		case "scissors rock":
			lose(playerChoice, compChoice);
			break;
		case "rock rock":
		case "paper paper":
		case "scissors scissors":
			draw(playerChoice);
			break;
	}
}	



rock_div.addEventListener('click', function() {
	hide(paper_div);
	hide(scissor_div);
	setTimeout(function(){ play("rock")}, 2000);
})

paper_div.addEventListener('click', function() {
	hide(rock_div);
	hide(scissor_div);
	setTimeout(function(){ play("paper")}, 2000);
})

scissor_div.addEventListener('click', function() {
	hide(rock_div);
	hide(paper_div);
	setTimeout(function(){ play("scissors")}, 2000);
})
