const refreshBtn = document.querySelector('#refresh');
refreshBtn.addEventListener('click', () => {    
    let quote = document.querySelector('#quote');
    let author = document.querySelector('#author');

    const quoteId = quote.getAttribute('data-id');
    let randomNumber = Math.floor(Math.random() * QUOTES.length);
    while(+quoteId === randomNumber) {
        randomNumber = Math.floor(Math.random() * QUOTES.length);
    }

    quote.innerHTML = QUOTES[randomNumber].quote;
    quote.setAttribute('data-id', randomNumber);
    author.innerHTML = QUOTES[randomNumber].author;
})