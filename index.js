var readlineSync = require('readline-sync');
var score = 0;
function play(question, answer){
  var userAns = readlineSync.question(question);
  if(userAns.toUpperCase() === answer.toUpperCase()){
    console.log("You are right!");
    score++;
  }else{
    console.log("You are wrong!");
  }
  console.log("Your current score: " + score);
  console.log("------------");
}

var questions =  [
{
  question: "What is my name? ",
  answer: "Pratik"
},
{
  question: "Where do I live? ",
  answer: "Mumbai"
},
{
  question: "Is my age greater than 25? ",
  answer: "No"
},
{
  question: "Who is my favourite superhero? ",
  answer: "Spiderman"
},
{
  question: "Which is my favourite food? ",
  answer: "Aloo Paratha"
}
];

for(var i=0; i<questions.length; i++){
  play(questions[i].question, questions[i].answer);
}

console.log("YOUR FINAL SCORE: "+score);