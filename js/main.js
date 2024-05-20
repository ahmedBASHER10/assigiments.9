

(function () {
    
    var quoteDesc = document.getElementById("quotecon");
    var author = document.getElementById("authorName");
  
    
    var quoteBtn = document.getElementById("quoteBtn");
  
   
    var quotes = [
      {
        quoteContent: `"You miss 100% of the shots you don't take."`,
        authorName: "--Wayne Gretzy",
      },
      {
        quoteContent: `"It's not what happens to you, but how you react to it that matters."`,
        authorName: "--Epictetus",
      },
      {
        quoteContent:
          `"The best revenge is massive success."`,
        authorName: "--Frank Sinatra",
      },
      {
        quoteContent:
          `"Resentment is like drinking poison and waiting for your enemies to die."

          `,
        authorName: "--Nelson Mandela",
      },
      
    ];
  
    
    var currentRandom;
    function getRandomNumber() {
      var randomNumber = Math.floor(Math.random() * quotes.length);
      while (randomNumber === currentRandom) {
        randomNumber = Math.floor(Math.random() * quotes.length);
      }
      currentRandom = randomNumber;
      return randomNumber;
    }
  
    
    function getRandomQuotes() {
      var randomQuotes = quotes[getRandomNumber()];
      quoteDesc.innerHTML = randomQuotes.quoteContent;
      author.innerHTML = randomQuotes.authorName;
    }
  
    
    quoteBtn.onclick = getRandomQuotes;
  })();



