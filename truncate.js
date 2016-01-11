
// TODO:
// create an html page to display the object
// strech goal:
    // Place "use strict" at the top of your file to invoke strict mode
    // Create an additional function called truncateCharacters and repeat this experiment truncating by characters instead of words
    // Modify your Function so that it can be called without the numWords argument (if no numWords is supplied it should use a default number of words to truncate)
    // Modify your Function so that instead of returning a single String value it returns an Object that contains the following information:
    //     originalText (original text that was sent to the function)
    //     wordCount (count of the number of words in original text)
    //     numWords (the original number that was sent in)
    //     shortText (truncated String)
    //     (Don't forget to modify your console.log statements to properly show all this info about the object.)

var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;

//function call
truncateWords(originalText,wordLimit);


//object constructor
function sentence(name,original,wordCount,limit,shortened) {
  this.name = name;
  this.originalText = original;
  this.wordCount = wordCount;
  this.numWords = limit;
  this.shortText = shortened;
}

function truncateWords(str, limit) {
  //handle limit argument input errors
  if (!limit || limit == undefined) {
    limit = 5;
  }

  //build arrays and word count
  var words = str.split(" ");
  var wordCount = words.length;
  var diff = wordCount - limit;

  if (diff > 0) {
    words.splice(limit,diff, "...");
    var shortened = words;
  }

  else {var shortened = words};

  //put array back into string
  shortened = shortened.join(" ");

  //build object to return
  var objName = 'sentence_' + wordLimit;
  var strObj = new sentence(objName,str,wordCount,limit,shortened);
  for (prop in strObj) {
    document.write(prop + ": " + strObj[prop] + "<br>");
  }
}
