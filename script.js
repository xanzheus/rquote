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
			url: "https://vanpariyar.github.io/get-new-quote/rendomQuote.json",               
			success: function(result) {
					flag = 1; 
					quotes = result;
					const quoteNumber = getRandomIntInclusive(0,103);
					$('.qoute').text(result[quoteNumber].quote);
					$('.author-name').text(`"${result[quoteNumber].author}"`);
					}	    	    
		}); 
	}else{
		const quoteNumber = getRandomIntInclusive(0,103);
		$('.qoute').text(quotes[quoteNumber].quote);
		$('.author-name').text(`"${quotes[quoteNumber].author}"`);
	}
	
}