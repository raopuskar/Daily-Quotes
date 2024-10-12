const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";   //This is the URL from where u can get quote by refreshing

async function getQuote(URL){  //The async keyword allows the use of await inside the function, enabling asynchronous operations.
    const responce = await fetch(URL);   //The fetch function is used to make an HTTP request to the specified URL.
                                        //The await keyword pauses the execution of the function until the fetch request is complete.
    var data = await responce.json();   //The json() method of the response object is called to parse the response data as JSON.
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getQuote(api_url);
                          //The first will open the twitter tweete section the add the quote and last is the twitter window size 
function tweet(){
    window.open("http://www.twitter.com/intent/tweet?text="+ quote.innerHTML + "--- by" + author.innerHTML,"Tweet Window","width=600","height=300");
}

