/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`. - done
  Add at least five quote objects to the `quotes` array. - done
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/




/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/




/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/
//
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);

const quotes = ["I think, therefore I am",
                "The value of achievement lies in the achieving",
                "I never dreamed about success. I worked for it.",
                "And here you are living, despite it all",
                "I write because you exist",
                "The mind is its own place and in itself, can make a Heaven of Hell, a Hell of Heaven."];

const source = ["Rene Descarte",
                "Albert Einstein",
                "Estée Lauder",
                "Rupi Kaur",
                "Michael Faudet",
                "John Milton"];

const property = ["Philosophy",
                  "Psychology",
                  "Psychology",
                  "Romance",
                  "Pyschology"];

console.log(quotes + source + property);
// For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize each quote.
//Use the new properties you've created to conditionally add to the string that gets printed to the screen.

// Remember to delete the comments that came with this file, and replace them with your own code comments.
