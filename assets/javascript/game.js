$(document).ready(function() {

	//create GLOBAL variables for playing number and gems
	var numToWin = 0;
	var gemOne = 0;
	var gemTwo = 0;
	var gemThree = 0;
	var gemFour = 0;

	//create GLOBAL score count variables
	var wins = 0;
	var lose = 0;
	var totalScore = 0;

	//give variables random numbers between their desired range
	function setValues() {
		numToWin = Math.floor(Math.random() * 102 + 19);
		gemOne = Math.floor(Math.random() * 12 + 1);
		gemTwo = Math.floor(Math.random() * 12 + 1);
		gemThree = Math.floor(Math.random() * 12 + 1);
		gemFour = Math.floor(Math.random() * 12 + 1);
		
		totalScore = 0;

		$("#winScore").html("Wins: " + wins);
		$("#lossScore").html("Losses: " + lose);
		$("#randomNumber").html(numToWin);
		$("#updateScore").html(totalScore);

		console.log(numToWin);
		console.log(gemOne);
		console.log(gemTwo);
		console.log(gemThree);
		console.log(gemFour);
	}

	function wonGame() {
		//check if total score is greater than randomNumber
		if(totalScore > numToWin){
			lose++;
			setValues();
			alert("You LOST!")
		}
		//check to see if total score = randomNumber
		if(totalScore === numToWin){
			wins++;
			setValues();
			alert("You WON!");
		}
	}

	//call setValues to initialize variables for beginning of game
	setValues();

	//click function to check when user presses gem
	$(".gem").on("click", function() {
		//like making a calculator, check attr value
		//to select gem 1, 2, 3, 4
		var gemSelect = $(this).attr("value");

		if(gemSelect === "gem1"){
			totalScore += gemOne;
		}
		if(gemSelect === "gem2"){
			totalScore += gemTwo;
		}
		if(gemSelect === "gem3"){
			totalScore += gemThree;
		}
		if(gemSelect === "gem4"){
			totalScore += gemFour;
		}

		$("#updateScore").html(totalScore);

		//call function everytime to check if game won
		//will only run if totalScore is greater than
		//random numnber or total score equals randomNumber
		wonGame();

	})

});
