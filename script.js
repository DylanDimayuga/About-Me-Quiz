var startQuiz = document.querySelector(".startquiz");
var timeEl = document.querySelector(".timer");
var titleEl = document.querySelector(".aboutmetitle");
var introEl = document.querySelector(".quizintroduction");
var highScoresList = document.querySelector(".highscoreslist");
var viewScores = document.querySelector(".viewscores");
var div1 = document.querySelector(".parent");
var div2 = document.querySelector(".parenttwo");

var buttonOne = ("");
var buttonTwo = ("");
var buttonThree = ("");
var buttonFour = ("");
var initials = ("");
var submit = ("");
var scoreEl = ("");

var secondsLeft = 61;

function quizStart() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time Left: " + secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            secondsLeft = 61;
            endOfQuiz();
        }
    }, 1000)
}

function questionOne() {
    titleEl.textContent = ("What is my favorite sport?");
    introEl.setAttribute("style", "display: none");
    startQuiz.setAttribute("style", "display: none");
    buttonOne = document.createElement("button");
    buttonOne.innerHTML = "Baseball";
    div1.append(buttonOne);
    buttonOne.className = "button";

    buttonTwo = document.createElement("button");
    buttonTwo.innerHTML = "Football";
    div1.append(buttonTwo);
    buttonTwo.className = "button";

    buttonThree = document.createElement("button");
    buttonThree.innerHTML = "Volleyball";
    div1.append(buttonThree);
    buttonThree.className = "button";

    buttonFour = document.createElement("button");
    buttonFour.innerHTML = "Basketball";
    div1.append(buttonFour);
    buttonFour.className = "button";

    buttonOne.addEventListener("click", wrongAnswer);

    buttonTwo.addEventListener("click", wrongAnswer);

    buttonThree.addEventListener("click", correctAnswerOne);

    buttonFour.addEventListener("click", wrongAnswer);
}

function wrongAnswer() {
    alert("WRONG!");
    secondsLeft -= 5
}

function correctAnswerOne() {
    alert("CORRECT!");
    buttonOne.removeEventListener("click", wrongAnswer);
    buttonTwo.removeEventListener("click", wrongAnswer);
    buttonThree.removeEventListener("click", correctAnswerOne);
    buttonFour.removeEventListener("click", wrongAnswer);
    questionTwo();
}


function questionTwo() {
    titleEl.textContent = ("What college did I graduate from?");
    buttonOne.innerHTML = "Depaul University";
    buttonTwo.innerHTML = "Univeristy of Illinois at Chicago";
    buttonThree.innerHTML = "University of Illinois at Champaigne";
    buttonFour.innerHTML = "Northern Illinois Univeristy";

    buttonOne.addEventListener("click", wrongAnswer);
    buttonTwo.addEventListener("click", correctAnswerTwo);
    buttonThree.addEventListener("click", wrongAnswer);
    buttonFour.addEventListener("click", wrongAnswer);
}

function correctAnswerTwo() {
    alert("CORRECT!");
    buttonOne.removeEventListener("click", wrongAnswer);
    buttonTwo.removeEventListener("click", correctAnswerTwo);
    buttonThree.removeEventListener("click", wrongAnswer);
    buttonFour.removeEventListener("click", wrongAnswer);
    questionThree();
}

function questionThree() {
    titleEl.textContent = ("What degree did I receive after finishing college?");
    buttonOne.innerHTML = "Computer Science";
    buttonTwo.innerHTML = "Kinesiology";
    buttonThree.innerHTML = "Computer Engineering";
    buttonFour.innerHTML = "Rehabilitation Sciences";

    buttonOne.addEventListener("click", wrongAnswer);
    buttonTwo.addEventListener("click", wrongAnswer);
    buttonThree.addEventListener("click", wrongAnswer);
    buttonFour.addEventListener("click", correctAnswerThree);
}

function correctAnswerThree() {
    alert("CORRECT!");
    buttonOne.removeEventListener("click", wrongAnswer);
    buttonTwo.removeEventListener("click", wrongAnswer);
    buttonThree.removeEventListener("click", wrongAnswer);
    buttonFour.removeEventListener("click", correctAnswerThree);
    questionFour();
}

function questionFour() {
    titleEl.textContent = ("How many siblings do I have?");
    buttonOne.innerHTML = "1";
    buttonTwo.innerHTML = "3";
    buttonThree.innerHTML = "5";
    buttonFour.innerHTML = "2";

    buttonOne.addEventListener("click", wrongAnswer);
    buttonTwo.addEventListener("click", wrongAnswer);
    buttonThree.addEventListener("click", wrongAnswer);
    buttonFour.addEventListener("click", correctAnswerFour);
}

