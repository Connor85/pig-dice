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
var total=0;


Pig.prototype.roll = function (){
  var diceNumber = Math.floor((Math.random() * 6)+1);
  //var score+=diceNumber;
  if (diceNumber===1){
//alert("you number is 1,");
  return  diceNumber=0;
  }
  return diceNumber;
  //alert("roll")
};


Pig.prototype.totalScore=function(thisRoll){
  total += thisRoll;
  return total;

};

Pig.prototype.hold=function(){


};


//user logic

$(document).ready(function(){

  $("#player1-roll").click(function(){
    event.preventDefault();
    var player1=new Pig();
    var a=player1.roll()
    if(a===0){
      $("#player1-roll").css('display:1');
    }
    console.log(a)
    var b=player1.totalScore(a);
    console.log(b)
    $("#player1-dice-number").text(a);

    $("#player1-total-score").text(b);
  //  $("#player1-total-score").text(totalScore(roll()));



  });
  $("#player1-hold").click(function(){
    event.preventDefault();
    document.getElementById("player1-roll").disabled = true;
    document.getElementById("player2-roll").disabled = false;
  //  alert("Player2 s round")

    //$("#player1-total-score").text(b);



});


$("#player2-roll").click(function(){
  event.preventDefault();
  var player2=new Pig();
  var a=player2.roll()
  if(a===0){
    $("#player2-roll").css('display:1');
  }
  console.log(a)
  var b=player2.totalScore(a);
  console.log(b)
  $("#player2-dice-number").text(a);

  $("#player2-total-score").text(b);
//  $("#player1-total-score").text(totalScore(roll()));



});
$("#player2-hold").click(function(){
  event.preventDefault();
  document.getElementById("player2-roll").disabled = true;
  document.getElementById("player1-roll").disabled = false;

//  alert("Player2 s round")

  //$("#player1-total-score").text(b);



});













});
