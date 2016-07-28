var $ = require('jquery');
var apiClient = require('./api-client');
var commentListManager = require('./comment-list-manager');

var newCommmentButton = $('.comments-form button');
var inputs = $(".comments-form input, .comments-form textarea");

function setLoading() {
	debugger;
	$(inputs).attr("disabled", true);
	newCommmentButton.text("Enviando comentario...").attr("disabled", true);
}

function unsetLoading() {
	$(inputs).attr("disabled", false);
	newCommmentButton.text("Enviar comentario").attr("disabled", false);
}


 // $('#comment').on('change', function(){
// 	var wordLen = 120;
// 	var len = this.value.split(/[\s]+/); 
//     if(len.length > wordLen){
//     	avisoPalabras.style.display = 'block';
//     } else {
//     	avisoPalabras.style.display = 'none';
//     }
// });

// Al enviar formulario enviamos peticion AJAX para almacenar la cancion
$('.comments-form').on('submit', function(){
	//	Validacion de inputs
	var inputs = $("input");
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];
		if (input.checkValidity() == false){
			alert(input.validationMessage);
			input.focus();
			return false;
		}
	}
	
	// comentario que quiero guardar
	var commentary = {
		name: $('#name').val(),
		lastName: $('#apellidos').val(),
		email: $('#mail').val(),
		text: $('#comment').val()
	};

	setLoading(); // deshabilito el formulario
	debugger;
	apiClient.save(commentary, function(response){
		$("form")[0].reset();  // borramos los campos del formulario
		$("#name").focus();  // pongo el foco en el campo artist
		commentListManager.load();
		unsetLoading();
	}, function(response){
		console.error('ERROR', response);
		unsetLoading();
	});

	return false;  // e.preventDefault();
});