/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [{
  quote:"Self dedication is a spiritual experience.",
  source: "Cesar Chavez",
},
{
  quote : "Keep a little fire burning; however small, however hidden",
  source : "Cormac McCarthy",
  citation: "The Road"
},
{
  quote : "It's the possibility of having a dream come true that makes life interesting.",
  source : "Gabriel Garcia Marquez",
  citation : "The Alchemist",
},
  quote : " You are your best thing",
  source : "Toni Morrison",
},
{
  quote : "Lo malo ya paso, el tiempo es mi doctor... la vida es una movie, soy mi propio director",
  source : "Bad Bunny",
  year : 2020,
}
]
console.log(quotes);


/***
 * `getRandomQuote` function
***/

function getrandomQuote() {
  //grab a random object from the `quotes` array, and store it in a variable
  const randomNumber =  Math.floor (Math.random () * quotes.length);
  // returns random quote variable 
  return quotes[randomNumber]; 
}


/***
 * `printQuote` function
***/

if (randomQuote.citation) {


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);