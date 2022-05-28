let playerScore = 0;
let computerScore = 0;


function computerPlay() {
  let tab = ['Rock', 'Paper', 'Scizzors'];
  let ran = (tab[Math.floor(Math.random() * tab.length)]);
  return ran;
}

function userPlay() {
van = prompt('Choose:').toLocaleLowerCase;
return van;
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = userPlay();

  if(playerSelection === computerSelection) {
    alert('Draw');
  }
  if(playerSelection === 'Rock' && computerSelection === 'Paper') {
    alert('You lost!')
  }
  if(playerSelection === 'Rock' && computerSelection === 'Scizzors') {
    alert('You won!')
  }
  if(playerSelection === 'Paper' && computerSelection === 'Scizzors') {
    alert('You lost!')
  }
  if(playerSelection === 'Paper' && computerSelection === 'Rock') {
    alert('You won!')
  }
  if(playerSelection === 'Scizzors' && computerSelection === 'Rock') {
    alert('You lost!')
  }
  if(playerSelection === 'Scizzors' && computerSelection === 'Paper') {
    alert('You won!')
  }
}

let playerWinRound = "You win!"
let computerWinRound = "You got raped by multiple black men"
let draw = "Draw!"
let playerWin = "You won, finally!"
let computerWin = "Pissed on by pc omegaLuL"

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
    
  }
}
