function computerPlay() {
    let tab = new Array('Rock', 'Paper', 'Scizzors');
    let ran = (tab[Math.floor(Math.random() * tab.length)]);
    return ran;
  }
  
  computerPlay();

