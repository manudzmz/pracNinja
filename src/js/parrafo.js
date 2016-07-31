var $ = require("jquery");
var dotdotdot = require("dotdotdot");

$(document).ready(function() {
	$(".previa").dotdotdot({
		// watch: "window",
		// /*	The text to add as ellipsis. */
		// ellipsis	: '... ',
 
		// 	How to cut off the text/html: 'word'/'letter'/'children' 
		// wrap		: 'word',
	});
});



$(".like-icon").on('click', function(){
	if ($(this).attr("src") != "src/img/like-50-f.png") {
		//var fav = $(this).parents("article").data("id");
		//likes.push(fav);
		$(this).attr("src", "src/img/like-50-f.png");	
	}
});