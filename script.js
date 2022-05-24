function computerPlay() {
    let tab = new Array('Rock', 'Paper', 'Scizzors');
    let ran = (tab[Math.floor(Math.random() * tab.length)]);
    return ran;
  }
  
  computerPlay();



  function playerSelection() {
      let rock;
      let paper;
      let scizzors;
      let wyb = prompt('Choose:')
      if(wyb === rock) {
          wyb = rock;
      } else if(wyb === paper) {
          wyb = paper;
      } else if(wyb === scizzors) {
          wyb = scizzors;
      }
  }     

  playerSelection();