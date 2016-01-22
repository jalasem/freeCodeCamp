$(document).ready(function () {
	
	var operation = [];
	var joined;
	var sum;

	$("#btn-seven").click(function () {
		operation.push(7);		
	});

	$("#btn-eight").click(function () {
		operation.push(8);		
	});

	$("#btn-nine").click(function () {
		operation.push(9);		
	});

	$("#btn-divide").click(function () {
		operation.push("\/");	
	});

	//Second Row

	$("#btn-four").click(function () {
		operation.push(4);		
	});

	$("#btn-five").click(function () {
		operation.push(5);		
	});

	$("#btn-six").click(function () {
		operation.push(6);		
	});

	$("#btn-multiply").click(function () {
		operation.push("\*");		
	});

	$("#btn-bracket-open").click(function () {
		operation.push("\(");	
	});

	$("#btn-bracket-close").click(function () {
		operation.push("\)");		
	});

	//Third Row

	$("#btn-one").click(function () {
		operation.push(1);		
	});

	$("#btn-two").click(function () {
		operation.push(2);		
	});

	$("#btn-three").click(function () {
		operation.push(3);		
	});

	$("#btn-minus").click(function () {
		operation.push("\-");	
	});

	$("#btn-sqr").click(function () {
		operation.push("");		
	});

	$("#btn-sqrt").click(function () {
		operation.push("");		
	});

	$("#btn-zero").click(function () {
		operation.push(0);		
	});

	$("#btn-dot").click(function () {
		operation.push("\.");		
	});

	$("#btn-percent").click(function () {
		operation.push("\%");	
	});

	$("#btn-add").click(function () {
		operation.push("\+");		
	});

	//Clear and Equals

	$(".calc-btn").click(function(event) {
		/* Act on the event */
		joined = operation.join("");
		console.log(joined);
		$(".output").html("<p>" + joined + "</p>");
	});	

	$("#btn-equals").click(function () {
		var answer = eval(joined);
		$(".output").empty().html("<p>" + answer + "</p>");
		$(".history").append("<p>" + joined  + "<span>" + " = "  + answer + "</span>" + "</p>");
		console.log(answer);
		operation = [answer];
	});

	$("#btn-clear").click(function () {
		$(".output").empty();
		operation = [];
	});

});