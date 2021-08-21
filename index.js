const userInput = require('readline-sync');

const userName = userInput.question("Please Enter your name \n");

console.log(`Welcome ${userName}  \n `);

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
     
     let userAnswer = userInput.question(`${questions.question}`);

     if(userAnswer.toLowerCase() === questions.answer.toLowerCase()){
       score += 1;
       console.log(questions.message);
     }else{
       score -=0;
       console.log('oops wrong answer \n');
     }

 })

console.log(`hey ${userName} you're final score is := ${score}`)