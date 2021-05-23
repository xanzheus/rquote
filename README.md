# Get New Quote On Refresh
- This is the Small example of the API fetch request to the Random Quote API. https://vanpariyar.github.io/get-new-quote/rendomQuote.json
- ##### You can Find This Demo Link Here: https://vanpariyar.github.io/get-new-quote

    Hello,
  - I have developed a small application for the purpose to get new random Quote.
  - On refreshing or Click the button below the Quote author you will get a new quote.
  - In This demo I have used the Bootstrap Framework and JQuery. 
  
  - Probably i can develop my own API someday that returns the random Quote but in this demo, I have used https://vanpariyar.github.io/get-new-quote/rendomQuote.json API.
  - You can get Qoute Like
  
  
  >" Life is what happens while you are making other plans. "
  >Author: John Lennon
  
  

##### You can Find This Demo Link Here: https://vanpariyar.github.io/get-new-quote



```javascript
 getNewQuote = () => {
	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
	}
	if(flag == 0){
		$.ajax({
			url: "https://raw.githubusercontent.com/vanpariyar/get-new-quote/master/rendomQuote.json",               
			success: function(result) {
					flag = 1; 
					quotes = JSON.parse(result);
					const quoteNumber = getRandomIntInclusive(0,(quotes.length) - 1);
					$('.qoute').text(quotes[quoteNumber].quote);
					$('.author-name').text(`"${quotes[quoteNumber].author}"`);
					console.log(result);
					}	    	    
		}); 
	}else{
		const quoteNumber = getRandomIntInclusive(0,(quotes.length) - 1);
		$('.qoute').text(quotes[quoteNumber].quote);
		$('.author-name').text(`"${quotes[quoteNumber].author}"`);
		console.log(quotes)
	}
	
}
```
![Ronak Vanpariya](https://user-images.githubusercontent.com/26689210/69729748-e24b6500-114c-11ea-919c-756004c3f6c6.png)
