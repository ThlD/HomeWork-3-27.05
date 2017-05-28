(function() {
  let instance = null;

  class Deck {
    constructor() {
      if (!instance) {
        instance = this;
      }
      this.cards = [];
      return instance;
    }

    init() {
      for (let i = 0; i < 36; i++)
        this.cards[i] = new Card(i);
      return this;
    }

    shuffle() {
      this.cards.sort((a, b) => Math.random() - 0.5);
      return this;
    }

    giveOutСards(...players) {
      let len = this.cards.length;
      let that = this;
      function getRandomCard() {
        return that.cards.splice(Math.ceil(Math.random() * that.length - 1), 1)[0];
      }
      for (let i = 0; i < len / players.length; i++) {
        for (let j = 0; j < players.length; j++) {
          players[j].cards.push(getRandomCard());
        }
      }
      return this;
    }
  }
  window.Deck = Deck;
})();
