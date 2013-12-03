var num = Math.round(Math.random()*4)
var colour = ['GREEN', 'RED', 'BLUE', 'BLACK', 'ORANGE'];
var n = document.getElementById("collist");
var yoshi = document.getElementById("timeselect");
n.innerHTML = colour[num]
n.style.color = colour[num]
yoshi.style.background = colour[num]

var anscolour = ["#008000", "#FF0000", "#0000FF", "#000000", "#FFA500"];
var a1 = document.getElementById(0);
var a2 = document.getElementById(1);
var a3 = document.getElementById(2);
var a4 = document.getElementById(3);
var a5 = document.getElementById(4);

var ctx1 = a1.getContext("2d");
var ctx2 = a2.getContext("2d");
var ctx3 = a3.getContext("2d");
var ctx4 = a4.getContext("2d");
var ctx5 = a5.getContext("2d");

ctx1.fillStyle = anscolour[0];
ctx1.fillRect(0,0,200,200);
ctx2.fillStyle = anscolour[1];
ctx2.fillRect(0,0,200,200);
ctx3.fillStyle = anscolour[2];
ctx3.fillRect(0,0,200,200);
ctx4.fillStyle = anscolour[3];
ctx4.fillRect(0,0,200,200);
ctx5.fillStyle = anscolour[4];
ctx5.fillRect(0,0,200,200);

d=0
function canfunc(colour)
{
var nume = Math.floor(Math.random()*5)
var numr = Math.floor(Math.random()*5)
var coloure = ['GREEN', 'RED', 'BLUE', 'BLACK', 'ORANGE'];
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
x.style.color = colour;
t.innerHTML = d;
if (x.innerHTML == n.innerHTML)
        {
        y.innerHTML = coloure[nume]
        y.style.color = coloure[numr]
	mar.style.background = coloure[numr] 
	lui.style.background = coloure[numr]
	navbar.style.background = coloure[numr] 
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
setTimeout(function(){alert("Out Of Time!\nYour time score is:" + d),location.reload()},time[h]);
}

var time = ["30000", "20000", "10000"];
function raise()
{
var index = document.getElementById("timeselect");
h = (index.selectedIndex);
}

function scorefunc()
{
var m;
var oo=d-1;
var name = alert("Wrong Colour!\nYour time score is:" + oo);
location.reload()
}
