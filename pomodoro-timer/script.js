var pomodoro = 25;
var currentTime = Date.parse(new Date());
var deadline = new Date(currentTime + pomodoro * 60 * 1000);

	function timeLeft (end) {
		var t = Date.parse(end) - currentTime;
		var seconds = Math.floor( (t/1000) % 60);
		var minutes = Math.floor( (t/1000/60) % 60);

		return {
			"total": t,
			"minutes": minutes,
			"seconds": seconds
		};
	}

	function startPomodoro (id, end) {

		function updatePomodoro () {
			var time = timeLeft(end);

			var minutesRemaining = $(".minutes").html(("0" + time.minutes).slice(-2));
			var secondsRemaining = $(".seconds").html(("0" + time.seconds).slice(-2));

			// if (time.total <= 0) {// If the deadline is reached, stop the timer
			// 	clearInterval(timeInterval);
			// }
		}

		updatePomodoro();
		var timeinterval = setInterval(updatePomodoro, 1000);
	}

	$(".start-pomodoro").click(startPomodoro("clock-timer", deadline));