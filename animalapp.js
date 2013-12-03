var num = Math.round(Math.random()*5)
var colour = ['CAT', 'OWL', 'PENGUIN', 'DOG', 'MOUSE', 'FISH'];
var n = document.getElementById("collist");
var yoshi = document.getElementById("timeselect");
n.innerHTML = colour[num]
yoshi.style.background = colour[num]

var anscolour = ["#008000", "#FF0000", "#0000FF", "#000000", "#FFA500", "#990066"];
var coloursquares = ["0", "1", "2", "3", "4", "5"];
var colourrev = ["5", "4", "3", "2", "1", "0"];
var a1 = document.getElementById(coloursquares[0]);
var a2 = document.getElementById(coloursquares[1]);
var a3 = document.getElementById(coloursquares[2]);
var a4 = document.getElementById(coloursquares[3]);
var a5 = document.getElementById(coloursquares[4]);
var a6 = document.getElementById(coloursquares[5]);

var ctx1 = a1.getContext("2d");
var ctx2 = a2.getContext("2d");
var ctx3 = a3.getContext("2d");
var ctx4 = a4.getContext("2d");
var ctx5 = a5.getContext("2d");
var ctx6 = a6.getContext("2d");

var img=document.getElementById("cat");
ctx1.drawImage(img,10,10);

var img=document.getElementById("owl");
ctx2.drawImage(img,10,10);

var img=document.getElementById("penguin");
ctx3.drawImage(img,10,10);

var img=document.getElementById("dog");
ctx4.drawImage(img,10,10);

var img=document.getElementById("mouse");
ctx5.drawImage(img,10,10);

var img=document.getElementById("fish");
ctx6.drawImage(img,10,10);


d=0
function canfunc(colour)
{
var nume = Math.floor(Math.random()*6)
var numr = Math.floor(Math.random()*6)
var coloure = ['CAT', 'OWL', 'PENGUIN', 'DOG', 'MOUSE', 'FISH'];
var y = document.getElementById("collist");
var mar = document.getElementById("timeselect");
var navbar = document.getElementById("navbar");
var lui = document.getElementById("txt");
var toad = document.getElementById("bowser");
raise()

d=d+1
var t = document.getElementById("total");
var x = document.getElementById("colselect");
x.innerHTML = colour;
t.innerHTML = d;
if (x.innerHTML == n.innerHTML)
	{
	y.innerHTML = coloure[nume]
	mar.style.visibility = 'hidden'	
	gametimer()
	countdown()
	}
else
	{
	scorefunc()
	stopCount()	
	location.reload()	
	}
}
var c=0;
var t;
var timer_is_on=0;

function timedCount()
{
document.getElementById('txt').value=c;
c=c+1;
t=setTimeout(function(){timedCount()},1000);
}

function gametimer()
{
if (!timer_is_on)
  {
  timer_is_on=1;
  timedCount();
  }
}
function stopCount()
{
clearTimeout(t);
timer_is_on=0;
}

function countdown()
{
setTimeout(function(){alert("Game Over\nYour time score is:" + d),location.reload()},time[h]);
}

var time = ["31000", "21000", "11000"];
function raise()
{
var index = document.getElementById("timeselect");
h = (index.selectedIndex);
}

function scorefunc()
{
var m;

var name = alert("Game Over\nYour time score is:" + d);
location.reload()
}
