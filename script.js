var suits = ["spades", "diamonds", "clubs", "hearts"];
// var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

var deck = [];
for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < values.length; j++) {
    let card = { Value: values[j], Suits: suits[i] };
    deck.push(card);
  }
}

for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i + 1);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}

var player1 = deck.splice(0, 26);
var player2 = deck;

//BEGIN THE GAME
//check the fourth card
// let playerOneDraw = player1.pop();
// let playerTwoDraw = player2.pop();

//check for winning condition ;
function checkWin() {
  let playerOneDraw = player1.pop();
  let playerTwoDraw = player2.pop();

  if (playerOneDraw.Value > playerTwoDraw.Value) {
    player1.push(playerTwoDraw, playerOneDraw);
    console.log(`player 1 wins`);
    return player2.length;
  } else if (playerOneDraw.Value < playerTwoDraw.Value) {
    player2.push(playerOneDraw, playerTwoDraw);

    console.log(`player 2 wins`);
    return player1.length;
  } else if (playerOneDraw.Value === playerTwoDraw.Value) {
    playerOneWar = player1.splice(0, 5);
    playerTwoWar = player2.splice(0, 5);
    if (playerOneWar.Value > playerTwoWar.Value) {
      player1.push(playerOneWar, playerTwoWar, playerOneDraw, playerTwoDraw);
      console.log(`playerOneWin`);
      return player1.length;
    } else {
      player2.push(playerOneWar, playerTwoWar, playerOneDraw, playerTwoDraw);
      console.log(`playerTwoWins`);
      return player2.length;
    }
  }
}
//
