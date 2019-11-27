# roankcreole.github.io
This is the Small example of the Api fetch request to the Random Quote API. https://api.quotable.io/random
Hello,
  i have developed the small application for the purpose to get new rendom Quote.
  On refresh or Click the button below the Quote author you will get new quote.
  
  Probablly i can develop my own api some day that return the random Quote but in this demo i have used https://api.quotable.io/random api.

```
 getNewQuote = () => {
	$.ajax({
		url: "https://api.quotable.io/random",               
		success: function(result) { 
                   $('.qoute').text('" '+result.content+' "');
                   $('.author-name').text(result.author);
			    }	    	    
	}); 
}
```
