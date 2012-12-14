//a*a + b*b = c*c

var squared = function(x, y){
	console.log(Math.sqrt((x*x) + (y*y)));
};

//you can't declare the same function twice in JavaScript, unfortunately.
//I'd suggest combining the two into one function that takes an argument telling it which sides you have
var squared = function (z, x){
	console.log(Math.sqrt((z*z) - (x*x)));
};

function area(length, height) {
	//length * height;
	// ^^^ that will calculate the value, but not do anything with it.
	//you want to return the value or print it out
	//in the case of printing it out, you'd say:
	console.log(length * height);
}

//This will only work with JQuery
//Runs when the page loads
$(document).ready(function() {

	var ask = prompt("Do you have the hypotenuse or a side?")
	
	//You need 3 equals-s when you want to co mpare values instead of assigning values
	if(ask === "side"){
		//var squared = function (z, x){
		//console.log(Math.sqrt((z*z) - (x*x)));
		
		//instead of this, you want to call the function with the values you need
		//this will not work, because x and z are not defined - where do you want to get the values from?
		squared(z,x);
	}} else { 
		//var squared = function(x, y){
		//console.log(Math.sqrt((x*x) + (y*y)));
		squared(x,y);
	}};
	
	//is this just to test the function?
	squared(5, 3)
	squared(2, 4);

});
