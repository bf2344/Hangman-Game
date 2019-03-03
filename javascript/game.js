//GLOBAL VARIABLES

// Used to record how many times a letter can be pressed
var doubleLetter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
//Holds the all the words
var wordBank = ["psych", "monk", "suits", "flash", "cheers", "lost", "friends", "seinfeld", "blacklist", "homeland", "futurama", "bewitched", "supernatural", "matador", "smallville", "gotham", "arrow", "frasier", "charmed", "portlandia", "outlander", "revenge", "vikings", "heroes", "revolution", "limitless", "rosanne", "coach", "jericho", "reba", "shameless", "glee", "baywatch", "scrubs", "justified", "longmire", "rome", "dexter", "bones", "nashville", "castle"];
//Holds chosenWord
var chosenWord = "";
//Holds letters in word
var lettersInWord = [];
//Holds number of clears in word
var numClear = 0;
//Holds clears and successful guesses
var successClear = [];
//Holds Wrong guesses
var wrongLetters = [];
//Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 7;
//FUNCTIONS
//----------------------------------------
function reset() {
  
  chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  
  lettersInWord = chosenWord.split("");
  
  numClear = lettersInWord.length;

  //RESET
 
  letterGuessed = 0;
  rightGuessCounter = 0;
  guessesLeft = 7;
  wrongLetters = [];
  successClear = [];
  doubleLetter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  test = false;
  startGame();
}
function startGame() {
  //Chooses word randombly from the wordBank
  chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  //Splits the chosen word into individual letters
  lettersInWord = chosenWord.split("");

  //Get the number of clears
  numClear = lettersInWord.length;

//   RESET
  rightGuessCounter = 0;
  guessesLeft = 7;
  wrongLetters = [];
  successClear = [];
  doubleLetter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  //Populate Letters 
  for (var i = 0; i < numClear; i++) {
    successClear.push("_");
    document.getElementById("wordToGuess").innerHTML = successClear;
  }

  //Changes HTML
  document.getElementById("wordToGuess").innerHTML = successClear.join(
    " "
  );
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("winCounter").innerHTML = winCount;
  document.getElementById("lossCounter").innerHTML = lossCount;
  
  
  // Testing
  console.log(chosenWord);
  console.log(lettersInWord);
  console.log(numClear);
  console.log(successClear);
}

function compareLetters(userKey) {
  console.log("WORKING!");
  
  //If user key exist in chosen word then perform this function
  if (chosenWord.indexOf(userKey) > -1) {
    
    
    
    //Loops depending on the amount of Clear
    for (var i = 0; i < numClear; i++) {
      
      
        //Fills in right index with user key
      if (lettersInWord[i] === userKey) {
        rightGuessCounter++;
        successClear[i] = userKey;
        document.getElementById(
          "wordToGuess"
        ).innerHTML = successClear.join(" ");
      }
    }
    //Test 
    console.log(successClear);
  }
  
  //Wrong Keys
  else {
    wrongLetters.push(userKey);
    guessesLeft--;
    
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wrongGuesses").innerHTML = wrongLetters;
    
    // testing 
    console.log("Wrong Letters = " + wrongLetters);
    console.log("Guesses left " + guessesLeft);
  }
}
function winLose() {
  // When number clears if filled with right words then you win
  if (rightGuessCounter === numClear) {
    //Counts Wins
    winCount++;
    //Changes HTML
    document.getElementById("winCounter").innerHTML = winCount;
    alert("You Win");
    reset();
  }
  // When number of Guesses reaches 0 then You lose
  else if (guessesLeft === 0) {
    //Counts losses
    lossCount++;
    

    document.getElementById("lossCounter").innerHTML = lossCount;
    alert("You Lose, Try Again");
    reset();
    ;
  }
}

//MAIN-PROCCESS

startGame();

document.onkeyup = function(event) {
  test = true;
  var letterGuessed = event.key;
  for (var i = 0; i < doubleLetter.length; i++) {
    if (letterGuessed === doubleLetter[i] && test === true) {
      var spliceDword = doubleLetter.splice(i, 1);
      //Testing
      console.log("Double word is = " + doubleLetter[i]);
      console.log("Spliced Word is = " + spliceDword);

      compareLetters(letterGuessed);
      winLose();
    }
  }
};
