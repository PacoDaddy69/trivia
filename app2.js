$(document).ready(function()	{
	
	var a = $('.a').text();
	
	var b = $('.b').text();
	
	var c = $('.c').text();
	
	var d = $('.d').text();
	
	$('.a').on('click', function()	{
		
		$('.answer').text(a);
		
		$('.answer').addClass('red');
		
		$('.right').text('INCORRECT!');
		
	});
	
	$('.b').on('click', function()	{
		
		$('.answer').text(b);
		
		$('.answer').addClass('red');
		
		$('.right').text('INCORRECT!');
		
	});
	
	$('.c').on('click', function()	{
		
		$('.answer').text(c);
		
		$('.answer').addClass('red');
		
		$('.right').text('INCORRECT!');
		
	});
	
	$('.d').on('click', function()	{
		
		$('.answer').text(d);
		
		$('.answer').addClass('green');
		
		$('.right').text('CORRECT!');
		
		$('button').remove();
		
		$('.question').append('<a href="q3.html"><button>GO ON</button></a>');
		
	});
	
});