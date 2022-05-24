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
      
      switch(wyb) {
          case 'rock':
              return wyb = rock;
              break;
          case 'paper':
              return wyb = paper;
              break;
          case 'scizzors':
              return wyb = scizzors;
              break;
          default:
              alert('Choose correctly')
              break;
      }
  }     

  playerSelection();