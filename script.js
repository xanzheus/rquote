var $ = jQuery;
jQuery(document).ready( () => {
 getNewQuote();
 $('.get-new-quote').on('click',() => {
 	getNewQuote();
 });
});
getNewQuote = () => {
	$.ajax({
		url: "https://vanpariyar.github.io/get-new-quote/rendomQuote.json",               
		success: function(result) { 
                   $('.qoute').text('" '+result.content+' "');
				   $('.author-name').text(result.author);
				   console.log(result);
			    }	    	    
	}); 
}