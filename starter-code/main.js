var cardOne = "queen", 
cardTwo = "queen", 
cardThree ="king", 
cardFour ="king";

var allCards = [cardOne, cardTwo, cardThree, cardFour];

if (cardTwo === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

var createCards = function(allCards){
	var gameBoard = document.getElementById('game-board');
	var newDiv;

	for (var i = 0; i < allCards.length; i++) {
		newDiv = document.createElement('div');
		newDiv.className = "card";
		gameBoard.appendChild(newDiv);
	}

}

createCards(allCards);
