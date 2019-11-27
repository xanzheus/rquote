# roankcreole.github.io
- This is the Small example of the API fetch request to the Random Quote API. https://api.quotable.io/random
Hello,
  - I have developed a small application for the purpose to get new random Quote.
  - On refreshing or Click the button below the Quote author you will get a new quote.
  
  - Probably i can develop my own API someday that returns the random Quote but in this demo, I have used https://api.quotable.io/random API.
  - You can get Qoute Like
  >" Life is what happens while you are making other plans. "
  >Author: John Lennon
  
  

##### You can Find This Demo Link Here: https://vanpariyar.github.io/get-new-quote



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
![Ronak Vanpariya](https://user-images.githubusercontent.com/26689210/69729748-e24b6500-114c-11ea-919c-756004c3f6c6.png)
