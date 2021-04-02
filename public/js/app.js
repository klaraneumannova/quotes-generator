const refreshBtn = document.querySelector('#refresh');
const quoteEl = document.querySelector('#quote');
const authorEl = document.querySelector('#author');

const getRandomQuote = () => {
    const quoteId = quoteEl.getAttribute('data-id');
    let randomNumber = Math.floor(Math.random() * QUOTES.length);
    if (quoteId) {
        while(+quoteId === randomNumber) {
            randomNumber = Math.floor(Math.random() * QUOTES.length);
        }
    }
    return QUOTES[randomNumber];
}

const setRandomQuote = () => {
    const quote = getRandomQuote();

    quoteEl.setAttribute('data-id', quote.id);
    quoteEl.innerHTML = `"${quote.quote}"`;
    authorEl.innerHTML = quote.author;
}

setRandomQuote();

refreshBtn.addEventListener('click', () => {    
    setRandomQuote();
})

