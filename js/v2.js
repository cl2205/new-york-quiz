var quiz = [
	{
		question: "In what year did the New York Subway system begin operation?",
		choices: ["1934", "1968", "1889", "1904"],
		answer: "1904"
	},

	{
		question: "Which pop star was recently named New York City's new Global Welcome Ambassador for tourism?",
		choices: ["Nicki Minaj", "Taylor Swift", "Katy Perry", "Justin Bieber"],
		answer: "Taylor Swift"
	},

	{
		question: "What is the name of the bike sharing system in NYC?",
		choices: ["Citibike", "Munibike", "BikeShareNYC", "Chasebike"],
		answer: "Citibike"
	},

	{
		question: "In which Manhattan neighborhood is Gracie Mansion, the official residence of the New York City Mayor, located?",
		choices: ["Chelsea", "Upper West Side", "the Civic Center", "Upper East Side"],
		answer: "Upper East Side"

	},

	{
		question: "What is the current speed limit for New York City streets?",
		choices: ["15mph", "20mph", "25mph", "30mph"],
		answer: "25mph"
	}
];

var score = 0;

$(document).ready(function() {
	generate(0);
});


function generate(i) {
	var table = "<table><thead><tr>";
	table += "<th class='question'>" + quiz[i].question + "</th></tr></thead>";
	table += "<tbody><tr><td class='feedback'>Choose the correct answer below:</td></tr>";
		$.each(quiz[i].choices, function(c, choice) {
			table += "<tr><td class='option'>" + choice + "</td></tr>";
		});

		table += "</tbody></table>";
		$('.container').html(table);
		$('table').hide().show("fade");
		$('.option').css('cursor', 'pointer');
		$('.option').hover(function() {
			$(this).css("background", "#fff");
			}, function() {
			$(this).css("background", "#fffff6");
			});
	submitAnswer(table, i);
}

function submitAnswer(table, i) {
	$('table').on("click", '.option', (function() {
		// var $selected = $('input:radio[name=choices]:checked').val();
		var $selected = $(this).text();
		$(this).css({
			"background-color": "#fff",
			"border-top": "3px solid #e9d8d3",
			"border-bottom": "3px solid #e9d8d3"
		});
		$('.option').unbind("mouseenter mouseleave");

		if($selected === quiz[i].answer) {
			score += 20;
			$('.feedback').text("Great job! You got the right answer.");
			$('.feedback').css({
				"background-color": "#14a059",
				"color": "#fff"
				});

			if(i === quiz.length-1) {
					$('.feedback').append("<button class='next-button right'>Results</button>");
				} else {
					$('.feedback').append("<button class='next-button right'>Next</button>");
				}

		} else if ($selected !== quiz[i].answer) {
			$('.feedback').text("Bummer! You got this wrong answer.");
			$('.feedback').css("background-color", "#d93400");
			$('.feedback').css("color", "#fff");
				if(i === quiz.length-1) {
					$('.feedback').append("<button class='next-button wrong'>Results</button>");
				} else {
					$('.feedback').append("<button class='next-button wrong'>Next</button>");
				}
		}
		$('table').off("click");
		goNext(i);
	}));
}

function goNext(i) {
	$('.next-button').click(function() {
		if(i === quiz.length-1) {
			if(score === 100) {
				var message = "<p class='message win'>Hooray! You scored " + score + "%. You are officially a New York ninja!</p>";
				message += "<p class='win'>This is likely you on a typical day:</p>";
				message += '<iframe class="ytvideo" width="560" height="315" src="http://www.youtube.com/embed/nld2XvxbGbk?rel=0" frameborder="5" allowfullscreen></iframe>';
				$('.container').hide();
				$('.container').html(message).show("drop");
			} else if (score < 100) {
				var failMessage = "<p class='message'>You scored " + score + "%.<br><br>Looks like you need to spend more time in the city that never sleeps!</p>";
				failMessage += "<button class='startover-button'>Try Again</button>";
				$('.container').hide();
				$('.container').html(failMessage).show("drop");
				$('.startover-button').click(function() {
						score = 0;
						generate(0);
				});
			}
		} else {
			generate(i+1);
		}
	});
}

