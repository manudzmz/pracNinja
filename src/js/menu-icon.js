var $ = require("jquery");

var articulos = $(".container")[0];
var categorias = $(".nav-bar")[0];
var comentarios = $(".comments-list")[0];
var formulario = $(".comments-form")[0];
var pie = $(".footer")[0];

$(".menu").on('click', function(){
	this.classList.toggle("change");
	//$('body').toggleClass('form-shown').toggleClass('song-list-shown');
	articulos.classList.toggle("ui-element");
	categorias.classList.toggle("ui-element");
	comentarios.classList.toggle("ui-element");
	formulario.classList.toggle("ui-element");
	pie.classList.toggle("ui-element");
});