var a1 = document.getElementById(1);
var a2 = document.getElementById(2);
var a3 = document.getElementById(3);
var a4 = document.getElementById(4);
var a5 = document.getElementById(5);
var a6 = document.getElementById(6);
var a7 = document.getElementById(7);
var a8 = document.getElementById(8);
var a9 = document.getElementById(9);

var a10 = document.getElementById(10);
var a11 = document.getElementById(11);
var a12 = document.getElementById(12);
var a13 = document.getElementById(13);
var a14 = document.getElementById(14);
var a15 = document.getElementById(15);
var a16 = document.getElementById(16);
var a17 = document.getElementById(17);
var a18 = document.getElementById(18);
var a19 = document.getElementById(19);
var a20 = document.getElementById(20);

var a21 = document.getElementById(21);
var a22 = document.getElementById(22);
var a23 = document.getElementById(23);
var a24 = document.getElementById(24);
var a25 = document.getElementById(25);
var a26 = document.getElementById(26);
var a27 = document.getElementById(27);
var a28 = document.getElementById(28);
var a29 = document.getElementById(29);

var a30 = document.getElementById(30);
var a31 = document.getElementById(31);
var a32 = document.getElementById(32);
var a33 = document.getElementById(33);
var a34 = document.getElementById(34);
var a35 = document.getElementById(35);
var a36 = document.getElementById(36);
var a37 = document.getElementById(37);
var a38 = document.getElementById(38);
var a39 = document.getElementById(39);
var a40 = document.getElementById(40);
var a41 = document.getElementById(41);
var a42 = document.getElementById(42);

function flashpath()
{
setTimeout(function(){a1.style.backgroundColor="#FFFF00"; a7.style.backgroundColor="#FFFF00"; a13.style.backgroundColor="#FFFF00"; a14.style.backgroundColor="#FFFF00"; a15.style.backgroundColor="#FFFF00"; a21.style.backgroundColor="#FFFF00"; a27.style.backgroundColor="#FFFF00"; a33.style.backgroundColor="#FFFF00"; a32.style.backgroundColor="#FFFF00"; a38.style.backgroundColor="#FFFF00"},1500);

setTimeout(function(){a1.style.backgroundColor="#006B00"; a7.style.backgroundColor="#006B00"; a13.style.backgroundColor="#006B00"; a14.style.backgroundColor="#006B00"; a15.style.backgroundColor="#006B00"; a21.style.backgroundColor="#006B00"; a27.style.backgroundColor="#006B00"; a33.style.backgroundColor="#006B00"; a32.style.backgroundColor="#006B00"; a38.style.backgroundColor="#006B00"},2500);
}

function showpath(num)
{
square = num
correctpath = document.getElementById(num);
if (square == 1)
{
correctpath.style.backgroundImage="url('img/grasspath.half.top.png')";
x=7
}
else if (square == x)
{
document.getElementById(1).style.backgroundImage="url('img/grasspath.open.png')";
correctpath.style.backgroundImage="url('img/grasspath.half.top.png')";
y=13
}
else if (square == y)
{
document.getElementById(7).style.backgroundImage="url('img/grasspath.open.png')";
correctpath.style.backgroundImage="url('img/grasspath.half.top.png')";
w=14
}
else if (square == w)
{
document.getElementById(13).style.backgroundImage="url('img/grasspath.right.png')";
correctpath.style.backgroundImage="url('img/grasspath.half.left.png')";
z=15
}
else if (square == z)
{
document.getElementById(14).style.backgroundImage="url('img/grasspath.side.png')";
correctpath.style.backgroundImage="url('img/grasspath.half.left.png')";
n=21
}
else if (square == n)
{
document.getElementById(15).style.backgroundImage="url('img/grasspath.leftdown.png')";
correctpath.style.backgroundImage="url('img/grasspath.half.top.png')";
m=27
}
else if (square == m)
{
document.getElementById(21).style.backgroundImage="url('img/grasspath.open.png')";
correctpath.style.backgroundImage="url('img/grasspath.half.top.png')";
o=33
}
else if (square == o)
{
document.getElementById(27).style.backgroundImage="url('img/grasspath.open.png')";
correctpath.style.backgroundImage="url('img/grasspath.half.top.png')";
d=32
}
else if (square == d)
{
document.getElementById(33).style.backgroundImage="url('img/grasspath.left.png')";
correctpath.style.backgroundImage="url('img/grasspath.half.right.png')";
t=38
}
else if (square == t)
{
document.getElementById(32).style.backgroundImage="url('img/grasspath.rightdown.png')";
correctpath.style.backgroundImage="url('img/grasspath.half.top.png')";
alert("Well Done");
window.location.assign("maze4.html")
}
else
{
correctpath.style.backgroundColor="#A00000"
alert("Game Over");
window.location.assign("menu.html");
}
}

function gameover()
{
correctpath.style.backgroundColor="#A00000"
alert("Game Over");
window.location.assign("menu.html");
}

