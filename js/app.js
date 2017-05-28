
let spinEl = document.querySelector('.spin');
let suitEl = document.querySelector('.suit');
let roundTable = document.querySelector('#round-table');

let deck = new Deck;
let playerOne = new Player('Петя');
let playerTwo = new Player('Вася');
let spin = new Spin;
let game = new Game;
game.play();
