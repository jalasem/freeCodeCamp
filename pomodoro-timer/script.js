$(document).ready(function () {

	//Set global variables

	var pomodoro = 25, currentTime = Date.parse(new Date()), deadline, timeInterval;

	//Display the clock

	var clock = document.getElementById("clock-timer");
	var minutesSpan = clock.querySelector(".minutes");
	var secondsSpan = clock.querySelector(".seconds");

	$(".minutes-count").html(pomodoro);
	minutesSpan.innerHTML = ("0" + pomodoro).slice(-2);
	secondsSpan.innerHTML = "00";

	//Customise length of each pomodoro

	$("#plus-btn").click(function () {
		pomodoro = pomodoro + 1;
		$(".minutes-count").html(pomodoro);
		minutesSpan.innerHTML = ("0" + pomodoro).slice(-2);
	});

	$("#minus-btn").click(function () {
		pomodoro = pomodoro - 1;
		$(".minutes-count").html(pomodoro);
		minutesSpan.innerHTML = ("0" + pomodoro).slice(-2);
	});

	//Start the clock

	$(".start-pomodoro").click(function() {

		$("#plus-btn, #minus-btn").prop("disabled", true); //Disable session customisation buttons
		deadline = new Date(Date.parse(new Date()) + (pomodoro * 60 * 1000)); //Set deadline

		//Calculate the time remaining
		
		function getTimeLeft (end) {
			var total = Date.parse(end) - Date.parse(new Date());
			var seconds = Math.floor((total/1000) % 60);
			var minutes = Math.floor((total/1000/60) % 60);

			return {
				"total": total,
				"minutes": minutes,
				"seconds": seconds
			};
		}

		//Countdown

		function startClock () {
			timeInterval = setInterval(function () {
				var t = getTimeLeft(deadline);
				minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
				secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

				if (t.total <= 0) { //If timer reaches zero, stop the timer and reset the clock
					clearInterval(timeInterval);
					resetClock();
				}

			}, 1000);
		}

		startClock();
	});

	//Reset the clock
	
	function resetClock () {
		$("#plus-btn, #minus-btn").prop("disabled", false);
		clearInterval(timeInterval);
		$(".minutes-count").html(pomodoro);
		minutesSpan.innerHTML = ("0" + pomodoro).slice(-2);
		secondsSpan.innerHTML = "00";
	}

	$(".reset").click(function () {
		resetClock();
	});
		
});