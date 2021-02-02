/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

 scores = [0, 0];
 roundScore = 0; 
 activePlayer = 0;

document.querySelector('.dice').style.display = 'none'; // hides the dice

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function(){
 
      //1.Random number  
       var dice = Math.floor(Math.random() * 6) + 1; //In here we made the dice roll numbers 1 - 6 with math parts

      //2.Display the result
         var diceDOM = document.querySelector('.dice');  // we declared a dice dome by selecting the dice button inside html
          diceDOM.style.display = 'block';
          diceDOM.src = 'dice-' + dice + '.png'  // here we  displayed it as a block,after that we added each picture for the number 1-6
           document.querySelector('#current-' + activePlayer).textContent  = roundScore;
      //3.Update the round score ONLY IF the rolled number was not a 1
      if (dice !== 1) {
          //add score
          roundScore += dice; // keeps adding the rolls
      } else {
         //next player
         nextPlayer();
      }
});
  
    document.querySelector('.btn-hold').addEventListener('click', function() {
         //add the CURRENT score to the GLOBAL score
           scores[activePlayer] += roundScore;
           // scores[activePlayer] = scores[activePlayer] + roundScore; We select the active player with his current score and add round score on top of it.
         // Update the UI
         document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

         // Chek if player won the game
         if (scores[activePlayer] >= 100) {
             document.querySelector('#name-' + activePlayer).textContent = 'Winner';
             document.querySelector('.dice').style.display = 'none';
             document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
              document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         } else {
              //next player
             nextPlayer();
            
         }
    });


   function nextPlayer(){
          activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
          roundScore = 0; // in here we made it if it hits one it switches to next player

          document.getElementById('current-0').textContent = '0';
          document.getElementById('current-1').textContent = '0'; // we displayed the score to 0 after u rool 1
         
         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');  // it removes a class 

         //document.querySelector('.player-0-panel').classList.remove('active');
         //document.querySelector('.player-1-panel').classList.add('active');  // it removes a class from a classlist and added it to a new one

         document.querySelector('.dice').style.display = 'none';
   }



















 //document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-0' + activePlayer).innerHTML = '<em>' + dice + '</em>';
 /*var x = document.querySelector('#score-0').textContent;
 console.log(x); //used to read a score and store it in x value
document.querySelector('.dice').style.display = 'none';*/
/*fucntion btn(){
    //do somthing here
}   // just a function cann cann be called back by a event lisener and its good if we need to re use it if not we cann just make a normal function inside the lisetener and it will execute it there its called anonymouse but it aint re usable
btn();*/