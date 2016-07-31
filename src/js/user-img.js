var $ = require("jquery");

var avatars = $(".author-img");
for (var i in avatars) {
	var imgAvatar = avatars[i];
	if ($(imgAvatar).attr("src") == "") {
		$(imgAvatar).attr("src", "images/avatar.png");
	}
}
