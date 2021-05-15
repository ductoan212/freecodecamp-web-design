var quotes = []

function getRandomColor() {
    var letters = '0123456789ABC012';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function replaceQuote(text, author) {
    const color = getRandomColor();
    document.getElementById("text").innerHTML = text;
    document.getElementById("author").innerHTML = author;
    document.getElementById("tweet-quote").setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=DucToan212,Quote&related=ductoan212&text=' + text);
    // Change color
    document.body.style.transition = "all 2s";
    // document.getElementById("text").style.transition = "all 2s";
    // document.getElementById("author").style.transition = "all 2s";
    // document.getElementById("tweet-quote").style.transition = "all 2s";
    // document.getElementById("new-quote").style.transition = "all 2s";
    document.getElementById("text").setAttribute('style', 'color: ' + color);
    document.getElementById("author").setAttribute('style', 'color: ' + color);
    document.getElementById("tweet-quote").setAttribute('style', 'background-color: ' + color);
    document.getElementById("new-quote").setAttribute('style', 'background-color: ' + color);
    document.body.style.background = color;
}

window.onload = function() {
    fetch("https://type.fit/api/quotes")
        .then(function(response) {
            console.log("Onload");
            return response.json();
        })
        .then(function(data) {
            quotes = data;
            const r = Math.floor(Math.random() * 1643);
            replaceQuote(data[r]['text'], data[r]['author']);
            console.log(r, data[r]);
            console.log("Onload");
        });
}

function onClickChange() {
    const r = Math.floor(Math.random() * 1643);
    replaceQuote(quotes[r]['text'], quotes[r]['author']);
}

document.getElementById("new-quote").onclick = function() {
    console.log("__________________________________________________");
    console.log("Clicked");
    onClickChange();
}