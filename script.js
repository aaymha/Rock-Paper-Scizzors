function computerPlay() {
  let tab = ['Rock', 'Paper', 'Scizzors'];
  let ran = (tab[Math.floor(Math.random() * tab.length)]);
  return ran;
}

function userPlay() {
van = prompt('Podaj liczbe')
return van;
}



function playRound(playerSelection, computerSelection) {
  if(userPlay() === 'Rock') {
    if(computerPlay() === 'Rock') {
      alert('Tie');
    } else if(computerPlay() === 'Scizzors') {
      alert('You won')
    } else if(computerPlay() === 'Paper') {
      alert('You lost!');
    }
  }
  
}

playRound();