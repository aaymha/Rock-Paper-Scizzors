
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

  if(playerSelection === 'Rock' && computerSelection === 'Rock') {
    let a = alert("Draw");
  } else if(computerSelection === 'Paper') {
    let b = alert("YOU LOST")
  } else if(computerSelection === 'Scizzors') {
    let c = alert("YOU WON")
  }

  if(playerSelection === 'Paper' && computerSelection === 'Paper') {
    let a = alert("Draw");
  } else if(computerSelection === 'Scizzors') {
    let b = alert("YOU LOST")
  } else if(computerSelection === 'Rock') {
    let c = alert("YOU WON")
  }

  if(playerSelection === 'Scizzors' && computerSelection === 'Scizzors') {
    let a = alert("Draw");
  } else if(computerSelection === 'Paper') {
    let b = alert("YOU LOST")
  } else if(computerSelection === 'Rock') {
    let c = alert("YOU WON")
  }
}
playRound();