window.onload = function() {
    document.getElementById("wiki-search-input").focus();
};

$(".wiki-search-input").keypress(function() {
	var key = $(".wiki-search-input").val();
	$(".result-wiki-search-form-input").val(key);
	$(".home").addClass('hidden');
	$(".result").removeClass('hidden');
	document.getElementById("wiki-search-input").blur();
	document.getElementById("result-wiki-search-form-input").focus();	
	$(".wiki-search-input").val("");
});

$(".btn-wiki").click(function(event) {
	event.preventDefault();
	document.getElementById("result-wiki-search-form-input").blur();	
	var keyword = $(".result-wiki-search-form-input").val();
	$(".display-results").html("");

	$.ajax({ //AJAX request
		url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&prop=info&inprop=url&utf8=&format=json",
		dataType: "jsonp",
		data: {
			format: "json"
		},
		success: function(response) {
			console.log(response);
			console.log(response.query.search[0].title);
			console.log(response.query.search[0].snippet);
			showResults(response);
		},
		error: function () {
			alert("Error retrieving search results, please refresh the page");
		}
	});

});

function showResults (callback) {

	for (var i = 0; i <= 9; i++) {
	$(".display-results").append("<div class='result-list result-" + i + "'>" + "<span class='result-title title-" + i + "'></span>" + "<br>" +"<span class='result-snippet snippet-" + i + "'></span>" + "<br>" + "<span class='result-metadata metadata-" + i + "'></span>" + "</div>" );
	}

	for (var m = 0; m <= 9; m++) {
		var title = callback.query.search[m].title;
		title = title.replace(/ /g, "_");
		var timestamp = callback.query.search[m].timestamp;
		timestamp = new Date(timestamp);
		//"Wed Aug 27 2014 00:27:15 GMT+0100 (WAT)";
		console.log(timestamp);
		$(".title-" + m).html("<a href='https://en.wikipedia.org/wiki/" + title + "' target='_blank'>" + callback.query.search[m].title + "</a>");
		$(".snippet-" + m).html(callback.query.search[m].snippet);
		$(".metadata-" + m).html((callback.query.search[m].size/1000).toFixed(0) + "kb (" + callback.query.search[m].wordcount + " words) - " + timestamp);
	}
	
}