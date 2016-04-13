window.onload = function () {
	var username, url, picture;
	var twitchStreamers = ["dreamhackcs", "skyzhar", "freecodecamp", "faceittv", "comster404", "brunofin", "terakilobyte", "robotcaleb", "sheevergaming", "esl_sc2", "ogamingsc2", "jacksofamerica"];

	for (var i = 0; i < twitchStreamers.length; i++) {
		ajax();
	}

	function appendDiv (section) {
		$(section).append('<div class="twitch"><div class="row"><div class="one-third column"><div class="image-holder"></div></div><div class="two-thirds column"><span>' + username + '</span></div></div></div>');
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
					url = data._links.channel.substr(38);
					console.log(data);
					username = "Channel " + "'<a href='https://twitchtv.com/" + url + "'>" + url+ "</a>'" + " is currently offline"; //https://api.twitch.tv/kraken/channels/
					appendDiv(".offline");
				}

				else if (data.status == 422) {
					username = data.message;
					console.log(data);
					console.log(data.message);
					appendDiv(".unavailable");
				}

				else {
					console.log(data);
					picture = 'url(' + data.stream.channel.logo + ')';
					$(".online .image-holder").css('background', picture);
					url = data._links.channel.substr(38);
					username = "<a href='https://twitchtv.com/" + url + "'>" + data.stream.channel.display_name + "</a>" + " is currently streaming " + data.stream.game;
					console.log(username);
					appendDiv(".online");
				}
			},

			error: function () {
				console.log("unable to access json");
			}
		});
	}

	$(".online-users").click(function () {
		$(".online").removeClass('hidden');
		$(".offline, .unavailable").addClass('hidden');
	});

	$(".offline-users").click(function () {
		$(".offline, .unavailable").removeClass('hidden');
		$(".online").addClass('hidden');
	});

	$(".all-users").click(function () {
		$(".online, .offline, .unavailable").removeClass('hidden');	
	});

};