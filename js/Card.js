
(function() {
  let suits = ['Diamonds', 'Spades', 'Clubs', 'Hearts'];
  let names = ['6', '7', '8', '9', '10', 'Валет', 'Дама', 'Король', 'Туз'];
  let values = [6, 7, 8, 9, 10, 11, 12, 13, 14];

  class Card {
    constructor(number) {
      this.suit = suits[parseInt(number / 9)]; //масть
      this.name = names[number % 9]; //название
      this.value = values[number % 9]; //значение
      this.img = new Image(75, 150);
      this.img.src = 'img/' + number + '.jpg'; //путь к изображению
      //задаем дополнительные атрибуты изображения
      this.img.alt = this.getAltName();
      this.img.className = 'card';
      this.cardBack = new Image(100, 150);
      this.cardBack.src = 'img/cardBack.png'; 
      this.cardBack.alt = 'Рубашка'
      this.cardBack.className = 'сard-back';
    }
    getAltName() {
      return this.name + ' ' + this.suit;
    }
  }
  window.Card = Card;
})()
