// VARIABLES

var wins = 0;

var loss = 0;
 
var pLevel2;

// var pLevel = [Math.floor(Math.random() * 120 + 19)];

var aang = [Math.floor(Math.random() * 12 + 1)];

var zuko = [Math.floor(Math.random() * 12 + 1)];

var katara = [Math.floor(Math.random() * 12 + 1)];

var sokka = [Math.floor(Math.random() * 12 + 1)];


start();


//functions
function reset(){
var pLevel1 = [Math.floor(Math.random() * 120 + 19)];
var aang = [Math.floor(Math.random() * 12 + 1)];
var zuko = [Math.floor(Math.random() * 12 + 1)];
var katara = [Math.floor(Math.random() * 12 + 1)];
var sokka = [Math.floor(Math.random() * 12 + 1)];
pLevel2 = 0;


$(".box1").html(pLevel1);
$(".box2").html(pLevel2);
start();
}

function start(){
var pLevel1 = [Math.floor(Math.random() * 120 + 19)];
var aang = [Math.floor(Math.random() * 12 + 1)];
var zuko = [Math.floor(Math.random() * 12 + 1)];
var katara = [Math.floor(Math.random() * 12 + 1)];
var sokka = [Math.floor(Math.random() * 12 + 1)];
pLevel2 = 0;

$(".box1").html(pLevel1);
$(".box2").html(pLevel2);









// value
$("#aang").attr("value", aang);
$("#zuko").attr("value", zuko);
$("#katara").attr("value", katara);
$("#sokka").attr("value", sokka);


//logic 

if (pLevel2 === pLevel1) {
		alert('ya took away his bending');
		wins++;
		$("#wins1").html(win);

		reset();
}

else if (pLevel2 > pLevel1) {
	alert("ya killed ozai boo");
	loss++;
	$("#loss1").html(loss);
	reset();
}
}









