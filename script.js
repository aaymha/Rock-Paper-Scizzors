function computerPlay() {
  let tab = ['Rock', 'Paper', 'Scizzors'];
  let ran = (tab[Math.floor(Math.random() * tab.length)]);
  return ran;
}

function userPlay() {
van = prompt('Choose:')
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
  return playerSelection, computerSelection;
}

function game() {
  let compscore;
  let userscore;
  for (let i = 0; i < 5; i++) {
    if()
 }
}

game()