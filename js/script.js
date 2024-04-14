// Scroll to top button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Random Quote Generator
var quotes = [
   "Believe in yourself! - Brennen Daudlin",
   "You can do anything if you put your mind to it! - Brennen Daudlin",
   "Just try your best! - Brennen Daudlin",
   "Be proud of yourself! - Brennen Daudlin",
   "Never compare yourself to others, it will only cause more stress - Brennen Daudlin"
];

function randomQuote(){
    var randnum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randnum];
}