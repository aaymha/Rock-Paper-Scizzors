
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
  } else if(computerSelection === 'Scizzors') {
    let b = alert("YOU LOST")
  } else if(playerSelection === 'Paper' && computerSelection === 'Paper') {
    let c = alert("Draw");
  } else if(computerSelection === 'Scizzors') {
    let d = alert("YOU LOST")
  } else if(computerSelection === 'Rock') {
    let e = alert("YOU WON")
  } else if(playerSelection === 'Scizzors' && computerSelection === 'Scizzors') {
    let f = alert("Draw");
  } else if(computerSelection === 'Rock') {
    let e = alert("YOU LOST")
  } else if(computerSelection === 'Paper') {
    let j = alert("YOU WON")
  }
}
playRound();