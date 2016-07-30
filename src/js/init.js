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


$(window).on('scroll', function(){
	if (isOnScreen(comentarios) && !cargado) {
		$(".comment-zone-title").text('CARGANDO COMENTARIOS...');
		commentListManager.load();
		cargado = true;
	}
});