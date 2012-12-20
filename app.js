//a*a + b*b = c*c

$(document).ready(function(){

	alert('ready');

	function area(length, height){ length * height };

	$('#pythagoreanForm').submit(function(e){

		e.preventDefault();

		a = $('#sidea').val();
		b = $('#sideb').val();
		c = $('#hypotenuse').val();


		if(a && b){
			var squared = function (){
			console.log(Math.sqrt((a*a) + (x*x)));
		}} else if (a && c) { 
			var squared = function(){
			console.log(Math.sqrt((x*x) + (y*y)));
		}} else 
		;
  

		$('#pythagAnswer').text(pythagAnswer);

	});



});