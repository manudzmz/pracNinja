var $ = require("jquery");

var avatars = $(".author-img");
console.log("CONJUNTO DE IMAGENES => ", avatars);
console.log("LONGITUD => ", avatars.length);

for (var i in avatars) {
	var imgAvatar = avatars[i];
	if ($(imgAvatar).attr("src") == "") {
		$(imgAvatar).attr("src", "images/avatar.png");
	}
}
