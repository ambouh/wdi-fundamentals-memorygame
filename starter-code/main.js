var cardOne = "queen", 
cardTwo = "queen", 
cardThree ="king", 
cardFour ="king";

var cards = [cardOne, cardTwo, cardThree, cardFour];
var cardsInPlay = [];
var cardElement;


var createCards = function(cards){
	var gameBoard = document.getElementById('game-board');

	for (var i = 0; i < cards.length; i++) {
		cardElement = document.createElement('div');
		cardElement.className = "card";
		
		gameBoard.appendChild(cardElement);
	}

}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
	}
}

var isMatch = function(cardsInPlay) {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));

		// show the card's image
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}
	
	  // if you have two cards in play, check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for your next try
    cardsInPlay = [];

  }
}

createCards(cards);
