let question = {
    title: "Which is not a JavaScript data type?",
    alts: ['Number', 'String', 'Boolean', 'Defined'],
    correctAnswer: 3,
}

function showQuestion(q) {
    let titleCard = document.getElementById("title");
    titleCard.textContent = q.title;
    let alts = document.querySelectorAll('.alts');
    alts.forEach(function(element,index){
        element.textContent = q.alts[index];
    })
}

showQuestion(question);

let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    
});



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
//     correctAnswer: ,
// }