/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`. - done
  Add at least five quote objects to the `quotes` array. - done
  Give each quote object a `quote` and `source` property. - done

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object. - done
***/




/***
  Create the `getRandomQuote` function to:
   - generate a random number - done
   - use the random number to `return` a random quote object from the
     `quotes` array. - done
***/




/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable. - done
   - use the properties of the quote object stored in the variable to
     create your HTML string. - done
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


var quotes = [{"quote": "I think, therefore I am",
               "source":"Rene Descarte",
               "citation":  "Discourse on the method - Book",
               "category": "philosophical"},

              {"quote": "The true value of a human being is determined primarily by the measure and the sense in which he has attained to liberation from the self.",
               "source":"Albert Einstein",
               "citation":  "How I see the world - Book",
               "category": "philosophical"},

              {"quote": "I never dreamed about success. I worked for it.",
               "source":"Estée Lauder",
               "citation": "A sucess story - Book",
               "category": "motivational"},

              {"quote": "And here you are living, despite it all",
               "source":"Rupi Kaur",
               "citation": "Milk and honey - Book",
               "category": "romance"},

              {"quote": "I write, because you exist",
               "source":"Michael Faudet",
               "citation": "Dirty Pretty Things - Book",
               "category": "romance"}
               ];

let quote = document.getElementsByClassName("quote")[0];
let source = document.getElementsByClassName("source")[0];
let citation = document.getElementsByClassName("citation")[0];



// below function to be called in click function

function getRandomQuote() {
  //loop through array to stick generated number with the array item
  let randomNum = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNum];
  return randomQuote;

};//end of function


function printQuote() {
  let rawQuote = getRandomQuote();
  console.log(rawQuote);
  //access properties
  const newQuote = rawQuote.quote;
  const newSource = rawQuote.source;
  const newCitation = rawQuote.citation;
  console.log(citation);
  const newCategory = rawQuote.category;

  //replace innerhtml
  quote.innerHTML = newQuote;
  source.innerHTML = newSource;
  citation.innerHTML = newCitation;

  //conditional statement to remove year if not available
  //conditional statement to change background color depending on genre

  //display
  return quote;
  return source;
  return citation;

}; //end of function


document.getElementById('loadQuote').addEventListener("click", printQuote);







// For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize each quote.
//Use the new properties you've created to conditionally add to the string that gets printed to the screen.

// Remember to delete the comments that came with this file, and replace them with your own code comments.
