var $ = require("jquery");
var dotdotdot = require("dotdotdot");

$(document).ready(function() {
	$("#wrapper").dotdotdot({
		watch: "window",
		/*	The text to add as ellipsis. */
		ellipsis	: '... ',
 
		/*	How to cut off the text/html: 'word'/'letter'/'children' */
		wrap		: 'word',
	});
});