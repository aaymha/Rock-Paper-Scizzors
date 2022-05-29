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
let win1;
let los1;
let draw;
function playRound() {
  let computerSelection = computerPlay();
  let playerSelection = userPlay();
  if(playerSelection === computerSelection) {
    alert('Draw');
  }
  if(playerSelection === 'Rock' && computerSelection === 'Paper') {
    let los1 = alert('You got fucked by multiple black men!')
  }
  if(playerSelection === 'Rock' && computerSelection === 'Scizzors') {
    let win1 = alert('You won!')
  }
  if(playerSelection === 'Paper' && computerSelection === 'Scizzors') {
    let los1 = alert('You got fucked by multiple black men!')
  }
  if(playerSelection === 'Paper' && computerSelection === 'Rock') {
    let win1 = alert('You won!')
  }
  if(playerSelection === 'Scizzors' && computerSelection === 'Rock') {
    let los1 = alert('You got fucked by multiple black men!')
  }
  if(playerSelection === 'Scizzors' && computerSelection === 'Paper') {
    let los1 = alert('You won!')
  }
  
}


function game(playerSelection, computerSelection){
  let score = 0;
  let computerscore = 0;
  for (let i = 0; i < 5; i++) {
    playRound();
    if(playerSelection == win1){
      console.log('You won this round!')
      score++
    } else if(computerSelection == los1) {
      console.log('You lost this round!');
      computerscore++
    }
  }
}

console.log(game())
