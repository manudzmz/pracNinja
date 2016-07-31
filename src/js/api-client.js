var $ = require('jquery');

module.exports = {
	
	save: function(commentary, successCallback, errorCallback) {

		var formData = new FormData();
		formData.append("name", commentary.name);
        formData.append("lastName", commentary.lastName);
        formData.append("email", commentary.email);
        formData.append("text", commentary.text);

		$.ajax({
			url: '/api/comments/',
			method: 'post',
			data: formData,
			//data: commentary,
			processData: false,
			contentType: false,
			success: successCallback,
			error: errorCallback
		});
	},

	// Posible delete para el futuro
	// delete: function(, successCallback, errorCallback) {
	// 	$.ajax({
    //      url: ,
	// 		method: 'delete',
	// 		success: successCallback,
	// 		error: errorCallback
	// 	});
	// },

	list: function(successCallback, errorCallback) {
		$.ajax({
			url: '/api/comments/',
			method: 'get',
			success: successCallback,
			error: errorCallback
		});
	}
};