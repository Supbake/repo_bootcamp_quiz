let currentScore = 0
let totalScore = 5

function myFunction() {
    const startButton = document.querySelector("body > section.start-window > button");
    $(startButton).hide();

    questionOne();

    setTimeout(timesUp, 1000);
    
}

function questionOne() {
    const questionOne =document.querySelector("#question-one");
    $(questionOne).show();

    questionOne.addEventListener("click", function(event) {
        
        if(event.target.id === "correct-answer-1") {
            ///do something
            currentScore = currentScore + 1
            localStorage.setItem("current score", + currentScore);
            document.querySelector("#current-score").textContent(currentScore);
            console.log("correct answer fired");
        } else {
            //take away 10 seconds on timer
            console.log("false answer fired")
        } 
        $(questionOne).hide();
        questionTwo();
    })

}
function questionTwo() {
    const questionTwo =document.querySelector("#question-two");
    $(questionTwo).show();

    questionTwo.addEventListener("click", function(event) {
        
        if(event.target.id === "correct-answer-2") {
            ///do something
            currentScore = currentScore + 1
            localStorage.setItem("current score", + currentScore)
            console.log("correct answer fired");
        } else {
            //take away 10 seconds on timer
            console.log("false answer fired")
        } 
        $(questionTwo).hide();
    })

}




function timesUp() {
    alert("Times Up!");
}

// $("#question-one").show(); 








// $("card").hide();

// let countDownDate = new Date("00:60:60").getTime();
// let timerFun = setInterval(function() {
//     let now = new Date().getTime();
//     let distance = countDownDate - now;
//     let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     document.getElementById('timer-element').innerHTML = seconds + " Seconds Left";
//     if (distance < 0) {
//         clearInterval(timerFun);
//         document.getElementById('timer-element').innerHTML = "Times Up!";
//     }
// },1000);

// function showQuestion(q) {
//     let titleCard = document.getElementById("title");
//     titleCard.textContent = q.title;
//     let alts = document.querySelectorAll('.alts');
//     alts.forEach(function(element,index){
//         element.textContent = q.alts[index];
//     })
// }

// showQuestion(question);

// let btn = document.getElementById('btn');
// btn.addEventListener('click', function(){
// });

// let questionOne = {
//     title: "Which is not a JavaScript data type?",
//     alts: ['Number', 'String', 'Boolean', 'Defined'],
//     correctAnswer: 3,
// }

// let questionTwo = {
//     question: "Which language runs in a web browser",
//     answers: ['Python', 'JavaScript', 'Cobra', 'Java'],
//     correctAnswer: 1,
// }

// let questionThree = {
//     question: "What does CSS stand for?",
//     answers: ['Central Style Sheets', 'Common Style Sheets', 'Cascading Style Sheets', 'Cascading Simple Sheets'],
//     correctAnswer: 2,
// }

// let questionFour = {
//     question: "What year was JavaScript launched?",
//     answers: ['1990', '1996', '1992', '1995'],
//     correctAnswer: 3,
// }

// let questionFive = {
//     question: "What does HTML stand for?",
//     answers: ['Hypertext Markup Language', 'Hyperweb Markup Language', 'Hypertext Machine Language', 'Hyperpage Markdown Language'],
//     correctAnswer: 0, 
// }