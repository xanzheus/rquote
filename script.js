var $ = jQuery;
var flag = 0;
var quotes;
jQuery(document).ready( () => {
 getNewQuote();
 $('.get-new-quote').on('click',() => {
 	getNewQuote();
 });
});
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