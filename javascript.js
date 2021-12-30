var randomNum = Math.ceil(Math.random() * 10);
console.log(randomNum);
var chances = 5;


do
{
	var guess = parseInt(prompt("Guess the number between 1-10 " + chances + " Chances Left"));
   
   if(randomNum === guess)
   {
   	break;
   }
   chances--;
}
while(chances !== 0);


if(randomNum !== guess)
{
	document.write("<p class=loss> You Lost </p>")
}
else
{
	document.write("<p class=won> You Won </p>")	
}
