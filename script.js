var q1 = "what is text in programming called?";
var a1 = "string";

var q2 = "what is a true/false type called?";
var a2 = "boolean";

var q3 = "how do you repeat code";
var a3 = "loop"

var q4 = "what is interconnected data called?";
var a4 = "object"

var q5 = "how would you control logic flow?";
var a5 = "if else statement"

var questions = [q1, q2, q3, q4, q5];
var answers = [a1, a2, a3, a4, a5]

var startBtn = document.querySelector("#startBtn");
var mainDiv = document.querySelector("#mainDiv");

startBtn.addEventListener("click", startBtnHandler);

function startBtnHandler(){
    
    for(let i = 0; i < questions.length; i++){
        var question = document.createElement("h1");
        // var answers = document.createElement("div");
        question.textContent = questions[i];
        mainDiv.appendChild(question);
    }
}