var randomDiceNumberOne=Math.floor(Math.random()*6)+1;
var randomDiceNumberTwo=Math.floor(Math.random()*6)+1;
function diceRollOne(){if(randomDiceNumberOne==1){document.querySelector(".img1").setAttribute("src","images/dice1.png");}
else if(randomDiceNumberOne==2){document.querySelector(".img1").setAttribute("src","images/dice2.png");}
else if(randomDiceNumberOne==3){document.querySelector(".img1").setAttribute("src","images/dice3.png");}
else if(randomDiceNumberOne==4){document.querySelector(".img1").setAttribute("src","images/dice4.png");}
else if(randomDiceNumberOne==5){document.querySelector(".img1").setAttribute("src","images/dice5.png");}
else if(randomDiceNumberOne==6){document.querySelector('.img1').setAttribute("src","images/dice6.png");}

}

function diceRollTwo(){if(randomDiceNumberTwo==1){document.querySelector(".img2").setAttribute("src","images/dice1.png");}
else if(randomDiceNumberTwo==2){document.querySelector(".img2").setAttribute("src","images/dice2.png");}
else if(randomDiceNumberTwo==3){document.querySelector(".img2").setAttribute("src","images/dice3.png");}
else if(randomDiceNumberTwo==4){document.querySelector(".img2").setAttribute("src","images/dice4.png");}
else if(randomDiceNumberTwo==5){document.querySelector(".img2").setAttribute("src","images/dice5.png");}
else if(randomDiceNumberTwo==6){document.querySelector('.img2').setAttribute("src","images/dice6.png");}

}
if(randomDiceNumberOne>randomDiceNumberTwo){document.querySelector("h1").innerHTML="Player One Won";}
else if(randomDiceNumberTwo>randomDiceNumberOne){document.querySelector("h1").innerHTML="Player Two Won";}
