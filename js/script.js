$('#tituloClickeable').click(function(){
	console.log('hola');
	$('#contenedor').append("una cosa<br>");
	$('#contenedor').prepend("cosa al principio<br>");
	$('#tituloClickeable').css('color', 'red');
});

$('#tituloClickeable1').click(function(){
	$('#tituloClickeable1').css('color', 'blue');
	$('li').css('color', 'blue');

});


