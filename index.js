var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;
console.log(chalk.bold.cyan.bgRed (" Welcome to MOVIE QUIZ!!Excited \n"));
var userName = readlineSync.question(chalk.whiteBright("  Please enter your name:  "));
console.log("\nHi " + chalk.red.underline(userName) + " ❤️  Get ready for the quiz.");
console.log(chalk.cyan.bold("Enter a/ b/ c for each question to answer. For each correct answer you will get 10 points.\n"));

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log(chalk.greenBright.bold("OMG!!You got that right!:)"));
    score=score+10;
  }else{

    console.log(chalk.blueBright.bold("Oops!!Its wrong..Try Again"));
  }
  console.log(chalk.yellowBright("Your current score is: " +score ));
  console.log(chalk.whiteBright("\n-----------------------\n"));
}
// array of questions
var allQuestions = [{
  question:chalk.red(`
  1. In Dear Zindagi, what does Shah Rukh Khan's character, Dr Jehangir Khan, do?
  a) Therapist
  b) Architect
  c) Actor
  d) Journalist \n`),
  answer: "a"
},{
  question:chalk.red(`
  2. In the movie Kahaani, which Indian city does Vidya Bagchi visit in order to search for her missing husband?
  a) Mumbai
  b) Kolkata
  c) Bangalore
  d) Gwalior \n`),
  answer: "b"
},{
  question:chalk.red(`
  3. In the movie Piku, what does Amitabh Bachchan's character (Bhashkor Banerjee) suffer from?
  a) Cancer
  b) Arthitis
  c) Constipation
  d) Tumor \n`),
  answer: "c"
},{
  question:chalk.red(`
  4. In Hera Pheri, what was Paresh Rawal's character called?
  a) Raju
  b) Shyam
  c) Devi Parsad
  d) Baburao Ganpatrao Apte \n`),
  answer: "d"
},{
  question:chalk.red(`
  5. In Jab We Met, what is the name of Geet's cousin?
  a) Naina
  b) Preet
  c) Roop
  d) Priya \n`),
  answer: "c"
},{
  question:chalk.red(`
  6.This Gulzar film that dealt with the subject of Sikh insurgency in the '80s. 
  a) Machis
  b) Lekin
  c) Kinara
  d) Hu tu tu.. \n`),
  answer: "a"
},{
  question:chalk.red(`
  7. "Kuch Kuch Hota Hain", "Kabhi Khushi Kabhie Gham", "Kal Ho Na Ho" and "Kabhi Alvida Na Kehna" were produced by Dharma Productions. Which of the following actors or actresses appeared in all four films?
  a) Amitabh Bachhhan
  b) Shahrukh Khan
  c) Priety Zinta
  d) Saif ali khan \n`),
  answer: "b"
},{
  question:chalk.red(`
  8. If you watch the Marvel movies in chronological order, which movie would you watch first?
  a) Iron Man
  b) Captain America: The First Avenger
  c) Doctor Strange
  d) Captain Marvel \n`),
  answer: "b"
},{
  question:chalk.red(`
  9. How many 'Star Wars' movies are there? 
  a) 8
  b) 13
  c) 11
  d) 12 \n`),
  answer: "d"
},{
  question:chalk.red(`
  10. In the comic book series, who were the original Avengers?
  a) Batman,spider-man,wonder woman,superman
  b) Ant man,the hulk,iron man,thor,the wasp
  c) Black Panther, Black Widow, Captain America, Scarlet Witch, Vision
  d) Black Widow, Captain America, Hawkeye, the Hulk, Iron Man \n`),
  answer: "b"
}];

var highScores=[
  {name:"Samar",   topScore:40},
  {name:"Anu",     topScore:50},
  {name:"Jasleen", topScore:40}
]
// loop
for(var i=0;i<allQuestions.length;i++){
  var currentQuestion = allQuestions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
// finalscore
console.log(chalk.blueBright("YAY!!Your final score: " +score));

// posting the leaderboard
console.log(chalk.keyword("orange").bold("\n*****Check out Leaderboard*****"));
printScoreBoard(highScores);

scoreBeaten =  false;
indexInsert = 0;
for(var i=0;i<highScores.length;i++){
  if(score>highScores[i].topScore){
  scoreBeaten = true;
  indexInsert = i;
  highScores.splice(indexInsert,0,{name : `${userName}`, topScore : `${score}`});
  break;
  }
}

console.log('-----------------------');

// print if score is beaten
if(scoreBeaten){
  console.log(chalk.bold.keyword("pink")("Congratulations "+userName+" 🥳 , you are the ultimate MOVIE MAFIA"));
  console.log(chalk.keyword('orange').bold("\n*****Updated Leaderboard*****"));
  printScoreBoard(highScores);
  console.log("\nDo Send me the screenshot of your final score so that I can update the actual scoreboard ❤️\n\n\n\n")
}else{
  console.log(chalk.bold.keyword("pink")("Sorry "+userName+", you were so close to beat the scoreboard btw!! 🙃"));
}

// function to print leaderboard
function printScoreBoard(highScores){
  for(var i=0;i<highScores.length;i++){
  console.log(chalk.keyword("orange")(highScores[i].name+" : "+highScores[i].topScore));
  }
}