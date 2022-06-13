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
{
  quote : " You are your best thing",
  source : "Toni Morrison",
  citation : "Beloved",
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

function printQuote() {
  const randomQuote = getrandomQuote();
  let html = `
  <p class = "quote"> ${randomQuote.quote} </p>
  <p class = "source"> ${randomQuote.source}`;

  //conditional statements: 
if (randomQuote.citation) {
    html += `<span class = "citation"> ${randomQuote.citation}</span>`;
  } //If citation is available, will display information
  if (randomQuote.year) {
  html += `<span class = "year"> ${randomQuote.year}</span>`;
  }
  html+=`</p>`// If year is avaialble, will add a year tag to html. 

//Will display quote, source, and other applicable information
return document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);