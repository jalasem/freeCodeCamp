$(document).ready(function () {
	
	//Global variables
	
	var operation = [];
	var joined;
	var sum;

	//Regular Buttons

	$(".calc-btn").click(function () {
		operation.push($(this).text());
		console.log(operation);
		joined = operation.join("");
		console.log(joined);
		$(".output").html("<p>" + joined + "</p>");
	});

	//Clear and Equal to

	$("#btn-equals").click(function () {

		var answer;

		try {
			answer = eval(joined).toFixed(2);
			$(".output").empty().html("<p>" + answer + "</p>");
			$(".history").append("<p>" + joined  + "<span>" + " = "  + answer + "</span>" + "</p>");
			console.log(answer);
			operation = [answer];
		}

		catch (e) { //Catching Errors
			answer = "Syntax Error";
			$(".output").html(answer);
			operation = [];
		}

	});

	$("#btn-clear").click(
		function () {
		$(".output").empty();
		operation = [];
	});


});