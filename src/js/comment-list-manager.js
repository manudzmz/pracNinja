var $ = require('jquery');
var apiClient = require('./api-client');
var utils = require('./utils.js');

module.exports = {
	load: function() {
		debugger;
		apiClient.list(function(response){
			$('.comments-div').html('');

			//if (response=null)
			for (var i in response) {
				var comment = response[i];

				// var coverUrl = song.cover_url || "";
				// if (coverUrl == "") {
				// 	coverUrl = "src/img/disc-placeholder.jpg";
				// }

				var id = comment.id || "";

				var name = comment.name || "";
				var lastName = comment.lastName || "";
				var email = comment.email || "";
				var text = comment.text || "";

				var html = '<article class="comment" data-id="' + id + '">';
				html += '<span class="comment-user">' + utils.escapeHTML(comment.name) + " " + utils.escapeHTML(comment.lastName) + '</span>';
				html += '<p class="comment-text">' + utils.escapeHTML(comment.text) + '</p>';
				html += '</article>';
				$('.comments-div').append(html);
				console.log('CARGADO', response);
			}
		}, function(response){
			console.log('ERROR', response);
		})

	},
}