var quiz = [
	{
		question: "In what year did the New York Subway system begin operation?",
		choices: ["1934", "1968", "1889", "1904"],
		answer: "1904"
	},

	{
		question: "Which pop start was recently named New York City's new Global Welcome Ambassador for tourism?",
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

populate(0);

function populate(i) {
		$('.container').hide().toggle("fade");
		var quest = "<p class='question'>" + quiz[i].question + "</p>";
		var list = "<ul>";
		// for (var c = 0; c < quiz[i].choices; c++) {
		$.each(quiz[i].choices, function(c, choice) {
			list += "<li><input type='radio' name='choices' value='" + choice + "'>";
			list += " " + choice + "</li>";
		});
		list += "</ul>";
		var button = "<button type='submit' name='submit'>Submit</button>";
		$('.container').html(quest + list + button);
		

	$('button').click(function() {
		var $selected = $('input:radio[name=choices]:checked').val();

		if($selected === quiz[i].answer) {
			score += 20;
		}
		// $('.container').toggle("drop");

		if(i === quiz.length-1) {
			var message = "<p class='message'>You score " + score + "%.</p>";
			$('.container').html(message);
			//create an image to slide in
		} else {
			populate(i+1);
		}
	});
}



