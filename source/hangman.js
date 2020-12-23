//create a hangman game object. Each instance of the hangman game responseObject
//will have a word,remainingGuesse to guess that word, guesses guessed for that word
//and the status. It will have method getPuzzle where you guesss a letter and see
//if in the game a get status to see if still playing,failed,or completed and
//get String to write something

class HangmanGame{
  constructor(word,remainingGuesses){
    this.word=word.toLowerCase().split("");
    this.remainingGuesses=remainingGuesses;
    this.guesses=[];
    this.status="playing";
  }
  solvePuzzle(letter){
    if(this.status==="failed"||this.status==="finished"){
      return this.word.join("");
    }
    //automatically push a space into our guesses, so user doesn't have to guess a space
    if(this.word.includes(" ")){
      this.guesses.push(" ");
    }
    let word="";
    const isUnique=!this.guesses.includes(letter);
    const isGoodGuess=this.word.includes(letter);
    //if unique letter,push it in to our guesses array
    if(isUnique){
    this.guesses.push(letter);
    }
    //if unique letter AND a bad guess decrease our remaining guesses by 1
    if(isUnique&&!isGoodGuess&&letter!==""){
      this.remainingGuesses--;
    }
    /*create the puzzle by checking to see if each letter in our this.word array
    is included in our this.guesses array*/
    this.word.forEach((letter)=>{
      if(this.guesses.includes(letter)){
        word+=letter;
      }else{
        word+="*";
      }
    })
    this.getStatus();
    return word;
  }//end of getPuzzle method
  getStatus(){
    let completed;
    /*look at every letter and see if this.guesses includes it. If it does, return
    true to completed, otherwise completed will be false*/
     completed=this.word.every((letter)=>{
      return this.guesses.includes(letter);
    })

    if(this.remainingGuesses<=0){
      this.status="failed";
    }else if(completed===true){
      this.status="finished";
    }else{
      this.status="playing";
    }
  }//end of getStatus method
  getString(){
    if(this.status==="playing"){
      if(this.remainingGuesses===1){
        return `You have ${this.remainingGuesses} guess left.`;
      }else{
        return `You have ${this.remainingGuesses} guesses left.`;
      }
    }else if(this.status==="failed"){
      return `Sorry, the correct word was "${this.word.join("")}".`;
    }else if(this.status==="finished"){
      return  `Congrats, you guessed "${this.word.join("")}".`;
    }
  }//end of getString method
}

export{HangmanGame as default};

























/* my updated way
"use strict"
class Hangman{
  constructor(word, remainingGuesses){
    this.word=word.toLowerCase().split("");
    this.remainingGuesses=remainingGuesses;
    this.guesses=[];
    this.status="playing";
  }
  getPuzzle(letter){
    if(this.status!=="playing"){
      return this.word.join("");
    }
    if(this.word.includes(" ")){
      this.guesses.push(" ");
    }
    let word=""
    letter=letter.toLowerCase();
    const uniqueGuess=!this.guesses.includes(letter);
    const badGuess=!this.word.includes(letter);
    if(letter===""){

    }else if(uniqueGuess){
      this.guesses.push(letter);
    }


    if(badGuess&&uniqueGuess&&letter!==""){
      this.remainingGuesses-=1;
    }
    this.word.forEach((letter)=>{
      this.guesses.includes(letter)? word+=letter: word+="*";
    })
    this.getStatus();
    return word;
  }//end of getPuzzle method
  getStatus(){
    const completed=this.word.every((letter)=>{
      return this.guesses.includes(letter);
    })
    if(this.remainingGuesses<=0){
      this.status="failed";
    }else if(completed){
      this.status="completed";
    }
  }//end of getStatus method
  getString(){
    if(this.status==="playing"){
      return `You have ${this.remainingGuesses} guesses left.`
    }else if(this.status==="failed"){
      return `So close. The correct word was "${this.word.join("")}".`
    }else if(this.status==="completed"){
      return `Congrats! You figured out the word!`
    }
  }
}
*/






/* using classes Andrews way
class Hangman{
  constructor(word,remainingGuesses){
    this.word=word.toLowerCase().split("");
    this.remainingGuesses=remainingGuesses;
    this.guesses=[];
    this.status="playing";
  }
  getStatus(){
    const correctWord=this.word.every((letter)=>this.guesses.includes(letter));
    if(this.remainingGuesses<=0){
      this.status="failed"
    }else if(correctWord){
      this.status="finished";
    }else{
      this.status="playing";
    }
  }
  makeGuess(guess){
    if(this.status==="playing"){
      guess=guess.toLowerCase();
      const isUnique=!this.guesses.includes(guess);
      const isBadGuess=!this.word.includes(guess);
      if(isUnique){
        this.guesses.push(guess);
      }
      if(isUnique&&isBadGuess){
        this.remainingGuesses--
      }
      this.getStatus();
    }else{

    }
  }
  getString(){
    if(this.status==="playing"){
      return `You have ${this.remainingGuesses} guesses left`;
    }else if(this.status==="failed"){
      return `Nice Try. The word was "${this.word.join("")}"";`
    }else if(this.status==="finished"){
      return `Congrats`
    }
  }
  getPuzzle(){
    let word=``;
    this.word.forEach((letter)=>{
      if(this.guesses.includes(letter)||letter===" "){
        word+=letter;
      }else{
        word+="*"
      }
    })
    return word;
  }
}
*/
















/* not using classes
//Hangman constructor function
const Hangman=function(word,remainingGuesses){
  this.word=word.toLowerCase().split("");
  this.remainingGuesses=remainingGuesses;
  this.guesses=[];
  this.status="playing";
}


Hangman.prototype.getStatus=function(){
  const correctWord=this.word.every((letter)=>this.guesses.includes(letter));


  if(this.remainingGuesses<=0){
    this.status="failed"
  }else if(correctWord){
    this.status="finished";
  }else{
    this.status="playing";
  }
}
//DONT LOOK AT THIS CODE
//getStatus method prototype for our hangman object
Hangman.prototype.getStatus=function(){
  const noGuesses=this.remainingGuesses<=0
  if(noGuesses){
    this.status="failed";
  }else{
    let number=0;
    this.word.forEach((letter)=>{
      if(this.guesses.includes(letter)){
        number++
      }
    })
    if(number===this.word.length){
      this.status="finished";
    }
  }
}
//END OF DONT LOOK AT THIS CODE


//MakeGuess method prototype on the hangman object
Hangman.prototype.makeGuess=function(guess){
  if(this.status==="playing"){
    guess=guess.toLowerCase();
    const isUnique=!this.guesses.includes(guess);
    const isBadGuess=!this.word.includes(guess);
    if(isUnique){
      this.guesses.push(guess);
    }
    if(isUnique&&isBadGuess){
      this.remainingGuesses--
    }
    this.getStatus();
  }else{

  }
}

//String method that return a status messgae on the hangman object
Hangman.prototype.getString=function(){
  if(this.status==="playing"){
    return `You have ${this.remainingGuesses} guesses left`;
  }else if(this.status==="failed"){
    return `Nice Try. The word was "${this.word.join("")}"";`
  }else if(this.status==="finished"){
    return `Congrats`
  }
}

//getPuzzle method prototype on the hangman object
Hangman.prototype.getPuzzle=function(){
  let word=``;
  this.word.forEach((letter)=>{
    if(this.guesses.includes(letter)||letter===" "){
      word+=letter;
    }else{
      word+="*"
    }
  })
  return word;
}
*/
