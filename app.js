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
		
		$('.answer').addClass('green');
		
		$('.right').text('CORRECT!');
		
		$('button').remove();
		
		$('.question').append('<a href="q2.html"><button>GO ON</button></a>');
		
	});
	
	$('.c').on('click', function()	{
		
		$('.answer').text(c);
		
		$('.answer').addClass('red');
		
		$('.right').text('INCORRECT!');
		
	});
	
	$('.d').on('click', function()	{
		
		$('.answer').text(d);
		
		$('.answer').addClass('red');
		
		$('.right').text('INCORRECT!');
		
	});
	
});