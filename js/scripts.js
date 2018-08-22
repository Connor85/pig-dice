// business logic
function Pig (player, score, ){
  this.player=player;
  this.score=score;
  // roll();
  // totalScore();
  //hold();
}
var score=0;
var diceNumber = 0;
var total;


Pig.prototype.roll = function (){
  var diceNumber = Math.floor((Math.random() * 6)+1);
  //var score+=diceNumber;
  if (diceNumber===1){
    return 0;
    alert("you number is 1,");
  }
  return diceNumber;
  //alert("roll")
};
Pig.prototype.totalScore=function(thisRoll){
  diceNumber += thisRoll;
  return diceNumber;

};

//user logic

$(document).ready(function(){

  $("#player1-roll").click(function(){
    event.preventDefault();
    var player1=new Pig();
    var a=player1.roll()
    console.log(a)
    var b=player1.totalScore(a);
    $("#player1-dice-number").text(a);

    $("#player1-total-score").text(b);
  //  $("#player1-total-score").text(totalScore(roll()));



  });

});
