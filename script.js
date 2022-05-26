
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
  } else if(playerSelection === 'Scizzors') {
    let b = alert("YOU LOST")
  } else if(playerSelection === 'Paper') {
    let go = alert("YOU WON")
  } else if(playerSelection === 'Paper' && computerSelection === 'Paper') {
    let c = alert("Draw");
  } else if(playerSelection === 'Scizzors') {
    let d = alert("YOU WON")
  } else if(playerSelection === 'Rock') {
    let e = alert("YOU LOST")
  } else if(playerSelection === 'Scizzors' && computerSelection === 'Scizzors') {
    let f = alert("Draw");
  } else if(playerSelection === 'Rock') {
    let g = alert("YOU WON")
  } else if(playerSelection === 'Paper') {
    let h = alert("YOU LOST")
  }
}
playRound();