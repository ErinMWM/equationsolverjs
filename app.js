//a*a + b*b = c*c

var squared = function(x, y){
	console.log(Math.sqrt((x*x) + (y*y)));
};



var squared = function (z, x){
	console.log(Math.sqrt((z*z) - (x*x)));
};



var ask = prompt("Do you have the hypotenuse or a side?")

if(ask = "side"){
	var squared = function (z, x){
	console.log(Math.sqrt((z*z) - (x*x)));
}} else { 
	var squared = function(x, y){
	console.log(Math.sqrt((x*x) + (y*y)));
}};

squared(5, 3)
squared(2, 4);


function area(length, height){ length * height }