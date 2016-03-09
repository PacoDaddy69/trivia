$(document).ready(function()	{
	
	$('.a').on('click', function()	{
		
		$('.answer').text('Chillary Clinton');
		
		$('.answer').addClass('incorrect');
		
		$('.right').text('INCORRECT');
		
	});
	
	$('.b').on('click', function()	{
		
		$('.answer').text('Donald "The Hair" Trump');
		
		$('.answer').addClass('correct');
		
		$('.right').text('CORRECT');
		
		$('.question').append('<button>Go On</button>');
		
	});
	
	$('.c').on('click', function()	{
		
		$('.answer').text('Michael Jackson');
		
		$('.answer').addClass('incorrect');
		
		$('.right').text('INCORRECT');
		
	});
	
	$('.d').on('click', function()	{
		
		$('.answer').text('Pepe Le Frog');
		
		$('.answer').addClass('incorrect');
		
		$('.right').text('INCORRECT');
		
	});
	
});