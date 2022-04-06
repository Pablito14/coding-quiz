var q1 = "what is text in programming called?";
var a1 = "string";

var q2 = "what is a true/false type called?";
var a2 = "boolean";

var q3 = "how do you repeat code";
var a3 = "loop"

var q4 = "what is interconnected data called?";
var a4 = "object"

var q5 = "how would you control logic flow?";
var a5 = "if/else statement"

var questions = [q1, q2, q3, q4, q5];
var answers = [a1, a2, a3, a4, a5];
var score;

var startBtn = document.querySelector("#startBtn");
var mainDiv = document.querySelector("#mainDiv");
var timerEl = document.querySelector("#timer");

startBtn.addEventListener("click", startBtnHandler);

function startBtnHandler(){
    
    for(let i = 0; i < questions.length; i++){
        var question = document.createElement("h1");
        question.textContent = questions[i];
        mainDiv.append(question);

        for(j = 0; j < answers.length; j++){
            var answerEl = document.createElement("p");
            answerEl.textContent = answers[j];
            mainDiv.append(answerEl);
        }
    }

    countdown();
    startBtn.remove();
}

function countdown() {
    var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = "Time: " + timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }

  function displayMessage(){
      //todo: create a mesage that will say if won or loss with score
  }