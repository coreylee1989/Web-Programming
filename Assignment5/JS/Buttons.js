
var answer1, answer2, answer3, answer4;
var desc;
var c;
var initalCompare = "Dummy";
var correct = 0;
var wrong = -1;

function start() {
	answer1 = document.getElementById("answer1");
	answer2 = document.getElementById("answer2");
	answer3 = document.getElementById("answer3");
	answer4 = document.getElementById("answer4");
	answer1.addEventListener("click", funcName=function(){updateScore(1)}, false);
	answer1.addEventListener("click", pickRandomImage, false);
	answer1.addEventListener("click", setButtonText, false);
	answer2.addEventListener("click", funcName=function(){updateScore(2)}, false);
	answer2.addEventListener("click", pickRandomImage, false);
	answer2.addEventListener("click", setButtonText, false);
	answer3.addEventListener("click", funcName=function(){updateScore(3)}, false);
	answer3.addEventListener("click", pickRandomImage, false);
	answer3.addEventListener("click", setButtonText, false);
	answer4.addEventListener("click", funcName=function(){updateScore(4)}, false);
	answer4.addEventListener("click", pickRandomImage, false);
	answer4.addEventListener("click", setButtonText, false);
}

function getDescription() {
	desc = iconImg.getAttribute("alt");
}

function updateScore(clicked) {
	if (c == clicked) {
		correct++;
		document.getElementById("correct").innerHTML = "Correct Answers: " + correct;
	}
	else {
		wrong++;
		document.getElementById("wrong").innerHTML = "Wrong Answers: " + wrong;
	}
}

function setButtonText() {
	correctAnswer();
	var r1, r2, r3;

	r1 = initalCompare;
	r2 = initalCompare;
	r3 = initalCompare;

	while (r1 == initalCompare) {
		x = randomDescription();
		r1 = descriptions[x];
	}

	while (r2 == initalCompare || r2 == r1) {
		y = randomDescription();
		r2 = descriptions[y];
	}

	while (r3 == initalCompare || r3 == r1 || r3 == r2) {
		z = randomDescription();
		r3 = descriptions[z];
	}

	switch (c) {
		case 1: 
			answer2.setAttribute("value", r1);
			answer3.setAttribute("value", r2);
			answer4.setAttribute("value", r3);
			break;
		case 2: 
			answer1.setAttribute("value", r1);
			answer3.setAttribute("value", r2);
			answer4.setAttribute("value", r3);
			break;
		case 3: 
			answer1.setAttribute("value", r1);
			answer2.setAttribute("value", r2);
			answer4.setAttribute("value", r3);
			break;
		default: 
			answer1.setAttribute("value", r1);
			answer2.setAttribute("value", r2);
			answer3.setAttribute("value", r3);
			break;
	}
}

function correctAnswer() {
	getDescription();
	//var c = Math.floor(Math.random() * 4) + 1;
	this.c = randomNumber();
	switch (c) {
		case 1: 
			answer1.setAttribute("value", desc);
			this.initalCompare = desc;
			break;
		case 2: 
			answer2.setAttribute("value", desc);
			this.initalCompare = desc;
			break;
		case 3: 
			answer3.setAttribute("value", desc);
			this.initalCompare = desc;
			break;
		default: 
			answer4.setAttribute("value", desc);
			this.initalCompare = desc;
			break;
	}
}

function randomNumber() {
	return Math.floor(Math.random() * 4) + 1;
}

function randomDescription() {
	return Math.floor(Math.random() * 28);
}

window.addEventListener("load", start, false);
