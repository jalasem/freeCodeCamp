window.onload = function () {

	var twitchStreamers = ["freecodecamp", "faceittv", "comster404", "brunofin", "castro_1021", "lpmassive", "imaqtpie", "bluestacksinc", "savjz", "jacksofamerica", "morganfreemin804" ];

	for (var i = 0; i < twitchStreamers.length; i++) {
		ajax();
	}

		function ajax () {
			$.ajax({
				url: "https://api.twitch.tv/kraken/streams/" + twitchStreamers[i] + "?callback=?",
				dataType: "jsonp",
				data: {
					format: "json"
				},

				success: function (data) {

					if (data.stream === null) {
						console.log(data);
						console.log(twitchStreamers[i] + " is currently offline");
					}

					else if (data.status == 422) {
						console.log(data);
						console.log(data.message);
					}

					else {
						console.log(data.stream.channel.display_name + " is currently streaming " + data.stream.game);
					}
				},

				error: function () {
					console.log("unable to access json");
				}
			});
		}

};