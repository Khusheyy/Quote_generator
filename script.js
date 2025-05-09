async function generateQuote() {
    var div = document.getElementById('flex-quote-gen');
    div.innerHTML = ""; // Clear previous quote

    try {
        const response = await fetch('https://type.fit/api/quotes');
        const quotes = await response.json();
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        var quote = document.createElement('p');
        quote.textContent = `"${randomQuote.text}" - ${randomQuote.author || "Unknown"}`;
        div.appendChild(quote);
    } catch (error) {
        console.error("Error fetching quotes:", error);
        var errorMessage = document.createElement('p');
        errorMessage.textContent = "Failed to load a quote. Please try again.";
        div.appendChild(errorMessage);
    }
}