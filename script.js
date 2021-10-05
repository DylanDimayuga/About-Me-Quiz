var startQuiz = document.querySelector(".startquiz");
var timeEl = document.querySelector(".timer");
var titleEl = document.querySelector(".aboutmetitle");
var introEl = document.querySelector(".quizintroduction");
var div1 = document.querySelector(".parent");


var secondsLeft = 61;

function quizStart() {
var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time Left: " + secondsLeft;
    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        secondsLeft = 61;
    }
}, 1000);
}

function questionOne() {
    titleEl.textContent = ("What is my favorite sport?");
    introEl.setAttribute("style", "display: none");
    startQuiz.setAttribute("style", "display: none");
    var buttonOne = document.createElement("button");
    buttonOne.innerHTML = "Baseball";
    div1.append(buttonOne);
    buttonOne.className = "button";

    var buttonTwo = document.createElement("button");
    buttonTwo.innerHTML = "Football";
    div1.append(buttonTwo);
    buttonTwo.className = "button";

    var buttonThree = document.createElement("button");
    buttonThree.innerHTML = "Volleyball";
    div1.append(buttonThree);
    buttonThree.className = "button";

    var buttonFour = document.createElement("button");
    buttonFour.innerHTML = "Basketball";
    div1.append(buttonFour);
    buttonFour.className = "button";
}

startQuiz.addEventListener("click", quizStart);
startQuiz.addEventListener("click", questionOne);