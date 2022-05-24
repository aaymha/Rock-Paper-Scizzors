function computerPlay() {
    let tab = ['Rock', 'Paper', 'Scizzors'];
    let ran = (tab[Math.floor(Math.random() * tab.length)]);
    return ran;
  }
  
function userPlay() {
    let pro = prompt('Start fight!')
}

userPlay();

function playRound(playerSelection, computerSelection) {
    
  }
  
  const playerSelection = userPlay();
  const computerSelection = computerPlay();