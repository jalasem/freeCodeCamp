$(document).ready(function () {
	
	//Global variables
	
	var operation = [];
	var joined;
	var answer;

	//Regular Buttons and Operators

	$(".calc-btn").click(function () {
		if (operation.join("") == answer) {
			operation = [];
		}
	});

	$(".calc-btn, .operator-btn").click(function () {
		operation.push($(this).text());
		joined = operation.join("");
		$(".output").html("<p>" + joined + "</p>");
	});

	//Clear and Equals to

	$("#btn-equals").click(function () {

		try {
			answer = eval(joined).toFixed(2);
			$(".output").empty().html("<p>" + answer + "</p>");
			$(".history").append("<p>" + joined  + "<span>" + " = "  + answer + "</span>" + "</p>");
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