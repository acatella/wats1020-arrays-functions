//Afi C. Clark's assingment below

//define input variables
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;

//function call
truncateWords(originalText, wordLimit);


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
  if (!limit || limit == undefined || limit < 0) {
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

  else {
    var shortened = words;
    //give limit value equal to string for output to object later
    limit = shortened.length;
  }

  //put array back into string
  shortened = shortened.join(" ");

  //build object to return
  var objName = 'truncateTo_' + wordLimit;
  var strObj = new sentence(objName,str,wordCount,limit,shortened);
  for (prop in strObj) {
    document.write(prop + ": " + strObj[prop] + "<br>");
  }
}

//this function will only return the truncated string
function truncateCharacters(str, limit) {
  if (!limit || limit == undefined) {
    limit = 25;
  }

  var chars = str.split("");
  var difference = chars.length - limit;
  chars.splice(limit,difference,"...");
  var shortenedStr = chars.join("");

  document.write("<br>" + shortenedStr);
}

//second function call
truncateCharacters(originalText,55);
