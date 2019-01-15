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
   - set the `innerHTML` of the `quote-box` div to the HTML string. - done
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

//Variables
const body = document.getElementsByTagName("body")[0];
const quotes = [{"quote": "I think, therefore I am",
               "source":"Rene Descarte",
               "citation":  "Discourse on the method",
               "category": "philosophical"},

              {"quote": "The true value of a human being is determined primarily by the measure and the sense in which he has attained to liberation from the self.",
               "source":"Albert Einstein",
               "citation":  "How I see the world",
               "category": "philosophical"},

              {"quote": "I never dreamed about success. I worked for it.",
               "source":"Estée Lauder",
               "citation": "A sucess story",
               "category": "motivational"},

              {"quote": "And here you are living, despite it all",
               "source":"Rupi Kaur",
               "citation": "Milk and honey",
               "category": "romance"},

              {"quote": "I write, because you exist",
               "source":"Michael Faudet",
               "citation": "Dirty Pretty Things",
               "category": "romance"}
               ];

let quote = document.getElementsByClassName("quote")[0];
let source = document.getElementsByClassName("source")[0];
let citation = document.getElementsByClassName("citation")[0];


//Functions

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
  const newCategory = rawQuote.category;
  console.log(newCategory);

  //replace innerhtml
  quote.innerHTML = newQuote;
  citation.innerHTML = newCitation;
  source.innerHTML = `<p class= "source" > ${newSource} <span class="citation"> ${newCitation} </span> </p>`;

  //conditional statement to change background color depending on genre
  if (newCategory === "philosophical")
  {
    document.body.style.backgroundColor = "#9B91C9";
  }
  else if (newCategory === "romance")
  {
    document.body.style.backgroundColor = "#DF8FA4";
  }
  else if (newCategory === "motivational")
  {
    document.body.style.backgroundColor = "#1468A8";
  }
  else
  {
    document.body.style.backgroundColor = "#36b55c";
  }//end of conditional statement

  //display
  return quote;
  return source;
  return citation;

}; //end of function

//Event Handler
//Click Handler
document.getElementById('loadQuote').addEventListener("click", printQuote);

//Timed Handler
setInterval(printQuote,3000);






// For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize each quote.
//Use the new properties you've created to conditionally add to the string that gets printed to the screen.

// Remember to delete the comments that came with this file, and replace them with your own code comments.
