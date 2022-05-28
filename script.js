vicotry = 'You won the game!';
defeat = 'You lost the game!';



function computerPlay() {
  let tab = ['Rock', 'Paper', 'Scizzors'];
  let ran = (tab[Math.floor(Math.random() * tab.length)]);
  return ran;
}

function userPlay() {
van = prompt('Choose:');
return van;
}

function playRound() {
  let computerSelection = computerPlay();
  let playerSelection = userPlay();
  if(playerSelection === computerSelection) {
    alert('Draw');
  }
  if(playerSelection === 'Rock' && computerSelection === 'Paper') {
    alert('You got fucked by multiple black men!')
  }
  if(playerSelection === 'Rock' && computerSelection === 'Scizzors') {
    alert('You won!')
  }
  if(playerSelection === 'Paper' && computerSelection === 'Scizzors') {
    alert('You got fucked by multiple black men!')
  }
  if(playerSelection === 'Paper' && computerSelection === 'Rock') {
    alert('You won!')
  }
  if(playerSelection === 'Scizzors' && computerSelection === 'Rock') {
    alert('You got fucked by multiple black men!')
  }
  if(playerSelection === 'Scizzors' && computerSelection === 'Paper') {
    alert('You won!')
  }
  
}


function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}

game();
