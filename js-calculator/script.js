$(document).ready(function () {
	
	//Global variables
	
	var operation = [];
	var joined;
	var sum;

	//Regular Buttons

	$(".calc-btn").click(function () {
		operation.push($(this).text());
		console.log(operation);
	});



	//Clear and Equals

	$(".calc-btn").click(function(event) {
		/* Act on the event */
		joined = operation.join("");
		console.log(joined);
		$(".output").html("<p>" + joined + "</p>");
	});	

	$("#btn-equals").click(function () {

		var answer;

		try {
			answer = eval(joined);
			$(".output").empty().html("<p>" + answer + "</p>");
			$(".history").append("<p>" + joined  + "<span>" + " = "  + answer + "</span>" + "</p>");
			console.log(answer);
			operation = [answer];
		}

		catch (e) {
			answer = "Error";
			$(".output").html(answer);
			operation = [];
		}

	});

	$("#btn-clear").click(function () {
		$(".output").empty();
		operation = [];
	});


});