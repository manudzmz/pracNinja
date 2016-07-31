var $ = require('jquery');
commentListManager = require("./comment-list-manager");

// cargamos los comentarios cuando sean visibles en pantalla

var comentarios = $(".comments-list");
var cargado = false;


function isOnScreen(element) {
  var elementOffsetTop = element.offset().top;
  var elementHeight = element.height();

  var screenScrollTop = $(window).scrollTop();
  var screenHeight = $(window).height();

  var scrollIsAboveElement = elementOffsetTop + elementHeight - screenScrollTop >= 0;
  var elementIsVisibleOnScreen = screenScrollTop + screenHeight - elementOffsetTop >= 0;

  return scrollIsAboveElement && elementIsVisibleOnScreen;
}


// if (!localStorage.likes) {   // si es la primera vez y aun no existe la variable, la creamos
//   var likeList = [];
//   localStorage.setItem("likes", JSON.stringify(likeList));
// } else {   // recuperamos los datos almacenados y marcamos los me gusta que tenemos guardados
//   var storedFavs = JSON.parse(localStorage.getItem("likes"));
//   for (var i in storedFavs) {
//     var index = storedFavs[i] - 1;
//     $(('.like-icon')[index]).attr("src", "src/img/like-50-f.png");  
//     //$('.like-icon').parents("article").data("id")
//   }
// }

//localStorage.clear();

$(window).on('scroll', function(){
  if (isOnScreen(comentarios) && !cargado) {
    $(".comment-zone-title").text('CARGANDO COMENTARIOS...');
  	commentListManager.load();
  	cargado = true;
  }
});