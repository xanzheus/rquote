var $ = jQuery;
jQuery(document).ready( () => {
 getNewQuote();
 $('.get-new-quote').on('click',() => {
 	getNewQuote();
 });
});
getNewQuote = () => {
	$.ajax({
		url: "https://api.quotable.io/random",               
		success: function(result) { 
                   $('.qoute').text('" '+result.content+' "');
                   $('.author-name').text(result.author);
			    }	    	    
	}); 
}