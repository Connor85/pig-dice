// business logic
function Pig (player, score){
  this.player=player;
  this.score=score;
  this.turn = false;
}

Pig.prototype.roll = function (){
  var diceNumber = Math.floor((Math.random() * 6)+1);
  //var score+=diceNumber;
  if (diceNumber===1){
    return 0;
  }
  return diceNumber;
};

function roundScoreAdd(score, diceNumber){
  return score+=diceNumber;
};

Pig.prototype.hold = function (roundScore) {
  this.score += roundScore;
  return 0;
};

//user logic

$(document).ready(function(){
  var player1=new Pig("p1", 0);
  var player2=new Pig("p2", 0);
  var roundScore = 0;
  var playerTurn = "1";
//player1 dice
  $("#player1-roll").click(function(){
    event.preventDefault();

    var diceRoll=player1.roll();

    if(diceRoll===1){
      document.getElementById("player1-roll").disabled = true;
      document.getElementById("player2-roll").disabled = false;
    }
    roundScore = roundScoreAdd(roundScore, diceRoll);
    console.log(roundScore);

  //  player1.win();
    $("#player1-dice-number").text(diceRoll);
    $("#player1-round-score").text(roundScore);

  });
  $("#player1-hold").click(function(){
    roundScore = player1.hold(roundScore);
    console.log(player1.score);
    $("#player1-total-score").text(player1.score);
    document.getElementById("player1-roll").disabled = true;
    document.getElementById("player2-roll").disabled = false;
    event.preventDefault();
});

// player 2
$("#player2-roll").click(function(){
  event.preventDefault();

  var diceRoll=player2.roll();

  if(diceRoll===1){
    document.getElementById("player2-roll").disabled = true;
    document.getElementById("player1-roll").disabled = false;
  }
  roundScore = roundScoreAdd(roundScore, diceRoll);

//  player1.win();
  $("#player2-dice-number").text(diceRoll);
  $("#player2-round-score").text(roundScore);
  if (player1.score >= 100){
    $("#player1Wins").show();
  } else if (player2.score>= 100){
    $("#player2Wins").show();
  }
});
$("#player2-hold").click(function(){
  roundScore = player2.hold(roundScore);
  console.log(player2.score);
  $("#player2-total-score").text(player2.score);
  document.getElementById("player2-roll").disabled = true;
  document.getElementById("player1-roll").disabled = false;
  event.preventDefault();
});


});
