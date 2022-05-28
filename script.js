let win1 = 'You won!';
let draw1 = 'Its a draw!';
let lose1 = 'You got fucked by multiple black men!';

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
  const computerSelection = computerPlay();
  const playerSelection = userPlay();

  if(playerSelection === computerSelection) {
    alert(draw1);
  }
  if(playerSelection === 'Rock' && computerSelection === 'Paper') {
   alert(lose1)
  }
  if(playerSelection === 'Rock' && computerSelection === 'Scizzors') {
   alert(win1)
  }
  if(playerSelection === 'Paper' && computerSelection === 'Scizzors') {
    alert(lose1)
  }
  if(playerSelection === 'Paper' && computerSelection === 'Rock') {
    alert(win1)
  }
  if(playerSelection === 'Scizzors' && computerSelection === 'Rock') {
    alert(lose1)
  }
  if(playerSelection === 'Scizzors' && computerSelection === 'Paper') {
    alert(win1)
  }
}


function game() {
  let playerSelection;
  let computerSelection;
  let playerscore = 0;
  let computerscore = 0;
  for (let i = 0; i < 5; i++) {
    playRound();
    if(playerSelection == win1) {
      console.log('You won this round!')
      return playerscore++
    } else if(computerSelection == lose1) {
      console.log('You lost the round!')
      return computerscore++
    }


    if(playerscore == 5) {
      console.log('You won the game!');
    } else if(computerscore == 5) {
      console.log('You lost the game!')
    }
  }
}

game();

