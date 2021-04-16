const quotes = [
  {
    quote: 'This is quote 1',
    author: 'Lawrence',
  },
  {
    quote: 'This is quote 2',
    author: 'Rena',
  },
  {
    quote: 'This is quote 3',
    author: 'Other',
  },
];

window.onload = initialLoad;

function initialLoad() {
  generateQuote();
}

function generateQuote() {
  let quoteSize = quotes.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuote = quotes[randomIndex];

  document.getElementById('text').innerText = randomQuote.quote;
  document.getElementById('author').innerText = randomQuote.author;
}
