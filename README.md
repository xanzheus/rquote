# roankcreole.github.io
- This is the Small example of the API fetch request to the Random Quote API. https://api.quotable.io/random
Hello,
  - I have developed a small application for the purpose to get new random Quote.
  - On refreshing or Click the button below the Quote author you will get a new quote.
  
  - Probably i can develop my own API someday that returns the random Quote but in this demo, I have used https://api.quotable.io/random API.
  - You can get Qoute Like
  >" Life is what happens while you are making other plans. "
  >Author: John Lennon


```javascript
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
