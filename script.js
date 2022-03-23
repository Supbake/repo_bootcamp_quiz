let currentScore = 0
let totalScore = 5
let currentUser;

function myFunction() {
    const startButton = document.querySelector("body > section.start-window > button");
    $(startButton).hide();

    questionOne();

    setTimeout(finalScore, 10000);
    
}

function questionOne() {
    const questionOne =document.querySelector("#question-one");
    $(questionOne).show();

    questionOne.addEventListener("click", function(event) {
        
        if(event.target.id === "correct-answer-1") {
            ///do something
            currentScore = currentScore + 1
            localStorage.setItem("current score", + currentScore);
            document.getElementById("current-score").textContent = currentScore;
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
            document.getElementById("current-score").textContent = currentScore;
            console.log("correct answer fired");
        } else {
            //take away 10 seconds on timer
            console.log("false answer fired")
        } 
        $(questionTwo).hide();
        questionThree();
    })

}

function questionThree() {
    const questionThree =document.querySelector("#question-three");
    $(questionThree).show();

    questionThree.addEventListener("click", function(event) {
        
        if(event.target.id === "correct-answer-3") {
            ///do something
            currentScore = currentScore + 1
            localStorage.setItem("current score", + currentScore);
            document.getElementById("current-score").textContent = currentScore;
            console.log("correct answer fired");
        } else {
            //take away 10 seconds on timer
            console.log("false answer fired")
        } 
        $(questionThree).hide();
        questionFour();
    })

}

function questionFour() {
    const questionFour =document.querySelector("#question-four");
    $(questionFour).show();

    questionFour.addEventListener("click", function(event) {
        
        if(event.target.id === "correct-answer-4") {
            ///do something
            currentScore = currentScore + 1
            localStorage.setItem("current score", + currentScore);
            document.getElementById("current-score").textContent = currentScore;
            console.log("correct answer fired");
        } else {
            //take away 10 seconds on timer
            console.log("false answer fired")
        } 
        $(questionFour).hide();
        questionFive();
    })

}

function questionFive() {
    const questionFive =document.querySelector("#question-five");
    $(questionFive).show();

    questionFive.addEventListener("click", function(event) {
        
        if(event.target.id === "correct-answer-5") {
            ///do something
            currentScore = currentScore + 1
            localStorage.setItem("current score", + currentScore);
            document.getElementById("current-score").textContent = currentScore;
            console.log("correct answer fired");
        } else {
            //take away 10 seconds on timer
            console.log("false answer fired")
        } 
        $(questionFive).hide();
        loading();
    })

}

function loading() {
    const loading =document.querySelector("#loading");
    $(loading).show();
}

function finalScore() {
    const loading =document.querySelector("#loading");
    if (loading) {
        $(loading).hide();

    }
    alert("Pencils Down!");
    let initals = prompt("Save your initals");
    currentUser = initals;
    localStorage.setItem(initals, currentScore)
    results();

}

function results() {
    const results =document.querySelector("#results");
    $(results).show();
    const resultsstring = document.querySelector("#results-string");
    resultsstring.innerText = `User: ${currentUser}, Score: ${localStorage.getItem(currentUser)}`
    $(document.querySelector(".score")).hide();

}