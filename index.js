// Dice Game
var playerOne = Math.floor(Math.random()*5) + 1;
var playerOneImage = "./images/dice"+playerOne+".png";
document.querySelectorAll('img')[0].setAttribute('src',playerOneImage)

var playerTwo = Math.floor(Math.random()*5) + 1;
var playerTwoImage = "./images/dice"+playerTwo+".png";
document.querySelectorAll('img')[1].setAttribute('src',playerTwoImage)

if(playerOne>playerTwo){
    document.querySelectorAll('h1')[0].innerHTML="Player 1 Won"
}
else if(playerOne<playerTwo){
     document.querySelectorAll('h1')[0].innerHTML="Player 2 Won"

}
else{
    document.querySelectorAll('h1')[0].innerHTML="Tie"

}

