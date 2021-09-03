const userInput = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bgMagenta("Welcome To how well do yo know me \n"));

const rules = `We have levels in the question there are total 6 question..
1] if you score above 2 you will be in semi-final 
2] if you score above 3 you will be in final \n`;
console.log( chalk.red(rules))
const userName = userInput.question(chalk.blue("Please Enter your name \n"));

console.log(chalk.green(`Welcome ${userName}  \n `));

const questionsList =[
  {
   question:"whats's my name ? \n",
   answer:'mehul',
   message:'huree you got it right.. \n'
  },
  {
   question:"what's my birthday month ?  june or may \n",
   answer:'june',
   message : 'wooohhhoo.. \n'
  },
  {
   question:"what's my favourite food ? \n",
   answer:'chicken',
   message:'good one keep going.. \n'
  },
  {
   question:"what's my favourite TV-show? frontier or narcos   \n",
   answer:'narcos',
   message : 'good going.. \n' 
  },
  {
   question:"Do i have a pet?  \n",
   answer:'no',
   message : 'ahhh good one.. \n'
  },
  {
   question:"where do i live ? mumbai or bangalore \n",
   answer:'mumbai',
   message :'seems like you know me pretty well.. \n'
  },
]

 let score =0;
 questionsList.forEach((questions)=>{
     
     let userAnswer = userInput.question(chalk.yellow(`${questions.question}`));

   
     if(userAnswer.toLowerCase() === questions.answer.toLowerCase()){
       score += 1;
       console.log(chalk.bgMagenta(questions.message + "\n"));
     }else{
       //score -=0;
       console.log(chalk.bgRed('oops wrong answer \n'));
     }

      if(score === 2){
      console.log('------------------');
      console.log( chalk.bgGreen('you are in semi-final \n'));
      console.log(chalk.bgMagenta(`your current score is ${score} \n`));
      console.log('------------------');

      } else if(score === 3){
      console.log('------------------');
      console.log(chalk.bgGreen(`you are in final \n`));
      console.log(chalk.bgMagenta(`your current score is ${score} \n`));
      console.log('------------------');

      }
    

 });

const leaderboard =[
  {
    name:'sneha',
    score:1
    },{
      name :'simran',
      score : 4
    },{
      name :'alex',
      score : 2
    }
]

let isbeaten;

console.log(chalk.red("----- leaderboard ------- \n"));
for(let i=0;i<leaderboard.length;i++){
 if(score >leaderboard[i].score){
      isbeaten ='true'
   }else{
     isbeaten='false';

   }
   
   console.log(chalk.green(leaderboard[i].name) , " " , chalk.blue(leaderboard[i].score) + "\n");

}




console.log(chalk.red("----- leaderboard ------- \n"));

console.log(chalk.bgGreen(`hey ${userName} you're final score is := ${score} \n`));


if(isbeaten === 'true'){
  console.log(chalk.bgRed('you have beaten high score \n'));
}else{
  console.log(chalk.bgRed('you havent beaten high score try next time \n'))
}