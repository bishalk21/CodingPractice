const input = document.querySelector("textarea"); // Selecting the input box
const charCount = document.getElementById("characterCount"); // Selecting the character count element
const wordCount = document.getElementById("wordCount"); // Selecting the word count element
const sentenceCount = document.getElementById("sentenceCount"); // Selecting the sentence count element
const paragraphCount = document.getElementById("paragraphCount"); // Selecting the paragraph count element
const readingTime = document.getElementById("readingTime"); // Selecting the reading time element

input.addEventListener("keyup", function () {
  // character count
  charCount.innerHTML = input.value.length;

  // Counting the number of words
  // \b is word boundary metacharacter
  // [-?(\w+)?]+ looks for hyphen and a word (we make both optional with ?). + at the end makes it a repeated pattern
  const words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  //   console.log(words);
  if (words) {
    wordCount.innerHTML = words.length;
  } else {
    wordCount.innerHTML = 0;
  }

  // sentence count
  //   using ./!/? as sentense separators
  const sentences = input.value.match(/[.!?]+/g);
  if (sentences) {
    sentenceCount.innerHTML = sentences.length;
  } else {
    sentenceCount.innerHTML = 0;
  }

  // paragraph count
  // \n$ takes care of empty lines: lines with no characters, and only \n are not paragraphs
  // and need to be replaced with empty string

  var paragraphs = input.value.replace(/\n$/gm, "").split("\n");
  if (paragraphs) {
    paragraphCount.innerHTML = paragraphs.length;
  } else {
    paragraphCount.innerHTML = 0;
  }

  // reading time based on 275 words/minute
  if (words) {
    const seconds = Math.floor((words.length * 60) / 275);
    // need to convert seconds to minutes and hours
    if (seconds > 59) {
      const minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60; // seconds left after converting to minutes
      readingTime.innerHTML = `${minutes} minutes ${seconds} seconds`;
    } else {
      readingTime.innerHTML = `${seconds} seconds`;
    }
  } else {
    readingTime.innerHTML = "0 seconds";
  }
});
