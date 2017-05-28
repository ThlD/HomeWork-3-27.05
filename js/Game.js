(function() {
  let instance = null;

  class Game {
    constructor() {
      if (!instance) {
        instance = this;
      }
      this.roundWinner = 'Ничья';
      this.lastCardOne = {};
      this.lastCardTwo = {};
      return instance;
    }

    play() {
      let index = playerOne.cards.length;
      deck.init().shuffle().giveOutСards(playerOne, playerTwo);
      spin.playSpin();
      suitEl.addEventListener('transitionend', this.showCards);
    }

    showCards() {
      let index = playerOne.cards.length;
      game.lastCardOne = playerOne.cards.pop();
      game.lastCardTwo = playerTwo.cards.pop();

      index -= 1;
      if (game.lastCardOne.suit !== spin.trumpSuit && game.lastCardTwo.suit !== spin.trumpSuit) {
        if (game.lastCardOne.value > game.lastCardTwo.value) {
          playerOne.score += 1;
          game.roundWinner = playerOne.name;
        } else if (game.lastCardOne.value < game.lastCardTwo.value) {
          playerTwo.score += 1;
          game.roundWinner = playerTwo.name;
        };
      } else if (game.lastCardOne.suit === spin.trumpSuit && game.lastCardTwo.suit === spin.trumpSuit) {
        if (game.lastCardOne.value > game.lastCardTwo.value) {
          playerOne.score += 1;
          game.roundWinner = playerOne.name;
        } else {
          playerTwo.score += 1;
          game.roundWinner = playerTwo.name;
        };
      } else if (spin.trumpSuit === game.lastCardOne.suit) {
        playerOne.score += 1;
        game.roundWinner = playerOne.name;
      } else if (spin.trumpSuit === game.lastCardTwo.suit) {
        playerTwo.score += 1;
        game.roundWinner = playerTwo.name;
      };

      let card1 = document.querySelector('.backcard1');
      card1.appendChild(game.lastCardOne.cardBack);
      card1.classList.add('backcard1-anim');
      let card2 = document.querySelector('.backcard2');
      card2.appendChild(game.lastCardTwo.cardBack);
      card2.classList.add('backcard2-anim');
      setTimeout(function() {
        card1.removeChild(game.lastCardOne.cardBack);
        card1.appendChild(game.lastCardOne.img);
        card2.removeChild(game.lastCardTwo.cardBack);
        card2.appendChild(game.lastCardTwo.img);
        if (game.roundWinner == 'Петя') {
          card1.classList.add('win-round');
        } else if (game.roundWinner == 'Вася') {
          card2.classList.add('win-round');
        }
        document.querySelector('.result').innerHTML = `${playerOne.score}:${playerTwo.score}`;
      }, 1000);

      setTimeout(function() {
        card1.classList.add('down-anim');
        card2.classList.add('down-anim');
      }, 2000);

      setTimeout(function() {
        card1.removeChild(game.lastCardOne.img);
        card1.classList.remove('backcard1-anim', 'down-anim', 'win-round');
        card2.removeChild(game.lastCardTwo.img);
        card2.classList.remove('backcard2-anim', 'down-anim', 'win-round');
      }, 3000);

      setTimeout(function() {
        roundTable.insertBefore(game.lastCardTwo.img, roundTable.firstChild);
        roundTable.insertBefore(game.lastCardOne.img, roundTable.firstChild);
        if (index == 1) {
          let deckImg1 = document.querySelector('.player1 img');
          deckImg1.style.opacity = 0;
          let deckImg2 = document.querySelector('.player2 img');
          deckImg2.style.opacity = 0;
          return game.showCards();
        }
        if (index != 0) {
          return game.showCards();
        }
      }, 3001);
    }
  }
  window.Game = Game;
})();
