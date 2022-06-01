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
    alert('Its a draw');
    return 3;
  }
  if(playerSelection === 'Rock' && computerSelection === 'Paper') {
   alert('You lost, Paper beats Rock!')
   return 2;
  }
  if(playerSelection === 'Rock' && computerSelection === 'Scizzors') {
    alert('You won! Rock beats Scizzors!')
    return 1;
  }
  if(playerSelection === 'Paper' && computerSelection === 'Scizzors') {
    alert('You lost, Scizzors beats Paper')
    return 2;
  }
  if(playerSelection === 'Paper' && computerSelection === 'Rock') {
    alert('You won! Paper beats Rock')
    return 1;
  }
  if(playerSelection === 'Scizzors' && computerSelection === 'Rock') {
    alert('You lost! Rock beats Scizzors!')
    return 2;
  }
  if(playerSelection === 'Scizzors' && computerSelection === 'Paper') {
    alert('You won! Scizzors beats Paper')
    return 1;
  }
  
}


function game(){
  let score = 0;
  let computerscore = 0;
  for (let i = 0; i < 5; i++) {
    playRound();
    
    if(playRound() === 1) {
      console.log('You won this round!')
      score++
    } else if(playRound() === 2) {
      console.log('You lost this round!')
      computerscore++
    } else if(playRound() === 3) {
      console.log('This round end with a draw!')
    }
  }
  if(score === 5) {
      console.log('You won the game!')
    } else if(computerscore === 5) {
      console.log('You lost the game!pla')
    }
}

game()