function correctAnswerFour() {
    alert("CORRECT!");
    buttonOne.removeEventListener("click", wrongAnswer);
    buttonTwo.removeEventListener("click", wrongAnswer);
    buttonThree.removeEventListener("click", wrongAnswer);
    buttonFour.removeEventListener("click", correctAnswerFour);
    questionFive();
}


function questionFive() {
    titleEl.textContent = ("Which country have I not visited?");
    buttonOne.innerHTML = "Japan";
    buttonTwo.innerHTML = "Philippines";
    buttonThree.innerHTML = "Canada";
    buttonFour.innerHTML = "Mexico";

    buttonOne.addEventListener("click", wrongAnswer);
    buttonTwo.addEventListener("click", wrongAnswer);
    buttonThree.addEventListener("click", correctAnswerFive);
    buttonFour.addEventListener("click", wrongAnswer);
}

function correctAnswerFive() {
    alert("CORRECT!");
    clearInterval(timerInterval);
    buttonOne.removeEventListener("click", wrongAnswer);
    buttonTwo.removeEventListener("click", wrongAnswer);
    buttonThree.removeEventListener("click", correctAnswerFive);
    buttonFour.removeEventListener("click", wrongAnswer);
    buttonOne.setAttribute("style", "display: none");
    buttonTwo.setAttribute("style", "display: none");
    buttonThree.setAttribute("style", "display: none");
    buttonFour.setAttribute("style", "display: none");
    endOfQuiz();
}

function endOfQuiz() {
    titleEl.textContent = ("End of Quiz!");
    introEl.setAttribute("style", "display: block");
    introEl.textContent = ("Your final score is " + secondsLeft + ".")

    var initialsInput = document.createElement("p");
    initialsInput.classname = "initialsinput"
    initialsInput.textContent = ("Enter Initials: ")
    div2.append();

    var initials = document.createElement("input");
    initials.className = "initials"
    div2.append(initials);

    
    var submit = document.createElement("button");
    submit.innerHTML = "Submit";
    submit.className = "submit";
    div2.append(submit);

    submit.addEventListener("click", function() {
    localStorage.setItem("initials", initials.value);
    localStorage.setItem("score", secondsLeft);
    initials.setAttribute("style", "display: none");
    submit.setAttribute("style", "display: none");
    initialsInput.setAttribute("style", "display: none");
    introEl.setAttribute("style", "display: none");
    var score = document.createElement("li");
    scoreEl = score;
    score.className = "score";
    highScoresList.append(score);
    scoreEl.setAttribute("style", "display: block");
    highScorePage();
    var savedInitials = localStorage.getItem("initials");
    var savedScore = localStorage.getItem("score");
    score.textContent = (savedInitials + " - " + savedScore);
});
};


function highScorePage() {
    titleEl.textContent = ("High Scores");
    startQuiz.setAttribute("style", "display: none");
    viewScores.setAttribute("style", "display: none");
    timeEl.setAttribute("style", "display: none");
    introEl.setAttribute("style", "display: none");
    var goBack = document.createElement("button");
    goBack.innerHTML = "Go Back";
    goBack.className = "goback";
    div1.append(goBack);
    var clearScores = document.createElement("button");
    clearScores.innerHTML = "Clear Scores";
    clearScores.className = "clearscores";
    div1.append(clearScores);

    clearScores.addEventListener("click", function() {
        localStorage.clear();
        scoreEl.setAttribute("style", "display: none");
    });
    goBack.addEventListener("click", homePage);
    goBack.addEventListener("click", function() {
        goBack.setAttribute("style", "display: none");
        clearScores.setAttribute("style", "display: none");
        scoreEl.setAttribute("style", "display: none");
    });
};

function homePage() {
    titleEl.textContent = ("About Me Quiz");
    introEl.setAttribute("style", "display: block");
    introEl.textContent = ("This is a 5 question quiz that will display your knowledge about me, Dylan Dimayuga. The timer will start at 60 seconds after you click start quiz. The scoring is not based on how many of the answers you get correct, but how fast you are able to get through the quiz. For every incorrect answer you will be deducted 5 points from your total score and if all answers are incorrect than you will be given a score of 0.");
    startQuiz.setAttribute("style", "display: block");
    viewScores.setAttribute("style", "display: block");
    timeEl.setAttribute("style", "display: block");
};

startQuiz.addEventListener("click", quizStart);
startQuiz.addEventListener("click", questionOne);
