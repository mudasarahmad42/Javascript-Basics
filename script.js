//declaring a array
var arr = [];

function funClose()
{
	close();
}

function funRefresh()
{
	location.reload();
}

//Taking Limit of Generated Number
do{
var maxValue = parseInt(prompt("Enter the limit of random numbers\nfrom 1 to - ?"));
//console.log(maxValue);
}while(isNaN(maxValue))

//Taking limit of maximum numbers be generated
do{
var maxLimit = parseInt(prompt("Enter the limit of numbers generated"));
}while(isNaN(maxLimit))


//for loop to generate numbers

for(var i = 0; i < maxLimit; i++)
{
	var ranNum = Math.ceil(Math.random() * maxValue);
	console.log(ranNum);
    arr.push(ranNum);
}
//console.log(arr);

do{
var guess = parseInt(prompt("Guess if your number is on numbers generated"));
}while(isNaN(guess))



if(arr.indexOf(guess) === -1)
{
	document.write("<p class='loss'>You loss!!!</p>");
	document.write("<button onclick = funClose() class = 'okay'>Close</button>");
	document.write("<button onclick = funRefresh() class = 'refresh'>Refresh</button>");
}
else
{
	document.write("<p class=won>You won!!!</p>")
	document.write("<button onclick = funClose() class = 'okay'>Okay</button>");
	document.write("<button onclick = funRefresh() class = 'refresh'>Refresh</button>");
}