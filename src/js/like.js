// $(".like-icon").on('click', function(){
// 	debugger;
// 	if ($(this).attr("src") != "src/img/like-50-f.png") {
// 		//var fav = $(this).parents("article").data("id");
// 		//likes.push(fav);
// 		$(this).attr("src", "src/img/like-50-f.png");
// 		var storedLikes = JSON.parse(localStorage.getItem("likes"));  // recuperamos los likes almacenados
// 		storedLikes.push($(this).parents("article").data("id"));      // metemos el nuevo
// 		localStorage.setItem("likes", JSON.stringify(storedLikes));   // guardamos la variable actualizada
// 	}
// });

$(document).ready(function(){
	for (var i = 0; i < localStorage.length; i++) {
		var clave = localStorage.key(i);
		console.log("CLAVE => ", clave);
		var prueba = '.articulo[data-id="' + clave + '"] .like-icon';
		console.log("ELEMENTO => ", $(prueba));
		console.log("HOLA");
		$(prueba).attr("src", "src/img/like-50-f.png");
		console.log("ADIOS");
	}
});


$(".like-icon").on('click', function(){
	var parent = $(this).parent();
	//$(parent).html("");
	//var html = '<img class="like-icon" src="src/img/like-50-f.png" alt="Me gusta">';
	//$(this).attr("src", "src/img/like-50-f.png");
	//$(parent).append(html);
	console.log("ID DE ARTICULO => ", $(this).parents("article").data("id"));
	articleId = $(this).parents("article").data("id");
	console.log("VALOR DE THIS=> ", this);
	// si el id existe en el local storage no hacemos nada, si existe lo guardamos
	var encontrado = false;
	for (var i = 0; i < localStorage.length; i++) {
		storedId = JSON.parse(localStorage.key(i));
		if (storedId == articleId) {
			encontrado = true;
		}
	}
	if (encontrado == false) {
		localStorage.setItem(JSON.stringify(articleId), JSON.stringify(articleId));
		$(this).attr("src", "src/img/like-50-f.png");
		console.log("localStorage", localStorage.getItem(JSON.stringify(articleId)));
	}
});