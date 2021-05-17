/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;

// querySelector used to change the DOM elements
// Basically a setter method, assigning a value to the variable
//document.querySelector('#current-' + activePlayer).textContent = dice;

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' +  dice + '</em>';

// Searches id (score-0) and reads what value it has and stores it in variable x
// Basically a getter method
//var x = document.querySelector('#score-0').textContent;


// Searches for class (dice) and changes the style of the css property (display)
// set the property to none, to hide the dice img
document.querySelector('.dice').style.display = 'none';

/*
// normal way of making a function
function btn () {
    // do something here

}
// call it normally outside the function
btn();
*/

document.getElementById('score-0').textContent = ('0');
document.getElementById('score-1').textContent = ('0');
document.getElementById('current-0').textContent = ('0');
document.getElementById('current-1').textContent = ('0');

// function will call btn method when the event is activated
// anonymous function, since it has no name assigned to it
// function is also used only by the event listener for dice roll
document.querySelector('.btn-roll').addEventListener('click', function() {
    // random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // display result
    //stores selection of class (dice) in diceDOM
    var diceDOM = document.querySelector('.dice'); 
    diceDOM.style.display = 'block'; //diceDOM variable can be called and concatenated
    diceDOM.src = 'dice-' +  dice + '.png';

    // Update round score If the rolled number was NOT a 1
    if (dice !== 1 ) {
        // add score
        // updated the roundScore
        roundScore += dice; // same as roundScore = roundScore + dice;
        // display the roundScore in the UI
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // next player
        /* uses ternary operator instead of long winded IF statement
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        /* similar to writing
        if (activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
        */
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // add current score to global score
    scores[activePlayer] += roundScore;
    // similar to writing scores[activePlayer] = scores[activePlayer] + roundScores;

    // update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // check if the player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        //next player 
        nextPlayer();
    }

});

function nextPlayer() {
    //nextPlayer
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

function newGame() {
    // do something



}