var longitude, latitude;

//Check for Geoloaction support 

if (navigator.geolocation) {

	//Return the user's longitude and latitude on page load using HTML5 geolocation API

	window.onload = function () {
	var currentPosition;
	function getCurrentLocation (position) {
		currentPosition = position;
		document.getElementById("longitude").innerHTML = currentPosition.coords.longitude;
		document.getElementById("latitude").innerHTML = currentPosition.coords.latitude;
		latitude = currentPosition.coords.latitude;
		longitude = currentPosition.coords.longitude;

		//AJAX request

		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=188b68e6b443a5380ce7ee0f0bb49cfc", function (data) {
			$("#message").html(JSON.stringify(data));
			var parsed = $.parseJSON(data);
			console.log(parsed[0]);
		});
	}

	navigator.geolocation.getCurrentPosition(getCurrentLocation);
	

	};
}

//If Geolocation is not supported by the browser, alert the user

else { 
	alert("Geolocation is not supported by your browser");
}

