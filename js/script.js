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
  document.getElementById('tweet-quote').href =
    'http://twitter.com/intent/tweet/?text=' +
    encodeURIComponent(randomQuote.quote) +
    ' -' +
    encodeURIComponent(randomQuote.author);
}
