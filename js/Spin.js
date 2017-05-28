(function() {
  let instance = null;
  let suits = ['Diamonds', 'Spades', 'Clubs', 'Hearts'];
  let degSuits = [135, 45, 225, 315];
  class Spin {
    constructor() {
      if (!instance) {
        instance = this;
      }
      this.trumpSuit = '';
      this.degTurns = null;
      return instance;
    }
    getTrumpSuit() {
      let randomSuit = Math.floor(Math.random() * (suits.length));
      this.trumpSuit = suits[randomSuit];
      return this.trumpSuit;
    }
    getDegSuit() {
      let degSuit = null;
      switch (this.getTrumpSuit()) {
        case 'Diamonds':
          degSuit = degSuits[0];
          break;
        case 'Spades':
          degSuit = degSuits[1];
          break;
        case 'Clubs':
          degSuit = degSuits[2];
          break;
        case 'Hearts':
          degSuit = degSuits[3];
          break;
      }
      return degSuit;
    }

    getNumTurns() {
      let degE = Math.ceil(Math.random() * 30);
      this.degTurns = this.getDegSuit() + Math.ceil(Math.random() * 10) * 360;
      if (Math.random() > 0.5) {
        this.degTurns += degE;
      } else {
        this.degTurns -= degE;
      }
      return this.degTurns;
    }

    playSpin() {
      let rotate = this.getNumTurns();
      let suit = this.trumpSuit;
      spinEl.classList.add('spin_show');

      spinEl.addEventListener('click', rotateSpin);
      spinEl.addEventListener('transitionend', dislpaySuit);
      function rotateSpin(e) {
        e.target.style.transform = 'rotate(' + rotate + 'deg)';
        return false;
      }

      function dislpaySuit(e) {
        e.target.classList.remove('spin');
        if (e.propertyName !== 'transform')
          return;

        switch (suit) {
          case 'Diamonds':
            suitEl.classList.add('suit_show', 'suit_diamonds');
            break;
          case 'Spades':
            suitEl.classList.add('suit_show', 'suit_spades');
            break;
          case 'Clubs':
            suitEl.classList.add('suit_show', 'suit_clubs');
            break;
          case 'Hearts':
            suitEl.classList.add('suit_show', 'suit_hearts');
            break;
        }
        return false;
      }
    }
  }
  window.Spin = Spin;
})();
