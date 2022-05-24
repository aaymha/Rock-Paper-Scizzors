function computerPlay() {
    let tab = new Array('Rock', 'Paper', 'Scizzors');
    let ran = (tab[Math.floor(Math.random() * tab.length)]);
    return ran;
  }
  
function userPlay() {
    let zap1 = prompt('Make a choice'); 
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'Rock') {
        if(computerSelection === 'Rock') {
            alert('Tie!')
        } else if(computerSelection == 'Scizzors') {
            alert('You won!')
        } else {
            alert('You')
        }
    }
  }
  
  const playerSelection = userPlay();
  const computerSelection = computerPlay();