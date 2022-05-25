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
  if(userPlay() === 'Rock') {
    if(computerPlay() === 'Rock') {
      alert('Tie');
    } else if(computerPlay() === 'Scizzors') {
      alert('You won')
    } else if(computerPlay() === 'Paper') {
      alert('You lost!');
    }
  } if(userPlay() === 'Paper') {
    if(computerPlay() === 'Paper') {
      alert('Tie');
    } else if(computerPlay() === 'Scizzors') {
      alert('You lost!')
    } else if(computerPlay() === 'Paper') {
      alert('You won!');
    }
  } if(userPlay() === 'Scizzors') {
    if(computerPlay() === 'Scizzors') {
      alert('Tie');
    } else if(computerPlay() === 'Rock') {
      alert('You lost!')
    } else if(computerPlay() === 'Paper') {
      alert('You won!');
    }
  }
}

playRound();