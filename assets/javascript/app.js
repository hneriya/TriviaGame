			var answersCorrect = "0";

			var answersIncorrect = "0";

			var answersUnanswered = "0";

			var option = $(".radio-inline").attr("option")

			var timer = 60;

			var intervalId;
			// timer to run 60 seconds, when it hits zero, clock expires, 'times up' pops up and you can check your score
			function runTimer() {
			    intervalId = setInterval(decrement, 1000)

			    function decrement() {
			        timer--
			        $(".timer").html(timer)
			        if (timer === 0) {
			            clearInterval(intervalId);
			            alert("Time Up");
			        }
			    }
			};

			//questions hidden until start button pressed and timer starts
			$('#questions').hide();
			//scoreboard hidden until submition of answers
			$('#scoreboard').hide();

			$("#start-Button").click(function() {
			    $('#questions').show()
			    runTimer();
			    console.log(timer);
			});
			//submit button stops clock and hides questions
			$('#submitButton').click(function() {
			    $('#questions').hide()
			});

			//show scoreboard
			$("#submitButton").click(function() {
			    $('#scoreboard').show()


			    var resultsCheck = $('input[name=inlineRadioOptions]:checked').each(howManyRight);

			    function howManyRight(index, resultsCheck) {
			        resultsCheck = $(resultsCheck).attr('value');
			        if (resultsCheck === "correct") {
			            answersCorrect++
			            $("#correctCount").html("Answers Correct: " + answersCorrect)
			            console.log(answersCorrect)
			        } else if (resultsCheck === "option") {
			            answersIncorrect++;
			            $("#incorrectCount").html("Answers Incorrect: " + answersIncorrect)
			            console.log(answersIncorrect)
			        }
			    }
			    //best way found to get a number output for unanswered questions
			    answersUnanswered = 8 - answersCorrect - answersIncorrect
			    $("#unansweredCount").html("Answers Unanswered: " + answersUnanswered)

			});
